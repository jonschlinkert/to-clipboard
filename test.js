/*!
 * to-clipboard <https://github.com/jonschlinkert/to-clipboard>
 *
 * Copyright (c) 2015 .
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var toClipboard = require('./');
var program = ({win: 'clip', linux: 'xclip', darwin: 'pbcopy'})[process.platform];

describe('toClipboard', function () {
  it('should format args:', function () {
    assert.strictEqual(toClipboard.format('foo'), 'echo foo | ' + program);
    assert.strictEqual(toClipboard.format('<div></div>'), 'echo \'<div></div>\' | ' + program);
    assert.strictEqual(toClipboard.format('bar baz'), 'echo \'bar baz\' | ' + program);
    assert.strictEqual(toClipboard.format(['bar', 'baz']), 'echo bar baz | ' + program);
    assert.strictEqual(toClipboard.format('bar | baz'), 'echo \'bar | baz\' | ' + program);
    assert.strictEqual(toClipboard.format(['bar', '|', 'baz']), 'echo bar \'|\' baz | ' + program);
  });
});
