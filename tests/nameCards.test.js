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
                if (index % 5 == 1) {
                    item.chineseName = 'Vincent Luc Michel Jules';
                    item.class.teachers[0].person.chineseName = null;
                }
                if (index % 5 == 2) {
                    item.chineseName = '一';
                    item.class.teachers[0].person.chineseName = null;
                }
                if (index % 5 == 3) {
                    item.chineseName = '一二';
                    item.class.teachers[0].person.chineseName = null;
                }
                if (index % 5 == 4) {
                    item.chineseName = '一二三';
                    item.class.teachers[0].person.chineseName = null;
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
