const print = require('../index');
const outputDir = './tests/output';

describe('print', () => {
    it('basic', () => {
        print(`${outputDir}/basic.pdf`)
            .then((res) => {
                console.log(res);
            });
    });
    it('attendance', () => {
        const submit = {
            title: '我的學校',
            subTitle: 'Attendance',
            theClass: '2017 Fall 1B',
            teacher: 'Me Myself & I',
            datas: [{
                name: 'John',
                birthday: '2010-01-01',
                yoyo: 'yoyo',
                other: 'things'
            }, {
                name: 'Yuan',
                birthday: '2005-07-07',
                othername: 'yen',
                wa: 'wataha'
            }],
            headers: [{
                key: 'name',
                width: 20
            }, {
                key: 'birthday',
                width: 30
            }, {
                key: 'wa',
                width: 50
            }]
        };
        print(`${outputDir}/attendance.pdf`, 'attendance', submit)
            .then((res) => {
                console.log(res);
            });
    });
    it('class-contact', () => {
        const submit = {
            // title: '我的學校',
            // subTitle: 'Attendance',
            theClass: '2017 Fall 1B',
            teacher: 'Me Myself & I',
            datas: [{
                name: 'John',
                birthday: '2010-01-01',
                yoyo: 'yoyo',
                other: 'things'
            }, {
                name: 'Yuan',
                birthday: '2005-07-07',
                othername: 'yen',
                wa: 'wataha'
            }],
            headers: [{
                key: 'name',
                width: 20
            }, {
                key: 'birthday',
                width: 30
            }, {
                key: 'wa',
                width: 50
            }]
        };
        print(`${outputDir}/class-contact.pdf`, 'classContact', submit, {
                orientation: 'landscape'
            })
            .then((res) => {
                console.log(res);
            });
    });
});
