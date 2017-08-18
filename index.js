const fs = require('fs');
const pdf = require('html-pdf');
const templates = require('./templates');
// const html = fs.readFileSync('./test.html', 'utf8');
// const options = { format: 'Letter', fontSize: 8 };

function print(output = './output.pdf', template = '', input = {}, options = {
    border: 0,
    // format: 'Letter',
    height: '11in',
    width: '8.5in', 
    footer: ' ',
    noFooter: false
}) {
    if(options.orientation =='landscape'){
        options.height = '8.5in',
        options.width = '11in'
    }
    return new Promise((resolve, reject) => {
        template = (templates[template]) ? templates[template] : templates['basic'];
        const htmlStream = template.generate(input, options);
        if (!options.noFooter) {
            options.footer = {
                height: '15mm',
                contents: {
                    // first: 'Cover page',
                    default: `
                    <div style="text-align: center;">
                        <span>${options.footer}</span>&nbsp;&nbsp;<span style="color: #444;">{{page}}</span>&nbsp;/&nbsp;<span>{{pages}}</span>                    
                    </div>
                    `,
                    // last: 'Last Page'
                }
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
