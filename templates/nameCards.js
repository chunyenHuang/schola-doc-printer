const styles = require('./styles');
exports.generate = function(
    input = {
        datas: [],
        logo
    }, options = {}
) {
    const {
        datas,
        logo
    } = input;

    let pages = '';
    let group = [];
    datas.forEach((data, index) => {
        group.push(data);
        if (group.length == 9) {
            pages = pages + cardPage(group, logo);
            group = [];
        }
        if (index + 1 == datas.length && group.length > 0) {
            pages = pages + cardPage(group, logo);
            group = [];
        }
    });

    const htmlStream = `
    <html>
    <head>
        <style>
            html,
            body {
                margin: 0;
                padding: 0;
            }
            table {
                width: 100%;
                min-height: 100%;
            }
            td.bordered {
                border: 1px solid #222222 !important;
                padding: 2px;       
                margin: 0;     
            }
            span.large {
                font-size: 1.8em;
            }
            span.medium {
                font-size: 1.2em;
            }
            span.small {
                font-size: 0.6em;
            }
            table.inner-table td {
                padding: 0px 0px 5px 0px;
            }
            table.inner-table td.left {
                width: 25%;
                text-align: center;
            }
            div.card-container {
                position: relative
            }
            div.logo{
                position: absolute;
                z-index: 200; 
                right: 10px;
                bottom: -5px;
            }
        </style>
    </head>
    <body>
        ${pages}
    </body>
    </html>
    `;
    return htmlStream;
}

function cardPage(students, logo) {
    // students.length should be 9 or less;
    students = [...students, ...Array(9 - students.length)];
    let trs = '';

    students.forEach((student, index) => {
        if (index % 3 == 0) {
            trs = trs + '<tr>'
        }
        trs = trs + `<td class="bordered" width="33%">${card(student, logo)}</td>`
        if (index % 3 == 2) {
            trs = trs + '</tr>'
        }
    });
    const template = `
<table class="table-bordered">
    ${trs}
</table>
    `;
    return template;
}

function card(student, logo) {
    student = student || {
        chineseName: ' ',
        chinesePhoneticNotation: null,
        class: {
            class_LIID: {
                    label: ' '
                },
                location: {
                    classroom: '  '
                },
                teachers: [{
                    chineseName: '  '
                }]
        }
    }
    const teachers = student.class.teachers.reduce((names, teacher) => {
        names = names + teacher.chineseName + ' ';
        return names;
    }, '');
    const chinesePhoneticNotation=(student.chinesePhoneticNotation)?`(${student.chinesePhoneticNotation})`:'';
    const template = `
<div class="card-container">
    <table class="inner-table">
        <tr>
            <td class="left">
                <span class="medium">學生</pan>
                <br/>
                <span class="small">Student</span>
            </td>
            <td>
                <span class="large">${student.chineseName}</span>
            </td>
        </tr>
        <tr>
            <td class="left">
                <span class="medium">班級</pan>
                <br/>
                <span class="small">Class</span>
            </td>
            <td>
                <span class="large">${student.class.class_LIID.label} ${chinesePhoneticNotation}</span>
            </td>
        </tr>
        <tr>
            <td class="left">
                <span class="medium">老師</pan>
                <br/>
                <span class="small">Teacher</span>
            </td>
            <td>
                <span class="large">${teachers}</span> 
            </td>
        </tr>
        <tr>
            <td class="left">
                <span class="medium">教室</pan>
                <br/>
                <span class="small">Room</span>
            </td>
            <td>
                <span class="large">${student.class.location.classroom}</span>
            </td>
        </tr>
    </table>
    <div class="logo">
        ${logo}
    </div>
</div>
    `;
    return template;
}
