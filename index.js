/*!
 * to-clipboard <https://github.com/jonschlinkert/to-clipboard>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var child = require('child_process');
var escape = require('shell-escape');
var os = require('os');
var program = ({win: 'clip', linux: 'xclip', darwin: 'pbcopy'})[os.platform()];

function toClipboard(args, cb) {
  if (typeof program === 'undefined') {
    return cb(error(os.platform()));
  }
  child.exec(toClipboard.format(args), cb);
}

toClipboard.sync = function toClipboardSync(args) {
  if (typeof program === 'undefined') {
    throw new Error(error(os.platform()));
  }
  return child.execSync(toClipboard.format(args));
};

toClipboard.format = function format() {
  var args = escape([].concat.apply([], arguments));
  var cmd = 'echo ' + args + ' | ' + program;
  return cmd;
};

function error(platform) {
  var msg = '"' + platform + '" platform not supported by to-clipboard. Request support at https://github.com/jonschlinkert/to-clipboard/issues';
  return new Error(wrap(msg));
}

/**
 * Expose `toClipboard`
 */

module.exports = toClipboard;
