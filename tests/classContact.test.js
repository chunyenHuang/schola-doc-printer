const print = require('../index');
const outputDir = './tests/output';

describe('print', () => {
    it('class-contact', () => {
        const datas = Array(30).fill({}).map(() => {
            return {
                name: fakeText(5),
                fullName: fakeText(5) + fakeText(8),
                theClass: '1B',
                birthday: `${fakeText(2, 'number')}/${fakeText(2, 'number')}/${fakeText(4, 'number')}`,
                phoneNumber: `${fakeText(10, 'number')}`,
                address: fakeText(20),
                email: `${fakeText(0)}@${fakeText(0)}.com`
            }
        });
        const submit = {
            // title: '我的學校',
            // subTitle: 'Attendance',
            theClass: '2017 Fall 1B',
            teacher: 'Me Myself & I',
            datas,
            headers: [{
                key: 'theClass',
                label: 'class',
                width: 5
            }, {
                key: 'name',
                label: 'Name',
                width: 10
            }, {
                key: 'fullName',
                label: 'Full Name',                
                width: 15
            }, {
                key: 'birthday',
                label: 'Birthday',
                width: 15
            }, {
                key: 'phoneNumber',
                label: 'Phone #',
                width: 15
            }, {
                key: 'address',
                label: 'Address',
                width: 20,
                align: 'left'                
            }, {
                key: 'email',
                label: 'Email',
                width: 20,
                align: 'left'
            }]
        };
        return print(`${outputDir}/class-contact.pdf`, 'classContact', submit, {
                orientation: 'landscape'
            })
            .then((res) => {
                // console.log(res);
            });
    });
});

function fakeText(length = 0, number) {
    const possible = (!number) ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : '0123456789';
    let text = '';
    length = (length == 0) ? Math.floor(Math.random() * 10) : length;
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
