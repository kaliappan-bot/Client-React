function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById("1bRzEKOnb2gOglmS2iR9fOBhOUxZj_DDGEC6bgrYKADQ").getSheetByName("Sheet1");
    sheet.appendRow([data.name, data.email]);
    return ContentService.createTextOutput("Success");
  } catch (error) {
    Logger.log("Error: " + error);
    return ContentService.createTextOutput("Error: " + error.message);
  }
}
