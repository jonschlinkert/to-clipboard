/*!
 * to-clipboard <https://github.com/jonschlinkert/to-clipboard>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var cp = require('child_process');

function toClipboard(args, cb) {
  var proc = cp.spawn(program(), {
    stdio: ["pipe", "ignore", "ignore"]
  });
  if (cb) {
    proc.on("error", cb);
    proc.on("exit", function() {
      cb(null);
    });
  }
  proc.stdin.write(args);
  proc.stdin.end();
}

toClipboard.sync = function toClipboardSync(args) {
  return cp.execSync(program(), {
    input: args
  });
};

function program() {
  switch (process.platform) {
    case 'darwin':
      return 'pbcopy';
    case 'win32':
      return 'clip';
    case 'linux':
      return 'xclip -selection clipboard';
  }
}

/**
 * Expose `toClipboard`
 */

module.exports = toClipboard;
