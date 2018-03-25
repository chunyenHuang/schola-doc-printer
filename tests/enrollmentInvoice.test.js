const fs = require('fs');
const print = require('../index');
const outputDir = './tests/output';

describe('print', () => {
    it('enrollment invoice', () => {
        const logo = fs.readFileSync('./tests/materials/logo.svg');
        const enrollmentsHeaders = [{
            key: 'index',
            label: '#',
            width: 2
        }, {
            key: 'name',
            label: 'Name',
            width: 10
        }, {
            key: 'fullName',
            label: 'Full Name',
            width: 15
        }, {
            key: 'classA',
            label: 'Regular Class',
            width: 15,
            align: 'left'
        }, {
            key: 'classB',
            label: 'Elective Class',
            width: 15,
            align: 'left'
        }];
        const enrollments = Array(3).fill({}).map((item, index) => {
            return {
                index: index + 1,
                name: fakeText(5),
                fullName: fakeText(5) + fakeText(8),
                classA: fakeText(2),
                classB: fakeText(5)
            }
        });

        const transactionsHeaders = [{
            key: 'index',
            label: '#',
            width: 2
        }, {
            key: 'item',
            label: 'Item'
        }, {
            key: 'count',
            label: 'Count',
            width: 15,
            align: 'right'
        }, {
            key: 'amount',
            label: 'Amount',
            width: 15,
            align: 'right'
        }];

        const transactions = Array(5).fill({}).map((item, index) => {
            return {
                index: index + 1,
                item: fakeText(5),
                count: 1,
                amount: Math.random() * 100
            }
        });
        transactions.push({
            count: 'subtotal',
            amount: 1000
        });

        transactions.push({
            item: 'credit',
            count: 1,
            amount: -300
        });

        transactions.push({
            count: 'Total',
            amount: 0
        });


        const submit = {
            logo,
            title: 'School Name',
            head: `
            <div class="text-center">
                <h5>Tuition Receipt</h5>
                <p>Tax ID</p>
                <p>contact information</p>
            </div>
            `,
            enrollmentsHeaders,
            enrollments,
            transactionsHeaders,
            transactions,
            footer: `
            <h5>Payment Information</h5>
            <p>other detail</p>
            `
        };
        return print(`${outputDir}/enrollment-invoice.pdf`, 'enrollmentInvoice', submit, {
                orientation: 'portrait',
                noFooter: true
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
