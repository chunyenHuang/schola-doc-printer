const print = require('../index');
const outputDir = './tests/output';
const datas = require('./materials/attendance-datas');
const moment = require('moment');
describe('print', () => {
    it('attendance', () => {
        const weeks = Array(16).fill({})
            .map((item, index) => {
                return {
                    key: 'week-field',
                    // label: '0',
                    label: (index + 1).toString(),
                    width: 2
                };
            });
        const submit = {
            title: '我的學校',
            subTitle: 'Attendance',
            theClass: '2017 Fall 1B',
            theClassroom: 'B-15',
            teacher: 'Me Myself & I',
            datas: datas.map((item, index) => {
                item.index = (index + 1).toString();
                // age
                const ageDifMs = Date.now() - (new Date(item.birthday)).getTime();
                const ageDate = new Date(ageDifMs)
                item.age = Math.abs(ageDate.getUTCFullYear() - 1970);
                // name
                if (!item.chineseName || item.chineseName == '') {
                    item.chineseName = item.firstName + ' ' + item.lastName;
                }
                item.birthday = moment(item.birthday).format('MM/DD/YYYY');
                // gender
                item.gender = (item.gender == 'male') ? 'M' : 'F';

                //
                item.chinesePhoneticNotation = '注';

                //
                item.otherClass = '1234567';
                return item;
            }),
            headers: [{
                key: 'index',
                label: '#',
                width: 2
            }, {
                key: 'chineseName',
                label: 'Name',
                width: 8
            }, ...weeks, {
                key: 'otherClass',
                label: ' ',
                fontSize: '50%',                
                width: 5
            }, {
                key: 'birthday',
                label: 'Birthday',
                width: 5,
                fontSize: '50%'
            }, {
                key: 'age',
                label: 'Age',
                width: 2
            }, {
                key: 'chinesePhoneticNotation',
                label: ' ',
                width: 3
            }]
        };
        return print(`${outputDir}/attendance.pdf`, 'attendance', submit)
            .then((res) => {
                // console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    });
});
