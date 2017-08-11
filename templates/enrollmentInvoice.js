const styles = require('./styles');
exports.generate = function(
    input = {
        enrollments: []
    }, options = {}
) {
    const htmlStream = `
    <html>
    <head>
    ${styles.default}
    </head>
    <body>
        <div class="container">
            <div class="row row-no-padding">
                <div class="col-xs-4 col-xs-offset-2 text-center no-padding">
                    <h5>${theClass}</h5>
                </div>
                <div class="col-xs-4 text-center no-padding">
                    <h5>${teacher}</h5>
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
