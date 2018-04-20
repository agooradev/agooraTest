var fs = require('fs');
var fileName = './file.json';
var file = require(fileName);

file['key'] = "new value2";

fs.writeFile(fileName, JSON.stringify(file), function (err) {
  if (err) return console.log(err);
  console.log(JSON.stringify(file));
  console.log('writing to ' + fileName);
});