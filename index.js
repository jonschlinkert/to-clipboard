/*!
 * to-clipboard <https://github.com/jonschlinkert/to-clipboard>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var cp = require('child_process');
var escape = require('shell-escape');

function toClipboard(args, cb) {
  cp.exec(format(args), cb);
}

toClipboard.sync = function toClipboardSync(args) {
  return cp.execSync(format(args));
};

function program(args) {
  switch (process.platform) {
    case 'darwin':
      return escape(args) + ' | pbcopy';
    case 'win32':
      return ' | set /p=' + escape(args) + ' | clip';
    case 'linux':
      return escape(args) + ' | xclip -selection clipboard';
  }
}

function format() {
  var args = [].concat.apply([], arguments);
  return 'echo ' + program(args);
}

/**
 * Expose `toClipboard`
 */

module.exports = toClipboard;

/**
 * Expose `toClipboard.format`
 */

module.exports.format = format;
