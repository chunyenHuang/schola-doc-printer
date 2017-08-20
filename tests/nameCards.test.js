const print = require('../index');
const outputDir = './tests/output';
const fs = require('fs');
describe('print', () => {
    it('name cards', () => {
        const logo = fs.readFileSync('./tests/materials/logo.svg');
        const submit = {
            logo,
            datas: Array(12).fill('').map((input, index) => {
                const item = {
                    chineseName: 'Louis George Maurice',
                    chinesePhoneticNotation: '拼音',
                    class: {
                        class_LIID: {
                                label: '1A'
                            },
                            location: [{
                                classroom: null
                            }],
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
                };
                if (index % 5 == 0) {
                    item.chineseName = 'Adolphe Roche';
                    item.class.teachers[0].person.chineseName = 'Vincent Luc Michel Jules';
                }
                return item;
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
