const fs = require('fs');
const pdf = require('html-pdf');
const templates = require('./templates');
// const html = fs.readFileSync('./test.html', 'utf8');
// const options = { format: 'Letter', fontSize: 8 };

function print(output = './output.pdf', template = '', input = {}, options = { format: 'Letter', footer: ' ' }) {
    return new Promise((resolve, reject) => {
        template = (templates[template]) ? templates[template] : templates['basic'];
        const htmlStream = template.generate(input, options);
        options.footer = {
            height: '15mm',
            contents: {
                // first: 'Cover page',
                default: `
                <div style="text-align: center;">
                    <span>${options.footer}</span><span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>                    
                </div>
                `,
                // last: 'Last Page'
            }
        }
        // console.log(htmlStream);
        // datas format is based on the template
        pdf
            .create(htmlStream, options)
            .toFile(output, (err, res) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                res.html = htmlStream;
                return resolve(res);
            });
    });
}

module.exports = print;
