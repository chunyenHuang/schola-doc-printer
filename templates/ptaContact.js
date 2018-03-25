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
        schoolYear,
        datas,
        headers
    } = input;
    const rowDatas = datasToRows(datas, headers);
    const htmlStream = `
    <html>
    <head>
    ${styles.default}
    </head>
    <body>
        <div class="container">
            <div class="row">
                <br/>
                <div class="col-xs-4 col-xs-offset-2 text-center no-padding">
                    <h5>${title} (${schoolYear})</h5>
                </div>
            </div>
        </div>
        <div class="container">
            <table class="table-bordered">
                ${rowDatas.header}
                ${rowDatas.rows}
            </table>
        </div>        
    </body>
    </html>
    `;
    return htmlStream;
}
