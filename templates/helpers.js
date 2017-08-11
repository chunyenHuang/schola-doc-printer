exports.datasToRows = function datasToRows(datas = [], headers = [{ key: '', width: 10 }]) {
    let header = [];
    let rows = [];
    let keys = [];
    headers.forEach((item) => {
        const label = item.label || item.key.toUpperCase();
        const classNames = [];
        classNames.push(`text-center`);
        header.push(`<th class="${classNames.join(' ')}" style="width:${item.width}%;"><span>${label}</span></th>`);
        keys.push(item.key);
    });
    header = `<tr>${header.join('')}</tr>`;

    datas.forEach((data) => {
        let row = [];
        keys.forEach((key, index) => {
            let result = (data[key] != void 0) ? data[key] : '';
            const classNames = [];
            classNames.push(`text-${(headers[index].align || 'center')}`);
            row.push(`<td class="${classNames.join(' ')}"><span>${result}</span></td>`);
        });
        rows.push(`<tr>${row.join('')}</tr>`);
    });
    rows = rows.join('');

    return { header, rows };
}
