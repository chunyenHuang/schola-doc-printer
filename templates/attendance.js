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
        teacher,
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
            <div class="row row-no-padding">
                <div class="col-xs-8 col-xs-offset-2 text-center no-padding">
                    <h3>${title}</h3>
                </div>
            </div>
            <div class="row row-no-padding">
                <div class="col-xs-8 col-xs-offset-2 text-center no-padding">
                    <h3>${subTitle}</h3>
                </div>
            </div>
            <div class="row row-no-padding">
                <div class="col-xs-4 col-xs-offset-2 text-center no-padding">
                    <h3>${theClass}</h3>
                </div>
                <div class="col-xs-4 text-center no-padding">
                    <h3>${teacher}</h3>
                </div>
            </div>
        </div>
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
