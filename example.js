var toClipboard = require('./');

var str = [
'<!DOCTYPE html>',
'<html lang="en">',
'  <head>',
'    <meta charset="UTF-8">',
'    <title>a | b | c</title>',
'  </head>',
'  <body class="foo">',
'    {% body %}',
'  </body>',
'</html>',
].join('\n');

toClipboard(str, function (err) {
  if (err) return console.log(err);
});

// toClipboard.sync(str);
