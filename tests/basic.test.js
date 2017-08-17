const print = require('../index');
const outputDir = './tests/output';

describe('print', () => {
    it('basic', () => {
        return print(`${outputDir}/basic.pdf`)
            .then((res) => {
                // console.log(res);
            });
    });
});
