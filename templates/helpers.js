exports.datasToRows = function datasToRows(datas = [], headers = [{ key: '' }]) {
    let header = [];
    let rows = [];
    let keys = [];
    headers.forEach((item) => {
        if (!Array.isArray(item)) {
            const label = item.label || item.key.toUpperCase();
            const classNames = [];
            classNames.push(`text-center`);
            const width = (item.width) ? (item.width.toString().endsWith('px')) ? `width: ${item.width}` : `width: ${item.width}%;` : '';
            header.push(`<th class="${classNames.join(' ')}" style="${width}"><span>${label}</span></th>`);
            keys.push(item.key);
        } else {
            // support for sub td?
        }
    });
    header = `<tr>${header.join('')}</tr>`;

    datas.forEach((data) => {
        let row = [];
        keys.forEach((key, index) => {
            let result = (data[key] != void 0) ? data[key] : '';
            let style = '';
            const classNames = [];
            classNames.push(`text-${(headers[index].align || 'center')}`);
            if (headers[index].fontSize) {
                style = style + `font-size: ${headers[index].fontSize}`;
            }
            row.push(`<td class="${classNames.join(' ')}" style="${style}"><span>${result}</span></td>`);
        });
        rows.push(`<tr>${row.join('')}</tr>`);
    });
    rows = rows.join('');

    return { header, rows };
}
