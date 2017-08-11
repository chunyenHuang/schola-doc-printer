const fs = require('fs');
const pdf = require('html-pdf');
const { datasToRows } = require('./helpers');
const templates = require('./templates');
// const html = fs.readFileSync('./test.html', 'utf8');
// const options = { format: 'Letter', fontSize: 8 };

function print(output = './output.pdf', template = '', input = {}, options = { format: 'Letter' }) {
    template = (templates[template]) ? templates[template] : templates['basic'];
    const htmlStream = template.generate(input, options);
    options.footer = {
        height: '15mm',
        contents: {
            // first: 'Cover page',
            default: `
            <div style="text-align: center;">
                <span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>                    
            </div>
            `,
            // last: 'Last Page'
        }
    }

    // datas format is based on the template
    return new Promise((resolve, reject) => {
        pdf
            .create(htmlStream, options)
            .toFile(output, (err, res) => {
                if (err) {
                    return reject(err);
                }
                res.html = htmlStream;
                return resolve(res);
            });
    });
}

module.exports = print;
