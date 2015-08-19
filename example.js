var toClipboard = require('./');

var str = [
'<!DOCTYPE html>',
'<html lang="en">',
'  <head>',
'    <meta charset="UTF-8">',
'    <title>Document</title>',
'  </head>',
'  <body class="foo">',
'    ',
'  </body>',
'</html>',
].join('\n');

toClipboard(str, function (err) {
  if (err) return console.log(err);
});
