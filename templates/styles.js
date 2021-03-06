exports.default = `
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<style>
    html,
    body {
        margin: 5;
        padding: 0;
        font-size: 7px;
        font-family: 'Roboto',Helvetica,Arial, sans-serif;
        background: rgb(241,241,241);
        -webkit-print-color-adjust: exact;
        box-sizing: border-box;
    }
    table {
        width: 100%
    }
    th, td {
        font-size: 10px;    
        padding: 1px 1px 1px 1px;       
        margin: 0;        
    }
    
    .table-bordered,.table-bordered th, .table-bordered td {
        border: 1px solid #222222 !important;
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