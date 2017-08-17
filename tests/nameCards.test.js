const print = require('../index');
const outputDir = './tests/output';
const fs = require('fs');
describe('print', () => {
    it('name cards', () => {
        const logo = fs.readFileSync('./tests/materials/logo.svg');
        const submit = {
            logo,
            datas: Array(12).fill({
                chineseName: '馬有有',
                chinesePhoneticNotation: '拼音',
                class: {
                    class_LIID: {
                            label: '1A'
                        },
                        location: {
                            classroom: 'B15'
                        },
                        teachers: [{
                            person: {
                                chineseName: '唔中先'
                            }
                        }, {
                            person: {
                                chineseName: '又老細'
                            }
                        }]
                }
            })
        };
        return print(`${outputDir}/nameCards.pdf`, 'nameCards', submit, {
                orientation: 'landscape',
                noFooter: true
            })
            .then((res) => {
                // console.log(res);
            });
    });
});
