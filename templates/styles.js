exports.default = `
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<style>
    html,
    body {
        margin: 5;
        padding: 0;
        font-size: 7px;
        background: rgb(241,241,241);
        -webkit-print-color-adjust: exact;
        box-sizing: border-box;
    }
    table {
        width: 100%
    }
    th, td {
        font-size: 10px;            
    }
    .row-no-padding {
        [class*="col-"] {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin: 0px !important;                
        }
    }         
    h3 {
        margin: 2px !important;                
    } 
    h5 {
        margin: 2px !important;                
    }
    text-center {
        text-align: center;
    }
    text-left {
        text-align: left;
    }
    text-right {
        text-align: right;
    }
</style>
`;