const fs = require('fs');
const templates = {};
fs
    .readdirSync(__dirname)
    .filter((item) => {
        return item != 'index.js' && item.endsWith('.js');
    })
    .forEach((item) => {
        templates[item.split('.js')[0]] = require(`./${item}`);
    });

module.exports = templates;
