const fs = require('fs');
const templates = {};

const ignores = ['index.js', 'helpers.js', 'styles.js'];
fs
    .readdirSync(__dirname)
    .filter((item) => {
        return !ignores.includes(item) && item.endsWith('.js');
    })
    .forEach((item) => {
        templates[item.split('.js')[0]] = require(`./${item}`);
    });

module.exports = templates;
