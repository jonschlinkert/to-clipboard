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
var os = require('os');
var toClipboard = require('./');
var program = ({win: 'clip', linux: 'xclip', darwin: 'pbcopy'})[os.platform()];

describe('toClipboard', function () {
  it('should format args:', function () {
    assert.strictEqual(toClipboard.format('foo'), 'printf foo | ' + program);
    assert.strictEqual(toClipboard.format('<div></div>'), 'printf \'<div></div>\' | ' + program);
    assert.strictEqual(toClipboard.format('bar baz'), 'printf \'bar baz\' | ' + program);
    assert.strictEqual(toClipboard.format(['bar', 'baz']), 'printf bar baz | ' + program);
    assert.strictEqual(toClipboard.format('bar | baz'), 'printf \'bar | baz\' | ' + program);
    assert.strictEqual(toClipboard.format(['bar', '|', 'baz']), 'printf bar \'|\' baz | ' + program);
  });
});
