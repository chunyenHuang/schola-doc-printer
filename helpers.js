exports.datasToRows = function datasToRows(datas = [], headers = [{ key: '', width: 10 }]) {
    let header = [];
    let rows = [];
    let keys = [];
    headers.forEach((item) => {
        header.push(`<th style="width:${item.width}%">${item.key.toUpperCase()}</th>`);
        keys.push(item.key);
    });
    header = `<tr>${header.join('')}</tr>`;

    datas.forEach((data) => {
        let row = [];
        keys.forEach((key) => {
            let result = (data[key] != void 0) ? data[key] : '';
            row.push(`<td>${result}</td>`);
        });
        rows.push(`<tr>${row.join('')}</tr>`);
    });

    return { header, rows };
}
