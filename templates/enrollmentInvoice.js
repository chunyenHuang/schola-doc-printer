const { datasToRows } = require('./helpers');
const styles = require('./styles');
exports.generate = function(
    input = {
        enrollmentsHeaders: [],
        enrollments: [],
        transactionsHeaders: [],
        transactions: [],
        title: 'Enrollment Recipt',
        head: '',
        footer: '',
        logo: null
    }, options = {}
) {
    const {
        title,
        enrollmentsHeaders,
        enrollments,
        transactionsHeaders,
        transactions,
        head,
        footer,
        logo
    } = input;

    const enrollmentRowDatas = datasToRows(enrollments, enrollmentsHeaders);
    const transactionRowDatas = datasToRows(transactions, transactionsHeaders);

    const htmlStream = `
    <html>
    <head>
    ${styles.default}
    </head>
    <body>
        <div class="container">
            <div class="row row-no-padding">
                <div class="col-xs-2">
                    <div class="logo">
                        ${logo}
                    </div>
                </div>
                <div class="col-xs-8 text-center no-padding">
                    <h5>${title}</h5>
                    ${head}
                </div>
            </div>
            <br/>
            <h5>Enrollments</h5> 
            <table class="table-bordered">
                ${enrollmentRowDatas.header}
                ${enrollmentRowDatas.rows}
            </table>
            <br/>
            <h5>Details</h5> 
            <table class="table-bordered">
                ${transactionRowDatas.header}
                ${transactionRowDatas.rows}
            </table>
            <br/>
            ${footer}
        </div>        
    </body>
    </html>
    `;
    return htmlStream;
}
