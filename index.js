/*!
 * to-clipboard <https://github.com/jonschlinkert/to-clipboard>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var cp = require('child_process');

var program = {
  darwin: {
    name: 'pbcopy',
    args: []
  },
  win32: {
    name: 'clip',
    args: [],
  },
  linux: {
    name: 'xsel',
    args: ['-bi']
  }
}[process.platform];

function toClipboard(args, cb) {
  var proc = cp.spawn(program.name, program.args, {
    stdio: ['pipe', 'ignore', 'ignore']
  });
  if (cb) {
    proc.on('error', cb);
    proc.on('exit', function() {
      cb(null);
    });
  }
  proc.stdin.write(args);
  proc.stdin.end();
}

toClipboard.sync = function toClipboardSync(args) {
  cp.spawnSync(program.name, program.args, {input: args});
};

/**
 * Expose `toClipboard`
 */

module.exports = toClipboard;
