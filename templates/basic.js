exports.generate = function(datas, options) {
    const title = datas.title || 'Aloha';
    const htmlStream = `
    <html>
    <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <style>
        html,
        body {
            margin: 5px;
        }
    </style>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-xs-2 col-xs-offset-5">
                    <h1>${title}</h1>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    return htmlStream;
}
