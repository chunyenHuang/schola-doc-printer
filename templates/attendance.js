const { datasToRows } = require('./helpers');
const styles = require('./styles');
exports.generate = function(
    input = {
        datas: [],
        headers: [{ key: '', width: 10 }]
    }, options = {}
) {
    const {
        title,
        subTitle,
        theClass,
        theClassroom,
        teacher,
        datas,
        headers
    } = input;
    const rowDatas = datasToRows(datas, headers);
    const htmlStream = `
    <html>
    <head>
        ${styles.default}    
        <style>
            td {
                height: 20px;   
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="row row-no-padding">
                <div class="col-xs-12 text-center no-padding">
                    <h5>${title}</h5>
                </div>
            </div>
            <div class="row row-no-padding">
                <div class="col-xs-6 text-center no-padding">
                    <h5>${theClass} (${theClassroom})</h5>
                </div>
                <div class="col-xs-6 text-center no-padding">
                    <h5>${teacher}</h5>
                </div>
            </div>
        </div>
        <br/>
        <table class="table-bordered">
            <thead>
                ${rowDatas.header} 
            </thead>
            <tbody>
                ${rowDatas.rows}
            </tbody>
        </table>
    </body>
    </html>
    `;
    return htmlStream;
}
