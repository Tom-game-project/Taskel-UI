
function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
}

//function の例
function readWriteSpreadsheet() {
    // スプレッドシートのIDを指定
    var spreadsheetId = '1sfp2IQksE4VDz9cdVsdfJkwn_QHszeD8J6zWBM8dxdE';
    // スプレッドシートを開く
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);

    // シートを選択
    var sheet = spreadsheet.getSheetByName('yet');

    // A1セルの値を読み取る
    var cellValue = sheet.getRange('A1').getValue();
    Logger.log('A1セルの値: ' + cellValue);

    // B2セルに値を書き込む
    sheet.getRange('B2').setValue('Hello, Google Apps Script!');
}

