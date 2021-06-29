import SheetDB from 'sheetdb-js'

SheetDB.read('https://sheetdb.io/api/v1/n3fuqopvzq72r', {}).then(function(result){
  console.log(result);
}, function(error){
  console.log(error);
});