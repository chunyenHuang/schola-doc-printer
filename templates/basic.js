const styles = require('./styles');
exports.generate = function(datas, options) {
    const title = datas.title || 'Aloha';
    const htmlStream = `
    <html>
    <head>
        ${styles.default}        
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-xs-12 text-center">
                    <h1>${title}</h1>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    return htmlStream;
}
