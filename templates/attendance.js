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
            .border {
                border: 1px solid black!important;
                text-align: center;
            }
            tr.standard{
                margin-bottom: 5px;
            }
            tr.standard > td {
                height: 5px!important;
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
        <br/>        
        <table>
            <thead>
                <tr class="standard">
                    <td class="border" width="5%">
                        <svg style="width:10px;height:10px" viewBox="0 0 24 24">
                            <path fill="#000000" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                        </svg>
                    </td>
                    <td width="15%">
                        出席
                    </td>
                    <td class="border" width="5%">
                        <svg style="width:10px;height:10px" viewBox="0 0 24 24">
                            <g>
                                <line id="svg_1" y2="24" x2="0" y1="0" x1="24" stroke-width="3" stroke="#000000" fill="none"/>
                            </g>                      
                        </svg>
                    </td>
                    <td width="15%">
                        缺席
                    </td>
                    <td class="border" width="5%">
                        <svg style="width:10px;height:10px" viewBox="0 0 24 24">
                            <path fill="#000000" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                        </svg>
                    </td>
                    <td width="15%">
                        請假
                    </td>
                    <td class="border" width="5%">
                        <svg style="width:10px;height:10px" viewBox="0 0 24 24">
                            <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                    </td>
                    <td width="15%">
                        遲到或早退
                    </td>
                    <td class="border" width="5%">
                        <svg style="width:10px;height:10px" viewBox="0 0 24 24">
                            <g>
                                <line id="svg_1" y2="12" x2="0" y1="12" x1="24" stroke-width="3" stroke="#000000" fill="none"/>
                            </g>                      
                       </svg>
                    </td>
                    <td width="15%">
                        退課
                    </td>
                </tr>
            </thead>
        </table>
    </body>
    </html>
    `;
    return htmlStream;
}
