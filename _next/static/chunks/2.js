(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./node_modules/n3/node_modules/readable-stream/errors-browser.js":
/*!************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/errors-browser.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;


/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __webpack_require__(/*! ./_stream_readable */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_readable.js");

var Writable = __webpack_require__(/*! ./_stream_writable */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_writable.js");

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/_stream_passthrough.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/_stream_passthrough.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __webpack_require__(/*! ./_stream_transform */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_transform.js");

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/_stream_readable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/_stream_readable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/


var Buffer = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __webpack_require__(/*! util */ 12);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __webpack_require__(/*! ./internal/streams/buffer_list */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/buffer_list.js");

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/destroy.js");

var _require = __webpack_require__(/*! ./internal/streams/state */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/state.js"),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(/*! ../errors */ "./node_modules/n3/node_modules/readable-stream/errors-browser.js").codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js");
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js");
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(/*! string_decoder/ */ "./node_modules/string_decoder/lib/string_decoder.js").StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __webpack_require__(/*! ./internal/streams/async_iterator */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/async_iterator.js");
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __webpack_require__(/*! ./internal/streams/from */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/from-browser.js");
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/_stream_transform.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/_stream_transform.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __webpack_require__(/*! ../errors */ "./node_modules/n3/node_modules/readable-stream/errors-browser.js").codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __webpack_require__(/*! ./_stream_duplex */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js");

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/_stream_writable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/_stream_writable.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __webpack_require__(/*! util-deprecate */ "./node_modules/util-deprecate/browser.js")
};
/*</replacement>*/

/*<replacement>*/

var Stream = __webpack_require__(/*! ./internal/streams/stream */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/stream-browser.js");
/*</replacement>*/


var Buffer = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __webpack_require__(/*! ./internal/streams/destroy */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/destroy.js");

var _require = __webpack_require__(/*! ./internal/streams/state */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/state.js"),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(/*! ../errors */ "./node_modules/n3/node_modules/readable-stream/errors-browser.js").codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__webpack_require__(/*! inherits */ "./node_modules/inherits/inherits_browser.js")(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js");
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(/*! ./_stream_duplex */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js"); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/async_iterator.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/async_iterator.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = __webpack_require__(/*! ./end-of-stream */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/end-of-stream.js");

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/buffer_list.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/buffer_list.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js"),
    Buffer = _require.Buffer;

var _require2 = __webpack_require__(/*! util */ 13),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/destroy.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/destroy.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) { // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/end-of-stream.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/end-of-stream.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __webpack_require__(/*! ../../../errors */ "./node_modules/n3/node_modules/readable-stream/errors-browser.js").codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/from-browser.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/from-browser.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};


/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/pipeline.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/pipeline.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __webpack_require__(/*! ../../../errors */ "./node_modules/n3/node_modules/readable-stream/errors-browser.js").codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __webpack_require__(/*! ./end-of-stream */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/end-of-stream.js");
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/state.js":
/*!************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/state.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERR_INVALID_OPT_VALUE = __webpack_require__(/*! ../../../errors */ "./node_modules/n3/node_modules/readable-stream/errors-browser.js").codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/stream-browser.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/lib/internal/streams/stream-browser.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! events */ "./node_modules/events/events.js").EventEmitter;


/***/ }),

/***/ "./node_modules/n3/node_modules/readable-stream/readable-browser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/n3/node_modules/readable-stream/readable-browser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./lib/_stream_readable.js */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_readable.js");
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(/*! ./lib/_stream_writable.js */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_writable.js");
exports.Duplex = __webpack_require__(/*! ./lib/_stream_duplex.js */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_duplex.js");
exports.Transform = __webpack_require__(/*! ./lib/_stream_transform.js */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_transform.js");
exports.PassThrough = __webpack_require__(/*! ./lib/_stream_passthrough.js */ "./node_modules/n3/node_modules/readable-stream/lib/_stream_passthrough.js");
exports.finished = __webpack_require__(/*! ./lib/internal/streams/end-of-stream.js */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/end-of-stream.js");
exports.pipeline = __webpack_require__(/*! ./lib/internal/streams/pipeline.js */ "./node_modules/n3/node_modules/readable-stream/lib/internal/streams/pipeline.js");


/***/ }),

/***/ "./node_modules/n3/src/IRIs.js":
/*!*************************************!*\
  !*** ./node_modules/n3/src/IRIs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const RDF  = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    XSD  = 'http://www.w3.org/2001/XMLSchema#',
    SWAP = 'http://www.w3.org/2000/10/swap/';

/* harmony default export */ __webpack_exports__["default"] = ({
  xsd: {
    decimal: `${XSD}decimal`,
    boolean: `${XSD}boolean`,
    double:  `${XSD}double`,
    integer: `${XSD}integer`,
    string:  `${XSD}string`,
  },
  rdf: {
    type:       `${RDF}type`,
    nil:        `${RDF}nil`,
    first:      `${RDF}first`,
    rest:       `${RDF}rest`,
    langString: `${RDF}langString`,
  },
  owl: {
    sameAs: 'http://www.w3.org/2002/07/owl#sameAs',
  },
  r: {
    forSome: `${SWAP}reify#forSome`,
    forAll:  `${SWAP}reify#forAll`,
  },
  log: {
    implies: `${SWAP}log#implies`,
  },
});


/***/ }),

/***/ "./node_modules/n3/src/N3DataFactory.js":
/*!**********************************************!*\
  !*** ./node_modules/n3/src/N3DataFactory.js ***!
  \**********************************************/
/*! exports provided: default, Term, NamedNode, Literal, BlankNode, Variable, DefaultGraph, termFromId, termToId, Quad, Triple, escapeQuotes, unescapeQuotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Term", function() { return Term; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedNode", function() { return NamedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return Literal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankNode", function() { return BlankNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGraph", function() { return DefaultGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termFromId", function() { return termFromId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "termToId", function() { return termToId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quad", function() { return Quad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triple", function() { return Quad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeQuotes", function() { return escapeQuotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescapeQuotes", function() { return unescapeQuotes; });
/* harmony import */ var _IRIs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IRIs */ "./node_modules/n3/src/IRIs.js");
/* harmony import */ var _N3Util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./N3Util */ "./node_modules/n3/src/N3Util.js");
// N3.js implementations of the RDF/JS core data types
// See https://github.com/rdfjs/representation-task-force/blob/master/interface-spec.md



const { rdf, xsd } = _IRIs__WEBPACK_IMPORTED_MODULE_0__["default"];

// eslint-disable-next-line prefer-const
let DEFAULTGRAPH;
let _blankNodeCounter = 0;

const escapedLiteral = /^"(.*".*)(?="[^"]*$)/;
const quadId = /^<<("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ?("(?:""|[^"])*"[^ ]*|[^ ]+)?>>$/;

// ## DataFactory singleton
const DataFactory = {
  namedNode,
  blankNode,
  variable,
  literal,
  defaultGraph,
  quad,
  triple: quad,
};
/* harmony default export */ __webpack_exports__["default"] = (DataFactory);

// ## Term constructor
class Term {
  constructor(id) {
    this.id = id;
  }

  // ### The value of this term
  get value() {
    return this.id;
  }

  // ### Returns whether this object represents the same term as the other
  equals(other) {
    // If both terms were created by this library,
    // equality can be computed through ids
    if (other instanceof Term)
      return this.id === other.id;
    // Otherwise, compare term type and value
    return !!other && this.termType === other.termType &&
                      this.value    === other.value;
  }

  // ### Returns a plain object representation of this term
  toJSON() {
    return {
      termType: this.termType,
      value:    this.value,
    };
  }
}


// ## NamedNode constructor
class NamedNode extends Term {
  // ### The term type of this term
  get termType() {
    return 'NamedNode';
  }
}

// ## Literal constructor
class Literal extends Term {
  // ### The term type of this term
  get termType() {
    return 'Literal';
  }

  // ### The text value of this literal
  get value() {
    return this.id.substring(1, this.id.lastIndexOf('"'));
  }

  // ### The language of this literal
  get language() {
    // Find the last quotation mark (e.g., '"abc"@en-us')
    const id = this.id;
    let atPos = id.lastIndexOf('"') + 1;
    // If "@" it follows, return the remaining substring; empty otherwise
    return atPos < id.length && id[atPos++] === '@' ? id.substr(atPos).toLowerCase() : '';
  }

  // ### The datatype IRI of this literal
  get datatype() {
    return new NamedNode(this.datatypeString);
  }

  // ### The datatype string of this literal
  get datatypeString() {
    // Find the last quotation mark (e.g., '"abc"^^http://ex.org/types#t')
    const id = this.id, dtPos = id.lastIndexOf('"') + 1;
    const char = dtPos < id.length ? id[dtPos] : '';
    // If "^" it follows, return the remaining substring
    return char === '^' ? id.substr(dtPos + 2) :
           // If "@" follows, return rdf:langString; xsd:string otherwise
           (char !== '@' ? xsd.string : rdf.langString);
  }

  // ### Returns whether this object represents the same term as the other
  equals(other) {
    // If both literals were created by this library,
    // equality can be computed through ids
    if (other instanceof Literal)
      return this.id === other.id;
    // Otherwise, compare term type, value, language, and datatype
    return !!other && !!other.datatype &&
                      this.termType === other.termType &&
                      this.value    === other.value    &&
                      this.language === other.language &&
                      this.datatype.value === other.datatype.value;
  }

  toJSON() {
    return {
      termType: this.termType,
      value:    this.value,
      language: this.language,
      datatype: { termType: 'NamedNode', value: this.datatypeString },
    };
  }
}

// ## BlankNode constructor
class BlankNode extends Term {
  constructor(name) {
    super(`_:${name}`);
  }

  // ### The term type of this term
  get termType() {
    return 'BlankNode';
  }

  // ### The name of this blank node
  get value() {
    return this.id.substr(2);
  }
}

class Variable extends Term {
  constructor(name) {
    super(`?${name}`);
  }

  // ### The term type of this term
  get termType() {
    return 'Variable';
  }

  // ### The name of this variable
  get value() {
    return this.id.substr(1);
  }
}

// ## DefaultGraph constructor
class DefaultGraph extends Term {
  constructor() {
    super('');
    return DEFAULTGRAPH || this;
  }

  // ### The term type of this term
  get termType() {
    return 'DefaultGraph';
  }

  // ### Returns whether this object represents the same term as the other
  equals(other) {
    // If both terms were created by this library,
    // equality can be computed through strict equality;
    // otherwise, compare term types.
    return (this === other) || (!!other && (this.termType === other.termType));
  }
}

// ## DefaultGraph singleton
DEFAULTGRAPH = new DefaultGraph();


// ### Constructs a term from the given internal string ID
function termFromId(id, factory) {
  factory = factory || DataFactory;

  // Falsy value or empty string indicate the default graph
  if (!id)
    return factory.defaultGraph();

  // Identify the term type based on the first character
  switch (id[0]) {
  case '?':
    return factory.variable(id.substr(1));
  case '_':
    return factory.blankNode(id.substr(2));
  case '"':
    // Shortcut for internal literals
    if (factory === DataFactory)
      return new Literal(id);
    // Literal without datatype or language
    if (id[id.length - 1] === '"')
      return factory.literal(id.substr(1, id.length - 2));
    // Literal with datatype or language
    const endPos = id.lastIndexOf('"', id.length - 1);
    return factory.literal(id.substr(1, endPos - 1),
            id[endPos + 1] === '@' ? id.substr(endPos + 2)
                                   : factory.namedNode(id.substr(endPos + 3)));
  case '<':
    const components = quadId.exec(id);
    return factory.quad(
      termFromId(unescapeQuotes(components[1]), factory),
      termFromId(unescapeQuotes(components[2]), factory),
      termFromId(unescapeQuotes(components[3]), factory),
      components[4] && termFromId(unescapeQuotes(components[4]), factory)
    );
  default:
    return factory.namedNode(id);
  }
}

// ### Constructs an internal string ID from the given term or ID string
function termToId(term) {
  if (typeof term === 'string')
    return term;
  if (term instanceof Term && term.termType !== 'Quad')
    return term.id;
  if (!term)
    return DEFAULTGRAPH.id;

  // Term instantiated with another library
  switch (term.termType) {
  case 'NamedNode':    return term.value;
  case 'BlankNode':    return `_:${term.value}`;
  case 'Variable':     return `?${term.value}`;
  case 'DefaultGraph': return '';
  case 'Literal':      return `"${term.value}"${
    term.language ? `@${term.language}` :
      (term.datatype && term.datatype.value !== xsd.string ? `^^${term.datatype.value}` : '')}`;
  case 'Quad':
    // To identify RDF* quad components, we escape quotes by doubling them.
    // This avoids the overhead of backslash parsing of Turtle-like syntaxes.
    return `<<${
        escapeQuotes(termToId(term.subject))
      } ${
        escapeQuotes(termToId(term.predicate))
      } ${
        escapeQuotes(termToId(term.object))
      }${
        (Object(_N3Util__WEBPACK_IMPORTED_MODULE_1__["isDefaultGraph"])(term.graph)) ? '' : ` ${termToId(term.graph)}`
      }>>`;
  default: throw new Error(`Unexpected termType: ${term.termType}`);
  }
}


// ## Quad constructor
class Quad extends Term {
  constructor(subject, predicate, object, graph) {
    super('');
    this.subject   = subject;
    this.predicate = predicate;
    this.object    = object;
    this.graph     = graph || DEFAULTGRAPH;
  }

  // ### The term type of this term
  get termType() {
    return 'Quad';
  }

  // ### Returns a plain object representation of this quad
  toJSON() {
    return {
      termType:  this.termType,
      subject:   this.subject.toJSON(),
      predicate: this.predicate.toJSON(),
      object:    this.object.toJSON(),
      graph:     this.graph.toJSON(),
    };
  }

  // ### Returns whether this object represents the same quad as the other
  equals(other) {
    return !!other && this.subject.equals(other.subject)     &&
                      this.predicate.equals(other.predicate) &&
                      this.object.equals(other.object)       &&
                      this.graph.equals(other.graph);
  }
}


// ### Escapes the quotes within the given literal
function escapeQuotes(id) {
  return id.replace(escapedLiteral, (_, quoted) => `"${quoted.replace(/"/g, '""')}`);
}

// ### Unescapes the quotes within the given literal
function unescapeQuotes(id) {
  return id.replace(escapedLiteral, (_, quoted) => `"${quoted.replace(/""/g, '"')}`);
}

// ### Creates an IRI
function namedNode(iri) {
  return new NamedNode(iri);
}

// ### Creates a blank node
function blankNode(name) {
  return new BlankNode(name || `n3-${_blankNodeCounter++}`);
}

// ### Creates a literal
function literal(value, languageOrDataType) {
  // Create a language-tagged string
  if (typeof languageOrDataType === 'string')
    return new Literal(`"${value}"@${languageOrDataType.toLowerCase()}`);

  // Automatically determine datatype for booleans and numbers
  let datatype = languageOrDataType ? languageOrDataType.value : '';
  if (datatype === '') {
    // Convert a boolean
    if (typeof value === 'boolean')
      datatype = xsd.boolean;
    // Convert an integer or double
    else if (typeof value === 'number') {
      if (Number.isFinite(value))
        datatype = Number.isInteger(value) ? xsd.integer : xsd.double;
      else {
        datatype = xsd.double;
        if (!Number.isNaN(value))
          value = value > 0 ? 'INF' : '-INF';
      }
    }
  }

  // Create a datatyped literal
  return (datatype === '' || datatype === xsd.string) ?
    new Literal(`"${value}"`) :
    new Literal(`"${value}"^^${datatype}`);
}

// ### Creates a variable
function variable(name) {
  return new Variable(name);
}

// ### Returns the default graph
function defaultGraph() {
  return DEFAULTGRAPH;
}

// ### Creates a quad
function quad(subject, predicate, object, graph) {
  return new Quad(subject, predicate, object, graph);
}


/***/ }),

/***/ "./node_modules/n3/src/N3Lexer.js":
/*!****************************************!*\
  !*** ./node_modules/n3/src/N3Lexer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N3Lexer; });
/* harmony import */ var _IRIs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IRIs */ "./node_modules/n3/src/IRIs.js");
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! queue-microtask */ "./node_modules/queue-microtask/index.js");
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(queue_microtask__WEBPACK_IMPORTED_MODULE_1__);
// **N3Lexer** tokenizes N3 documents.



const { xsd } = _IRIs__WEBPACK_IMPORTED_MODULE_0__["default"];

// Regular expression and replacement string to escape N3 strings
const escapeSequence = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g;
const escapeReplacements = {
  '\\': '\\', "'": "'", '"': '"',
  'n': '\n', 'r': '\r', 't': '\t', 'f': '\f', 'b': '\b',
  '_': '_', '~': '~', '.': '.', '-': '-', '!': '!', '$': '$', '&': '&',
  '(': '(', ')': ')', '*': '*', '+': '+', ',': ',', ';': ';', '=': '=',
  '/': '/', '?': '?', '#': '#', '@': '@', '%': '%',
};
const illegalIriChars = /[\x00-\x20<>\\"\{\}\|\^\`]/;

const lineModeRegExps = {
  _iri: true,
  _unescapedIri: true,
  _simpleQuotedString: true,
  _langcode: true,
  _blank: true,
  _newline: true,
  _comment: true,
  _whitespace: true,
  _endOfFile: true,
};
const invalidRegExp = /$0^/;

// ## Constructor
class N3Lexer {
  constructor(options) {
    // ## Regular expressions
    // It's slightly faster to have these as properties than as in-scope variables
    this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/; // IRI with escape sequences; needs sanity check after unescaping
    this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/; // IRI without escape sequences; no unescaping
    this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/; // string without escape sequences
    this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/;
    this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i;
    this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/;
    this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/;
    this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/;
    this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/;
    this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/;
    this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/;
    this._keyword = /^@[a-z]+(?=[\s#<:])/i;
    this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i;
    this._shortPredicates = /^a(?=[\s#()\[\]\{\}"'<>])/;
    this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/;
    this._comment = /#([^\n\r]*)/;
    this._whitespace = /^[ \t]+/;
    this._endOfFile = /^(?:#[^\n\r]*)?$/;
    options = options || {};

    // In line mode (N-Triples or N-Quads), only simple features may be parsed
    if (this._lineMode = !!options.lineMode) {
      this._n3Mode = false;
      // Don't tokenize special literals
      for (const key in this) {
        if (!(key in lineModeRegExps) && this[key] instanceof RegExp)
          this[key] = invalidRegExp;
      }
    }
    // When not in line mode, enable N3 functionality by default
    else {
      this._n3Mode = options.n3 !== false;
    }
    // Don't output comment tokens by default
    this._comments = !!options.comments;
    // Cache the last tested closing position of long literals
    this._literalClosingPos = 0;
  }

  // ## Private methods

  // ### `_tokenizeToEnd` tokenizes as for as possible, emitting tokens through the callback
  _tokenizeToEnd(callback, inputFinished) {
    // Continue parsing as far as possible; the loop will return eventually
    let input = this._input;
    const outputComments = this._comments;
    while (true) {
      // Count and skip whitespace lines
      let whiteSpaceMatch, comment;
      while (whiteSpaceMatch = this._newline.exec(input)) {
        // Try to find a comment
        if (outputComments && (comment = this._comment.exec(whiteSpaceMatch[0])))
          callback(null, { line: this._line, type: 'comment', value: comment[1], prefix: '' });
        // Advance the input
        input = input.substr(whiteSpaceMatch[0].length, input.length);
        this._line++;
      }
      // Skip whitespace on current line
      if (!whiteSpaceMatch && (whiteSpaceMatch = this._whitespace.exec(input)))
        input = input.substr(whiteSpaceMatch[0].length, input.length);

      // Stop for now if we're at the end
      if (this._endOfFile.test(input)) {
        // If the input is finished, emit EOF
        if (inputFinished) {
          // Try to find a final comment
          if (outputComments && (comment = this._comment.exec(input)))
            callback(null, { line: this._line, type: 'comment', value: comment[1], prefix: '' });
          callback(input = null, { line: this._line, type: 'eof', value: '', prefix: '' });
        }
        return this._input = input;
      }

      // Look for specific token types based on the first character
      const line = this._line, firstChar = input[0];
      let type = '', value = '', prefix = '',
          match = null, matchLength = 0, inconclusive = false;
      switch (firstChar) {
      case '^':
        // We need at least 3 tokens lookahead to distinguish ^^<IRI> and ^^pre:fixed
        if (input.length < 3)
          break;
        // Try to match a type
        else if (input[1] === '^') {
          this._previousMarker = '^^';
          // Move to type IRI or prefixed name
          input = input.substr(2);
          if (input[0] !== '<') {
            inconclusive = true;
            break;
          }
        }
        // If no type, it must be a path expression
        else {
          if (this._n3Mode) {
            matchLength = 1;
            type = '^';
          }
          break;
        }
        // Fall through in case the type is an IRI
      case '<':
        // Try to find a full IRI without escape sequences
        if (match = this._unescapedIri.exec(input))
          type = 'IRI', value = match[1];
        // Try to find a full IRI with escape sequences
        else if (match = this._iri.exec(input)) {
          value = this._unescape(match[1]);
          if (value === null || illegalIriChars.test(value))
            return reportSyntaxError(this);
          type = 'IRI';
        }
        // Try to find a nested triple
        else if (input.length > 1 && input[1] === '<')
          type = '<<', matchLength = 2;
        // Try to find a backwards implication arrow
        else if (this._n3Mode && input.length > 1 && input[1] === '=')
          type = 'inverse', matchLength = 2, value = '>';
        break;

      case '>':
        if (input.length > 1 && input[1] === '>')
          type = '>>', matchLength = 2;
        break;

      case '_':
        // Try to find a blank node. Since it can contain (but not end with) a dot,
        // we always need a non-dot character before deciding it is a blank node.
        // Therefore, try inserting a space if we're at the end of the input.
        if ((match = this._blank.exec(input)) ||
            inputFinished && (match = this._blank.exec(`${input} `)))
          type = 'blank', prefix = '_', value = match[1];
        break;

      case '"':
        // Try to find a literal without escape sequences
        if (match = this._simpleQuotedString.exec(input))
          value = match[1];
        // Try to find a literal wrapped in three pairs of quotes
        else {
          ({ value, matchLength } = this._parseLiteral(input));
          if (value === null)
            return reportSyntaxError(this);
        }
        if (match !== null || matchLength !== 0) {
          type = 'literal';
          this._literalClosingPos = 0;
        }
        break;

      case "'":
        if (!this._lineMode) {
          // Try to find a literal without escape sequences
          if (match = this._simpleApostropheString.exec(input))
            value = match[1];
          // Try to find a literal wrapped in three pairs of quotes
          else {
            ({ value, matchLength } = this._parseLiteral(input));
            if (value === null)
              return reportSyntaxError(this);
          }
          if (match !== null || matchLength !== 0) {
            type = 'literal';
            this._literalClosingPos = 0;
          }
        }
        break;

      case '?':
        // Try to find a variable
        if (this._n3Mode && (match = this._variable.exec(input)))
          type = 'var', value = match[0];
        break;

      case '@':
        // Try to find a language code
        if (this._previousMarker === 'literal' && (match = this._langcode.exec(input)))
          type = 'langcode', value = match[1];
        // Try to find a keyword
        else if (match = this._keyword.exec(input))
          type = match[0];
        break;

      case '.':
        // Try to find a dot as punctuation
        if (input.length === 1 ? inputFinished : (input[1] < '0' || input[1] > '9')) {
          type = '.';
          matchLength = 1;
          break;
        }
        // Fall through to numerical case (could be a decimal dot)

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '+':
      case '-':
        // Try to find a number. Since it can contain (but not end with) a dot,
        // we always need a non-dot character before deciding it is a number.
        // Therefore, try inserting a space if we're at the end of the input.
        if (match = this._number.exec(input) ||
            inputFinished && (match = this._number.exec(`${input} `))) {
          type = 'literal', value = match[0];
          prefix = (typeof match[1] === 'string' ? xsd.double :
                    (typeof match[2] === 'string' ? xsd.decimal : xsd.integer));
        }
        break;

      case 'B':
      case 'b':
      case 'p':
      case 'P':
      case 'G':
      case 'g':
        // Try to find a SPARQL-style keyword
        if (match = this._sparqlKeyword.exec(input))
          type = match[0].toUpperCase();
        else
          inconclusive = true;
        break;

      case 'f':
      case 't':
        // Try to match a boolean
        if (match = this._boolean.exec(input))
          type = 'literal', value = match[0], prefix = xsd.boolean;
        else
          inconclusive = true;
        break;

      case 'a':
        // Try to find an abbreviated predicate
        if (match = this._shortPredicates.exec(input))
          type = 'abbreviation', value = 'a';
        else
          inconclusive = true;
        break;

      case '=':
        // Try to find an implication arrow or equals sign
        if (this._n3Mode && input.length > 1) {
          type = 'abbreviation';
          if (input[1] !== '>')
            matchLength = 1, value = '=';
          else
            matchLength = 2, value = '>';
        }
        break;

      case '!':
        if (!this._n3Mode)
          break;
      case ',':
      case ';':
      case '[':
      case ']':
      case '(':
      case ')':
      case '{':
      case '}':
        if (!this._lineMode) {
          matchLength = 1;
          type = firstChar;
        }
        break;

      default:
        inconclusive = true;
      }

      // Some first characters do not allow an immediate decision, so inspect more
      if (inconclusive) {
        // Try to find a prefix
        if ((this._previousMarker === '@prefix' || this._previousMarker === 'PREFIX') &&
            (match = this._prefix.exec(input)))
          type = 'prefix', value = match[1] || '';
        // Try to find a prefixed name. Since it can contain (but not end with) a dot,
        // we always need a non-dot character before deciding it is a prefixed name.
        // Therefore, try inserting a space if we're at the end of the input.
        else if ((match = this._prefixed.exec(input)) ||
                 inputFinished && (match = this._prefixed.exec(`${input} `)))
          type = 'prefixed', prefix = match[1] || '', value = this._unescape(match[2]);
      }

      // A type token is special: it can only be emitted after an IRI or prefixed name is read
      if (this._previousMarker === '^^') {
        switch (type) {
        case 'prefixed': type = 'type';    break;
        case 'IRI':      type = 'typeIRI'; break;
        default:         type = '';
        }
      }

      // What if nothing of the above was found?
      if (!type) {
        // We could be in streaming mode, and then we just wait for more input to arrive.
        // Otherwise, a syntax error has occurred in the input.
        // One exception: error on an unaccounted linebreak (= not inside a triple-quoted literal).
        if (inputFinished || (!/^'''|^"""/.test(input) && /\n|\r/.test(input)))
          return reportSyntaxError(this);
        else
          return this._input = input;
      }

      // Emit the parsed token
      const token = { line: line, type: type, value: value, prefix: prefix };
      callback(null, token);
      this.previousToken = token;
      this._previousMarker = type;
      // Advance to next part to tokenize
      input = input.substr(matchLength || match[0].length, input.length);
    }

    // Signals the syntax error through the callback
    function reportSyntaxError(self) { callback(self._syntaxError(/^\S*/.exec(input)[0])); }
  }

  // ### `_unescape` replaces N3 escape codes by their corresponding characters
  _unescape(item) {
    let invalid = false;
    const replaced = item.replace(escapeSequence, (sequence, unicode4, unicode8, escapedChar) => {
      // 4-digit unicode character
      if (typeof unicode4 === 'string')
        return String.fromCharCode(Number.parseInt(unicode4, 16));
      // 8-digit unicode character
      if (typeof unicode8 === 'string') {
        let charCode = Number.parseInt(unicode8, 16);
        return charCode <= 0xFFFF ? String.fromCharCode(Number.parseInt(unicode8, 16)) :
          String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
      }
      // fixed escape sequence
      if (escapedChar in escapeReplacements)
        return escapeReplacements[escapedChar];
      // invalid escape sequence
      invalid = true;
      return '';
    });
    return invalid ? null : replaced;
  }

  // ### `_parseLiteral` parses a literal into an unescaped value
  _parseLiteral(input) {
    // Ensure we have enough lookahead to identify triple-quoted strings
    if (input.length >= 3) {
      // Identify the opening quote(s)
      const opening = input.match(/^(?:"""|"|'''|'|)/)[0];
      const openingLength = opening.length;

      // Find the next candidate closing quotes
      let closingPos = Math.max(this._literalClosingPos, openingLength);
      while ((closingPos = input.indexOf(opening, closingPos)) > 0) {
        // Count backslashes right before the closing quotes
        let backslashCount = 0;
        while (input[closingPos - backslashCount - 1] === '\\')
          backslashCount++;

        // An even number of backslashes (in particular 0)
        // means these are actual, non-escaped closing quotes
        if (backslashCount % 2 === 0) {
          // Extract and unescape the value
          const raw = input.substring(openingLength, closingPos);
          const lines = raw.split(/\r\n|\r|\n/).length - 1;
          const matchLength = closingPos + openingLength;
          // Only triple-quoted strings can be multi-line
          if (openingLength === 1 && lines !== 0 ||
              openingLength === 3 && this._lineMode)
            break;
          this._line += lines;
          return { value: this._unescape(raw), matchLength };
        }
        closingPos++;
      }
      this._literalClosingPos = input.length - openingLength + 1;
    }
    return { value: '', matchLength: 0 };
  }

  // ### `_syntaxError` creates a syntax error for the given issue
  _syntaxError(issue) {
    this._input = null;
    const err = new Error(`Unexpected "${issue}" on line ${this._line}.`);
    err.context = {
      token: undefined,
      line: this._line,
      previousToken: this.previousToken,
    };
    return err;
  }

  // ## Public methods

  // ### `tokenize` starts the transformation of an N3 document into an array of tokens.
  // The input can be a string or a stream.
  tokenize(input, callback) {
    this._line = 1;

    // If the input is a string, continuously emit tokens through the callback until the end
    if (typeof input === 'string') {
      this._input = input;
      // If a callback was passed, asynchronously call it
      if (typeof callback === 'function')
        queue_microtask__WEBPACK_IMPORTED_MODULE_1___default()(() => this._tokenizeToEnd(callback, true));
      // If no callback was passed, tokenize synchronously and return
      else {
        const tokens = [];
        let error;
        this._tokenizeToEnd((e, t) => e ? (error = e) : tokens.push(t), true);
        if (error) throw error;
        return tokens;
      }
    }
    // Otherwise, the input must be a stream
    else {
      this._input = '';
      this._pendingBuffer = null;
      if (typeof input.setEncoding === 'function')
        input.setEncoding('utf8');
      // Adds the data chunk to the buffer and parses as far as possible
      input.on('data', data => {
        if (this._input !== null && data.length !== 0) {
          // Prepend any previous pending writes
          if (this._pendingBuffer) {
            data = Buffer.concat([this._pendingBuffer, data]);
            this._pendingBuffer = null;
          }
          // Hold if the buffer ends in an incomplete unicode sequence
          if (data[data.length - 1] & 0x80) {
            this._pendingBuffer = data;
          }
          // Otherwise, tokenize as far as possible
          else {
            this._input += data;
            this._tokenizeToEnd(callback, false);
          }
        }
      });
      // Parses until the end
      input.on('end', () => {
        if (this._input !== null)
          this._tokenizeToEnd(callback, true);
      });
      input.on('error', callback);
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/n3/src/N3Parser.js":
/*!*****************************************!*\
  !*** ./node_modules/n3/src/N3Parser.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N3Parser; });
/* harmony import */ var _N3Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./N3Lexer */ "./node_modules/n3/src/N3Lexer.js");
/* harmony import */ var _N3DataFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./N3DataFactory */ "./node_modules/n3/src/N3DataFactory.js");
/* harmony import */ var _IRIs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IRIs */ "./node_modules/n3/src/IRIs.js");
// **N3Parser** parses N3 documents.




let blankNodePrefix = 0;

// ## Constructor
class N3Parser {
  constructor(options) {
    this._contextStack = [];
    this._graph = null;

    // Set the document IRI
    options = options || {};
    this._setBase(options.baseIRI);
    options.factory && initDataFactory(this, options.factory);

    // Set supported features depending on the format
    const format = (typeof options.format === 'string') ?
                 options.format.match(/\w*$/)[0].toLowerCase() : '',
        isTurtle = /turtle/.test(format), isTriG = /trig/.test(format),
        isNTriples = /triple/.test(format), isNQuads = /quad/.test(format),
        isN3 = this._n3Mode = /n3/.test(format),
        isLineMode = isNTriples || isNQuads;
    if (!(this._supportsNamedGraphs = !(isTurtle || isN3)))
      this._readPredicateOrNamedGraph = this._readPredicate;
    // Support triples in other graphs
    this._supportsQuads = !(isTurtle || isTriG || isNTriples || isN3);
    // Support nesting of triples
    this._supportsRDFStar = format === '' || /star|\*$/.test(format);
    // Disable relative IRIs in N-Triples or N-Quads mode
    if (isLineMode)
      this._resolveRelativeIRI = iri => { return null; };
    this._blankNodePrefix = typeof options.blankNodePrefix !== 'string' ? '' :
                              options.blankNodePrefix.replace(/^(?!_:)/, '_:');
    this._lexer = options.lexer || new _N3Lexer__WEBPACK_IMPORTED_MODULE_0__["default"]({ lineMode: isLineMode, n3: isN3 });
    // Disable explicit quantifiers by default
    this._explicitQuantifiers = !!options.explicitQuantifiers;
  }

  // ## Static class methods

  // ### `_resetBlankNodePrefix` restarts blank node prefix identification
  static _resetBlankNodePrefix() {
    blankNodePrefix = 0;
  }

  // ## Private methods

  // ### `_setBase` sets the base IRI to resolve relative IRIs
  _setBase(baseIRI) {
    if (!baseIRI) {
      this._base = '';
      this._basePath = '';
    }
    else {
      // Remove fragment if present
      const fragmentPos = baseIRI.indexOf('#');
      if (fragmentPos >= 0)
        baseIRI = baseIRI.substr(0, fragmentPos);
      // Set base IRI and its components
      this._base = baseIRI;
      this._basePath   = baseIRI.indexOf('/') < 0 ? baseIRI :
                         baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i);
      this._baseRoot   = baseIRI[0];
      this._baseScheme = baseIRI[1];
    }
  }

  // ### `_saveContext` stores the current parsing context
  // when entering a new scope (list, blank node, formula)
  _saveContext(type, graph, subject, predicate, object) {
    const n3Mode = this._n3Mode;
    this._contextStack.push({
      subject: subject, predicate: predicate, object: object,
      graph: graph, type: type,
      inverse: n3Mode ? this._inversePredicate : false,
      blankPrefix: n3Mode ? this._prefixes._ : '',
      quantified: n3Mode ? this._quantified : null,
    });
    // The settings below only apply to N3 streams
    if (n3Mode) {
      // Every new scope resets the predicate direction
      this._inversePredicate = false;
      // In N3, blank nodes are scoped to a formula
      // (using a dot as separator, as a blank node label cannot start with it)
      this._prefixes._ = (this._graph ? `${this._graph.id.substr(2)}.` : '.');
      // Quantifiers are scoped to a formula
      this._quantified = Object.create(this._quantified);
    }
  }

  // ### `_restoreContext` restores the parent context
  // when leaving a scope (list, blank node, formula)
  _restoreContext() {
    const context = this._contextStack.pop(), n3Mode = this._n3Mode;
    this._subject   = context.subject;
    this._predicate = context.predicate;
    this._object    = context.object;
    this._graph     = context.graph;
    // The settings below only apply to N3 streams
    if (n3Mode) {
      this._inversePredicate = context.inverse;
      this._prefixes._ = context.blankPrefix;
      this._quantified = context.quantified;
    }
  }

  // ### `_readInTopContext` reads a token when in the top context
  _readInTopContext(token) {
    switch (token.type) {
    // If an EOF token arrives in the top context, signal that we're done
    case 'eof':
      if (this._graph !== null)
        return this._error('Unclosed graph', token);
      delete this._prefixes._;
      return this._callback(null, null, this._prefixes);
    // It could be a prefix declaration
    case 'PREFIX':
      this._sparqlStyle = true;
    case '@prefix':
      return this._readPrefix;
    // It could be a base declaration
    case 'BASE':
      this._sparqlStyle = true;
    case '@base':
      return this._readBaseIRI;
    // It could be a graph
    case '{':
      if (this._supportsNamedGraphs) {
        this._graph = '';
        this._subject = null;
        return this._readSubject;
      }
    case 'GRAPH':
      if (this._supportsNamedGraphs)
        return this._readNamedGraphLabel;
    // Otherwise, the next token must be a subject
    default:
      return this._readSubject(token);
    }
  }

  // ### `_readEntity` reads an IRI, prefixed name, blank node, or variable
  _readEntity(token, quantifier) {
    let value;
    switch (token.type) {
    // Read a relative or absolute IRI
    case 'IRI':
    case 'typeIRI':
      const iri = this._resolveIRI(token.value);
      if (iri === null)
        return this._error('Invalid IRI', token);
      value = this._namedNode(iri);
      break;
    // Read a prefixed name
    case 'type':
    case 'prefixed':
      const prefix = this._prefixes[token.prefix];
      if (prefix === undefined)
        return this._error(`Undefined prefix "${token.prefix}:"`, token);
      value = this._namedNode(prefix + token.value);
      break;
    // Read a blank node
    case 'blank':
      value = this._blankNode(this._prefixes[token.prefix] + token.value);
      break;
    // Read a variable
    case 'var':
      value = this._variable(token.value.substr(1));
      break;
    // Everything else is not an entity
    default:
      return this._error(`Expected entity but got ${token.type}`, token);
    }
    // In N3 mode, replace the entity if it is quantified
    if (!quantifier && this._n3Mode && (value.id in this._quantified))
      value = this._quantified[value.id];
    return value;
  }

  // ### `_readSubject` reads a quad's subject
  _readSubject(token) {
    this._predicate = null;
    switch (token.type) {
    case '[':
      // Start a new quad with a new blank node as subject
      this._saveContext('blank', this._graph,
                        this._subject = this._blankNode(), null, null);
      return this._readBlankNodeHead;
    case '(':
      // Start a new list
      this._saveContext('list', this._graph, this.RDF_NIL, null, null);
      this._subject = null;
      return this._readListItem;
    case '{':
      // Start a new formula
      if (!this._n3Mode)
        return this._error('Unexpected graph', token);
      this._saveContext('formula', this._graph,
                        this._graph = this._blankNode(), null, null);
      return this._readSubject;
    case '}':
       // No subject; the graph in which we are reading is closed instead
      return this._readPunctuation(token);
    case '@forSome':
      if (!this._n3Mode)
        return this._error('Unexpected "@forSome"', token);
      this._subject = null;
      this._predicate = this.N3_FORSOME;
      this._quantifier = this._blankNode;
      return this._readQuantifierList;
    case '@forAll':
      if (!this._n3Mode)
        return this._error('Unexpected "@forAll"', token);
      this._subject = null;
      this._predicate = this.N3_FORALL;
      this._quantifier = this._variable;
      return this._readQuantifierList;
    case 'literal':
      if (!this._n3Mode)
        return this._error('Unexpected literal', token);

      if (token.prefix.length === 0) {
        this._literalValue = token.value;
        return this._completeSubjectLiteral;
      }
      else
        this._subject = this._literal(token.value, this._namedNode(token.prefix));

      break;
    case '<<':
      if (!this._supportsRDFStar)
        return this._error('Unexpected RDF* syntax', token);
      this._saveContext('<<', this._graph, null, null, null);
      this._graph = null;
      return this._readSubject;
    default:
      // Read the subject entity
      if ((this._subject = this._readEntity(token)) === undefined)
        return;
      // In N3 mode, the subject might be a path
      if (this._n3Mode)
        return this._getPathReader(this._readPredicateOrNamedGraph);
    }

    // The next token must be a predicate,
    // or, if the subject was actually a graph IRI, a named graph
    return this._readPredicateOrNamedGraph;
  }

  // ### `_readPredicate` reads a quad's predicate
  _readPredicate(token) {
    const type = token.type;
    switch (type) {
    case 'inverse':
      this._inversePredicate = true;
    case 'abbreviation':
      this._predicate = this.ABBREVIATIONS[token.value];
      break;
    case '.':
    case ']':
    case '}':
      // Expected predicate didn't come, must have been trailing semicolon
      if (this._predicate === null)
        return this._error(`Unexpected ${type}`, token);
      this._subject = null;
      return type === ']' ? this._readBlankNodeTail(token) : this._readPunctuation(token);
    case ';':
      // Additional semicolons can be safely ignored
      return this._predicate !== null ? this._readPredicate :
             this._error('Expected predicate but got ;', token);
    case 'blank':
      if (!this._n3Mode)
        return this._error('Disallowed blank node as predicate', token);
    default:
      if ((this._predicate = this._readEntity(token)) === undefined)
        return;
    }
    // The next token must be an object
    return this._readObject;
  }

  // ### `_readObject` reads a quad's object
  _readObject(token) {
    switch (token.type) {
    case 'literal':
      // Regular literal, can still get a datatype or language
      if (token.prefix.length === 0) {
        this._literalValue = token.value;
        return this._readDataTypeOrLang;
      }
      // Pre-datatyped string literal (prefix stores the datatype)
      else
        this._object = this._literal(token.value, this._namedNode(token.prefix));
      break;
    case '[':
      // Start a new quad with a new blank node as subject
      this._saveContext('blank', this._graph, this._subject, this._predicate,
                        this._subject = this._blankNode());
      return this._readBlankNodeHead;
    case '(':
      // Start a new list
      this._saveContext('list', this._graph, this._subject, this._predicate, this.RDF_NIL);
      this._subject = null;
      return this._readListItem;
    case '{':
      // Start a new formula
      if (!this._n3Mode)
        return this._error('Unexpected graph', token);
      this._saveContext('formula', this._graph, this._subject, this._predicate,
                        this._graph = this._blankNode());
      return this._readSubject;
    case '<<':
      if (!this._supportsRDFStar)
        return this._error('Unexpected RDF* syntax', token);
      this._saveContext('<<', this._graph, this._subject, this._predicate, null);
      this._graph = null;
      return this._readSubject;
    default:
      // Read the object entity
      if ((this._object = this._readEntity(token)) === undefined)
        return;
      // In N3 mode, the object might be a path
      if (this._n3Mode)
        return this._getPathReader(this._getContextEndReader());
    }
    return this._getContextEndReader();
  }

  // ### `_readPredicateOrNamedGraph` reads a quad's predicate, or a named graph
  _readPredicateOrNamedGraph(token) {
    return token.type === '{' ? this._readGraph(token) : this._readPredicate(token);
  }

  // ### `_readGraph` reads a graph
  _readGraph(token) {
    if (token.type !== '{')
      return this._error(`Expected graph but got ${token.type}`, token);
    // The "subject" we read is actually the GRAPH's label
    this._graph = this._subject, this._subject = null;
    return this._readSubject;
  }

  // ### `_readBlankNodeHead` reads the head of a blank node
  _readBlankNodeHead(token) {
    if (token.type === ']') {
      this._subject = null;
      return this._readBlankNodeTail(token);
    }
    else {
      this._predicate = null;
      return this._readPredicate(token);
    }
  }

  // ### `_readBlankNodeTail` reads the end of a blank node
  _readBlankNodeTail(token) {
    if (token.type !== ']')
      return this._readBlankNodePunctuation(token);

    // Store blank node quad
    if (this._subject !== null)
      this._emit(this._subject, this._predicate, this._object, this._graph);

    // Restore the parent context containing this blank node
    const empty = this._predicate === null;
    this._restoreContext();
    // If the blank node was the subject, continue reading the predicate
    if (this._object === null)
      // If the blank node was empty, it could be a named graph label
      return empty ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank;
    // If the blank node was the object, restore previous context and read punctuation
    else
      return this._getContextEndReader();
  }

  // ### `_readPredicateAfterBlank` reads a predicate after an anonymous blank node
  _readPredicateAfterBlank(token) {
    switch (token.type) {
    case '.':
    case '}':
      // No predicate is coming if the triple is terminated here
      this._subject = null;
      return this._readPunctuation(token);
    default:
      return this._readPredicate(token);
    }
  }

  // ### `_readListItem` reads items from a list
  _readListItem(token) {
    let item = null,                      // The item of the list
        list = null,                      // The list itself
        next = this._readListItem;        // The next function to execute
    const previousList = this._subject,   // The previous list that contains this list
        stack = this._contextStack,       // The stack of parent contexts
        parent = stack[stack.length - 1]; // The parent containing the current list

    switch (token.type) {
    case '[':
      // Stack the current list quad and start a new quad with a blank node as subject
      this._saveContext('blank', this._graph,
                        list = this._blankNode(), this.RDF_FIRST,
                        this._subject = item = this._blankNode());
      next = this._readBlankNodeHead;
      break;
    case '(':
      // Stack the current list quad and start a new list
      this._saveContext('list', this._graph,
                        list = this._blankNode(), this.RDF_FIRST, this.RDF_NIL);
      this._subject = null;
      break;
    case ')':
      // Closing the list; restore the parent context
      this._restoreContext();
      // If this list is contained within a parent list, return the membership quad here.
      // This will be `<parent list element> rdf:first <this list>.`.
      if (stack.length !== 0 && stack[stack.length - 1].type === 'list')
        this._emit(this._subject, this._predicate, this._object, this._graph);
      // Was this list the parent's subject?
      if (this._predicate === null) {
        // The next token is the predicate
        next = this._readPredicate;
        // No list tail if this was an empty list
        if (this._subject === this.RDF_NIL)
          return next;
      }
      // The list was in the parent context's object
      else {
        next = this._getContextEndReader();
        // No list tail if this was an empty list
        if (this._object === this.RDF_NIL)
          return next;
      }
      // Close the list by making the head nil
      list = this.RDF_NIL;
      break;
    case 'literal':
      // Regular literal, can still get a datatype or language
      if (token.prefix.length === 0) {
        this._literalValue = token.value;
        next = this._readListItemDataTypeOrLang;
      }
      // Pre-datatyped string literal (prefix stores the datatype)
      else {
        item = this._literal(token.value, this._namedNode(token.prefix));
        next = this._getContextEndReader();
      }
      break;
    case '{':
      // Start a new formula
      if (!this._n3Mode)
        return this._error('Unexpected graph', token);
      this._saveContext('formula', this._graph, this._subject, this._predicate,
                        this._graph = this._blankNode());
      return this._readSubject;
    default:
      if ((item = this._readEntity(token)) === undefined)
        return;
    }

     // Create a new blank node if no item head was assigned yet
    if (list === null)
      this._subject = list = this._blankNode();

    // Is this the first element of the list?
    if (previousList === null) {
      // This list is either the subject or the object of its parent
      if (parent.predicate === null)
        parent.subject = list;
      else
        parent.object = list;
    }
    else {
      // Continue the previous list with the current list
      this._emit(previousList, this.RDF_REST, list, this._graph);
    }
    // If an item was read, add it to the list
    if (item !== null) {
      // In N3 mode, the item might be a path
      if (this._n3Mode && (token.type === 'IRI' || token.type === 'prefixed')) {
        // Create a new context to add the item's path
        this._saveContext('item', this._graph, list, this.RDF_FIRST, item);
        this._subject = item, this._predicate = null;
        // _readPath will restore the context and output the item
        return this._getPathReader(this._readListItem);
      }
      // Output the item
      this._emit(list, this.RDF_FIRST, item, this._graph);
    }
    return next;
  }

  // ### `_readDataTypeOrLang` reads an _optional_ datatype or language
  _readDataTypeOrLang(token) {
    return this._completeObjectLiteral(token, false);
  }


  // ### `_readListItemDataTypeOrLang` reads an _optional_ datatype or language in a list
  _readListItemDataTypeOrLang(token) {
    return this._completeObjectLiteral(token, true);
  }

  // ### `_completeLiteral` completes a literal with an optional datatype or language
  _completeLiteral(token) {
    // Create a simple string literal by default
    let literal = this._literal(this._literalValue);

    switch (token.type) {
    // Create a datatyped literal
    case 'type':
    case 'typeIRI':
      const datatype = this._readEntity(token);
      if (datatype === undefined) return; // No datatype means an error occurred
      literal = this._literal(this._literalValue, datatype);
      token = null;
      break;
    // Create a language-tagged string
    case 'langcode':
      literal = this._literal(this._literalValue, token.value);
      token = null;
      break;
    }

    return { token, literal };
  }

  // Completes a literal in subject position
  _completeSubjectLiteral(token) {
    this._subject = this._completeLiteral(token).literal;
    return this._readPredicateOrNamedGraph;
  }

  // Completes a literal in object position
  _completeObjectLiteral(token, listItem) {
    const completed = this._completeLiteral(token);
    if (!completed)
      return;
    this._object = completed.literal;

    // If this literal was part of a list, write the item
    // (we could also check the context stack, but passing in a flag is faster)
    if (listItem)
      this._emit(this._subject, this.RDF_FIRST, this._object, this._graph);
    // If the token was consumed, continue with the rest of the input
    if (completed.token === null)
      return this._getContextEndReader();
    // Otherwise, consume the token now
    else {
      this._readCallback = this._getContextEndReader();
      return this._readCallback(completed.token);
    }
  }

  // ### `_readFormulaTail` reads the end of a formula
  _readFormulaTail(token) {
    if (token.type !== '}')
      return this._readPunctuation(token);

    // Store the last quad of the formula
    if (this._subject !== null)
      this._emit(this._subject, this._predicate, this._object, this._graph);

    // Restore the parent context containing this formula
    this._restoreContext();
    // If the formula was the subject, continue reading the predicate.
    // If the formula was the object, read punctuation.
    return this._object === null ? this._readPredicate : this._getContextEndReader();
  }

  // ### `_readPunctuation` reads punctuation between quads or quad parts
  _readPunctuation(token) {
    let next, graph = this._graph;
    const subject = this._subject, inversePredicate = this._inversePredicate;
    switch (token.type) {
    // A closing brace ends a graph
    case '}':
      if (this._graph === null)
        return this._error('Unexpected graph closing', token);
      if (this._n3Mode)
        return this._readFormulaTail(token);
      this._graph = null;
    // A dot just ends the statement, without sharing anything with the next
    case '.':
      this._subject = null;
      next = this._contextStack.length ? this._readSubject : this._readInTopContext;
      if (inversePredicate) this._inversePredicate = false;
      break;
    // Semicolon means the subject is shared; predicate and object are different
    case ';':
      next = this._readPredicate;
      break;
    // Comma means both the subject and predicate are shared; the object is different
    case ',':
      next = this._readObject;
      break;
    default:
      // An entity means this is a quad (only allowed if not already inside a graph)
      if (this._supportsQuads && this._graph === null && (graph = this._readEntity(token)) !== undefined) {
        next = this._readQuadPunctuation;
        break;
      }
      return this._error(`Expected punctuation to follow "${this._object.id}"`, token);
    }
    // A quad has been completed now, so return it
    if (subject !== null) {
      const predicate = this._predicate, object = this._object;
      if (!inversePredicate)
        this._emit(subject, predicate, object,  graph);
      else
        this._emit(object,  predicate, subject, graph);
    }
    return next;
  }

    // ### `_readBlankNodePunctuation` reads punctuation in a blank node
  _readBlankNodePunctuation(token) {
    let next;
    switch (token.type) {
    // Semicolon means the subject is shared; predicate and object are different
    case ';':
      next = this._readPredicate;
      break;
    // Comma means both the subject and predicate are shared; the object is different
    case ',':
      next = this._readObject;
      break;
    default:
      return this._error(`Expected punctuation to follow "${this._object.id}"`, token);
    }
    // A quad has been completed now, so return it
    this._emit(this._subject, this._predicate, this._object, this._graph);
    return next;
  }

  // ### `_readQuadPunctuation` reads punctuation after a quad
  _readQuadPunctuation(token) {
    if (token.type !== '.')
      return this._error('Expected dot to follow quad', token);
    return this._readInTopContext;
  }

  // ### `_readPrefix` reads the prefix of a prefix declaration
  _readPrefix(token) {
    if (token.type !== 'prefix')
      return this._error('Expected prefix to follow @prefix', token);
    this._prefix = token.value;
    return this._readPrefixIRI;
  }

  // ### `_readPrefixIRI` reads the IRI of a prefix declaration
  _readPrefixIRI(token) {
    if (token.type !== 'IRI')
      return this._error(`Expected IRI to follow prefix "${this._prefix}:"`, token);
    const prefixNode = this._readEntity(token);
    this._prefixes[this._prefix] = prefixNode.value;
    this._prefixCallback(this._prefix, prefixNode);
    return this._readDeclarationPunctuation;
  }

  // ### `_readBaseIRI` reads the IRI of a base declaration
  _readBaseIRI(token) {
    const iri = token.type === 'IRI' && this._resolveIRI(token.value);
    if (!iri)
      return this._error('Expected valid IRI to follow base declaration', token);
    this._setBase(iri);
    return this._readDeclarationPunctuation;
  }

  // ### `_readNamedGraphLabel` reads the label of a named graph
  _readNamedGraphLabel(token) {
    switch (token.type) {
    case 'IRI':
    case 'blank':
    case 'prefixed':
      return this._readSubject(token), this._readGraph;
    case '[':
      return this._readNamedGraphBlankLabel;
    default:
      return this._error('Invalid graph label', token);
    }
  }

  // ### `_readNamedGraphLabel` reads a blank node label of a named graph
  _readNamedGraphBlankLabel(token) {
    if (token.type !== ']')
      return this._error('Invalid graph label', token);
    this._subject = this._blankNode();
    return this._readGraph;
  }

  // ### `_readDeclarationPunctuation` reads the punctuation of a declaration
  _readDeclarationPunctuation(token) {
    // SPARQL-style declarations don't have punctuation
    if (this._sparqlStyle) {
      this._sparqlStyle = false;
      return this._readInTopContext(token);
    }

    if (token.type !== '.')
      return this._error('Expected declaration to end with a dot', token);
    return this._readInTopContext;
  }

  // Reads a list of quantified symbols from a @forSome or @forAll statement
  _readQuantifierList(token) {
    let entity;
    switch (token.type) {
    case 'IRI':
    case 'prefixed':
      if ((entity = this._readEntity(token, true)) !== undefined)
        break;
    default:
      return this._error(`Unexpected ${token.type}`, token);
    }
    // Without explicit quantifiers, map entities to a quantified entity
    if (!this._explicitQuantifiers)
      this._quantified[entity.id] = this._quantifier(this._blankNode().value);
    // With explicit quantifiers, output the reified quantifier
    else {
      // If this is the first item, start a new quantifier list
      if (this._subject === null)
        this._emit(this._graph || this.DEFAULTGRAPH, this._predicate,
                   this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH);
      // Otherwise, continue the previous list
      else
        this._emit(this._subject, this.RDF_REST,
                   this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH);
      // Output the list item
      this._emit(this._subject, this.RDF_FIRST, entity, this.QUANTIFIERS_GRAPH);
    }
    return this._readQuantifierPunctuation;
  }

  // Reads punctuation from a @forSome or @forAll statement
  _readQuantifierPunctuation(token) {
    // Read more quantifiers
    if (token.type === ',')
      return this._readQuantifierList;
    // End of the quantifier list
    else {
      // With explicit quantifiers, close the quantifier list
      if (this._explicitQuantifiers) {
        this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH);
        this._subject = null;
      }
      // Read a dot
      this._readCallback = this._getContextEndReader();
      return this._readCallback(token);
    }
  }

  // ### `_getPathReader` reads a potential path and then resumes with the given function
  _getPathReader(afterPath) {
    this._afterPath = afterPath;
    return this._readPath;
  }

  // ### `_readPath` reads a potential path
  _readPath(token) {
    switch (token.type) {
    // Forward path
    case '!': return this._readForwardPath;
    // Backward path
    case '^': return this._readBackwardPath;
    // Not a path; resume reading where we left off
    default:
      const stack = this._contextStack, parent = stack.length && stack[stack.length - 1];
      // If we were reading a list item, we still need to output it
      if (parent && parent.type === 'item') {
        // The list item is the remaining subejct after reading the path
        const item = this._subject;
        // Switch back to the context of the list
        this._restoreContext();
        // Output the list item
        this._emit(this._subject, this.RDF_FIRST, item, this._graph);
      }
      return this._afterPath(token);
    }
  }

  // ### `_readForwardPath` reads a '!' path
  _readForwardPath(token) {
    let subject, predicate;
    const object = this._blankNode();
    // The next token is the predicate
    if ((predicate = this._readEntity(token)) === undefined)
      return;
    // If we were reading a subject, replace the subject by the path's object
    if (this._predicate === null)
      subject = this._subject, this._subject = object;
    // If we were reading an object, replace the subject by the path's object
    else
      subject = this._object,  this._object  = object;
    // Emit the path's current quad and read its next section
    this._emit(subject, predicate, object, this._graph);
    return this._readPath;
  }

  // ### `_readBackwardPath` reads a '^' path
  _readBackwardPath(token) {
    const subject = this._blankNode();
    let predicate, object;
    // The next token is the predicate
    if ((predicate = this._readEntity(token)) === undefined)
      return;
    // If we were reading a subject, replace the subject by the path's subject
    if (this._predicate === null)
      object = this._subject, this._subject = subject;
    // If we were reading an object, replace the subject by the path's subject
    else
      object = this._object,  this._object  = subject;
    // Emit the path's current quad and read its next section
    this._emit(subject, predicate, object, this._graph);
    return this._readPath;
  }

  // ### `_readRDFStarTailOrGraph` reads the graph of a nested RDF* quad or the end of a nested RDF* triple
  _readRDFStarTailOrGraph(token) {
    if (token.type !== '>>') {
      // An entity means this is a quad (only allowed if not already inside a graph)
      if (this._supportsQuads && this._graph === null && (this._graph = this._readEntity(token)) !== undefined)
        return this._readRDFStarTail;
      return this._error(`Expected >> to follow "${this._object.id}"`, token);
    }
    return this._readRDFStarTail(token);
  }

  // ### `_readRDFStarTail` reads the end of a nested RDF* triple
  _readRDFStarTail(token) {
    if (token.type !== '>>')
      return this._error(`Expected >> but got ${token.type}`, token);
    // Read the quad and restore the previous context
    const quad = this._quad(this._subject, this._predicate, this._object,
      this._graph || this.DEFAULTGRAPH);
    this._restoreContext();
    // If the triple was the subject, continue by reading the predicate.
    if (this._subject === null) {
      this._subject = quad;
      return this._readPredicate;
    }
    // If the triple was the object, read context end.
    else {
      this._object = quad;
      return this._getContextEndReader();
    }
  }

  // ### `_getContextEndReader` gets the next reader function at the end of a context
  _getContextEndReader() {
    const contextStack = this._contextStack;
    if (!contextStack.length)
      return this._readPunctuation;

    switch (contextStack[contextStack.length - 1].type) {
    case 'blank':
      return this._readBlankNodeTail;
    case 'list':
      return this._readListItem;
    case 'formula':
      return this._readFormulaTail;
    case '<<':
      return this._readRDFStarTailOrGraph;
    }
  }

  // ### `_emit` sends a quad through the callback
  _emit(subject, predicate, object, graph) {
    this._callback(null, this._quad(subject, predicate, object, graph || this.DEFAULTGRAPH));
  }

  // ### `_error` emits an error message through the callback
  _error(message, token) {
    const err = new Error(`${message} on line ${token.line}.`);
    err.context = {
      token: token,
      line: token.line,
      previousToken: this._lexer.previousToken,
    };
    this._callback(err);
    this._callback = noop;
  }

  // ### `_resolveIRI` resolves an IRI against the base path
  _resolveIRI(iri) {
    return /^[a-z][a-z0-9+.-]*:/i.test(iri) ? iri : this._resolveRelativeIRI(iri);
  }

  // ### `_resolveRelativeIRI` resolves an IRI against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative
  _resolveRelativeIRI(iri) {
    // An empty relative IRI indicates the base IRI
    if (!iri.length)
      return this._base;
    // Decide resolving strategy based in the first character
    switch (iri[0]) {
    // Resolve relative fragment IRIs against the base IRI
    case '#': return this._base + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return this._base.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? this._baseScheme : this._baseRoot) + this._removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default:
      // Relative IRIs cannot contain a colon in the first path segment
      return (/^[^/:]*:/.test(iri)) ? null : this._removeDotSegments(this._basePath + iri);
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986
  _removeDotSegments(iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!/(^|\/)\.\.?($|[/#?])/.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    const length = iri.length;
    let result = '', i = -1, pathStart = -1, segmentStart = 0, next = '/';

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return `${result}/${iri.substr(i + 1)}`;
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  // ## Public methods

  // ### `parse` parses the N3 input and emits each parsed quad through the callback
  parse(input, quadCallback, prefixCallback) {
    // The read callback is the next function to be executed when a token arrives.
    // We start reading in the top context.
    this._readCallback = this._readInTopContext;
    this._sparqlStyle = false;
    this._prefixes = Object.create(null);
    this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2)
                                             : `b${blankNodePrefix++}_`;
    this._prefixCallback = prefixCallback || noop;
    this._inversePredicate = false;
    this._quantified = Object.create(null);

    // Parse synchronously if no quad callback is given
    if (!quadCallback) {
      const quads = [];
      let error;
      this._callback = (e, t) => { e ? (error = e) : t && quads.push(t); };
      this._lexer.tokenize(input).every(token => {
        return this._readCallback = this._readCallback(token);
      });
      if (error) throw error;
      return quads;
    }

    // Parse asynchronously otherwise, executing the read callback when a token arrives
    this._callback = quadCallback;
    this._lexer.tokenize(input, (error, token) => {
      if (error !== null)
        this._callback(error), this._callback = noop;
      else if (this._readCallback)
        this._readCallback = this._readCallback(token);
    });
  }
}

// The empty function
function noop() {}

// Initializes the parser with the given data factory
function initDataFactory(parser, factory) {
  // Set factory methods
  const namedNode = factory.namedNode;
  parser._namedNode   = namedNode;
  parser._blankNode   = factory.blankNode;
  parser._literal     = factory.literal;
  parser._variable    = factory.variable;
  parser._quad        = factory.quad;
  parser.DEFAULTGRAPH = factory.defaultGraph();

  // Set common named nodes
  parser.RDF_FIRST  = namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.first);
  parser.RDF_REST   = namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.rest);
  parser.RDF_NIL    = namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.nil);
  parser.N3_FORALL  = namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].r.forAll);
  parser.N3_FORSOME = namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].r.forSome);
  parser.ABBREVIATIONS = {
    'a': namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.type),
    '=': namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].owl.sameAs),
    '>': namedNode(_IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].log.implies),
  };
  parser.QUANTIFIERS_GRAPH = namedNode('urn:n3:quantifiers');
}
initDataFactory(N3Parser.prototype, _N3DataFactory__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/n3/src/N3Store.js":
/*!****************************************!*\
  !*** ./node_modules/n3/src/N3Store.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N3Store; });
/* harmony import */ var _N3DataFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./N3DataFactory */ "./node_modules/n3/src/N3DataFactory.js");
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! readable-stream */ "./node_modules/n3/node_modules/readable-stream/readable-browser.js");
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(readable_stream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _IRIs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IRIs */ "./node_modules/n3/src/IRIs.js");
// **N3Store** objects store N3 quads by graph in memory.




// ## Constructor
class N3Store {
  constructor(quads, options) {
    // The number of quads is initially zero
    this._size = 0;
    // `_graphs` contains subject, predicate, and object indexes per graph
    this._graphs = Object.create(null);
    // `_ids` maps entities such as `http://xmlns.com/foaf/0.1/name` to numbers,
    // saving memory by using only numbers as keys in `_graphs`
    this._id = 0;
    this._ids = Object.create(null);
    this._ids['><'] = 0; // dummy entry, so the first actual key is non-zero
    this._entities = Object.create(null); // inverse of `_ids`
    // `_blankNodeIndex` is the index of the last automatically named blank node
    this._blankNodeIndex = 0;

    // Shift parameters if `quads` is not given
    if (!options && quads && !quads[0])
      options = quads, quads = null;
    options = options || {};
    this._factory = options.factory || _N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["default"];

    // Add quads if passed
    if (quads)
      this.addQuads(quads);
  }

  // ## Public properties

  // ### `size` returns the number of quads in the store
  get size() {
    // Return the quad count if if was cached
    let size = this._size;
    if (size !== null)
      return size;

    // Calculate the number of quads by counting to the deepest level
    size = 0;
    const graphs = this._graphs;
    let subjects, subject;
    for (const graphKey in graphs)
      for (const subjectKey in (subjects = graphs[graphKey].subjects))
        for (const predicateKey in (subject = subjects[subjectKey]))
          size += Object.keys(subject[predicateKey]).length;
    return this._size = size;
  }

  // ## Private methods

  // ### `_addToIndex` adds a quad to a three-layered index.
  // Returns if the index has changed, if the entry did not already exist.
  _addToIndex(index0, key0, key1, key2) {
    // Create layers as necessary
    const index1 = index0[key0] || (index0[key0] = {});
    const index2 = index1[key1] || (index1[key1] = {});
    // Setting the key to _any_ value signals the presence of the quad
    const existed = key2 in index2;
    if (!existed)
      index2[key2] = null;
    return !existed;
  }

  // ### `_removeFromIndex` removes a quad from a three-layered index
  _removeFromIndex(index0, key0, key1, key2) {
    // Remove the quad from the index
    const index1 = index0[key0], index2 = index1[key1];
    delete index2[key2];

    // Remove intermediary index layers if they are empty
    for (const key in index2) return;
    delete index1[key1];
    for (const key in index1) return;
    delete index0[key0];
  }

  // ### `_findInIndex` finds a set of quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  // `name0`, `name1`, and `name2` are the names of the keys at each level,
  // used when reconstructing the resulting quad
  // (for instance: _subject_, _predicate_, and _object_).
  // Finally, `graph` will be the graph of the created quads.
  // If `callback` is given, each result is passed through it
  // and iteration halts when it returns truthy for any quad.
  // If instead `array` is given, each result is added to the array.
  _findInIndex(index0, key0, key1, key2, name0, name1, name2, graph, callback, array) {
    let tmp, index1, index2;
    // Depending on the number of variables, keys or reverse index are faster
    const varCount = !key0 + !key1 + !key2,
        entityKeys = varCount > 1 ? Object.keys(this._ids) : this._entities;

    // If a key is specified, use only that part of index 0.
    if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];
    for (const value0 in index0) {
      const entity0 = entityKeys[value0];

      if (index1 = index0[value0]) {
        // If a key is specified, use only that part of index 1.
        if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];
        for (const value1 in index1) {
          const entity1 = entityKeys[value1];

          if (index2 = index1[value1]) {
            // If a key is specified, use only that part of index 2, if it exists.
            const values = key2 ? (key2 in index2 ? [key2] : []) : Object.keys(index2);
            // Create quads for all items found in index 2.
            for (let l = 0; l < values.length; l++) {
              const parts = { subject: null, predicate: null, object: null };
              parts[name0] = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termFromId"])(entity0, this._factory);
              parts[name1] = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termFromId"])(entity1, this._factory);
              parts[name2] = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termFromId"])(entityKeys[values[l]], this._factory);
              const quad = this._factory.quad(
                parts.subject, parts.predicate, parts.object, Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termFromId"])(graph, this._factory));
              if (array)
                array.push(quad);
              else if (callback(quad))
                return true;
            }
          }
        }
      }
    }
    return array;
  }

  // ### `_loop` executes the callback on all keys of index 0
  _loop(index0, callback) {
    for (const key0 in index0)
      callback(key0);
  }

  // ### `_loopByKey0` executes the callback on all keys of a certain entry in index 0
  _loopByKey0(index0, key0, callback) {
    let index1, key1;
    if (index1 = index0[key0]) {
      for (key1 in index1)
        callback(key1);
    }
  }

  // ### `_loopByKey1` executes the callback on given keys of all entries in index 0
  _loopByKey1(index0, key1, callback) {
    let key0, index1;
    for (key0 in index0) {
      index1 = index0[key0];
      if (index1[key1])
        callback(key0);
    }
  }

  // ### `_loopBy2Keys` executes the callback on given keys of certain entries in index 2
  _loopBy2Keys(index0, key0, key1, callback) {
    let index1, index2, key2;
    if ((index1 = index0[key0]) && (index2 = index1[key1])) {
      for (key2 in index2)
        callback(key2);
    }
  }

  // ### `_countInIndex` counts matching quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  _countInIndex(index0, key0, key1, key2) {
    let count = 0, tmp, index1, index2;

    // If a key is specified, count only that part of index 0
    if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];
    for (const value0 in index0) {
      if (index1 = index0[value0]) {
        // If a key is specified, count only that part of index 1
        if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];
        for (const value1 in index1) {
          if (index2 = index1[value1]) {
            // If a key is specified, count the quad if it exists
            if (key2) (key2 in index2) && count++;
            // Otherwise, count all quads
            else count += Object.keys(index2).length;
          }
        }
      }
    }
    return count;
  }

  // ### `_getGraphs` returns an array with the given graph,
  // or all graphs if the argument is null or undefined.
  _getGraphs(graph) {
    if (!isString(graph))
      return this._graphs;
    const graphs = {};
    graphs[graph] = this._graphs[graph];
    return graphs;
  }

  // ### `_uniqueEntities` returns a function that accepts an entity ID
  // and passes the corresponding entity to callback if it hasn't occurred before.
  _uniqueEntities(callback) {
    const uniqueIds = Object.create(null);
    return id => {
      if (!(id in uniqueIds)) {
        uniqueIds[id] = true;
        callback(Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termFromId"])(this._entities[id], this._factory));
      }
    };
  }

  // ## Public methods

  // ### `addQuad` adds a new quad to the store.
  // Returns if the quad index has changed, if the quad did not already exist.
  addQuad(subject, predicate, object, graph) {
    // Shift arguments if a quad object is given instead of components
    if (!predicate)
      graph = subject.graph, object = subject.object,
        predicate = subject.predicate, subject = subject.subject;

    // Convert terms to internal string representation
    subject = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(subject);
    predicate = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(predicate);
    object = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(object);
    graph = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    // Find the graph that will contain the triple
    let graphItem = this._graphs[graph];
    // Create the graph if it doesn't exist yet
    if (!graphItem) {
      graphItem = this._graphs[graph] = { subjects: {}, predicates: {}, objects: {} };
      // Freezing a graph helps subsequent `add` performance,
      // and properties will never be modified anyway
      Object.freeze(graphItem);
    }

    // Since entities can often be long IRIs, we avoid storing them in every index.
    // Instead, we have a separate index that maps entities to numbers,
    // which are then used as keys in the other indexes.
    const ids = this._ids;
    const entities = this._entities;
    subject   = ids[subject]   || (ids[entities[++this._id] = subject]   = this._id);
    predicate = ids[predicate] || (ids[entities[++this._id] = predicate] = this._id);
    object    = ids[object]    || (ids[entities[++this._id] = object]    = this._id);

    const changed = this._addToIndex(graphItem.subjects,   subject,   predicate, object);
    this._addToIndex(graphItem.predicates, predicate, object,    subject);
    this._addToIndex(graphItem.objects,    object,    subject,   predicate);

    // The cached quad count is now invalid
    this._size = null;
    return changed;
  }

  // ### `addQuads` adds multiple quads to the store
  addQuads(quads) {
    for (let i = 0; i < quads.length; i++)
      this.addQuad(quads[i]);
  }

  // ### `import` adds a stream of quads to the store
  import(stream) {
    stream.on('data', quad => { this.addQuad(quad); });
    return stream;
  }

  // ### `removeQuad` removes a quad from the store if it exists
  removeQuad(subject, predicate, object, graph) {
    // Shift arguments if a quad object is given instead of components
    if (!predicate)
      graph = subject.graph, object = subject.object,
        predicate = subject.predicate, subject = subject.subject;

    // Convert terms to internal string representation
    subject = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(subject);
    predicate = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(predicate);
    object = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(object);
    graph = Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    // Find internal identifiers for all components
    // and verify the quad exists.
    const ids = this._ids, graphs = this._graphs;
    let graphItem, subjects, predicates;
    if (!(subject    = ids[subject]) || !(predicate = ids[predicate]) ||
        !(object     = ids[object])  || !(graphItem = graphs[graph])  ||
        !(subjects   = graphItem.subjects[subject]) ||
        !(predicates = subjects[predicate]) ||
        !(object in predicates))
      return false;

    // Remove it from all indexes
    this._removeFromIndex(graphItem.subjects,   subject,   predicate, object);
    this._removeFromIndex(graphItem.predicates, predicate, object,    subject);
    this._removeFromIndex(graphItem.objects,    object,    subject,   predicate);
    if (this._size !== null) this._size--;

    // Remove the graph if it is empty
    for (subject in graphItem.subjects) return true;
    delete graphs[graph];
    return true;
  }

  // ### `removeQuads` removes multiple quads from the store
  removeQuads(quads) {
    for (let i = 0; i < quads.length; i++)
      this.removeQuad(quads[i]);
  }

  // ### `remove` removes a stream of quads from the store
  remove(stream) {
    stream.on('data', quad => { this.removeQuad(quad); });
    return stream;
  }

  // ### `removeMatches` removes all matching quads from the store
  // Setting any field to `undefined` or `null` indicates a wildcard.
  removeMatches(subject, predicate, object, graph) {
    return this.remove(this.match(subject, predicate, object, graph));
  }

  // ### `deleteGraph` removes all triples with the given graph from the store
  deleteGraph(graph) {
    return this.removeMatches(null, null, null, graph);
  }

  // ### `getQuads` returns an array of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getQuads(subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(subject);
    predicate = predicate && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(predicate);
    object = object && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(object);
    graph = graph && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    const quads = [], graphs = this._getGraphs(graph), ids = this._ids;
    let content, subjectId, predicateId, objectId;

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject])   ||
        isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return quads;

    for (const graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subjectId) {
          if (objectId)
            // If subject and object are given, the object index will be the fastest
            this._findInIndex(content.objects, objectId, subjectId, predicateId,
                              'object', 'subject', 'predicate', graphId, null, quads);
          else
            // If only subject and possibly predicate are given, the subject index will be the fastest
            this._findInIndex(content.subjects, subjectId, predicateId, null,
                              'subject', 'predicate', 'object', graphId, null, quads);
        }
        else if (predicateId)
          // If only predicate and possibly object are given, the predicate index will be the fastest
          this._findInIndex(content.predicates, predicateId, objectId, null,
                            'predicate', 'object', 'subject', graphId, null, quads);
        else if (objectId)
          // If only object is given, the object index will be the fastest
          this._findInIndex(content.objects, objectId, null, null,
                            'object', 'subject', 'predicate', graphId, null, quads);
        else
          // If nothing is given, iterate subjects and predicates first
          this._findInIndex(content.subjects, null, null, null,
                            'subject', 'predicate', 'object', graphId, null, quads);
      }
    }
    return quads;
  }

  // ### `match` returns a stream of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  match(subject, predicate, object, graph) {
    const stream = new readable_stream__WEBPACK_IMPORTED_MODULE_1__["Readable"]({ objectMode: true });

    // Initialize stream once it is being read
    stream._read = () => {
      for (const quad of this.getQuads(subject, predicate, object, graph))
        stream.push(quad);
      stream.push(null);
    };

    return stream;
  }

  // ### `countQuads` returns the number of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  countQuads(subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(subject);
    predicate = predicate && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(predicate);
    object = object && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(object);
    graph = graph && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    const graphs = this._getGraphs(graph), ids = this._ids;
    let count = 0, content, subjectId, predicateId, objectId;

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject])   ||
        isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return 0;

    for (const graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subject) {
          if (object)
            // If subject and object are given, the object index will be the fastest
            count += this._countInIndex(content.objects, objectId, subjectId, predicateId);
          else
            // If only subject and possibly predicate are given, the subject index will be the fastest
            count += this._countInIndex(content.subjects, subjectId, predicateId, objectId);
        }
        else if (predicate) {
          // If only predicate and possibly object are given, the predicate index will be the fastest
          count += this._countInIndex(content.predicates, predicateId, objectId, subjectId);
        }
        else {
          // If only object is possibly given, the object index will be the fastest
          count += this._countInIndex(content.objects, objectId, subjectId, predicateId);
        }
      }
    }
    return count;
  }

  // ### `forEach` executes the callback on all quads.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forEach(callback, subject, predicate, object, graph) {
    this.some(quad => {
      callback(quad);
      return false;
    }, subject, predicate, object, graph);
  }

  // ### `every` executes the callback on all quads,
  // and returns `true` if it returns truthy for all them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  every(callback, subject, predicate, object, graph) {
    let some = false;
    const every = !this.some(quad => {
      some = true;
      return !callback(quad);
    }, subject, predicate, object, graph);
    return some && every;
  }

  // ### `some` executes the callback on all quads,
  // and returns `true` if it returns truthy for any of them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  some(callback, subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(subject);
    predicate = predicate && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(predicate);
    object = object && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(object);
    graph = graph && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    const graphs = this._getGraphs(graph), ids = this._ids;
    let content, subjectId, predicateId, objectId;

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject])   ||
        isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return false;

    for (const graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subjectId) {
          if (objectId) {
          // If subject and object are given, the object index will be the fastest
            if (this._findInIndex(content.objects, objectId, subjectId, predicateId,
                                  'object', 'subject', 'predicate', graphId, callback, null))
              return true;
          }
          else
            // If only subject and possibly predicate are given, the subject index will be the fastest
            if (this._findInIndex(content.subjects, subjectId, predicateId, null,
                                  'subject', 'predicate', 'object', graphId, callback, null))
              return true;
        }
        else if (predicateId) {
          // If only predicate and possibly object are given, the predicate index will be the fastest
          if (this._findInIndex(content.predicates, predicateId, objectId, null,
                                'predicate', 'object', 'subject', graphId, callback, null)) {
            return true;
          }
        }
        else if (objectId) {
          // If only object is given, the object index will be the fastest
          if (this._findInIndex(content.objects, objectId, null, null,
                                'object', 'subject', 'predicate', graphId, callback, null)) {
            return true;
          }
        }
        else
        // If nothing is given, iterate subjects and predicates first
        if (this._findInIndex(content.subjects, null, null, null,
                              'subject', 'predicate', 'object', graphId, callback, null)) {
          return true;
        }
      }
    }
    return false;
  }

  // ### `getSubjects` returns all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getSubjects(predicate, object, graph) {
    const results = [];
    this.forSubjects(s => { results.push(s); }, predicate, object, graph);
    return results;
  }

  // ### `forSubjects` executes the callback on all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forSubjects(callback, predicate, object, graph) {
    // Convert terms to internal string representation
    predicate = predicate && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(predicate);
    object = object && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(object);
    graph = graph && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    const ids = this._ids, graphs = this._getGraphs(graph);
    let content, predicateId, objectId;
    callback = this._uniqueEntities(callback);

    // Translate IRIs to internal index keys.
    if (isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (predicateId) {
          if (objectId)
            // If predicate and object are given, the POS index is best.
            this._loopBy2Keys(content.predicates, predicateId, objectId, callback);
          else
            // If only predicate is given, the SPO index is best.
            this._loopByKey1(content.subjects, predicateId, callback);
        }
        else if (objectId)
          // If only object is given, the OSP index is best.
          this._loopByKey0(content.objects, objectId, callback);
        else
          // If no params given, iterate all the subjects
          this._loop(content.subjects, callback);
      }
    }
  }

  // ### `getPredicates` returns all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getPredicates(subject, object, graph) {
    const results = [];
    this.forPredicates(p => { results.push(p); }, subject, object, graph);
    return results;
  }

  // ### `forPredicates` executes the callback on all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forPredicates(callback, subject, object, graph) {
    // Convert terms to internal string representation
    subject = subject && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(subject);
    object = object && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(object);
    graph = graph && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    const ids = this._ids, graphs = this._getGraphs(graph);
    let content, subjectId, objectId;
    callback = this._uniqueEntities(callback);

    // Translate IRIs to internal index keys.
    if (isString(subject) && !(subjectId = ids[subject]) ||
        isString(object)  && !(objectId  = ids[object]))
      return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (subjectId) {
          if (objectId)
            // If subject and object are given, the OSP index is best.
            this._loopBy2Keys(content.objects, objectId, subjectId, callback);
          else
            // If only subject is given, the SPO index is best.
            this._loopByKey0(content.subjects, subjectId, callback);
        }
        else if (objectId)
          // If only object is given, the POS index is best.
          this._loopByKey1(content.predicates, objectId, callback);
        else
          // If no params given, iterate all the predicates.
          this._loop(content.predicates, callback);
      }
    }
  }

  // ### `getObjects` returns all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getObjects(subject, predicate, graph) {
    const results = [];
    this.forObjects(o => { results.push(o); }, subject, predicate, graph);
    return results;
  }

  // ### `forObjects` executes the callback on all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forObjects(callback, subject, predicate, graph) {
    // Convert terms to internal string representation
    subject = subject && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(subject);
    predicate = predicate && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(predicate);
    graph = graph && Object(_N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["termToId"])(graph);

    const ids = this._ids, graphs = this._getGraphs(graph);
    let content, subjectId, predicateId;
    callback = this._uniqueEntities(callback);

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject]) ||
        isString(predicate) && !(predicateId = ids[predicate]))
      return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (subjectId) {
          if (predicateId)
            // If subject and predicate are given, the SPO index is best.
            this._loopBy2Keys(content.subjects, subjectId, predicateId, callback);
          else
            // If only subject is given, the OSP index is best.
            this._loopByKey1(content.objects, subjectId, callback);
        }
        else if (predicateId)
          // If only predicate is given, the POS index is best.
          this._loopByKey0(content.predicates, predicateId, callback);
        else
          // If no params given, iterate all the objects.
          this._loop(content.objects, callback);
      }
    }
  }

  // ### `getGraphs` returns all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getGraphs(subject, predicate, object) {
    const results = [];
    this.forGraphs(g => { results.push(g); }, subject, predicate, object);
    return results;
  }

  // ### `forGraphs` executes the callback on all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forGraphs(callback, subject, predicate, object) {
    for (const graph in this._graphs) {
      this.some(quad => {
        callback(quad.graph);
        return true; // Halt iteration of some()
      }, subject, predicate, object, graph);
    }
  }

  // ### `createBlankNode` creates a new blank node, returning its name
  createBlankNode(suggestedName) {
    let name, index;
    // Generate a name based on the suggested name
    if (suggestedName) {
      name = suggestedName = `_:${suggestedName}`, index = 1;
      while (this._ids[name])
        name = suggestedName + index++;
    }
    // Generate a generic blank node name
    else {
      do { name = `_:b${this._blankNodeIndex++}`; }
      while (this._ids[name]);
    }
    // Add the blank node to the entities, avoiding the generation of duplicates
    this._ids[name] = ++this._id;
    this._entities[this._id] = name;
    return this._factory.blankNode(name.substr(2));
  }

  // ### `extractLists` finds and removes all list triples
  // and returns the items per list.
  extractLists({ remove = false, ignoreErrors = false } = {}) {
    const lists = {}; // has scalar keys so could be a simple Object
    const onError = ignoreErrors ? (() => true) :
                  ((node, message) => { throw new Error(`${node.value} ${message}`); });

    // Traverse each list from its tail
    const tails = this.getQuads(null, _IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.rest, _IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.nil, null);
    const toRemove = remove ? [...tails] : [];
    tails.forEach(tailQuad => {
      const items = [];             // the members found as objects of rdf:first quads
      let malformed = false;      // signals whether the current list is malformed
      let head;                   // the head of the list (_:b1 in above example)
      let headPos;                // set to subject or object when head is set
      const graph = tailQuad.graph; // make sure list is in exactly one graph

      // Traverse the list from tail to end
      let current = tailQuad.subject;
      while (current && !malformed) {
        const objectQuads = this.getQuads(null, null, current, null);
        const subjectQuads = this.getQuads(current, null, null, null);
        let quad, first = null, rest = null, parent = null;

        // Find the first and rest of this list node
        for (let i = 0; i < subjectQuads.length && !malformed; i++) {
          quad = subjectQuads[i];
          if (!quad.graph.equals(graph))
            malformed = onError(current, 'not confined to single graph');
          else if (head)
            malformed = onError(current, 'has non-list arcs out');

          // one rdf:first
          else if (quad.predicate.value === _IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.first) {
            if (first)
              malformed = onError(current, 'has multiple rdf:first arcs');
            else
              toRemove.push(first = quad);
          }

          // one rdf:rest
          else if (quad.predicate.value === _IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.rest) {
            if (rest)
              malformed = onError(current, 'has multiple rdf:rest arcs');
            else
              toRemove.push(rest = quad);
          }

          // alien triple
          else if (objectQuads.length)
            malformed = onError(current, 'can\'t be subject and object');
          else {
            head = quad; // e.g. { (1 2 3) :p :o }
            headPos = 'subject';
          }
        }

        // { :s :p (1 2) } arrives here with no head
        // { (1 2) :p :o } arrives here with head set to the list.
        for (let i = 0; i < objectQuads.length && !malformed; ++i) {
          quad = objectQuads[i];
          if (head)
            malformed = onError(current, 'can\'t have coreferences');
          // one rdf:rest
          else if (quad.predicate.value === _IRIs__WEBPACK_IMPORTED_MODULE_2__["default"].rdf.rest) {
            if (parent)
              malformed = onError(current, 'has incoming rdf:rest arcs');
            else
              parent = quad;
          }
          else {
            head = quad; // e.g. { :s :p (1 2) }
            headPos = 'object';
          }
        }

        // Store the list item and continue with parent
        if (!first)
          malformed = onError(current, 'has no list head');
        else
          items.unshift(first.object);
        current = parent && parent.subject;
      }

      // Don't remove any quads if the list is malformed
      if (malformed)
        remove = false;
      // Store the list under the value of its head
      else if (head)
        lists[head[headPos].value] = items;
    });

    // Remove list quads if requested
    if (remove)
      this.removeQuads(toRemove);
    return lists;
  }
}

// Determines whether the argument is a string
function isString(s) {
  return typeof s === 'string' || s instanceof String;
}


/***/ }),

/***/ "./node_modules/n3/src/N3StreamParser.js":
/*!***********************************************!*\
  !*** ./node_modules/n3/src/N3StreamParser.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N3StreamParser; });
/* harmony import */ var _N3Parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./N3Parser */ "./node_modules/n3/src/N3Parser.js");
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! readable-stream */ "./node_modules/n3/node_modules/readable-stream/readable-browser.js");
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(readable_stream__WEBPACK_IMPORTED_MODULE_1__);
// **N3StreamParser** parses a text stream into a quad stream.



// ## Constructor
class N3StreamParser extends readable_stream__WEBPACK_IMPORTED_MODULE_1__["Transform"] {
  constructor(options) {
    super({ decodeStrings: true });
    this._readableState.objectMode = true;

    // Set up parser with dummy stream to obtain `data` and `end` callbacks
    const parser = new _N3Parser__WEBPACK_IMPORTED_MODULE_0__["default"](options);
    let onData, onEnd;
    parser.parse({
      on: (event, callback) => {
        switch (event) {
        case 'data': onData = callback; break;
        case 'end':   onEnd = callback; break;
        }
      },
    },
      // Handle quads by pushing them down the pipeline
      (error, quad) => { error && this.emit('error', error) || quad && this.push(quad); },
      // Emit prefixes through the `prefix` event
      (prefix, uri) => { this.emit('prefix', prefix, uri); }
    );

    // Implement Transform methods through parser callbacks
    this._transform = (chunk, encoding, done) => { onData(chunk); done(); };
    this._flush = done => { onEnd(); done(); };
  }

  // ### Parses a stream of strings
  import(stream) {
    stream.on('data',  chunk => { this.write(chunk); });
    stream.on('end',   ()      => { this.end(); });
    stream.on('error', error => { this.emit('error', error); });
    return this;
  }
}


/***/ }),

/***/ "./node_modules/n3/src/N3StreamWriter.js":
/*!***********************************************!*\
  !*** ./node_modules/n3/src/N3StreamWriter.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N3StreamWriter; });
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! readable-stream */ "./node_modules/n3/node_modules/readable-stream/readable-browser.js");
/* harmony import */ var readable_stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(readable_stream__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _N3Writer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./N3Writer */ "./node_modules/n3/src/N3Writer.js");
// **N3StreamWriter** serializes a quad stream into a text stream.



// ## Constructor
class N3StreamWriter extends readable_stream__WEBPACK_IMPORTED_MODULE_0__["Transform"] {
  constructor(options) {
    super({ encoding: 'utf8', writableObjectMode: true });

    // Set up writer with a dummy stream object
    const writer = this._writer = new _N3Writer__WEBPACK_IMPORTED_MODULE_1__["default"]({
      write: (quad, encoding, callback) => { this.push(quad); callback && callback(); },
      end: callback => { this.push(null); callback && callback(); },
    }, options);

    // Implement Transform methods on top of writer
    this._transform = (quad, encoding, done) => { writer.addQuad(quad, done); };
    this._flush = done => { writer.end(done); };
  }

// ### Serializes a stream of quads
  import(stream) {
    stream.on('data',   quad => { this.write(quad); });
    stream.on('end',    () => { this.end(); });
    stream.on('error',  error => { this.emit('error', error); });
    stream.on('prefix', (prefix, iri) => { this._writer.addPrefix(prefix, iri); });
    return this;
  }
}


/***/ }),

/***/ "./node_modules/n3/src/N3Util.js":
/*!***************************************!*\
  !*** ./node_modules/n3/src/N3Util.js ***!
  \***************************************/
/*! exports provided: isNamedNode, isBlankNode, isLiteral, isVariable, isDefaultGraph, inDefaultGraph, prefix, prefixes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamedNode", function() { return isNamedNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlankNode", function() { return isBlankNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLiteral", function() { return isLiteral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVariable", function() { return isVariable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefaultGraph", function() { return isDefaultGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inDefaultGraph", function() { return inDefaultGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixes", function() { return prefixes; });
/* harmony import */ var _N3DataFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./N3DataFactory */ "./node_modules/n3/src/N3DataFactory.js");
// **N3Util** provides N3 utility functions.



// Tests whether the given term represents an IRI
function isNamedNode(term) {
  return !!term && term.termType === 'NamedNode';
}

// Tests whether the given term represents a blank node
function isBlankNode(term) {
  return !!term && term.termType === 'BlankNode';
}

// Tests whether the given term represents a literal
function isLiteral(term) {
  return !!term && term.termType === 'Literal';
}

// Tests whether the given term represents a variable
function isVariable(term) {
  return !!term && term.termType === 'Variable';
}

// Tests whether the given term represents the default graph
function isDefaultGraph(term) {
  return !!term && term.termType === 'DefaultGraph';
}

// Tests whether the given quad is in the default graph
function inDefaultGraph(quad) {
  return isDefaultGraph(quad.graph);
}

// Creates a function that prepends the given IRI to a local name
function prefix(iri, factory) {
  return prefixes({ '': iri }, factory)('');
}

// Creates a function that allows registering and expanding prefixes
function prefixes(defaultPrefixes, factory) {
  // Add all of the default prefixes
  const prefixes = Object.create(null);
  for (const prefix in defaultPrefixes)
    processPrefix(prefix, defaultPrefixes[prefix]);
  // Set the default factory if none was specified
  factory = factory || _N3DataFactory__WEBPACK_IMPORTED_MODULE_0__["default"];

  // Registers a new prefix (if an IRI was specified)
  // or retrieves a function that expands an existing prefix (if no IRI was specified)
  function processPrefix(prefix, iri) {
    // Create a new prefix if an IRI is specified or the prefix doesn't exist
    if (typeof iri === 'string') {
      // Create a function that expands the prefix
      const cache = Object.create(null);
      prefixes[prefix] = local => {
        return cache[local] || (cache[local] = factory.namedNode(iri + local));
      };
    }
    else if (!(prefix in prefixes)) {
      throw new Error(`Unknown prefix: ${prefix}`);
    }
    return prefixes[prefix];
  }
  return processPrefix;
}


/***/ }),

/***/ "./node_modules/n3/src/N3Writer.js":
/*!*****************************************!*\
  !*** ./node_modules/n3/src/N3Writer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return N3Writer; });
/* harmony import */ var _IRIs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IRIs */ "./node_modules/n3/src/IRIs.js");
/* harmony import */ var _N3DataFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./N3DataFactory */ "./node_modules/n3/src/N3DataFactory.js");
/* harmony import */ var _N3Util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./N3Util */ "./node_modules/n3/src/N3Util.js");
// **N3Writer** writes N3 documents.




const DEFAULTGRAPH = _N3DataFactory__WEBPACK_IMPORTED_MODULE_1__["default"].defaultGraph();

const { rdf, xsd } = _IRIs__WEBPACK_IMPORTED_MODULE_0__["default"];

// Characters in literals that require escaping
const escape    = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    escapeAll = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    escapedCharacters = {
      '\\': '\\\\', '"': '\\"', '\t': '\\t',
      '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f',
    };

// ## Placeholder class to represent already pretty-printed terms
class SerializedTerm extends _N3DataFactory__WEBPACK_IMPORTED_MODULE_1__["Term"] {
  // Pretty-printed nodes are not equal to any other node
  // (e.g., [] does not equal [])
  equals() {
    return false;
  }
}

// ## Constructor
class N3Writer {
  constructor(outputStream, options) {
    // ### `_prefixRegex` matches a prefixed name or IRI that begins with one of the added prefixes
    this._prefixRegex = /$0^/;

    // Shift arguments if the first argument is not a stream
    if (outputStream && typeof outputStream.write !== 'function')
      options = outputStream, outputStream = null;
    options = options || {};
    this._lists = options.lists;

    // If no output stream given, send the output as string through the end callback
    if (!outputStream) {
      let output = '';
      this._outputStream = {
        write(chunk, encoding, done) { output += chunk; done && done(); },
        end: done => { done && done(null, output); },
      };
      this._endStream = true;
    }
    else {
      this._outputStream = outputStream;
      this._endStream = options.end === undefined ? true : !!options.end;
    }

    // Initialize writer, depending on the format
    this._subject = null;
    if (!(/triple|quad/i).test(options.format)) {
      this._lineMode = false;
      this._graph = DEFAULTGRAPH;
      this._baseIRI = options.baseIRI;
      this._prefixIRIs = Object.create(null);
      options.prefixes && this.addPrefixes(options.prefixes);
    }
    else {
      this._lineMode = true;
      this._writeQuad = this._writeQuadLine;
    }
  }

  // ## Private methods

  // ### Whether the current graph is the default graph
  get _inDefaultGraph() {
    return DEFAULTGRAPH.equals(this._graph);
  }

  // ### `_write` writes the argument to the output stream
  _write(string, callback) {
    this._outputStream.write(string, 'utf8', callback);
  }

  // ### `_writeQuad` writes the quad to the output stream
  _writeQuad(subject, predicate, object, graph, done) {
    try {
      // Write the graph's label if it has changed
      if (!graph.equals(this._graph)) {
        // Close the previous graph and start the new one
        this._write((this._subject === null ? '' : (this._inDefaultGraph ? '.\n' : '\n}\n')) +
                    (DEFAULTGRAPH.equals(graph) ? '' : `${this._encodeIriOrBlank(graph)} {\n`));
        this._graph = graph;
        this._subject = null;
      }
      // Don't repeat the subject if it's the same
      if (subject.equals(this._subject)) {
        // Don't repeat the predicate if it's the same
        if (predicate.equals(this._predicate))
          this._write(`, ${this._encodeObject(object)}`, done);
        // Same subject, different predicate
        else
          this._write(`;\n    ${
                      this._encodePredicate(this._predicate = predicate)} ${
                      this._encodeObject(object)}`, done);
      }
      // Different subject; write the whole quad
      else
        this._write(`${(this._subject === null ? '' : '.\n') +
                    this._encodeSubject(this._subject = subject)} ${
                    this._encodePredicate(this._predicate = predicate)} ${
                    this._encodeObject(object)}`, done);
    }
    catch (error) { done && done(error); }
  }

  // ### `_writeQuadLine` writes the quad to the output stream as a single line
  _writeQuadLine(subject, predicate, object, graph, done) {
    // Write the quad without prefixes
    delete this._prefixMatch;
    this._write(this.quadToString(subject, predicate, object, graph), done);
  }

  // ### `quadToString` serializes a quad as a string
  quadToString(subject, predicate, object, graph) {
    return  `${this._encodeSubject(subject)} ${
            this._encodeIriOrBlank(predicate)} ${
            this._encodeObject(object)
            }${graph && graph.value ? ` ${this._encodeIriOrBlank(graph)} .\n` : ' .\n'}`;
  }

  // ### `quadsToString` serializes an array of quads as a string
  quadsToString(quads) {
    return quads.map(t => {
      return this.quadToString(t.subject, t.predicate, t.object, t.graph);
    }).join('');
  }

  // ### `_encodeSubject` represents a subject
  _encodeSubject(entity) {
    return entity.termType === 'Quad' ?
      this._encodeQuad(entity) : this._encodeIriOrBlank(entity);
  }

  // ### `_encodeIriOrBlank` represents an IRI or blank node
  _encodeIriOrBlank(entity) {
    // A blank node or list is represented as-is
    if (entity.termType !== 'NamedNode') {
      // If it is a list head, pretty-print it
      if (this._lists && (entity.value in this._lists))
        entity = this.list(this._lists[entity.value]);
      return 'id' in entity ? entity.id : `_:${entity.value}`;
    }
    let iri = entity.value;
    // Use relative IRIs if requested and possible
    if (this._baseIRI && iri.startsWith(this._baseIRI))
      iri = iri.substr(this._baseIRI.length);
    // Escape special characters
    if (escape.test(iri))
      iri = iri.replace(escapeAll, characterReplacer);
    // Try to represent the IRI as prefixed name
    const prefixMatch = this._prefixRegex.exec(iri);
    return !prefixMatch ? `<${iri}>` :
           (!prefixMatch[1] ? iri : this._prefixIRIs[prefixMatch[1]] + prefixMatch[2]);
  }

  // ### `_encodeLiteral` represents a literal
  _encodeLiteral(literal) {
    // Escape special characters
    let value = literal.value;
    if (escape.test(value))
      value = value.replace(escapeAll, characterReplacer);

    // Write a language-tagged literal
    if (literal.language)
      return `"${value}"@${literal.language}`;

    // Write dedicated literals per data type
    if (this._lineMode) {
      // Only abbreviate strings in N-Triples or N-Quads
      if (literal.datatype.value === xsd.string)
        return `"${value}"`;
    }
    else {
      // Use common datatype abbreviations in Turtle or TriG
      switch (literal.datatype.value) {
      case xsd.string:
        return `"${value}"`;
      case xsd.boolean:
        if (value === 'true' || value === 'false')
          return value;
        break;
      case xsd.integer:
        if (/^[+-]?\d+$/.test(value))
          return value;
        break;
      case xsd.decimal:
        if (/^[+-]?\d*\.\d+$/.test(value))
          return value;
        break;
      case xsd.double:
        if (/^[+-]?(?:\d+\.\d*|\.?\d+)[eE][+-]?\d+$/.test(value))
          return value;
        break;
      }
    }

    // Write a regular datatyped literal
    return `"${value}"^^${this._encodeIriOrBlank(literal.datatype)}`;
  }

  // ### `_encodePredicate` represents a predicate
  _encodePredicate(predicate) {
    return predicate.value === rdf.type ? 'a' : this._encodeIriOrBlank(predicate);
  }

  // ### `_encodeObject` represents an object
  _encodeObject(object) {
    switch (object.termType) {
    case 'Quad':
      return this._encodeQuad(object);
    case 'Literal':
      return this._encodeLiteral(object);
    default:
      return this._encodeIriOrBlank(object);
    }
  }

  // ### `_encodeQuad` encodes an RDF* quad
  _encodeQuad({ subject, predicate, object, graph }) {
    return `<<${
      this._encodeSubject(subject)} ${
      this._encodePredicate(predicate)} ${
      this._encodeObject(object)}${
      Object(_N3Util__WEBPACK_IMPORTED_MODULE_2__["isDefaultGraph"])(graph) ? '' : ` ${this._encodeIriOrBlank(graph)}`}>>`;
  }

  // ### `_blockedWrite` replaces `_write` after the writer has been closed
  _blockedWrite() {
    throw new Error('Cannot write because the writer has been closed.');
  }

  // ### `addQuad` adds the quad to the output stream
  addQuad(subject, predicate, object, graph, done) {
    // The quad was given as an object, so shift parameters
    if (object === undefined)
      this._writeQuad(subject.subject, subject.predicate, subject.object, subject.graph, predicate);
    // The optional `graph` parameter was not provided
    else if (typeof graph === 'function')
      this._writeQuad(subject, predicate, object, DEFAULTGRAPH, graph);
    // The `graph` parameter was provided
    else
      this._writeQuad(subject, predicate, object, graph || DEFAULTGRAPH, done);
  }

  // ### `addQuads` adds the quads to the output stream
  addQuads(quads) {
    for (let i = 0; i < quads.length; i++)
      this.addQuad(quads[i]);
  }

  // ### `addPrefix` adds the prefix to the output stream
  addPrefix(prefix, iri, done) {
    const prefixes = {};
    prefixes[prefix] = iri;
    this.addPrefixes(prefixes, done);
  }

  // ### `addPrefixes` adds the prefixes to the output stream
  addPrefixes(prefixes, done) {
    // Ignore prefixes if not supported by the serialization
    if (!this._prefixIRIs)
      return done && done();

    // Write all new prefixes
    let hasPrefixes = false;
    for (let prefix in prefixes) {
      let iri = prefixes[prefix];
      if (typeof iri !== 'string')
        iri = iri.value;
      hasPrefixes = true;
      // Finish a possible pending quad
      if (this._subject !== null) {
        this._write(this._inDefaultGraph ? '.\n' : '\n}\n');
        this._subject = null, this._graph = '';
      }
      // Store and write the prefix
      this._prefixIRIs[iri] = (prefix += ':');
      this._write(`@prefix ${prefix} <${iri}>.\n`);
    }
    // Recreate the prefix matcher
    if (hasPrefixes) {
      let IRIlist = '', prefixList = '';
      for (const prefixIRI in this._prefixIRIs) {
        IRIlist += IRIlist ? `|${prefixIRI}` : prefixIRI;
        prefixList += (prefixList ? '|' : '') + this._prefixIRIs[prefixIRI];
      }
      IRIlist = IRIlist.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, '\\$&');
      this._prefixRegex = new RegExp(`^(?:${prefixList})[^\/]*$|` +
                                     `^(${IRIlist})([a-zA-Z][\\-_a-zA-Z0-9]*)$`);
    }
    // End a prefix block with a newline
    this._write(hasPrefixes ? '\n' : '', done);
  }

  // ### `blank` creates a blank node with the given content
  blank(predicate, object) {
    let children = predicate, child, length;
    // Empty blank node
    if (predicate === undefined)
      children = [];
    // Blank node passed as blank(Term("predicate"), Term("object"))
    else if (predicate.termType)
      children = [{ predicate: predicate, object: object }];
    // Blank node passed as blank({ predicate: predicate, object: object })
    else if (!('length' in predicate))
      children = [predicate];

    switch (length = children.length) {
    // Generate an empty blank node
    case 0:
      return new SerializedTerm('[]');
    // Generate a non-nested one-triple blank node
    case 1:
      child = children[0];
      if (!(child.object instanceof SerializedTerm))
        return new SerializedTerm(`[ ${this._encodePredicate(child.predicate)} ${
                                  this._encodeObject(child.object)} ]`);
    // Generate a multi-triple or nested blank node
    default:
      let contents = '[';
      // Write all triples in order
      for (let i = 0; i < length; i++) {
        child = children[i];
        // Write only the object is the predicate is the same as the previous
        if (child.predicate.equals(predicate))
          contents += `, ${this._encodeObject(child.object)}`;
        // Otherwise, write the predicate and the object
        else {
          contents += `${(i ? ';\n  ' : '\n  ') +
                      this._encodePredicate(child.predicate)} ${
                      this._encodeObject(child.object)}`;
          predicate = child.predicate;
        }
      }
      return new SerializedTerm(`${contents}\n]`);
    }
  }

  // ### `list` creates a list node with the given content
  list(elements) {
    const length = elements && elements.length || 0, contents = new Array(length);
    for (let i = 0; i < length; i++)
      contents[i] = this._encodeObject(elements[i]);
    return new SerializedTerm(`(${contents.join(' ')})`);
  }

  // ### `end` signals the end of the output stream
  end(done) {
    // Finish a possible pending quad
    if (this._subject !== null) {
      this._write(this._inDefaultGraph ? '.\n' : '\n}\n');
      this._subject = null;
    }
    // Disallow further writing
    this._write = this._blockedWrite;

    // Try to end the underlying stream, ensuring done is called exactly one time
    let singleDone = done && ((error, result) => { singleDone = null, done(error, result); });
    if (this._endStream) {
      try { return this._outputStream.end(singleDone); }
      catch (error) { /* error closing stream */ }
    }
    singleDone && singleDone();
  }
}

// Replaces a character by its escaped version
function characterReplacer(character) {
  // Replace a single character by its escaped version
  let result = escapedCharacters[character];
  if (result === undefined) {
    // Replace a single character with its 4-bit unicode escape sequence
    if (character.length === 1) {
      result = character.charCodeAt(0).toString(16);
      result = '\\u0000'.substr(0, 6 - result.length) + result;
    }
    // Replace a surrogate pair with its 8-bit unicode escape sequence
    else {
      result = ((character.charCodeAt(0) - 0xD800) * 0x400 +
                 character.charCodeAt(1) + 0x2400).toString(16);
      result = '\\U00000000'.substr(0, 10 - result.length) + result;
    }
  }
  return result;
}


/***/ }),

/***/ "./node_modules/n3/src/index.js":
/*!**************************************!*\
  !*** ./node_modules/n3/src/index.js ***!
  \**************************************/
/*! exports provided: Lexer, Parser, Writer, Store, StreamParser, StreamWriter, Util, DataFactory, Term, NamedNode, Literal, BlankNode, Variable, DefaultGraph, Quad, Triple, termFromId, termToId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _N3Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./N3Lexer */ "./node_modules/n3/src/N3Lexer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return _N3Lexer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _N3Parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./N3Parser */ "./node_modules/n3/src/N3Parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return _N3Parser__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _N3Writer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./N3Writer */ "./node_modules/n3/src/N3Writer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Writer", function() { return _N3Writer__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _N3Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./N3Store */ "./node_modules/n3/src/N3Store.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return _N3Store__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _N3StreamParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./N3StreamParser */ "./node_modules/n3/src/N3StreamParser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamParser", function() { return _N3StreamParser__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _N3StreamWriter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./N3StreamWriter */ "./node_modules/n3/src/N3StreamWriter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StreamWriter", function() { return _N3StreamWriter__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _N3Util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./N3Util */ "./node_modules/n3/src/N3Util.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _N3Util__WEBPACK_IMPORTED_MODULE_6__; });
/* harmony import */ var _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./N3DataFactory */ "./node_modules/n3/src/N3DataFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataFactory", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Term", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["Term"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NamedNode", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["NamedNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Literal", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["Literal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BlankNode", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["BlankNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["Variable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultGraph", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["DefaultGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Quad", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["Quad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triple", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["Triple"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "termFromId", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["termFromId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "termToId", function() { return _N3DataFactory__WEBPACK_IMPORTED_MODULE_7__["termToId"]; });














/***/ }),

/***/ "./node_modules/queue-microtask/index.js":
/*!***********************************************!*\
  !*** ./node_modules/queue-microtask/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask.bind(typeof window !== 'undefined' ? window : global)
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 12:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 13:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vZXJyb3JzLWJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX2R1cGxleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3JlYWRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbjMvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvX3N0cmVhbV90cmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9fc3RyZWFtX3dyaXRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbjMvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9hc3luY19pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvYnVmZmVyX2xpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2VuZC1vZi1zdHJlYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2Zyb20tYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vbGliL2ludGVybmFsL3N0cmVhbXMvcGlwZWxpbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9ub2RlX21vZHVsZXMvcmVhZGFibGUtc3RyZWFtL2xpYi9pbnRlcm5hbC9zdHJlYW1zL3N0YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbjMvbm9kZV9tb2R1bGVzL3JlYWRhYmxlLXN0cmVhbS9saWIvaW50ZXJuYWwvc3RyZWFtcy9zdHJlYW0tYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL25vZGVfbW9kdWxlcy9yZWFkYWJsZS1zdHJlYW0vcmVhZGFibGUtYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL3NyYy9JUklzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbjMvc3JjL04zRGF0YUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uMy9zcmMvTjNMZXhlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL3NyYy9OM1BhcnNlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL3NyYy9OM1N0b3JlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbjMvc3JjL04zU3RyZWFtUGFyc2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbjMvc3JjL04zU3RyZWFtV3JpdGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbjMvc3JjL04zVXRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL3NyYy9OM1dyaXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL24zL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3F1ZXVlLW1pY3JvdGFzay9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FL3V0aWwgKGlnbm9yZWQpIiwid2VicGFjazovL19OX0UvdXRpbCAoaWdub3JlZCk/ZjY2ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7O0FBRWIsK0NBQStDLDBEQUEwRCwyQ0FBMkMsaUNBQWlDOztBQUVyTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFD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LHNEQUFzRDs7QUFFdEQ7O0FBRUEsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFH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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDOztBQUUvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHNEQUFzRDtBQUM5SDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRTtBQUMxRTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FB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Q1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSx5Q0FBeUMsS0FBSztBQUM5QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsbURBQW1ELFdBQVc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0EseUNBQXlDOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLFdBQVc7QUFDWDtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QyxXQUFXO0FBQ1g7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxnQkFBZ0I7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELGFBQWE7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxXQUFXO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsV0FBVztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUSxXQUFXLFdBQVc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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MkIsaUNBQWlDO0FBQzVEO0FBQ0E7QUFDQSx5QkFBeUIsT0FBTztBQUNoQyw2REFBNkQ7QUFDN0QsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxTQUFTO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQSxrQ0FBa0MsbUJBQW1CO0FBQ3JEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELHdDQUF3QyxFQUFFO0FBQzVGO0FBQ0EsV0FBVywyQ0FBMkM7QUFDdEQscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDRTtBQUNBO0FBQ0Y7QUFDYztBQUNBO0FBQ1g7O0FBZ0JSOztBQXdCdkI7Ozs7Ozs7Ozs7OztBQzlDRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsWUFBWTs7Ozs7Ozs7Ozs7OztBQ1JoRCxlOzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIGNvZGVzID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yVHlwZShjb2RlLCBtZXNzYWdlLCBCYXNlKSB7XG4gIGlmICghQmFzZSkge1xuICAgIEJhc2UgPSBFcnJvcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE1lc3NhZ2UoYXJnMSwgYXJnMiwgYXJnMykge1xuICAgIGlmICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBtZXNzYWdlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbWVzc2FnZShhcmcxLCBhcmcyLCBhcmczKTtcbiAgICB9XG4gIH1cblxuICB2YXIgTm9kZUVycm9yID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0Jhc2UpIHtcbiAgICBfaW5oZXJpdHNMb29zZShOb2RlRXJyb3IsIF9CYXNlKTtcblxuICAgIGZ1bmN0aW9uIE5vZGVFcnJvcihhcmcxLCBhcmcyLCBhcmczKSB7XG4gICAgICByZXR1cm4gX0Jhc2UuY2FsbCh0aGlzLCBnZXRNZXNzYWdlKGFyZzEsIGFyZzIsIGFyZzMpKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBOb2RlRXJyb3I7XG4gIH0oQmFzZSk7XG5cbiAgTm9kZUVycm9yLnByb3RvdHlwZS5uYW1lID0gQmFzZS5uYW1lO1xuICBOb2RlRXJyb3IucHJvdG90eXBlLmNvZGUgPSBjb2RlO1xuICBjb2Rlc1tjb2RlXSA9IE5vZGVFcnJvcjtcbn0gLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9ub2RlL2Jsb2IvdjEwLjguMC9saWIvaW50ZXJuYWwvZXJyb3JzLmpzXG5cblxuZnVuY3Rpb24gb25lT2YoZXhwZWN0ZWQsIHRoaW5nKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4cGVjdGVkKSkge1xuICAgIHZhciBsZW4gPSBleHBlY3RlZC5sZW5ndGg7XG4gICAgZXhwZWN0ZWQgPSBleHBlY3RlZC5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaSk7XG4gICAgfSk7XG5cbiAgICBpZiAobGVuID4gMikge1xuICAgICAgcmV0dXJuIFwib25lIG9mIFwiLmNvbmNhdCh0aGluZywgXCIgXCIpLmNvbmNhdChleHBlY3RlZC5zbGljZSgwLCBsZW4gLSAxKS5qb2luKCcsICcpLCBcIiwgb3IgXCIpICsgZXhwZWN0ZWRbbGVuIC0gMV07XG4gICAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcbiAgICAgIHJldHVybiBcIm9uZSBvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRbMF0sIFwiIG9yIFwiKS5jb25jYXQoZXhwZWN0ZWRbMV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoZXhwZWN0ZWRbMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJvZiBcIi5jb25jYXQodGhpbmcsIFwiIFwiKS5jb25jYXQoU3RyaW5nKGV4cGVjdGVkKSk7XG4gIH1cbn0gLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL3N0YXJ0c1dpdGhcblxuXG5mdW5jdGlvbiBzdGFydHNXaXRoKHN0ciwgc2VhcmNoLCBwb3MpIHtcbiAgcmV0dXJuIHN0ci5zdWJzdHIoIXBvcyB8fCBwb3MgPCAwID8gMCA6ICtwb3MsIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG59IC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9lbmRzV2l0aFxuXG5cbmZ1bmN0aW9uIGVuZHNXaXRoKHN0ciwgc2VhcmNoLCB0aGlzX2xlbikge1xuICBpZiAodGhpc19sZW4gPT09IHVuZGVmaW5lZCB8fCB0aGlzX2xlbiA+IHN0ci5sZW5ndGgpIHtcbiAgICB0aGlzX2xlbiA9IHN0ci5sZW5ndGg7XG4gIH1cblxuICByZXR1cm4gc3RyLnN1YnN0cmluZyh0aGlzX2xlbiAtIHNlYXJjaC5sZW5ndGgsIHRoaXNfbGVuKSA9PT0gc2VhcmNoO1xufSAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvaW5jbHVkZXNcblxuXG5mdW5jdGlvbiBpbmNsdWRlcyhzdHIsIHNlYXJjaCwgc3RhcnQpIHtcbiAgaWYgKHR5cGVvZiBzdGFydCAhPT0gJ251bWJlcicpIHtcbiAgICBzdGFydCA9IDA7XG4gIH1cblxuICBpZiAoc3RhcnQgKyBzZWFyY2gubGVuZ3RoID4gc3RyLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc3RyLmluZGV4T2Yoc2VhcmNoLCBzdGFydCkgIT09IC0xO1xuICB9XG59XG5cbmNyZWF0ZUVycm9yVHlwZSgnRVJSX0lOVkFMSURfT1BUX1ZBTFVFJywgZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiAnVGhlIHZhbHVlIFwiJyArIHZhbHVlICsgJ1wiIGlzIGludmFsaWQgZm9yIG9wdGlvbiBcIicgKyBuYW1lICsgJ1wiJztcbn0sIFR5cGVFcnJvcik7XG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9JTlZBTElEX0FSR19UWVBFJywgZnVuY3Rpb24gKG5hbWUsIGV4cGVjdGVkLCBhY3R1YWwpIHtcbiAgLy8gZGV0ZXJtaW5lcjogJ211c3QgYmUnIG9yICdtdXN0IG5vdCBiZSdcbiAgdmFyIGRldGVybWluZXI7XG5cbiAgaWYgKHR5cGVvZiBleHBlY3RlZCA9PT0gJ3N0cmluZycgJiYgc3RhcnRzV2l0aChleHBlY3RlZCwgJ25vdCAnKSkge1xuICAgIGRldGVybWluZXIgPSAnbXVzdCBub3QgYmUnO1xuICAgIGV4cGVjdGVkID0gZXhwZWN0ZWQucmVwbGFjZSgvXm5vdCAvLCAnJyk7XG4gIH0gZWxzZSB7XG4gICAgZGV0ZXJtaW5lciA9ICdtdXN0IGJlJztcbiAgfVxuXG4gIHZhciBtc2c7XG5cbiAgaWYgKGVuZHNXaXRoKG5hbWUsICcgYXJndW1lbnQnKSkge1xuICAgIC8vIEZvciBjYXNlcyBsaWtlICdmaXJzdCBhcmd1bWVudCdcbiAgICBtc2cgPSBcIlRoZSBcIi5jb25jYXQobmFtZSwgXCIgXCIpLmNvbmNhdChkZXRlcm1pbmVyLCBcIiBcIikuY29uY2F0KG9uZU9mKGV4cGVjdGVkLCAndHlwZScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdHlwZSA9IGluY2x1ZGVzKG5hbWUsICcuJykgPyAncHJvcGVydHknIDogJ2FyZ3VtZW50JztcbiAgICBtc2cgPSBcIlRoZSBcXFwiXCIuY29uY2F0KG5hbWUsIFwiXFxcIiBcIikuY29uY2F0KHR5cGUsIFwiIFwiKS5jb25jYXQoZGV0ZXJtaW5lciwgXCIgXCIpLmNvbmNhdChvbmVPZihleHBlY3RlZCwgJ3R5cGUnKSk7XG4gIH1cblxuICBtc2cgKz0gXCIuIFJlY2VpdmVkIHR5cGUgXCIuY29uY2F0KHR5cGVvZiBhY3R1YWwpO1xuICByZXR1cm4gbXNnO1xufSwgVHlwZUVycm9yKTtcbmNyZWF0ZUVycm9yVHlwZSgnRVJSX1NUUkVBTV9QVVNIX0FGVEVSX0VPRicsICdzdHJlYW0ucHVzaCgpIGFmdGVyIEVPRicpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfTUVUSE9EX05PVF9JTVBMRU1FTlRFRCcsIGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiAnVGhlICcgKyBuYW1lICsgJyBtZXRob2QgaXMgbm90IGltcGxlbWVudGVkJztcbn0pO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfU1RSRUFNX1BSRU1BVFVSRV9DTE9TRScsICdQcmVtYXR1cmUgY2xvc2UnKTtcbmNyZWF0ZUVycm9yVHlwZSgnRVJSX1NUUkVBTV9ERVNUUk9ZRUQnLCBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gJ0Nhbm5vdCBjYWxsICcgKyBuYW1lICsgJyBhZnRlciBhIHN0cmVhbSB3YXMgZGVzdHJveWVkJztcbn0pO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfTVVMVElQTEVfQ0FMTEJBQ0snLCAnQ2FsbGJhY2sgY2FsbGVkIG11bHRpcGxlIHRpbWVzJyk7XG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9TVFJFQU1fQ0FOTk9UX1BJUEUnLCAnQ2Fubm90IHBpcGUsIG5vdCByZWFkYWJsZScpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfU1RSRUFNX1dSSVRFX0FGVEVSX0VORCcsICd3cml0ZSBhZnRlciBlbmQnKTtcbmNyZWF0ZUVycm9yVHlwZSgnRVJSX1NUUkVBTV9OVUxMX1ZBTFVFUycsICdNYXkgbm90IHdyaXRlIG51bGwgdmFsdWVzIHRvIHN0cmVhbScsIFR5cGVFcnJvcik7XG5jcmVhdGVFcnJvclR5cGUoJ0VSUl9VTktOT1dOX0VOQ09ESU5HJywgZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBhcmc7XG59LCBUeXBlRXJyb3IpO1xuY3JlYXRlRXJyb3JUeXBlKCdFUlJfU1RSRUFNX1VOU0hJRlRfQUZURVJfRU5EX0VWRU5UJywgJ3N0cmVhbS51bnNoaWZ0KCkgYWZ0ZXIgZW5kIGV2ZW50Jyk7XG5tb2R1bGUuZXhwb3J0cy5jb2RlcyA9IGNvZGVzO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLyBhIGR1cGxleCBzdHJlYW0gaXMganVzdCBhIHN0cmVhbSB0aGF0IGlzIGJvdGggcmVhZGFibGUgYW5kIHdyaXRhYmxlLlxuLy8gU2luY2UgSlMgZG9lc24ndCBoYXZlIG11bHRpcGxlIHByb3RvdHlwYWwgaW5oZXJpdGFuY2UsIHRoaXMgY2xhc3Ncbi8vIHByb3RvdHlwYWxseSBpbmhlcml0cyBmcm9tIFJlYWRhYmxlLCBhbmQgdGhlbiBwYXJhc2l0aWNhbGx5IGZyb21cbi8vIFdyaXRhYmxlLlxuJ3VzZSBzdHJpY3QnO1xuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGtleXMucHVzaChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cblxubW9kdWxlLmV4cG9ydHMgPSBEdXBsZXg7XG5cbnZhciBSZWFkYWJsZSA9IHJlcXVpcmUoJy4vX3N0cmVhbV9yZWFkYWJsZScpO1xuXG52YXIgV3JpdGFibGUgPSByZXF1aXJlKCcuL19zdHJlYW1fd3JpdGFibGUnKTtcblxucmVxdWlyZSgnaW5oZXJpdHMnKShEdXBsZXgsIFJlYWRhYmxlKTtcblxue1xuICAvLyBBbGxvdyB0aGUga2V5cyBhcnJheSB0byBiZSBHQydlZC5cbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFdyaXRhYmxlLnByb3RvdHlwZSk7XG5cbiAgZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gICAgdmFyIG1ldGhvZCA9IGtleXNbdl07XG4gICAgaWYgKCFEdXBsZXgucHJvdG90eXBlW21ldGhvZF0pIER1cGxleC5wcm90b3R5cGVbbWV0aG9kXSA9IFdyaXRhYmxlLnByb3RvdHlwZVttZXRob2RdO1xuICB9XG59XG5cbmZ1bmN0aW9uIER1cGxleChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBEdXBsZXgpKSByZXR1cm4gbmV3IER1cGxleChvcHRpb25zKTtcbiAgUmVhZGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgV3JpdGFibGUuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgdGhpcy5hbGxvd0hhbGZPcGVuID0gdHJ1ZTtcblxuICBpZiAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnJlYWRhYmxlID09PSBmYWxzZSkgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIGlmIChvcHRpb25zLndyaXRhYmxlID09PSBmYWxzZSkgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gICAgaWYgKG9wdGlvbnMuYWxsb3dIYWxmT3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuYWxsb3dIYWxmT3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5vbmNlKCdlbmQnLCBvbmVuZCk7XG4gICAgfVxuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnd3JpdGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnd3JpdGFibGVCdWZmZXInLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLl93cml0YWJsZVN0YXRlICYmIHRoaXMuX3dyaXRhYmxlU3RhdGUuZ2V0QnVmZmVyKCk7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KER1cGxleC5wcm90b3R5cGUsICd3cml0YWJsZUxlbmd0aCcsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUubGVuZ3RoO1xuICB9XG59KTsgLy8gdGhlIG5vLWhhbGYtb3BlbiBlbmZvcmNlclxuXG5mdW5jdGlvbiBvbmVuZCgpIHtcbiAgLy8gSWYgdGhlIHdyaXRhYmxlIHNpZGUgZW5kZWQsIHRoZW4gd2UncmUgb2suXG4gIGlmICh0aGlzLl93cml0YWJsZVN0YXRlLmVuZGVkKSByZXR1cm47IC8vIG5vIG1vcmUgZGF0YSBjYW4gYmUgd3JpdHRlbi5cbiAgLy8gQnV0IGFsbG93IG1vcmUgd3JpdGVzIHRvIGhhcHBlbiBpbiB0aGlzIHRpY2suXG5cbiAgcHJvY2Vzcy5uZXh0VGljayhvbkVuZE5ULCB0aGlzKTtcbn1cblxuZnVuY3Rpb24gb25FbmROVChzZWxmKSB7XG4gIHNlbGYuZW5kKCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShEdXBsZXgucHJvdG90eXBlLCAnZGVzdHJveWVkJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuX3dyaXRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZCAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHksIHRoZSB1c2VyIGlzIGV4cGxpY2l0bHlcbiAgICAvLyBtYW5hZ2luZyBkZXN0cm95ZWRcblxuXG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICB9XG59KTsiLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbi8vIGEgcGFzc3Rocm91Z2ggc3RyZWFtLlxuLy8gYmFzaWNhbGx5IGp1c3QgdGhlIG1vc3QgbWluaW1hbCBzb3J0IG9mIFRyYW5zZm9ybSBzdHJlYW0uXG4vLyBFdmVyeSB3cml0dGVuIGNodW5rIGdldHMgb3V0cHV0IGFzLWlzLlxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhc3NUaHJvdWdoO1xuXG52YXIgVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9fc3RyZWFtX3RyYW5zZm9ybScpO1xuXG5yZXF1aXJlKCdpbmhlcml0cycpKFBhc3NUaHJvdWdoLCBUcmFuc2Zvcm0pO1xuXG5mdW5jdGlvbiBQYXNzVGhyb3VnaChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQYXNzVGhyb3VnaCkpIHJldHVybiBuZXcgUGFzc1Rocm91Z2gob3B0aW9ucyk7XG4gIFRyYW5zZm9ybS5jYWxsKHRoaXMsIG9wdGlvbnMpO1xufVxuXG5QYXNzVGhyb3VnaC5wcm90b3R5cGUuX3RyYW5zZm9ybSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIGNiKG51bGwsIGNodW5rKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhZGFibGU7XG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgRHVwbGV4O1xuLyo8L3JlcGxhY2VtZW50PiovXG5cblJlYWRhYmxlLlJlYWRhYmxlU3RhdGUgPSBSZWFkYWJsZVN0YXRlO1xuLyo8cmVwbGFjZW1lbnQ+Ki9cblxudmFyIEVFID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuXG52YXIgRUVsaXN0ZW5lckNvdW50ID0gZnVuY3Rpb24gRUVsaXN0ZW5lckNvdW50KGVtaXR0ZXIsIHR5cGUpIHtcbiAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJzKHR5cGUpLmxlbmd0aDtcbn07XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuLyo8cmVwbGFjZW1lbnQ+Ki9cblxuXG52YXIgU3RyZWFtID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0cmVhbScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcblxudmFyIE91clVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuZnVuY3Rpb24gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuaykge1xuICByZXR1cm4gQnVmZmVyLmZyb20oY2h1bmspO1xufVxuXG5mdW5jdGlvbiBfaXNVaW50OEFycmF5KG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgb2JqIGluc3RhbmNlb2YgT3VyVWludDhBcnJheTtcbn1cbi8qPHJlcGxhY2VtZW50PiovXG5cblxudmFyIGRlYnVnVXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxudmFyIGRlYnVnO1xuXG5pZiAoZGVidWdVdGlsICYmIGRlYnVnVXRpbC5kZWJ1Z2xvZykge1xuICBkZWJ1ZyA9IGRlYnVnVXRpbC5kZWJ1Z2xvZygnc3RyZWFtJyk7XG59IGVsc2Uge1xuICBkZWJ1ZyA9IGZ1bmN0aW9uIGRlYnVnKCkge307XG59XG4vKjwvcmVwbGFjZW1lbnQ+Ki9cblxuXG52YXIgQnVmZmVyTGlzdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvc3RyZWFtcy9idWZmZXJfbGlzdCcpO1xuXG52YXIgZGVzdHJveUltcGwgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvZGVzdHJveScpO1xuXG52YXIgX3JlcXVpcmUgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvc3RhdGUnKSxcbiAgICBnZXRIaWdoV2F0ZXJNYXJrID0gX3JlcXVpcmUuZ2V0SGlnaFdhdGVyTWFyaztcblxudmFyIF9yZXF1aXJlJGNvZGVzID0gcmVxdWlyZSgnLi4vZXJyb3JzJykuY29kZXMsXG4gICAgRVJSX0lOVkFMSURfQVJHX1RZUEUgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfSU5WQUxJRF9BUkdfVFlQRSxcbiAgICBFUlJfU1RSRUFNX1BVU0hfQUZURVJfRU9GID0gX3JlcXVpcmUkY29kZXMuRVJSX1NUUkVBTV9QVVNIX0FGVEVSX0VPRixcbiAgICBFUlJfTUVUSE9EX05PVF9JTVBMRU1FTlRFRCA9IF9yZXF1aXJlJGNvZGVzLkVSUl9NRVRIT0RfTk9UX0lNUExFTUVOVEVELFxuICAgIEVSUl9TVFJFQU1fVU5TSElGVF9BRlRFUl9FTkRfRVZFTlQgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfU1RSRUFNX1VOU0hJRlRfQUZURVJfRU5EX0VWRU5UOyAvLyBMYXp5IGxvYWRlZCB0byBpbXByb3ZlIHRoZSBzdGFydHVwIHBlcmZvcm1hbmNlLlxuXG5cbnZhciBTdHJpbmdEZWNvZGVyO1xudmFyIGNyZWF0ZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcjtcbnZhciBmcm9tO1xuXG5yZXF1aXJlKCdpbmhlcml0cycpKFJlYWRhYmxlLCBTdHJlYW0pO1xuXG52YXIgZXJyb3JPckRlc3Ryb3kgPSBkZXN0cm95SW1wbC5lcnJvck9yRGVzdHJveTtcbnZhciBrUHJveHlFdmVudHMgPSBbJ2Vycm9yJywgJ2Nsb3NlJywgJ2Rlc3Ryb3knLCAncGF1c2UnLCAncmVzdW1lJ107XG5cbmZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcihlbWl0dGVyLCBldmVudCwgZm4pIHtcbiAgLy8gU2FkbHkgdGhpcyBpcyBub3QgY2FjaGVhYmxlIGFzIHNvbWUgbGlicmFyaWVzIGJ1bmRsZSB0aGVpciBvd25cbiAgLy8gZXZlbnQgZW1pdHRlciBpbXBsZW1lbnRhdGlvbiB3aXRoIHRoZW0uXG4gIGlmICh0eXBlb2YgZW1pdHRlci5wcmVwZW5kTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHJldHVybiBlbWl0dGVyLnByZXBlbmRMaXN0ZW5lcihldmVudCwgZm4pOyAvLyBUaGlzIGlzIGEgaGFjayB0byBtYWtlIHN1cmUgdGhhdCBvdXIgZXJyb3IgaGFuZGxlciBpcyBhdHRhY2hlZCBiZWZvcmUgYW55XG4gIC8vIHVzZXJsYW5kIG9uZXMuICBORVZFUiBETyBUSElTLiBUaGlzIGlzIGhlcmUgb25seSBiZWNhdXNlIHRoaXMgY29kZSBuZWVkc1xuICAvLyB0byBjb250aW51ZSB0byB3b3JrIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgTm9kZS5qcyB0aGF0IGRvIG5vdCBpbmNsdWRlXG4gIC8vIHRoZSBwcmVwZW5kTGlzdGVuZXIoKSBtZXRob2QuIFRoZSBnb2FsIGlzIHRvIGV2ZW50dWFsbHkgcmVtb3ZlIHRoaXMgaGFjay5cblxuICBpZiAoIWVtaXR0ZXIuX2V2ZW50cyB8fCAhZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkgZW1pdHRlci5vbihldmVudCwgZm4pO2Vsc2UgaWYgKEFycmF5LmlzQXJyYXkoZW1pdHRlci5fZXZlbnRzW2V2ZW50XSkpIGVtaXR0ZXIuX2V2ZW50c1tldmVudF0udW5zaGlmdChmbik7ZWxzZSBlbWl0dGVyLl9ldmVudHNbZXZlbnRdID0gW2ZuLCBlbWl0dGVyLl9ldmVudHNbZXZlbnRdXTtcbn1cblxuZnVuY3Rpb24gUmVhZGFibGVTdGF0ZShvcHRpb25zLCBzdHJlYW0sIGlzRHVwbGV4KSB7XG4gIER1cGxleCA9IER1cGxleCB8fCByZXF1aXJlKCcuL19zdHJlYW1fZHVwbGV4Jyk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBEdXBsZXggc3RyZWFtcyBhcmUgYm90aCByZWFkYWJsZSBhbmQgd3JpdGFibGUsIGJ1dCBzaGFyZVxuICAvLyB0aGUgc2FtZSBvcHRpb25zIG9iamVjdC5cbiAgLy8gSG93ZXZlciwgc29tZSBjYXNlcyByZXF1aXJlIHNldHRpbmcgb3B0aW9ucyB0byBkaWZmZXJlbnRcbiAgLy8gdmFsdWVzIGZvciB0aGUgcmVhZGFibGUgYW5kIHRoZSB3cml0YWJsZSBzaWRlcyBvZiB0aGUgZHVwbGV4IHN0cmVhbS5cbiAgLy8gVGhlc2Ugb3B0aW9ucyBjYW4gYmUgcHJvdmlkZWQgc2VwYXJhdGVseSBhcyByZWFkYWJsZVhYWCBhbmQgd3JpdGFibGVYWFguXG5cbiAgaWYgKHR5cGVvZiBpc0R1cGxleCAhPT0gJ2Jvb2xlYW4nKSBpc0R1cGxleCA9IHN0cmVhbSBpbnN0YW5jZW9mIER1cGxleDsgLy8gb2JqZWN0IHN0cmVhbSBmbGFnLiBVc2VkIHRvIG1ha2UgcmVhZChuKSBpZ25vcmUgbiBhbmQgdG9cbiAgLy8gbWFrZSBhbGwgdGhlIGJ1ZmZlciBtZXJnaW5nIGFuZCBsZW5ndGggY2hlY2tzIGdvIGF3YXlcblxuICB0aGlzLm9iamVjdE1vZGUgPSAhIW9wdGlvbnMub2JqZWN0TW9kZTtcbiAgaWYgKGlzRHVwbGV4KSB0aGlzLm9iamVjdE1vZGUgPSB0aGlzLm9iamVjdE1vZGUgfHwgISFvcHRpb25zLnJlYWRhYmxlT2JqZWN0TW9kZTsgLy8gdGhlIHBvaW50IGF0IHdoaWNoIGl0IHN0b3BzIGNhbGxpbmcgX3JlYWQoKSB0byBmaWxsIHRoZSBidWZmZXJcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyBcImRvbid0IGNhbGwgX3JlYWQgcHJlZW1wdGl2ZWx5IGV2ZXJcIlxuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IGdldEhpZ2hXYXRlck1hcmsodGhpcywgb3B0aW9ucywgJ3JlYWRhYmxlSGlnaFdhdGVyTWFyaycsIGlzRHVwbGV4KTsgLy8gQSBsaW5rZWQgbGlzdCBpcyB1c2VkIHRvIHN0b3JlIGRhdGEgY2h1bmtzIGluc3RlYWQgb2YgYW4gYXJyYXkgYmVjYXVzZSB0aGVcbiAgLy8gbGlua2VkIGxpc3QgY2FuIHJlbW92ZSBlbGVtZW50cyBmcm9tIHRoZSBiZWdpbm5pbmcgZmFzdGVyIHRoYW5cbiAgLy8gYXJyYXkuc2hpZnQoKVxuXG4gIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlckxpc3QoKTtcbiAgdGhpcy5sZW5ndGggPSAwO1xuICB0aGlzLnBpcGVzID0gbnVsbDtcbiAgdGhpcy5waXBlc0NvdW50ID0gMDtcbiAgdGhpcy5mbG93aW5nID0gbnVsbDtcbiAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICB0aGlzLmVuZEVtaXR0ZWQgPSBmYWxzZTtcbiAgdGhpcy5yZWFkaW5nID0gZmFsc2U7IC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIGV2ZW50ICdyZWFkYWJsZScvJ2RhdGEnIGlzIGVtaXR0ZWRcbiAgLy8gaW1tZWRpYXRlbHksIG9yIG9uIGEgbGF0ZXIgdGljay4gIFdlIHNldCB0aGlzIHRvIHRydWUgYXQgZmlyc3QsIGJlY2F1c2VcbiAgLy8gYW55IGFjdGlvbnMgdGhhdCBzaG91bGRuJ3QgaGFwcGVuIHVudGlsIFwibGF0ZXJcIiBzaG91bGQgZ2VuZXJhbGx5IGFsc29cbiAgLy8gbm90IGhhcHBlbiBiZWZvcmUgdGhlIGZpcnN0IHJlYWQgY2FsbC5cblxuICB0aGlzLnN5bmMgPSB0cnVlOyAvLyB3aGVuZXZlciB3ZSByZXR1cm4gbnVsbCwgdGhlbiB3ZSBzZXQgYSBmbGFnIHRvIHNheVxuICAvLyB0aGF0IHdlJ3JlIGF3YWl0aW5nIGEgJ3JlYWRhYmxlJyBldmVudCBlbWlzc2lvbi5cblxuICB0aGlzLm5lZWRSZWFkYWJsZSA9IGZhbHNlO1xuICB0aGlzLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlO1xuICB0aGlzLnJlYWRhYmxlTGlzdGVuaW5nID0gZmFsc2U7XG4gIHRoaXMucmVzdW1lU2NoZWR1bGVkID0gZmFsc2U7XG4gIHRoaXMucGF1c2VkID0gdHJ1ZTsgLy8gU2hvdWxkIGNsb3NlIGJlIGVtaXR0ZWQgb24gZGVzdHJveS4gRGVmYXVsdHMgdG8gdHJ1ZS5cblxuICB0aGlzLmVtaXRDbG9zZSA9IG9wdGlvbnMuZW1pdENsb3NlICE9PSBmYWxzZTsgLy8gU2hvdWxkIC5kZXN0cm95KCkgYmUgY2FsbGVkIGFmdGVyICdlbmQnIChhbmQgcG90ZW50aWFsbHkgJ2ZpbmlzaCcpXG5cbiAgdGhpcy5hdXRvRGVzdHJveSA9ICEhb3B0aW9ucy5hdXRvRGVzdHJveTsgLy8gaGFzIGl0IGJlZW4gZGVzdHJveWVkXG5cbiAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTsgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cblxuICB0aGlzLmRlZmF1bHRFbmNvZGluZyA9IG9wdGlvbnMuZGVmYXVsdEVuY29kaW5nIHx8ICd1dGY4JzsgLy8gdGhlIG51bWJlciBvZiB3cml0ZXJzIHRoYXQgYXJlIGF3YWl0aW5nIGEgZHJhaW4gZXZlbnQgaW4gLnBpcGUoKXNcblxuICB0aGlzLmF3YWl0RHJhaW4gPSAwOyAvLyBpZiB0cnVlLCBhIG1heWJlUmVhZE1vcmUgaGFzIGJlZW4gc2NoZWR1bGVkXG5cbiAgdGhpcy5yZWFkaW5nTW9yZSA9IGZhbHNlO1xuICB0aGlzLmRlY29kZXIgPSBudWxsO1xuICB0aGlzLmVuY29kaW5nID0gbnVsbDtcblxuICBpZiAob3B0aW9ucy5lbmNvZGluZykge1xuICAgIGlmICghU3RyaW5nRGVjb2RlcikgU3RyaW5nRGVjb2RlciA9IHJlcXVpcmUoJ3N0cmluZ19kZWNvZGVyLycpLlN0cmluZ0RlY29kZXI7XG4gICAgdGhpcy5kZWNvZGVyID0gbmV3IFN0cmluZ0RlY29kZXIob3B0aW9ucy5lbmNvZGluZyk7XG4gICAgdGhpcy5lbmNvZGluZyA9IG9wdGlvbnMuZW5jb2Rpbmc7XG4gIH1cbn1cblxuZnVuY3Rpb24gUmVhZGFibGUob3B0aW9ucykge1xuICBEdXBsZXggPSBEdXBsZXggfHwgcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgUmVhZGFibGUpKSByZXR1cm4gbmV3IFJlYWRhYmxlKG9wdGlvbnMpOyAvLyBDaGVja2luZyBmb3IgYSBTdHJlYW0uRHVwbGV4IGluc3RhbmNlIGlzIGZhc3RlciBoZXJlIGluc3RlYWQgb2YgaW5zaWRlXG4gIC8vIHRoZSBSZWFkYWJsZVN0YXRlIGNvbnN0cnVjdG9yLCBhdCBsZWFzdCB3aXRoIFY4IDYuNVxuXG4gIHZhciBpc0R1cGxleCA9IHRoaXMgaW5zdGFuY2VvZiBEdXBsZXg7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUgPSBuZXcgUmVhZGFibGVTdGF0ZShvcHRpb25zLCB0aGlzLCBpc0R1cGxleCk7IC8vIGxlZ2FjeVxuXG4gIHRoaXMucmVhZGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLnJlYWQgPT09ICdmdW5jdGlvbicpIHRoaXMuX3JlYWQgPSBvcHRpb25zLnJlYWQ7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHRoaXMuX2Rlc3Ryb3kgPSBvcHRpb25zLmRlc3Ryb3k7XG4gIH1cblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlLnByb3RvdHlwZSwgJ2Rlc3Ryb3llZCcsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgaWYgKHRoaXMuX3JlYWRhYmxlU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmRlc3Ryb3llZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAvLyB3ZSBpZ25vcmUgdGhlIHZhbHVlIGlmIHRoZSBzdHJlYW1cbiAgICAvLyBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG4gICAgaWYgKCF0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCB0aGUgdXNlciBpcyBleHBsaWNpdGx5XG4gICAgLy8gbWFuYWdpbmcgZGVzdHJveWVkXG5cblxuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdmFsdWU7XG4gIH1cbn0pO1xuUmVhZGFibGUucHJvdG90eXBlLmRlc3Ryb3kgPSBkZXN0cm95SW1wbC5kZXN0cm95O1xuUmVhZGFibGUucHJvdG90eXBlLl91bmRlc3Ryb3kgPSBkZXN0cm95SW1wbC51bmRlc3Ryb3k7XG5cblJlYWRhYmxlLnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIChlcnIsIGNiKSB7XG4gIGNiKGVycik7XG59OyAvLyBNYW51YWxseSBzaG92ZSBzb21ldGhpbmcgaW50byB0aGUgcmVhZCgpIGJ1ZmZlci5cbi8vIFRoaXMgcmV0dXJucyB0cnVlIGlmIHRoZSBoaWdoV2F0ZXJNYXJrIGhhcyBub3QgYmVlbiBoaXQgeWV0LFxuLy8gc2ltaWxhciB0byBob3cgV3JpdGFibGUud3JpdGUoKSByZXR1cm5zIHRydWUgaWYgeW91IHNob3VsZFxuLy8gd3JpdGUoKSBzb21lIG1vcmUuXG5cblxuUmVhZGFibGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nKSB7XG4gIHZhciBzdGF0ZSA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHZhciBza2lwQ2h1bmtDaGVjaztcblxuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUpIHtcbiAgICBpZiAodHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmNvZGluZyB8fCBzdGF0ZS5kZWZhdWx0RW5jb2Rpbmc7XG5cbiAgICAgIGlmIChlbmNvZGluZyAhPT0gc3RhdGUuZW5jb2RpbmcpIHtcbiAgICAgICAgY2h1bmsgPSBCdWZmZXIuZnJvbShjaHVuaywgZW5jb2RpbmcpO1xuICAgICAgICBlbmNvZGluZyA9ICcnO1xuICAgICAgfVxuXG4gICAgICBza2lwQ2h1bmtDaGVjayA9IHRydWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNraXBDaHVua0NoZWNrID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiByZWFkYWJsZUFkZENodW5rKHRoaXMsIGNodW5rLCBlbmNvZGluZywgZmFsc2UsIHNraXBDaHVua0NoZWNrKTtcbn07IC8vIFVuc2hpZnQgc2hvdWxkICphbHdheXMqIGJlIHNvbWV0aGluZyBkaXJlY3RseSBvdXQgb2YgcmVhZCgpXG5cblxuUmVhZGFibGUucHJvdG90eXBlLnVuc2hpZnQgPSBmdW5jdGlvbiAoY2h1bmspIHtcbiAgcmV0dXJuIHJlYWRhYmxlQWRkQ2h1bmsodGhpcywgY2h1bmssIG51bGwsIHRydWUsIGZhbHNlKTtcbn07XG5cbmZ1bmN0aW9uIHJlYWRhYmxlQWRkQ2h1bmsoc3RyZWFtLCBjaHVuaywgZW5jb2RpbmcsIGFkZFRvRnJvbnQsIHNraXBDaHVua0NoZWNrKSB7XG4gIGRlYnVnKCdyZWFkYWJsZUFkZENodW5rJywgY2h1bmspO1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG5cbiAgaWYgKGNodW5rID09PSBudWxsKSB7XG4gICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgIG9uRW9mQ2h1bmsoc3RyZWFtLCBzdGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGVyO1xuICAgIGlmICghc2tpcENodW5rQ2hlY2spIGVyID0gY2h1bmtJbnZhbGlkKHN0YXRlLCBjaHVuayk7XG5cbiAgICBpZiAoZXIpIHtcbiAgICAgIGVycm9yT3JEZXN0cm95KHN0cmVhbSwgZXIpO1xuICAgIH0gZWxzZSBpZiAoc3RhdGUub2JqZWN0TW9kZSB8fCBjaHVuayAmJiBjaHVuay5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiAhc3RhdGUub2JqZWN0TW9kZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoY2h1bmspICE9PSBCdWZmZXIucHJvdG90eXBlKSB7XG4gICAgICAgIGNodW5rID0gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuayk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZGRUb0Zyb250KSB7XG4gICAgICAgIGlmIChzdGF0ZS5lbmRFbWl0dGVkKSBlcnJvck9yRGVzdHJveShzdHJlYW0sIG5ldyBFUlJfU1RSRUFNX1VOU0hJRlRfQUZURVJfRU5EX0VWRU5UKCkpO2Vsc2UgYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5lbmRlZCkge1xuICAgICAgICBlcnJvck9yRGVzdHJveShzdHJlYW0sIG5ldyBFUlJfU1RSRUFNX1BVU0hfQUZURVJfRU9GKCkpO1xuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFlbmNvZGluZykge1xuICAgICAgICAgIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7XG4gICAgICAgICAgaWYgKHN0YXRlLm9iamVjdE1vZGUgfHwgY2h1bmsubGVuZ3RoICE9PSAwKSBhZGRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgZmFsc2UpO2Vsc2UgbWF5YmVSZWFkTW9yZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghYWRkVG9Gcm9udCkge1xuICAgICAgc3RhdGUucmVhZGluZyA9IGZhbHNlO1xuICAgICAgbWF5YmVSZWFkTW9yZShzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG4gIH0gLy8gV2UgY2FuIHB1c2ggbW9yZSBkYXRhIGlmIHdlIGFyZSBiZWxvdyB0aGUgaGlnaFdhdGVyTWFyay5cbiAgLy8gQWxzbywgaWYgd2UgaGF2ZSBubyBkYXRhIHlldCwgd2UgY2FuIHN0YW5kIHNvbWUgbW9yZSBieXRlcy5cbiAgLy8gVGhpcyBpcyB0byB3b3JrIGFyb3VuZCBjYXNlcyB3aGVyZSBod209MCwgc3VjaCBhcyB0aGUgcmVwbC5cblxuXG4gIHJldHVybiAhc3RhdGUuZW5kZWQgJiYgKHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmsgfHwgc3RhdGUubGVuZ3RoID09PSAwKTtcbn1cblxuZnVuY3Rpb24gYWRkQ2h1bmsoc3RyZWFtLCBzdGF0ZSwgY2h1bmssIGFkZFRvRnJvbnQpIHtcbiAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwICYmICFzdGF0ZS5zeW5jKSB7XG4gICAgc3RhdGUuYXdhaXREcmFpbiA9IDA7XG4gICAgc3RyZWFtLmVtaXQoJ2RhdGEnLCBjaHVuayk7XG4gIH0gZWxzZSB7XG4gICAgLy8gdXBkYXRlIHRoZSBidWZmZXIgaW5mby5cbiAgICBzdGF0ZS5sZW5ndGggKz0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG4gICAgaWYgKGFkZFRvRnJvbnQpIHN0YXRlLmJ1ZmZlci51bnNoaWZ0KGNodW5rKTtlbHNlIHN0YXRlLmJ1ZmZlci5wdXNoKGNodW5rKTtcbiAgICBpZiAoc3RhdGUubmVlZFJlYWRhYmxlKSBlbWl0UmVhZGFibGUoc3RyZWFtKTtcbiAgfVxuXG4gIG1heWJlUmVhZE1vcmUoc3RyZWFtLCBzdGF0ZSk7XG59XG5cbmZ1bmN0aW9uIGNodW5rSW52YWxpZChzdGF0ZSwgY2h1bmspIHtcbiAgdmFyIGVyO1xuXG4gIGlmICghX2lzVWludDhBcnJheShjaHVuaykgJiYgdHlwZW9mIGNodW5rICE9PSAnc3RyaW5nJyAmJiBjaHVuayAhPT0gdW5kZWZpbmVkICYmICFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgZXIgPSBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ2NodW5rJywgWydzdHJpbmcnLCAnQnVmZmVyJywgJ1VpbnQ4QXJyYXknXSwgY2h1bmspO1xuICB9XG5cbiAgcmV0dXJuIGVyO1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUuaXNQYXVzZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl9yZWFkYWJsZVN0YXRlLmZsb3dpbmcgPT09IGZhbHNlO1xufTsgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG5cblxuUmVhZGFibGUucHJvdG90eXBlLnNldEVuY29kaW5nID0gZnVuY3Rpb24gKGVuYykge1xuICBpZiAoIVN0cmluZ0RlY29kZXIpIFN0cmluZ0RlY29kZXIgPSByZXF1aXJlKCdzdHJpbmdfZGVjb2Rlci8nKS5TdHJpbmdEZWNvZGVyO1xuICB2YXIgZGVjb2RlciA9IG5ldyBTdHJpbmdEZWNvZGVyKGVuYyk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2RlciA9IGRlY29kZXI7IC8vIElmIHNldEVuY29kaW5nKG51bGwpLCBkZWNvZGVyLmVuY29kaW5nIGVxdWFscyB1dGY4XG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmNvZGluZyA9IHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVjb2Rlci5lbmNvZGluZzsgLy8gSXRlcmF0ZSBvdmVyIGN1cnJlbnQgYnVmZmVyIHRvIGNvbnZlcnQgYWxyZWFkeSBzdG9yZWQgQnVmZmVyczpcblxuICB2YXIgcCA9IHRoaXMuX3JlYWRhYmxlU3RhdGUuYnVmZmVyLmhlYWQ7XG4gIHZhciBjb250ZW50ID0gJyc7XG5cbiAgd2hpbGUgKHAgIT09IG51bGwpIHtcbiAgICBjb250ZW50ICs9IGRlY29kZXIud3JpdGUocC5kYXRhKTtcbiAgICBwID0gcC5uZXh0O1xuICB9XG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5idWZmZXIuY2xlYXIoKTtcblxuICBpZiAoY29udGVudCAhPT0gJycpIHRoaXMuX3JlYWRhYmxlU3RhdGUuYnVmZmVyLnB1c2goY29udGVudCk7XG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoID0gY29udGVudC5sZW5ndGg7XG4gIHJldHVybiB0aGlzO1xufTsgLy8gRG9uJ3QgcmFpc2UgdGhlIGh3bSA+IDFHQlxuXG5cbnZhciBNQVhfSFdNID0gMHg0MDAwMDAwMDtcblxuZnVuY3Rpb24gY29tcHV0ZU5ld0hpZ2hXYXRlck1hcmsobikge1xuICBpZiAobiA+PSBNQVhfSFdNKSB7XG4gICAgLy8gVE9ETyhyb25hZyk6IFRocm93IEVSUl9WQUxVRV9PVVRfT0ZfUkFOR0UuXG4gICAgbiA9IE1BWF9IV007XG4gIH0gZWxzZSB7XG4gICAgLy8gR2V0IHRoZSBuZXh0IGhpZ2hlc3QgcG93ZXIgb2YgMiB0byBwcmV2ZW50IGluY3JlYXNpbmcgaHdtIGV4Y2Vzc2l2ZWx5IGluXG4gICAgLy8gdGlueSBhbW91bnRzXG4gICAgbi0tO1xuICAgIG4gfD0gbiA+Pj4gMTtcbiAgICBuIHw9IG4gPj4+IDI7XG4gICAgbiB8PSBuID4+PiA0O1xuICAgIG4gfD0gbiA+Pj4gODtcbiAgICBuIHw9IG4gPj4+IDE2O1xuICAgIG4rKztcbiAgfVxuXG4gIHJldHVybiBuO1xufSAvLyBUaGlzIGZ1bmN0aW9uIGlzIGRlc2lnbmVkIHRvIGJlIGlubGluYWJsZSwgc28gcGxlYXNlIHRha2UgY2FyZSB3aGVuIG1ha2luZ1xuLy8gY2hhbmdlcyB0byB0aGUgZnVuY3Rpb24gYm9keS5cblxuXG5mdW5jdGlvbiBob3dNdWNoVG9SZWFkKG4sIHN0YXRlKSB7XG4gIGlmIChuIDw9IDAgfHwgc3RhdGUubGVuZ3RoID09PSAwICYmIHN0YXRlLmVuZGVkKSByZXR1cm4gMDtcbiAgaWYgKHN0YXRlLm9iamVjdE1vZGUpIHJldHVybiAxO1xuXG4gIGlmIChuICE9PSBuKSB7XG4gICAgLy8gT25seSBmbG93IG9uZSBidWZmZXIgYXQgYSB0aW1lXG4gICAgaWYgKHN0YXRlLmZsb3dpbmcgJiYgc3RhdGUubGVuZ3RoKSByZXR1cm4gc3RhdGUuYnVmZmVyLmhlYWQuZGF0YS5sZW5ndGg7ZWxzZSByZXR1cm4gc3RhdGUubGVuZ3RoO1xuICB9IC8vIElmIHdlJ3JlIGFza2luZyBmb3IgbW9yZSB0aGFuIHRoZSBjdXJyZW50IGh3bSwgdGhlbiByYWlzZSB0aGUgaHdtLlxuXG5cbiAgaWYgKG4gPiBzdGF0ZS5oaWdoV2F0ZXJNYXJrKSBzdGF0ZS5oaWdoV2F0ZXJNYXJrID0gY29tcHV0ZU5ld0hpZ2hXYXRlck1hcmsobik7XG4gIGlmIChuIDw9IHN0YXRlLmxlbmd0aCkgcmV0dXJuIG47IC8vIERvbid0IGhhdmUgZW5vdWdoXG5cbiAgaWYgKCFzdGF0ZS5lbmRlZCkge1xuICAgIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICByZXR1cm4gc3RhdGUubGVuZ3RoO1xufSAvLyB5b3UgY2FuIG92ZXJyaWRlIGVpdGhlciB0aGlzIG1ldGhvZCwgb3IgdGhlIGFzeW5jIF9yZWFkKG4pIGJlbG93LlxuXG5cblJlYWRhYmxlLnByb3RvdHlwZS5yZWFkID0gZnVuY3Rpb24gKG4pIHtcbiAgZGVidWcoJ3JlYWQnLCBuKTtcbiAgbiA9IHBhcnNlSW50KG4sIDEwKTtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIG5PcmlnID0gbjtcbiAgaWYgKG4gIT09IDApIHN0YXRlLmVtaXR0ZWRSZWFkYWJsZSA9IGZhbHNlOyAvLyBpZiB3ZSdyZSBkb2luZyByZWFkKDApIHRvIHRyaWdnZXIgYSByZWFkYWJsZSBldmVudCwgYnV0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhIGJ1bmNoIG9mIGRhdGEgaW4gdGhlIGJ1ZmZlciwgdGhlbiBqdXN0IHRyaWdnZXJcbiAgLy8gdGhlICdyZWFkYWJsZScgZXZlbnQgYW5kIG1vdmUgb24uXG5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUubmVlZFJlYWRhYmxlICYmICgoc3RhdGUuaGlnaFdhdGVyTWFyayAhPT0gMCA/IHN0YXRlLmxlbmd0aCA+PSBzdGF0ZS5oaWdoV2F0ZXJNYXJrIDogc3RhdGUubGVuZ3RoID4gMCkgfHwgc3RhdGUuZW5kZWQpKSB7XG4gICAgZGVidWcoJ3JlYWQ6IGVtaXRSZWFkYWJsZScsIHN0YXRlLmxlbmd0aCwgc3RhdGUuZW5kZWQpO1xuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUuZW5kZWQpIGVuZFJlYWRhYmxlKHRoaXMpO2Vsc2UgZW1pdFJlYWRhYmxlKHRoaXMpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbiA9IGhvd011Y2hUb1JlYWQobiwgc3RhdGUpOyAvLyBpZiB3ZSd2ZSBlbmRlZCwgYW5kIHdlJ3JlIG5vdyBjbGVhciwgdGhlbiBmaW5pc2ggaXQgdXAuXG5cbiAgaWYgKG4gPT09IDAgJiYgc3RhdGUuZW5kZWQpIHtcbiAgICBpZiAoc3RhdGUubGVuZ3RoID09PSAwKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSAvLyBBbGwgdGhlIGFjdHVhbCBjaHVuayBnZW5lcmF0aW9uIGxvZ2ljIG5lZWRzIHRvIGJlXG4gIC8vICpiZWxvdyogdGhlIGNhbGwgdG8gX3JlYWQuICBUaGUgcmVhc29uIGlzIHRoYXQgaW4gY2VydGFpblxuICAvLyBzeW50aGV0aWMgc3RyZWFtIGNhc2VzLCBzdWNoIGFzIHBhc3N0aHJvdWdoIHN0cmVhbXMsIF9yZWFkXG4gIC8vIG1heSBiZSBhIGNvbXBsZXRlbHkgc3luY2hyb25vdXMgb3BlcmF0aW9uIHdoaWNoIG1heSBjaGFuZ2VcbiAgLy8gdGhlIHN0YXRlIG9mIHRoZSByZWFkIGJ1ZmZlciwgcHJvdmlkaW5nIGVub3VnaCBkYXRhIHdoZW5cbiAgLy8gYmVmb3JlIHRoZXJlIHdhcyAqbm90KiBlbm91Z2guXG4gIC8vXG4gIC8vIFNvLCB0aGUgc3RlcHMgYXJlOlxuICAvLyAxLiBGaWd1cmUgb3V0IHdoYXQgdGhlIHN0YXRlIG9mIHRoaW5ncyB3aWxsIGJlIGFmdGVyIHdlIGRvXG4gIC8vIGEgcmVhZCBmcm9tIHRoZSBidWZmZXIuXG4gIC8vXG4gIC8vIDIuIElmIHRoYXQgcmVzdWx0aW5nIHN0YXRlIHdpbGwgdHJpZ2dlciBhIF9yZWFkLCB0aGVuIGNhbGwgX3JlYWQuXG4gIC8vIE5vdGUgdGhhdCB0aGlzIG1heSBiZSBhc3luY2hyb25vdXMsIG9yIHN5bmNocm9ub3VzLiAgWWVzLCBpdCBpc1xuICAvLyBkZWVwbHkgdWdseSB0byB3cml0ZSBBUElzIHRoaXMgd2F5LCBidXQgdGhhdCBzdGlsbCBkb2Vzbid0IG1lYW5cbiAgLy8gdGhhdCB0aGUgUmVhZGFibGUgY2xhc3Mgc2hvdWxkIGJlaGF2ZSBpbXByb3Blcmx5LCBhcyBzdHJlYW1zIGFyZVxuICAvLyBkZXNpZ25lZCB0byBiZSBzeW5jL2FzeW5jIGFnbm9zdGljLlxuICAvLyBUYWtlIG5vdGUgaWYgdGhlIF9yZWFkIGNhbGwgaXMgc3luYyBvciBhc3luYyAoaWUsIGlmIHRoZSByZWFkIGNhbGxcbiAgLy8gaGFzIHJldHVybmVkIHlldCksIHNvIHRoYXQgd2Uga25vdyB3aGV0aGVyIG9yIG5vdCBpdCdzIHNhZmUgdG8gZW1pdFxuICAvLyAncmVhZGFibGUnIGV0Yy5cbiAgLy9cbiAgLy8gMy4gQWN0dWFsbHkgcHVsbCB0aGUgcmVxdWVzdGVkIGNodW5rcyBvdXQgb2YgdGhlIGJ1ZmZlciBhbmQgcmV0dXJuLlxuICAvLyBpZiB3ZSBuZWVkIGEgcmVhZGFibGUgZXZlbnQsIHRoZW4gd2UgbmVlZCB0byBkbyBzb21lIHJlYWRpbmcuXG5cblxuICB2YXIgZG9SZWFkID0gc3RhdGUubmVlZFJlYWRhYmxlO1xuICBkZWJ1ZygnbmVlZCByZWFkYWJsZScsIGRvUmVhZCk7IC8vIGlmIHdlIGN1cnJlbnRseSBoYXZlIGxlc3MgdGhhbiB0aGUgaGlnaFdhdGVyTWFyaywgdGhlbiBhbHNvIHJlYWQgc29tZVxuXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgfHwgc3RhdGUubGVuZ3RoIC0gbiA8IHN0YXRlLmhpZ2hXYXRlck1hcmspIHtcbiAgICBkb1JlYWQgPSB0cnVlO1xuICAgIGRlYnVnKCdsZW5ndGggbGVzcyB0aGFuIHdhdGVybWFyaycsIGRvUmVhZCk7XG4gIH0gLy8gaG93ZXZlciwgaWYgd2UndmUgZW5kZWQsIHRoZW4gdGhlcmUncyBubyBwb2ludCwgYW5kIGlmIHdlJ3JlIGFscmVhZHlcbiAgLy8gcmVhZGluZywgdGhlbiBpdCdzIHVubmVjZXNzYXJ5LlxuXG5cbiAgaWYgKHN0YXRlLmVuZGVkIHx8IHN0YXRlLnJlYWRpbmcpIHtcbiAgICBkb1JlYWQgPSBmYWxzZTtcbiAgICBkZWJ1ZygncmVhZGluZyBvciBlbmRlZCcsIGRvUmVhZCk7XG4gIH0gZWxzZSBpZiAoZG9SZWFkKSB7XG4gICAgZGVidWcoJ2RvIHJlYWQnKTtcbiAgICBzdGF0ZS5yZWFkaW5nID0gdHJ1ZTtcbiAgICBzdGF0ZS5zeW5jID0gdHJ1ZTsgLy8gaWYgdGhlIGxlbmd0aCBpcyBjdXJyZW50bHkgemVybywgdGhlbiB3ZSAqbmVlZCogYSByZWFkYWJsZSBldmVudC5cblxuICAgIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHN0YXRlLm5lZWRSZWFkYWJsZSA9IHRydWU7IC8vIGNhbGwgaW50ZXJuYWwgcmVhZCBtZXRob2RcblxuICAgIHRoaXMuX3JlYWQoc3RhdGUuaGlnaFdhdGVyTWFyayk7XG5cbiAgICBzdGF0ZS5zeW5jID0gZmFsc2U7IC8vIElmIF9yZWFkIHB1c2hlZCBkYXRhIHN5bmNocm9ub3VzbHksIHRoZW4gYHJlYWRpbmdgIHdpbGwgYmUgZmFsc2UsXG4gICAgLy8gYW5kIHdlIG5lZWQgdG8gcmUtZXZhbHVhdGUgaG93IG11Y2ggZGF0YSB3ZSBjYW4gcmV0dXJuIHRvIHRoZSB1c2VyLlxuXG4gICAgaWYgKCFzdGF0ZS5yZWFkaW5nKSBuID0gaG93TXVjaFRvUmVhZChuT3JpZywgc3RhdGUpO1xuICB9XG5cbiAgdmFyIHJldDtcbiAgaWYgKG4gPiAwKSByZXQgPSBmcm9tTGlzdChuLCBzdGF0ZSk7ZWxzZSByZXQgPSBudWxsO1xuXG4gIGlmIChyZXQgPT09IG51bGwpIHtcbiAgICBzdGF0ZS5uZWVkUmVhZGFibGUgPSBzdGF0ZS5sZW5ndGggPD0gc3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgICBuID0gMDtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZS5sZW5ndGggLT0gbjtcbiAgICBzdGF0ZS5hd2FpdERyYWluID0gMDtcbiAgfVxuXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHtcbiAgICAvLyBJZiB3ZSBoYXZlIG5vdGhpbmcgaW4gdGhlIGJ1ZmZlciwgdGhlbiB3ZSB3YW50IHRvIGtub3dcbiAgICAvLyBhcyBzb29uIGFzIHdlICpkbyogZ2V0IHNvbWV0aGluZyBpbnRvIHRoZSBidWZmZXIuXG4gICAgaWYgKCFzdGF0ZS5lbmRlZCkgc3RhdGUubmVlZFJlYWRhYmxlID0gdHJ1ZTsgLy8gSWYgd2UgdHJpZWQgdG8gcmVhZCgpIHBhc3QgdGhlIEVPRiwgdGhlbiBlbWl0IGVuZCBvbiB0aGUgbmV4dCB0aWNrLlxuXG4gICAgaWYgKG5PcmlnICE9PSBuICYmIHN0YXRlLmVuZGVkKSBlbmRSZWFkYWJsZSh0aGlzKTtcbiAgfVxuXG4gIGlmIChyZXQgIT09IG51bGwpIHRoaXMuZW1pdCgnZGF0YScsIHJldCk7XG4gIHJldHVybiByZXQ7XG59O1xuXG5mdW5jdGlvbiBvbkVvZkNodW5rKHN0cmVhbSwgc3RhdGUpIHtcbiAgZGVidWcoJ29uRW9mQ2h1bmsnKTtcbiAgaWYgKHN0YXRlLmVuZGVkKSByZXR1cm47XG5cbiAgaWYgKHN0YXRlLmRlY29kZXIpIHtcbiAgICB2YXIgY2h1bmsgPSBzdGF0ZS5kZWNvZGVyLmVuZCgpO1xuXG4gICAgaWYgKGNodW5rICYmIGNodW5rLmxlbmd0aCkge1xuICAgICAgc3RhdGUuYnVmZmVyLnB1c2goY2h1bmspO1xuICAgICAgc3RhdGUubGVuZ3RoICs9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlLmVuZGVkID0gdHJ1ZTtcblxuICBpZiAoc3RhdGUuc3luYykge1xuICAgIC8vIGlmIHdlIGFyZSBzeW5jLCB3YWl0IHVudGlsIG5leHQgdGljayB0byBlbWl0IHRoZSBkYXRhLlxuICAgIC8vIE90aGVyd2lzZSB3ZSByaXNrIGVtaXR0aW5nIGRhdGEgaW4gdGhlIGZsb3coKVxuICAgIC8vIHRoZSByZWFkYWJsZSBjb2RlIHRyaWdnZXJzIGR1cmluZyBhIHJlYWQoKSBjYWxsXG4gICAgZW1pdFJlYWRhYmxlKHN0cmVhbSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gZW1pdCAncmVhZGFibGUnIG5vdyB0byBtYWtlIHN1cmUgaXQgZ2V0cyBwaWNrZWQgdXAuXG4gICAgc3RhdGUubmVlZFJlYWRhYmxlID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0YXRlLmVtaXR0ZWRSZWFkYWJsZSkge1xuICAgICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICAgIGVtaXRSZWFkYWJsZV8oc3RyZWFtKTtcbiAgICB9XG4gIH1cbn0gLy8gRG9uJ3QgZW1pdCByZWFkYWJsZSByaWdodCBhd2F5IGluIHN5bmMgbW9kZSwgYmVjYXVzZSB0aGlzIGNhbiB0cmlnZ2VyXG4vLyBhbm90aGVyIHJlYWQoKSBjYWxsID0+IHN0YWNrIG92ZXJmbG93LiAgVGhpcyB3YXksIGl0IG1pZ2h0IHRyaWdnZXJcbi8vIGEgbmV4dFRpY2sgcmVjdXJzaW9uIHdhcm5pbmcsIGJ1dCB0aGF0J3Mgbm90IHNvIGJhZC5cblxuXG5mdW5jdGlvbiBlbWl0UmVhZGFibGUoc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgZGVidWcoJ2VtaXRSZWFkYWJsZScsIHN0YXRlLm5lZWRSZWFkYWJsZSwgc3RhdGUuZW1pdHRlZFJlYWRhYmxlKTtcbiAgc3RhdGUubmVlZFJlYWRhYmxlID0gZmFsc2U7XG5cbiAgaWYgKCFzdGF0ZS5lbWl0dGVkUmVhZGFibGUpIHtcbiAgICBkZWJ1ZygnZW1pdFJlYWRhYmxlJywgc3RhdGUuZmxvd2luZyk7XG4gICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gdHJ1ZTtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRSZWFkYWJsZV8sIHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW1pdFJlYWRhYmxlXyhzdHJlYW0pIHtcbiAgdmFyIHN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuICBkZWJ1ZygnZW1pdFJlYWRhYmxlXycsIHN0YXRlLmRlc3Ryb3llZCwgc3RhdGUubGVuZ3RoLCBzdGF0ZS5lbmRlZCk7XG5cbiAgaWYgKCFzdGF0ZS5kZXN0cm95ZWQgJiYgKHN0YXRlLmxlbmd0aCB8fCBzdGF0ZS5lbmRlZCkpIHtcbiAgICBzdHJlYW0uZW1pdCgncmVhZGFibGUnKTtcbiAgICBzdGF0ZS5lbWl0dGVkUmVhZGFibGUgPSBmYWxzZTtcbiAgfSAvLyBUaGUgc3RyZWFtIG5lZWRzIGFub3RoZXIgcmVhZGFibGUgZXZlbnQgaWZcbiAgLy8gMS4gSXQgaXMgbm90IGZsb3dpbmcsIGFzIHRoZSBmbG93IG1lY2hhbmlzbSB3aWxsIHRha2VcbiAgLy8gICAgY2FyZSBvZiBpdC5cbiAgLy8gMi4gSXQgaXMgbm90IGVuZGVkLlxuICAvLyAzLiBJdCBpcyBiZWxvdyB0aGUgaGlnaFdhdGVyTWFyaywgc28gd2UgY2FuIHNjaGVkdWxlXG4gIC8vICAgIGFub3RoZXIgcmVhZGFibGUgbGF0ZXIuXG5cblxuICBzdGF0ZS5uZWVkUmVhZGFibGUgPSAhc3RhdGUuZmxvd2luZyAmJiAhc3RhdGUuZW5kZWQgJiYgc3RhdGUubGVuZ3RoIDw9IHN0YXRlLmhpZ2hXYXRlck1hcms7XG4gIGZsb3coc3RyZWFtKTtcbn0gLy8gYXQgdGhpcyBwb2ludCwgdGhlIHVzZXIgaGFzIHByZXN1bWFibHkgc2VlbiB0aGUgJ3JlYWRhYmxlJyBldmVudCxcbi8vIGFuZCBjYWxsZWQgcmVhZCgpIHRvIGNvbnN1bWUgc29tZSBkYXRhLiAgdGhhdCBtYXkgaGF2ZSB0cmlnZ2VyZWRcbi8vIGluIHR1cm4gYW5vdGhlciBfcmVhZChuKSBjYWxsLCBpbiB3aGljaCBjYXNlIHJlYWRpbmcgPSB0cnVlIGlmXG4vLyBpdCdzIGluIHByb2dyZXNzLlxuLy8gSG93ZXZlciwgaWYgd2UncmUgbm90IGVuZGVkLCBvciByZWFkaW5nLCBhbmQgdGhlIGxlbmd0aCA8IGh3bSxcbi8vIHRoZW4gZ28gYWhlYWQgYW5kIHRyeSB0byByZWFkIHNvbWUgbW9yZSBwcmVlbXB0aXZlbHkuXG5cblxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVhZGluZ01vcmUpIHtcbiAgICBzdGF0ZS5yZWFkaW5nTW9yZSA9IHRydWU7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhtYXliZVJlYWRNb3JlXywgc3RyZWFtLCBzdGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF5YmVSZWFkTW9yZV8oc3RyZWFtLCBzdGF0ZSkge1xuICAvLyBBdHRlbXB0IHRvIHJlYWQgbW9yZSBkYXRhIGlmIHdlIHNob3VsZC5cbiAgLy9cbiAgLy8gVGhlIGNvbmRpdGlvbnMgZm9yIHJlYWRpbmcgbW9yZSBkYXRhIGFyZSAob25lIG9mKTpcbiAgLy8gLSBOb3QgZW5vdWdoIGRhdGEgYnVmZmVyZWQgKHN0YXRlLmxlbmd0aCA8IHN0YXRlLmhpZ2hXYXRlck1hcmspLiBUaGUgbG9vcFxuICAvLyAgIGlzIHJlc3BvbnNpYmxlIGZvciBmaWxsaW5nIHRoZSBidWZmZXIgd2l0aCBlbm91Z2ggZGF0YSBpZiBzdWNoIGRhdGFcbiAgLy8gICBpcyBhdmFpbGFibGUuIElmIGhpZ2hXYXRlck1hcmsgaXMgMCBhbmQgd2UgYXJlIG5vdCBpbiB0aGUgZmxvd2luZyBtb2RlXG4gIC8vICAgd2Ugc2hvdWxkIF9ub3RfIGF0dGVtcHQgdG8gYnVmZmVyIGFueSBleHRyYSBkYXRhLiBXZSdsbCBnZXQgbW9yZSBkYXRhXG4gIC8vICAgd2hlbiB0aGUgc3RyZWFtIGNvbnN1bWVyIGNhbGxzIHJlYWQoKSBpbnN0ZWFkLlxuICAvLyAtIE5vIGRhdGEgaW4gdGhlIGJ1ZmZlciwgYW5kIHRoZSBzdHJlYW0gaXMgaW4gZmxvd2luZyBtb2RlLiBJbiB0aGlzIG1vZGVcbiAgLy8gICB0aGUgbG9vcCBiZWxvdyBpcyByZXNwb25zaWJsZSBmb3IgZW5zdXJpbmcgcmVhZCgpIGlzIGNhbGxlZC4gRmFpbGluZyB0b1xuICAvLyAgIGNhbGwgcmVhZCBoZXJlIHdvdWxkIGFib3J0IHRoZSBmbG93IGFuZCB0aGVyZSdzIG5vIG90aGVyIG1lY2hhbmlzbSBmb3JcbiAgLy8gICBjb250aW51aW5nIHRoZSBmbG93IGlmIHRoZSBzdHJlYW0gY29uc3VtZXIgaGFzIGp1c3Qgc3Vic2NyaWJlZCB0byB0aGVcbiAgLy8gICAnZGF0YScgZXZlbnQuXG4gIC8vXG4gIC8vIEluIGFkZGl0aW9uIHRvIHRoZSBhYm92ZSBjb25kaXRpb25zIHRvIGtlZXAgcmVhZGluZyBkYXRhLCB0aGUgZm9sbG93aW5nXG4gIC8vIGNvbmRpdGlvbnMgcHJldmVudCB0aGUgZGF0YSBmcm9tIGJlaW5nIHJlYWQ6XG4gIC8vIC0gVGhlIHN0cmVhbSBoYXMgZW5kZWQgKHN0YXRlLmVuZGVkKS5cbiAgLy8gLSBUaGVyZSBpcyBhbHJlYWR5IGEgcGVuZGluZyAncmVhZCcgb3BlcmF0aW9uIChzdGF0ZS5yZWFkaW5nKS4gVGhpcyBpcyBhXG4gIC8vICAgY2FzZSB3aGVyZSB0aGUgdGhlIHN0cmVhbSBoYXMgY2FsbGVkIHRoZSBpbXBsZW1lbnRhdGlvbiBkZWZpbmVkIF9yZWFkKClcbiAgLy8gICBtZXRob2QsIGJ1dCB0aGV5IGFyZSBwcm9jZXNzaW5nIHRoZSBjYWxsIGFzeW5jaHJvbm91c2x5IGFuZCBoYXZlIF9ub3RfXG4gIC8vICAgY2FsbGVkIHB1c2goKSB3aXRoIG5ldyBkYXRhLiBJbiB0aGlzIGNhc2Ugd2Ugc2tpcCBwZXJmb3JtaW5nIG1vcmVcbiAgLy8gICByZWFkKClzLiBUaGUgZXhlY3V0aW9uIGVuZHMgaW4gdGhpcyBtZXRob2QgYWdhaW4gYWZ0ZXIgdGhlIF9yZWFkKCkgZW5kc1xuICAvLyAgIHVwIGNhbGxpbmcgcHVzaCgpIHdpdGggbW9yZSBkYXRhLlxuICB3aGlsZSAoIXN0YXRlLnJlYWRpbmcgJiYgIXN0YXRlLmVuZGVkICYmIChzdGF0ZS5sZW5ndGggPCBzdGF0ZS5oaWdoV2F0ZXJNYXJrIHx8IHN0YXRlLmZsb3dpbmcgJiYgc3RhdGUubGVuZ3RoID09PSAwKSkge1xuICAgIHZhciBsZW4gPSBzdGF0ZS5sZW5ndGg7XG4gICAgZGVidWcoJ21heWJlUmVhZE1vcmUgcmVhZCAwJyk7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gICAgaWYgKGxlbiA9PT0gc3RhdGUubGVuZ3RoKSAvLyBkaWRuJ3QgZ2V0IGFueSBkYXRhLCBzdG9wIHNwaW5uaW5nLlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBzdGF0ZS5yZWFkaW5nTW9yZSA9IGZhbHNlO1xufSAvLyBhYnN0cmFjdCBtZXRob2QuICB0byBiZSBvdmVycmlkZGVuIGluIHNwZWNpZmljIGltcGxlbWVudGF0aW9uIGNsYXNzZXMuXG4vLyBjYWxsIGNiKGVyLCBkYXRhKSB3aGVyZSBkYXRhIGlzIDw9IG4gaW4gbGVuZ3RoLlxuLy8gZm9yIHZpcnR1YWwgKG5vbi1zdHJpbmcsIG5vbi1idWZmZXIpIHN0cmVhbXMsIFwibGVuZ3RoXCIgaXMgc29tZXdoYXRcbi8vIGFyYml0cmFyeSwgYW5kIHBlcmhhcHMgbm90IHZlcnkgbWVhbmluZ2Z1bC5cblxuXG5SZWFkYWJsZS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICBlcnJvck9yRGVzdHJveSh0aGlzLCBuZXcgRVJSX01FVEhPRF9OT1RfSU1QTEVNRU5URUQoJ19yZWFkKCknKSk7XG59O1xuXG5SZWFkYWJsZS5wcm90b3R5cGUucGlwZSA9IGZ1bmN0aW9uIChkZXN0LCBwaXBlT3B0cykge1xuICB2YXIgc3JjID0gdGhpcztcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBzd2l0Y2ggKHN0YXRlLnBpcGVzQ291bnQpIHtcbiAgICBjYXNlIDA6XG4gICAgICBzdGF0ZS5waXBlcyA9IGRlc3Q7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgMTpcbiAgICAgIHN0YXRlLnBpcGVzID0gW3N0YXRlLnBpcGVzLCBkZXN0XTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHN0YXRlLnBpcGVzLnB1c2goZGVzdCk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHN0YXRlLnBpcGVzQ291bnQgKz0gMTtcbiAgZGVidWcoJ3BpcGUgY291bnQ9JWQgb3B0cz0laicsIHN0YXRlLnBpcGVzQ291bnQsIHBpcGVPcHRzKTtcbiAgdmFyIGRvRW5kID0gKCFwaXBlT3B0cyB8fCBwaXBlT3B0cy5lbmQgIT09IGZhbHNlKSAmJiBkZXN0ICE9PSBwcm9jZXNzLnN0ZG91dCAmJiBkZXN0ICE9PSBwcm9jZXNzLnN0ZGVycjtcbiAgdmFyIGVuZEZuID0gZG9FbmQgPyBvbmVuZCA6IHVucGlwZTtcbiAgaWYgKHN0YXRlLmVuZEVtaXR0ZWQpIHByb2Nlc3MubmV4dFRpY2soZW5kRm4pO2Vsc2Ugc3JjLm9uY2UoJ2VuZCcsIGVuZEZuKTtcbiAgZGVzdC5vbigndW5waXBlJywgb251bnBpcGUpO1xuXG4gIGZ1bmN0aW9uIG9udW5waXBlKHJlYWRhYmxlLCB1bnBpcGVJbmZvKSB7XG4gICAgZGVidWcoJ29udW5waXBlJyk7XG5cbiAgICBpZiAocmVhZGFibGUgPT09IHNyYykge1xuICAgICAgaWYgKHVucGlwZUluZm8gJiYgdW5waXBlSW5mby5oYXNVbnBpcGVkID09PSBmYWxzZSkge1xuICAgICAgICB1bnBpcGVJbmZvLmhhc1VucGlwZWQgPSB0cnVlO1xuICAgICAgICBjbGVhbnVwKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25lbmQoKSB7XG4gICAgZGVidWcoJ29uZW5kJyk7XG4gICAgZGVzdC5lbmQoKTtcbiAgfSAvLyB3aGVuIHRoZSBkZXN0IGRyYWlucywgaXQgcmVkdWNlcyB0aGUgYXdhaXREcmFpbiBjb3VudGVyXG4gIC8vIG9uIHRoZSBzb3VyY2UuICBUaGlzIHdvdWxkIGJlIG1vcmUgZWxlZ2FudCB3aXRoIGEgLm9uY2UoKVxuICAvLyBoYW5kbGVyIGluIGZsb3coKSwgYnV0IGFkZGluZyBhbmQgcmVtb3ZpbmcgcmVwZWF0ZWRseSBpc1xuICAvLyB0b28gc2xvdy5cblxuXG4gIHZhciBvbmRyYWluID0gcGlwZU9uRHJhaW4oc3JjKTtcbiAgZGVzdC5vbignZHJhaW4nLCBvbmRyYWluKTtcbiAgdmFyIGNsZWFuZWRVcCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgZGVidWcoJ2NsZWFudXAnKTsgLy8gY2xlYW51cCBldmVudCBoYW5kbGVycyBvbmNlIHRoZSBwaXBlIGlzIGJyb2tlblxuXG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignZHJhaW4nLCBvbmRyYWluKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGRlc3QucmVtb3ZlTGlzdGVuZXIoJ3VucGlwZScsIG9udW5waXBlKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcbiAgICBzcmMucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIHVucGlwZSk7XG4gICAgc3JjLnJlbW92ZUxpc3RlbmVyKCdkYXRhJywgb25kYXRhKTtcbiAgICBjbGVhbmVkVXAgPSB0cnVlOyAvLyBpZiB0aGUgcmVhZGVyIGlzIHdhaXRpbmcgZm9yIGEgZHJhaW4gZXZlbnQgZnJvbSB0aGlzXG4gICAgLy8gc3BlY2lmaWMgd3JpdGVyLCB0aGVuIGl0IHdvdWxkIGNhdXNlIGl0IHRvIG5ldmVyIHN0YXJ0XG4gICAgLy8gZmxvd2luZyBhZ2Fpbi5cbiAgICAvLyBTbywgaWYgdGhpcyBpcyBhd2FpdGluZyBhIGRyYWluLCB0aGVuIHdlIGp1c3QgY2FsbCBpdCBub3cuXG4gICAgLy8gSWYgd2UgZG9uJ3Qga25vdywgdGhlbiBhc3N1bWUgdGhhdCB3ZSBhcmUgd2FpdGluZyBmb3Igb25lLlxuXG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gJiYgKCFkZXN0Ll93cml0YWJsZVN0YXRlIHx8IGRlc3QuX3dyaXRhYmxlU3RhdGUubmVlZERyYWluKSkgb25kcmFpbigpO1xuICB9XG5cbiAgc3JjLm9uKCdkYXRhJywgb25kYXRhKTtcblxuICBmdW5jdGlvbiBvbmRhdGEoY2h1bmspIHtcbiAgICBkZWJ1Zygnb25kYXRhJyk7XG4gICAgdmFyIHJldCA9IGRlc3Qud3JpdGUoY2h1bmspO1xuICAgIGRlYnVnKCdkZXN0LndyaXRlJywgcmV0KTtcblxuICAgIGlmIChyZXQgPT09IGZhbHNlKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciB1bnBpcGVkIGR1cmluZyBgZGVzdC53cml0ZSgpYCwgaXQgaXMgcG9zc2libGVcbiAgICAgIC8vIHRvIGdldCBzdHVjayBpbiBhIHBlcm1hbmVudGx5IHBhdXNlZCBzdGF0ZSBpZiB0aGF0IHdyaXRlXG4gICAgICAvLyBhbHNvIHJldHVybmVkIGZhbHNlLlxuICAgICAgLy8gPT4gQ2hlY2sgd2hldGhlciBgZGVzdGAgaXMgc3RpbGwgYSBwaXBpbmcgZGVzdGluYXRpb24uXG4gICAgICBpZiAoKHN0YXRlLnBpcGVzQ291bnQgPT09IDEgJiYgc3RhdGUucGlwZXMgPT09IGRlc3QgfHwgc3RhdGUucGlwZXNDb3VudCA+IDEgJiYgaW5kZXhPZihzdGF0ZS5waXBlcywgZGVzdCkgIT09IC0xKSAmJiAhY2xlYW5lZFVwKSB7XG4gICAgICAgIGRlYnVnKCdmYWxzZSB3cml0ZSByZXNwb25zZSwgcGF1c2UnLCBzdGF0ZS5hd2FpdERyYWluKTtcbiAgICAgICAgc3RhdGUuYXdhaXREcmFpbisrO1xuICAgICAgfVxuXG4gICAgICBzcmMucGF1c2UoKTtcbiAgICB9XG4gIH0gLy8gaWYgdGhlIGRlc3QgaGFzIGFuIGVycm9yLCB0aGVuIHN0b3AgcGlwaW5nIGludG8gaXQuXG4gIC8vIGhvd2V2ZXIsIGRvbid0IHN1cHByZXNzIHRoZSB0aHJvd2luZyBiZWhhdmlvciBmb3IgdGhpcy5cblxuXG4gIGZ1bmN0aW9uIG9uZXJyb3IoZXIpIHtcbiAgICBkZWJ1Zygnb25lcnJvcicsIGVyKTtcbiAgICB1bnBpcGUoKTtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIGlmIChFRWxpc3RlbmVyQ291bnQoZGVzdCwgJ2Vycm9yJykgPT09IDApIGVycm9yT3JEZXN0cm95KGRlc3QsIGVyKTtcbiAgfSAvLyBNYWtlIHN1cmUgb3VyIGVycm9yIGhhbmRsZXIgaXMgYXR0YWNoZWQgYmVmb3JlIHVzZXJsYW5kIG9uZXMuXG5cblxuICBwcmVwZW5kTGlzdGVuZXIoZGVzdCwgJ2Vycm9yJywgb25lcnJvcik7IC8vIEJvdGggY2xvc2UgYW5kIGZpbmlzaCBzaG91bGQgdHJpZ2dlciB1bnBpcGUsIGJ1dCBvbmx5IG9uY2UuXG5cbiAgZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICBkZXN0LnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgdW5waXBlKCk7XG4gIH1cblxuICBkZXN0Lm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG5cbiAgZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgZGVidWcoJ29uZmluaXNoJyk7XG4gICAgZGVzdC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICB1bnBpcGUoKTtcbiAgfVxuXG4gIGRlc3Qub25jZSgnZmluaXNoJywgb25maW5pc2gpO1xuXG4gIGZ1bmN0aW9uIHVucGlwZSgpIHtcbiAgICBkZWJ1ZygndW5waXBlJyk7XG4gICAgc3JjLnVucGlwZShkZXN0KTtcbiAgfSAvLyB0ZWxsIHRoZSBkZXN0IHRoYXQgaXQncyBiZWluZyBwaXBlZCB0b1xuXG5cbiAgZGVzdC5lbWl0KCdwaXBlJywgc3JjKTsgLy8gc3RhcnQgdGhlIGZsb3cgaWYgaXQgaGFzbid0IGJlZW4gc3RhcnRlZCBhbHJlYWR5LlxuXG4gIGlmICghc3RhdGUuZmxvd2luZykge1xuICAgIGRlYnVnKCdwaXBlIHJlc3VtZScpO1xuICAgIHNyYy5yZXN1bWUoKTtcbiAgfVxuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZnVuY3Rpb24gcGlwZU9uRHJhaW4oc3JjKSB7XG4gIHJldHVybiBmdW5jdGlvbiBwaXBlT25EcmFpbkZ1bmN0aW9uUmVzdWx0KCkge1xuICAgIHZhciBzdGF0ZSA9IHNyYy5fcmVhZGFibGVTdGF0ZTtcbiAgICBkZWJ1ZygncGlwZU9uRHJhaW4nLCBzdGF0ZS5hd2FpdERyYWluKTtcbiAgICBpZiAoc3RhdGUuYXdhaXREcmFpbikgc3RhdGUuYXdhaXREcmFpbi0tO1xuXG4gICAgaWYgKHN0YXRlLmF3YWl0RHJhaW4gPT09IDAgJiYgRUVsaXN0ZW5lckNvdW50KHNyYywgJ2RhdGEnKSkge1xuICAgICAgc3RhdGUuZmxvd2luZyA9IHRydWU7XG4gICAgICBmbG93KHNyYyk7XG4gICAgfVxuICB9O1xufVxuXG5SZWFkYWJsZS5wcm90b3R5cGUudW5waXBlID0gZnVuY3Rpb24gKGRlc3QpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHVucGlwZUluZm8gPSB7XG4gICAgaGFzVW5waXBlZDogZmFsc2VcbiAgfTsgLy8gaWYgd2UncmUgbm90IHBpcGluZyBhbnl3aGVyZSwgdGhlbiBkbyBub3RoaW5nLlxuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAwKSByZXR1cm4gdGhpczsgLy8ganVzdCBvbmUgZGVzdGluYXRpb24uICBtb3N0IGNvbW1vbiBjYXNlLlxuXG4gIGlmIChzdGF0ZS5waXBlc0NvdW50ID09PSAxKSB7XG4gICAgLy8gcGFzc2VkIGluIG9uZSwgYnV0IGl0J3Mgbm90IHRoZSByaWdodCBvbmUuXG4gICAgaWYgKGRlc3QgJiYgZGVzdCAhPT0gc3RhdGUucGlwZXMpIHJldHVybiB0aGlzO1xuICAgIGlmICghZGVzdCkgZGVzdCA9IHN0YXRlLnBpcGVzOyAvLyBnb3QgYSBtYXRjaC5cblxuICAgIHN0YXRlLnBpcGVzID0gbnVsbDtcbiAgICBzdGF0ZS5waXBlc0NvdW50ID0gMDtcbiAgICBzdGF0ZS5mbG93aW5nID0gZmFsc2U7XG4gICAgaWYgKGRlc3QpIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcywgdW5waXBlSW5mbyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0gLy8gc2xvdyBjYXNlLiBtdWx0aXBsZSBwaXBlIGRlc3RpbmF0aW9ucy5cblxuXG4gIGlmICghZGVzdCkge1xuICAgIC8vIHJlbW92ZSBhbGwuXG4gICAgdmFyIGRlc3RzID0gc3RhdGUucGlwZXM7XG4gICAgdmFyIGxlbiA9IHN0YXRlLnBpcGVzQ291bnQ7XG4gICAgc3RhdGUucGlwZXMgPSBudWxsO1xuICAgIHN0YXRlLnBpcGVzQ291bnQgPSAwO1xuICAgIHN0YXRlLmZsb3dpbmcgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGRlc3RzW2ldLmVtaXQoJ3VucGlwZScsIHRoaXMsIHtcbiAgICAgICAgaGFzVW5waXBlZDogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9IC8vIHRyeSB0byBmaW5kIHRoZSByaWdodCBvbmUuXG5cblxuICB2YXIgaW5kZXggPSBpbmRleE9mKHN0YXRlLnBpcGVzLCBkZXN0KTtcbiAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIHRoaXM7XG4gIHN0YXRlLnBpcGVzLnNwbGljZShpbmRleCwgMSk7XG4gIHN0YXRlLnBpcGVzQ291bnQgLT0gMTtcbiAgaWYgKHN0YXRlLnBpcGVzQ291bnQgPT09IDEpIHN0YXRlLnBpcGVzID0gc3RhdGUucGlwZXNbMF07XG4gIGRlc3QuZW1pdCgndW5waXBlJywgdGhpcywgdW5waXBlSW5mbyk7XG4gIHJldHVybiB0aGlzO1xufTsgLy8gc2V0IHVwIGRhdGEgZXZlbnRzIGlmIHRoZXkgYXJlIGFza2VkIGZvclxuLy8gRW5zdXJlIHJlYWRhYmxlIGxpc3RlbmVycyBldmVudHVhbGx5IGdldCBzb21ldGhpbmdcblxuXG5SZWFkYWJsZS5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXYsIGZuKSB7XG4gIHZhciByZXMgPSBTdHJlYW0ucHJvdG90eXBlLm9uLmNhbGwodGhpcywgZXYsIGZuKTtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBpZiAoZXYgPT09ICdkYXRhJykge1xuICAgIC8vIHVwZGF0ZSByZWFkYWJsZUxpc3RlbmluZyBzbyB0aGF0IHJlc3VtZSgpIG1heSBiZSBhIG5vLW9wXG4gICAgLy8gYSBmZXcgbGluZXMgZG93bi4gVGhpcyBpcyBuZWVkZWQgdG8gc3VwcG9ydCBvbmNlKCdyZWFkYWJsZScpLlxuICAgIHN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nID0gdGhpcy5saXN0ZW5lckNvdW50KCdyZWFkYWJsZScpID4gMDsgLy8gVHJ5IHN0YXJ0IGZsb3dpbmcgb24gbmV4dCB0aWNrIGlmIHN0cmVhbSBpc24ndCBleHBsaWNpdGx5IHBhdXNlZFxuXG4gICAgaWYgKHN0YXRlLmZsb3dpbmcgIT09IGZhbHNlKSB0aGlzLnJlc3VtZSgpO1xuICB9IGVsc2UgaWYgKGV2ID09PSAncmVhZGFibGUnKSB7XG4gICAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmICFzdGF0ZS5yZWFkYWJsZUxpc3RlbmluZykge1xuICAgICAgc3RhdGUucmVhZGFibGVMaXN0ZW5pbmcgPSBzdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlO1xuICAgICAgc3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZW1pdHRlZFJlYWRhYmxlID0gZmFsc2U7XG4gICAgICBkZWJ1Zygnb24gcmVhZGFibGUnLCBzdGF0ZS5sZW5ndGgsIHN0YXRlLnJlYWRpbmcpO1xuXG4gICAgICBpZiAoc3RhdGUubGVuZ3RoKSB7XG4gICAgICAgIGVtaXRSZWFkYWJsZSh0aGlzKTtcbiAgICAgIH0gZWxzZSBpZiAoIXN0YXRlLnJlYWRpbmcpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhuUmVhZGluZ05leHRUaWNrLCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuUmVhZGFibGUucHJvdG90eXBlLmFkZExpc3RlbmVyID0gUmVhZGFibGUucHJvdG90eXBlLm9uO1xuXG5SZWFkYWJsZS5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZXYsIGZuKSB7XG4gIHZhciByZXMgPSBTdHJlYW0ucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyLmNhbGwodGhpcywgZXYsIGZuKTtcblxuICBpZiAoZXYgPT09ICdyZWFkYWJsZScpIHtcbiAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGlmIHRoZXJlIGlzIHNvbWVvbmUgc3RpbGwgbGlzdGVuaW5nIHRvXG4gICAgLy8gcmVhZGFibGUgYW5kIHJlc2V0IHRoZSBzdGF0ZS4gSG93ZXZlciB0aGlzIG5lZWRzIHRvIGhhcHBlblxuICAgIC8vIGFmdGVyIHJlYWRhYmxlIGhhcyBiZWVuIGVtaXR0ZWQgYnV0IGJlZm9yZSBJL08gKG5leHRUaWNrKSB0b1xuICAgIC8vIHN1cHBvcnQgb25jZSgncmVhZGFibGUnLCBmbikgY3ljbGVzLiBUaGlzIG1lYW5zIHRoYXQgY2FsbGluZ1xuICAgIC8vIHJlc3VtZSB3aXRoaW4gdGhlIHNhbWUgdGljayB3aWxsIGhhdmUgbm9cbiAgICAvLyBlZmZlY3QuXG4gICAgcHJvY2Vzcy5uZXh0VGljayh1cGRhdGVSZWFkYWJsZUxpc3RlbmluZywgdGhpcyk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuUmVhZGFibGUucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIChldikge1xuICB2YXIgcmVzID0gU3RyZWFtLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBpZiAoZXYgPT09ICdyZWFkYWJsZScgfHwgZXYgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgaWYgdGhlcmUgaXMgc29tZW9uZSBzdGlsbCBsaXN0ZW5pbmcgdG9cbiAgICAvLyByZWFkYWJsZSBhbmQgcmVzZXQgdGhlIHN0YXRlLiBIb3dldmVyIHRoaXMgbmVlZHMgdG8gaGFwcGVuXG4gICAgLy8gYWZ0ZXIgcmVhZGFibGUgaGFzIGJlZW4gZW1pdHRlZCBidXQgYmVmb3JlIEkvTyAobmV4dFRpY2spIHRvXG4gICAgLy8gc3VwcG9ydCBvbmNlKCdyZWFkYWJsZScsIGZuKSBjeWNsZXMuIFRoaXMgbWVhbnMgdGhhdCBjYWxsaW5nXG4gICAgLy8gcmVzdW1lIHdpdGhpbiB0aGUgc2FtZSB0aWNrIHdpbGwgaGF2ZSBub1xuICAgIC8vIGVmZmVjdC5cbiAgICBwcm9jZXNzLm5leHRUaWNrKHVwZGF0ZVJlYWRhYmxlTGlzdGVuaW5nLCB0aGlzKTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVSZWFkYWJsZUxpc3RlbmluZyhzZWxmKSB7XG4gIHZhciBzdGF0ZSA9IHNlbGYuX3JlYWRhYmxlU3RhdGU7XG4gIHN0YXRlLnJlYWRhYmxlTGlzdGVuaW5nID0gc2VsZi5saXN0ZW5lckNvdW50KCdyZWFkYWJsZScpID4gMDtcblxuICBpZiAoc3RhdGUucmVzdW1lU2NoZWR1bGVkICYmICFzdGF0ZS5wYXVzZWQpIHtcbiAgICAvLyBmbG93aW5nIG5lZWRzIHRvIGJlIHNldCB0byB0cnVlIG5vdywgb3RoZXJ3aXNlXG4gICAgLy8gdGhlIHVwY29taW5nIHJlc3VtZSB3aWxsIG5vdCBmbG93LlxuICAgIHN0YXRlLmZsb3dpbmcgPSB0cnVlOyAvLyBjcnVkZSB3YXkgdG8gY2hlY2sgaWYgd2Ugc2hvdWxkIHJlc3VtZVxuICB9IGVsc2UgaWYgKHNlbGYubGlzdGVuZXJDb3VudCgnZGF0YScpID4gMCkge1xuICAgIHNlbGYucmVzdW1lKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gblJlYWRpbmdOZXh0VGljayhzZWxmKSB7XG4gIGRlYnVnKCdyZWFkYWJsZSBuZXh0dGljayByZWFkIDAnKTtcbiAgc2VsZi5yZWFkKDApO1xufSAvLyBwYXVzZSgpIGFuZCByZXN1bWUoKSBhcmUgcmVtbmFudHMgb2YgdGhlIGxlZ2FjeSByZWFkYWJsZSBzdHJlYW0gQVBJXG4vLyBJZiB0aGUgdXNlciB1c2VzIHRoZW0sIHRoZW4gc3dpdGNoIGludG8gb2xkIG1vZGUuXG5cblxuUmVhZGFibGUucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcblxuICBpZiAoIXN0YXRlLmZsb3dpbmcpIHtcbiAgICBkZWJ1ZygncmVzdW1lJyk7IC8vIHdlIGZsb3cgb25seSBpZiB0aGVyZSBpcyBubyBvbmUgbGlzdGVuaW5nXG4gICAgLy8gZm9yIHJlYWRhYmxlLCBidXQgd2Ugc3RpbGwgaGF2ZSB0byBjYWxsXG4gICAgLy8gcmVzdW1lKClcblxuICAgIHN0YXRlLmZsb3dpbmcgPSAhc3RhdGUucmVhZGFibGVMaXN0ZW5pbmc7XG4gICAgcmVzdW1lKHRoaXMsIHN0YXRlKTtcbiAgfVxuXG4gIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHJlc3VtZShzdHJlYW0sIHN0YXRlKSB7XG4gIGlmICghc3RhdGUucmVzdW1lU2NoZWR1bGVkKSB7XG4gICAgc3RhdGUucmVzdW1lU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICBwcm9jZXNzLm5leHRUaWNrKHJlc3VtZV8sIHN0cmVhbSwgc3RhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlc3VtZV8oc3RyZWFtLCBzdGF0ZSkge1xuICBkZWJ1ZygncmVzdW1lJywgc3RhdGUucmVhZGluZyk7XG5cbiAgaWYgKCFzdGF0ZS5yZWFkaW5nKSB7XG4gICAgc3RyZWFtLnJlYWQoMCk7XG4gIH1cblxuICBzdGF0ZS5yZXN1bWVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgc3RyZWFtLmVtaXQoJ3Jlc3VtZScpO1xuICBmbG93KHN0cmVhbSk7XG4gIGlmIChzdGF0ZS5mbG93aW5nICYmICFzdGF0ZS5yZWFkaW5nKSBzdHJlYW0ucmVhZCgwKTtcbn1cblxuUmVhZGFibGUucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygnY2FsbCBwYXVzZSBmbG93aW5nPSVqJywgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nKTtcblxuICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nICE9PSBmYWxzZSkge1xuICAgIGRlYnVnKCdwYXVzZScpO1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncGF1c2UnKTtcbiAgfVxuXG4gIHRoaXMuX3JlYWRhYmxlU3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5mdW5jdGlvbiBmbG93KHN0cmVhbSkge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIGRlYnVnKCdmbG93Jywgc3RhdGUuZmxvd2luZyk7XG5cbiAgd2hpbGUgKHN0YXRlLmZsb3dpbmcgJiYgc3RyZWFtLnJlYWQoKSAhPT0gbnVsbCkge1xuICAgIDtcbiAgfVxufSAvLyB3cmFwIGFuIG9sZC1zdHlsZSBzdHJlYW0gYXMgdGhlIGFzeW5jIGRhdGEgc291cmNlLlxuLy8gVGhpcyBpcyAqbm90KiBwYXJ0IG9mIHRoZSByZWFkYWJsZSBzdHJlYW0gaW50ZXJmYWNlLlxuLy8gSXQgaXMgYW4gdWdseSB1bmZvcnR1bmF0ZSBtZXNzIG9mIGhpc3RvcnkuXG5cblxuUmVhZGFibGUucHJvdG90eXBlLndyYXAgPSBmdW5jdGlvbiAoc3RyZWFtKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHN0YXRlID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgdmFyIHBhdXNlZCA9IGZhbHNlO1xuICBzdHJlYW0ub24oJ2VuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBlbmQnKTtcblxuICAgIGlmIChzdGF0ZS5kZWNvZGVyICYmICFzdGF0ZS5lbmRlZCkge1xuICAgICAgdmFyIGNodW5rID0gc3RhdGUuZGVjb2Rlci5lbmQoKTtcbiAgICAgIGlmIChjaHVuayAmJiBjaHVuay5sZW5ndGgpIF90aGlzLnB1c2goY2h1bmspO1xuICAgIH1cblxuICAgIF90aGlzLnB1c2gobnVsbCk7XG4gIH0pO1xuICBzdHJlYW0ub24oJ2RhdGEnLCBmdW5jdGlvbiAoY2h1bmspIHtcbiAgICBkZWJ1Zygnd3JhcHBlZCBkYXRhJyk7XG4gICAgaWYgKHN0YXRlLmRlY29kZXIpIGNodW5rID0gc3RhdGUuZGVjb2Rlci53cml0ZShjaHVuayk7IC8vIGRvbid0IHNraXAgb3ZlciBmYWxzeSB2YWx1ZXMgaW4gb2JqZWN0TW9kZVxuXG4gICAgaWYgKHN0YXRlLm9iamVjdE1vZGUgJiYgKGNodW5rID09PSBudWxsIHx8IGNodW5rID09PSB1bmRlZmluZWQpKSByZXR1cm47ZWxzZSBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgKCFjaHVuayB8fCAhY2h1bmsubGVuZ3RoKSkgcmV0dXJuO1xuXG4gICAgdmFyIHJldCA9IF90aGlzLnB1c2goY2h1bmspO1xuXG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIHBhdXNlZCA9IHRydWU7XG4gICAgICBzdHJlYW0ucGF1c2UoKTtcbiAgICB9XG4gIH0pOyAvLyBwcm94eSBhbGwgdGhlIG90aGVyIG1ldGhvZHMuXG4gIC8vIGltcG9ydGFudCB3aGVuIHdyYXBwaW5nIGZpbHRlcnMgYW5kIGR1cGxleGVzLlxuXG4gIGZvciAodmFyIGkgaW4gc3RyZWFtKSB7XG4gICAgaWYgKHRoaXNbaV0gPT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygc3RyZWFtW2ldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzW2ldID0gZnVuY3Rpb24gbWV0aG9kV3JhcChtZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG1ldGhvZFdyYXBSZXR1cm5GdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc3RyZWFtW21ldGhvZF0uYXBwbHkoc3RyZWFtLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfShpKTtcbiAgICB9XG4gIH0gLy8gcHJveHkgY2VydGFpbiBpbXBvcnRhbnQgZXZlbnRzLlxuXG5cbiAgZm9yICh2YXIgbiA9IDA7IG4gPCBrUHJveHlFdmVudHMubGVuZ3RoOyBuKyspIHtcbiAgICBzdHJlYW0ub24oa1Byb3h5RXZlbnRzW25dLCB0aGlzLmVtaXQuYmluZCh0aGlzLCBrUHJveHlFdmVudHNbbl0pKTtcbiAgfSAvLyB3aGVuIHdlIHRyeSB0byBjb25zdW1lIHNvbWUgbW9yZSBieXRlcywgc2ltcGx5IHVucGF1c2UgdGhlXG4gIC8vIHVuZGVybHlpbmcgc3RyZWFtLlxuXG5cbiAgdGhpcy5fcmVhZCA9IGZ1bmN0aW9uIChuKSB7XG4gICAgZGVidWcoJ3dyYXBwZWQgX3JlYWQnLCBuKTtcblxuICAgIGlmIChwYXVzZWQpIHtcbiAgICAgIHBhdXNlZCA9IGZhbHNlO1xuICAgICAgc3RyZWFtLnJlc3VtZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlYWRhYmxlLnByb3RvdHlwZVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNyZWF0ZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjcmVhdGVSZWFkYWJsZVN0cmVhbUFzeW5jSXRlcmF0b3IgPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvYXN5bmNfaXRlcmF0b3InKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yKHRoaXMpO1xuICB9O1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVhZGFibGUucHJvdG90eXBlLCAncmVhZGFibGVIaWdoV2F0ZXJNYXJrJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVhZGFibGVTdGF0ZS5oaWdoV2F0ZXJNYXJrO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZS5wcm90b3R5cGUsICdyZWFkYWJsZUJ1ZmZlcicsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUgJiYgdGhpcy5fcmVhZGFibGVTdGF0ZS5idWZmZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlYWRhYmxlLnByb3RvdHlwZSwgJ3JlYWRhYmxlRmxvd2luZycsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUuZmxvd2luZztcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQoc3RhdGUpIHtcbiAgICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5mbG93aW5nID0gc3RhdGU7XG4gICAgfVxuICB9XG59KTsgLy8gZXhwb3NlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5LlxuXG5SZWFkYWJsZS5fZnJvbUxpc3QgPSBmcm9tTGlzdDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWFkYWJsZS5wcm90b3R5cGUsICdyZWFkYWJsZUxlbmd0aCcsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRhYmxlU3RhdGUubGVuZ3RoO1xuICB9XG59KTsgLy8gUGx1Y2sgb2ZmIG4gYnl0ZXMgZnJvbSBhbiBhcnJheSBvZiBidWZmZXJzLlxuLy8gTGVuZ3RoIGlzIHRoZSBjb21iaW5lZCBsZW5ndGhzIG9mIGFsbCB0aGUgYnVmZmVycyBpbiB0aGUgbGlzdC5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgZGVzaWduZWQgdG8gYmUgaW5saW5hYmxlLCBzbyBwbGVhc2UgdGFrZSBjYXJlIHdoZW4gbWFraW5nXG4vLyBjaGFuZ2VzIHRvIHRoZSBmdW5jdGlvbiBib2R5LlxuXG5mdW5jdGlvbiBmcm9tTGlzdChuLCBzdGF0ZSkge1xuICAvLyBub3RoaW5nIGJ1ZmZlcmVkXG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICB2YXIgcmV0O1xuICBpZiAoc3RhdGUub2JqZWN0TW9kZSkgcmV0ID0gc3RhdGUuYnVmZmVyLnNoaWZ0KCk7ZWxzZSBpZiAoIW4gfHwgbiA+PSBzdGF0ZS5sZW5ndGgpIHtcbiAgICAvLyByZWFkIGl0IGFsbCwgdHJ1bmNhdGUgdGhlIGxpc3RcbiAgICBpZiAoc3RhdGUuZGVjb2RlcikgcmV0ID0gc3RhdGUuYnVmZmVyLmpvaW4oJycpO2Vsc2UgaWYgKHN0YXRlLmJ1ZmZlci5sZW5ndGggPT09IDEpIHJldCA9IHN0YXRlLmJ1ZmZlci5maXJzdCgpO2Vsc2UgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbmNhdChzdGF0ZS5sZW5ndGgpO1xuICAgIHN0YXRlLmJ1ZmZlci5jbGVhcigpO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlYWQgcGFydCBvZiBsaXN0XG4gICAgcmV0ID0gc3RhdGUuYnVmZmVyLmNvbnN1bWUobiwgc3RhdGUuZGVjb2Rlcik7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGUoc3RyZWFtKSB7XG4gIHZhciBzdGF0ZSA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcbiAgZGVidWcoJ2VuZFJlYWRhYmxlJywgc3RhdGUuZW5kRW1pdHRlZCk7XG5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkKSB7XG4gICAgc3RhdGUuZW5kZWQgPSB0cnVlO1xuICAgIHByb2Nlc3MubmV4dFRpY2soZW5kUmVhZGFibGVOVCwgc3RhdGUsIHN0cmVhbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5kUmVhZGFibGVOVChzdGF0ZSwgc3RyZWFtKSB7XG4gIGRlYnVnKCdlbmRSZWFkYWJsZU5UJywgc3RhdGUuZW5kRW1pdHRlZCwgc3RhdGUubGVuZ3RoKTsgLy8gQ2hlY2sgdGhhdCB3ZSBkaWRuJ3QgZ2V0IG9uZSBsYXN0IHVuc2hpZnQuXG5cbiAgaWYgKCFzdGF0ZS5lbmRFbWl0dGVkICYmIHN0YXRlLmxlbmd0aCA9PT0gMCkge1xuICAgIHN0YXRlLmVuZEVtaXR0ZWQgPSB0cnVlO1xuICAgIHN0cmVhbS5yZWFkYWJsZSA9IGZhbHNlO1xuICAgIHN0cmVhbS5lbWl0KCdlbmQnKTtcblxuICAgIGlmIChzdGF0ZS5hdXRvRGVzdHJveSkge1xuICAgICAgLy8gSW4gY2FzZSBvZiBkdXBsZXggc3RyZWFtcyB3ZSBuZWVkIGEgd2F5IHRvIGRldGVjdFxuICAgICAgLy8gaWYgdGhlIHdyaXRhYmxlIHNpZGUgaXMgcmVhZHkgZm9yIGF1dG9EZXN0cm95IGFzIHdlbGxcbiAgICAgIHZhciB3U3RhdGUgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG5cbiAgICAgIGlmICghd1N0YXRlIHx8IHdTdGF0ZS5hdXRvRGVzdHJveSAmJiB3U3RhdGUuZmluaXNoZWQpIHtcbiAgICAgICAgc3RyZWFtLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVhZGFibGUuZnJvbSA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgb3B0cykge1xuICAgIGlmIChmcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZyb20gPSByZXF1aXJlKCcuL2ludGVybmFsL3N0cmVhbXMvZnJvbScpO1xuICAgIH1cblxuICAgIHJldHVybiBmcm9tKFJlYWRhYmxlLCBpdGVyYWJsZSwgb3B0cyk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluZGV4T2YoeHMsIHgpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB4cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoeHNbaV0gPT09IHgpIHJldHVybiBpO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufSIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuLy8gYSB0cmFuc2Zvcm0gc3RyZWFtIGlzIGEgcmVhZGFibGUvd3JpdGFibGUgc3RyZWFtIHdoZXJlIHlvdSBkb1xuLy8gc29tZXRoaW5nIHdpdGggdGhlIGRhdGEuICBTb21ldGltZXMgaXQncyBjYWxsZWQgYSBcImZpbHRlclwiLFxuLy8gYnV0IHRoYXQncyBub3QgYSBncmVhdCBuYW1lIGZvciBpdCwgc2luY2UgdGhhdCBpbXBsaWVzIGEgdGhpbmcgd2hlcmVcbi8vIHNvbWUgYml0cyBwYXNzIHRocm91Z2gsIGFuZCBvdGhlcnMgYXJlIHNpbXBseSBpZ25vcmVkLiAgKFRoYXQgd291bGRcbi8vIGJlIGEgdmFsaWQgZXhhbXBsZSBvZiBhIHRyYW5zZm9ybSwgb2YgY291cnNlLilcbi8vXG4vLyBXaGlsZSB0aGUgb3V0cHV0IGlzIGNhdXNhbGx5IHJlbGF0ZWQgdG8gdGhlIGlucHV0LCBpdCdzIG5vdCBhXG4vLyBuZWNlc3NhcmlseSBzeW1tZXRyaWMgb3Igc3luY2hyb25vdXMgdHJhbnNmb3JtYXRpb24uICBGb3IgZXhhbXBsZSxcbi8vIGEgemxpYiBzdHJlYW0gbWlnaHQgdGFrZSBtdWx0aXBsZSBwbGFpbi10ZXh0IHdyaXRlcygpLCBhbmQgdGhlblxuLy8gZW1pdCBhIHNpbmdsZSBjb21wcmVzc2VkIGNodW5rIHNvbWUgdGltZSBpbiB0aGUgZnV0dXJlLlxuLy9cbi8vIEhlcmUncyBob3cgdGhpcyB3b3Jrczpcbi8vXG4vLyBUaGUgVHJhbnNmb3JtIHN0cmVhbSBoYXMgYWxsIHRoZSBhc3BlY3RzIG9mIHRoZSByZWFkYWJsZSBhbmQgd3JpdGFibGVcbi8vIHN0cmVhbSBjbGFzc2VzLiAgV2hlbiB5b3Ugd3JpdGUoY2h1bmspLCB0aGF0IGNhbGxzIF93cml0ZShjaHVuayxjYilcbi8vIGludGVybmFsbHksIGFuZCByZXR1cm5zIGZhbHNlIGlmIHRoZXJlJ3MgYSBsb3Qgb2YgcGVuZGluZyB3cml0ZXNcbi8vIGJ1ZmZlcmVkIHVwLiAgV2hlbiB5b3UgY2FsbCByZWFkKCksIHRoYXQgY2FsbHMgX3JlYWQobikgdW50aWxcbi8vIHRoZXJlJ3MgZW5vdWdoIHBlbmRpbmcgcmVhZGFibGUgZGF0YSBidWZmZXJlZCB1cC5cbi8vXG4vLyBJbiBhIHRyYW5zZm9ybSBzdHJlYW0sIHRoZSB3cml0dGVuIGRhdGEgaXMgcGxhY2VkIGluIGEgYnVmZmVyLiAgV2hlblxuLy8gX3JlYWQobikgaXMgY2FsbGVkLCBpdCB0cmFuc2Zvcm1zIHRoZSBxdWV1ZWQgdXAgZGF0YSwgY2FsbGluZyB0aGVcbi8vIGJ1ZmZlcmVkIF93cml0ZSBjYidzIGFzIGl0IGNvbnN1bWVzIGNodW5rcy4gIElmIGNvbnN1bWluZyBhIHNpbmdsZVxuLy8gd3JpdHRlbiBjaHVuayB3b3VsZCByZXN1bHQgaW4gbXVsdGlwbGUgb3V0cHV0IGNodW5rcywgdGhlbiB0aGUgZmlyc3Rcbi8vIG91dHB1dHRlZCBiaXQgY2FsbHMgdGhlIHJlYWRjYiwgYW5kIHN1YnNlcXVlbnQgY2h1bmtzIGp1c3QgZ28gaW50b1xuLy8gdGhlIHJlYWQgYnVmZmVyLCBhbmQgd2lsbCBjYXVzZSBpdCB0byBlbWl0ICdyZWFkYWJsZScgaWYgbmVjZXNzYXJ5LlxuLy9cbi8vIFRoaXMgd2F5LCBiYWNrLXByZXNzdXJlIGlzIGFjdHVhbGx5IGRldGVybWluZWQgYnkgdGhlIHJlYWRpbmcgc2lkZSxcbi8vIHNpbmNlIF9yZWFkIGhhcyB0byBiZSBjYWxsZWQgdG8gc3RhcnQgcHJvY2Vzc2luZyBhIG5ldyBjaHVuay4gIEhvd2V2ZXIsXG4vLyBhIHBhdGhvbG9naWNhbCBpbmZsYXRlIHR5cGUgb2YgdHJhbnNmb3JtIGNhbiBjYXVzZSBleGNlc3NpdmUgYnVmZmVyaW5nXG4vLyBoZXJlLiAgRm9yIGV4YW1wbGUsIGltYWdpbmUgYSBzdHJlYW0gd2hlcmUgZXZlcnkgYnl0ZSBvZiBpbnB1dCBpc1xuLy8gaW50ZXJwcmV0ZWQgYXMgYW4gaW50ZWdlciBmcm9tIDAtMjU1LCBhbmQgdGhlbiByZXN1bHRzIGluIHRoYXQgbWFueVxuLy8gYnl0ZXMgb2Ygb3V0cHV0LiAgV3JpdGluZyB0aGUgNCBieXRlcyB7ZmYsZmYsZmYsZmZ9IHdvdWxkIHJlc3VsdCBpblxuLy8gMWtiIG9mIGRhdGEgYmVpbmcgb3V0cHV0LiAgSW4gdGhpcyBjYXNlLCB5b3UgY291bGQgd3JpdGUgYSB2ZXJ5IHNtYWxsXG4vLyBhbW91bnQgb2YgaW5wdXQsIGFuZCBlbmQgdXAgd2l0aCBhIHZlcnkgbGFyZ2UgYW1vdW50IG9mIG91dHB1dC4gIEluXG4vLyBzdWNoIGEgcGF0aG9sb2dpY2FsIGluZmxhdGluZyBtZWNoYW5pc20sIHRoZXJlJ2QgYmUgbm8gd2F5IHRvIHRlbGxcbi8vIHRoZSBzeXN0ZW0gdG8gc3RvcCBkb2luZyB0aGUgdHJhbnNmb3JtLiAgQSBzaW5nbGUgNE1CIHdyaXRlIGNvdWxkXG4vLyBjYXVzZSB0aGUgc3lzdGVtIHRvIHJ1biBvdXQgb2YgbWVtb3J5LlxuLy9cbi8vIEhvd2V2ZXIsIGV2ZW4gaW4gc3VjaCBhIHBhdGhvbG9naWNhbCBjYXNlLCBvbmx5IGEgc2luZ2xlIHdyaXR0ZW4gY2h1bmtcbi8vIHdvdWxkIGJlIGNvbnN1bWVkLCBhbmQgdGhlbiB0aGUgcmVzdCB3b3VsZCB3YWl0ICh1bi10cmFuc2Zvcm1lZCkgdW50aWxcbi8vIHRoZSByZXN1bHRzIG9mIHRoZSBwcmV2aW91cyB0cmFuc2Zvcm1lZCBjaHVuayB3ZXJlIGNvbnN1bWVkLlxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcblxudmFyIF9yZXF1aXJlJGNvZGVzID0gcmVxdWlyZSgnLi4vZXJyb3JzJykuY29kZXMsXG4gICAgRVJSX01FVEhPRF9OT1RfSU1QTEVNRU5URUQgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfTUVUSE9EX05PVF9JTVBMRU1FTlRFRCxcbiAgICBFUlJfTVVMVElQTEVfQ0FMTEJBQ0sgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfTVVMVElQTEVfQ0FMTEJBQ0ssXG4gICAgRVJSX1RSQU5TRk9STV9BTFJFQURZX1RSQU5TRk9STUlORyA9IF9yZXF1aXJlJGNvZGVzLkVSUl9UUkFOU0ZPUk1fQUxSRUFEWV9UUkFOU0ZPUk1JTkcsXG4gICAgRVJSX1RSQU5TRk9STV9XSVRIX0xFTkdUSF8wID0gX3JlcXVpcmUkY29kZXMuRVJSX1RSQU5TRk9STV9XSVRIX0xFTkdUSF8wO1xuXG52YXIgRHVwbGV4ID0gcmVxdWlyZSgnLi9fc3RyZWFtX2R1cGxleCcpO1xuXG5yZXF1aXJlKCdpbmhlcml0cycpKFRyYW5zZm9ybSwgRHVwbGV4KTtcblxuZnVuY3Rpb24gYWZ0ZXJUcmFuc2Zvcm0oZXIsIGRhdGEpIHtcbiAgdmFyIHRzID0gdGhpcy5fdHJhbnNmb3JtU3RhdGU7XG4gIHRzLnRyYW5zZm9ybWluZyA9IGZhbHNlO1xuICB2YXIgY2IgPSB0cy53cml0ZWNiO1xuXG4gIGlmIChjYiA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IEVSUl9NVUxUSVBMRV9DQUxMQkFDSygpKTtcbiAgfVxuXG4gIHRzLndyaXRlY2h1bmsgPSBudWxsO1xuICB0cy53cml0ZWNiID0gbnVsbDtcbiAgaWYgKGRhdGEgIT0gbnVsbCkgLy8gc2luZ2xlIGVxdWFscyBjaGVjayBmb3IgYm90aCBgbnVsbGAgYW5kIGB1bmRlZmluZWRgXG4gICAgdGhpcy5wdXNoKGRhdGEpO1xuICBjYihlcik7XG4gIHZhciBycyA9IHRoaXMuX3JlYWRhYmxlU3RhdGU7XG4gIHJzLnJlYWRpbmcgPSBmYWxzZTtcblxuICBpZiAocnMubmVlZFJlYWRhYmxlIHx8IHJzLmxlbmd0aCA8IHJzLmhpZ2hXYXRlck1hcmspIHtcbiAgICB0aGlzLl9yZWFkKHJzLmhpZ2hXYXRlck1hcmspO1xuICB9XG59XG5cbmZ1bmN0aW9uIFRyYW5zZm9ybShvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFuc2Zvcm0pKSByZXR1cm4gbmV3IFRyYW5zZm9ybShvcHRpb25zKTtcbiAgRHVwbGV4LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gIHRoaXMuX3RyYW5zZm9ybVN0YXRlID0ge1xuICAgIGFmdGVyVHJhbnNmb3JtOiBhZnRlclRyYW5zZm9ybS5iaW5kKHRoaXMpLFxuICAgIG5lZWRUcmFuc2Zvcm06IGZhbHNlLFxuICAgIHRyYW5zZm9ybWluZzogZmFsc2UsXG4gICAgd3JpdGVjYjogbnVsbCxcbiAgICB3cml0ZWNodW5rOiBudWxsLFxuICAgIHdyaXRlZW5jb2Rpbmc6IG51bGxcbiAgfTsgLy8gc3RhcnQgb3V0IGFza2luZyBmb3IgYSByZWFkYWJsZSBldmVudCBvbmNlIGRhdGEgaXMgdHJhbnNmb3JtZWQuXG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5uZWVkUmVhZGFibGUgPSB0cnVlOyAvLyB3ZSBoYXZlIGltcGxlbWVudGVkIHRoZSBfcmVhZCBtZXRob2QsIGFuZCBkb25lIHRoZSBvdGhlciB0aGluZ3NcbiAgLy8gdGhhdCBSZWFkYWJsZSB3YW50cyBiZWZvcmUgdGhlIGZpcnN0IF9yZWFkIGNhbGwsIHNvIHVuc2V0IHRoZVxuICAvLyBzeW5jIGd1YXJkIGZsYWcuXG5cbiAgdGhpcy5fcmVhZGFibGVTdGF0ZS5zeW5jID0gZmFsc2U7XG5cbiAgaWYgKG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nKSB0aGlzLl90cmFuc2Zvcm0gPSBvcHRpb25zLnRyYW5zZm9ybTtcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuZmx1c2ggPT09ICdmdW5jdGlvbicpIHRoaXMuX2ZsdXNoID0gb3B0aW9ucy5mbHVzaDtcbiAgfSAvLyBXaGVuIHRoZSB3cml0YWJsZSBzaWRlIGZpbmlzaGVzLCB0aGVuIGZsdXNoIG91dCBhbnl0aGluZyByZW1haW5pbmcuXG5cblxuICB0aGlzLm9uKCdwcmVmaW5pc2gnLCBwcmVmaW5pc2gpO1xufVxuXG5mdW5jdGlvbiBwcmVmaW5pc2goKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiB0aGlzLl9mbHVzaCA9PT0gJ2Z1bmN0aW9uJyAmJiAhdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQpIHtcbiAgICB0aGlzLl9mbHVzaChmdW5jdGlvbiAoZXIsIGRhdGEpIHtcbiAgICAgIGRvbmUoX3RoaXMsIGVyLCBkYXRhKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBkb25lKHRoaXMsIG51bGwsIG51bGwpO1xuICB9XG59XG5cblRyYW5zZm9ybS5wcm90b3R5cGUucHVzaCA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcpIHtcbiAgdGhpcy5fdHJhbnNmb3JtU3RhdGUubmVlZFRyYW5zZm9ybSA9IGZhbHNlO1xuICByZXR1cm4gRHVwbGV4LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgY2h1bmssIGVuY29kaW5nKTtcbn07IC8vIFRoaXMgaXMgdGhlIHBhcnQgd2hlcmUgeW91IGRvIHN0dWZmIVxuLy8gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbiBpbiBpbXBsZW1lbnRhdGlvbiBjbGFzc2VzLlxuLy8gJ2NodW5rJyBpcyBhbiBpbnB1dCBjaHVuay5cbi8vXG4vLyBDYWxsIGBwdXNoKG5ld0NodW5rKWAgdG8gcGFzcyBhbG9uZyB0cmFuc2Zvcm1lZCBvdXRwdXRcbi8vIHRvIHRoZSByZWFkYWJsZSBzaWRlLiAgWW91IG1heSBjYWxsICdwdXNoJyB6ZXJvIG9yIG1vcmUgdGltZXMuXG4vL1xuLy8gQ2FsbCBgY2IoZXJyKWAgd2hlbiB5b3UgYXJlIGRvbmUgd2l0aCB0aGlzIGNodW5rLiAgSWYgeW91IHBhc3Ncbi8vIGFuIGVycm9yLCB0aGVuIHRoYXQnbGwgcHV0IHRoZSBodXJ0IG9uIHRoZSB3aG9sZSBvcGVyYXRpb24uICBJZiB5b3Vcbi8vIG5ldmVyIGNhbGwgY2IoKSwgdGhlbiB5b3UnbGwgbmV2ZXIgZ2V0IGFub3RoZXIgY2h1bmsuXG5cblxuVHJhbnNmb3JtLnByb3RvdHlwZS5fdHJhbnNmb3JtID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgY2IobmV3IEVSUl9NRVRIT0RfTk9UX0lNUExFTUVOVEVEKCdfdHJhbnNmb3JtKCknKSk7XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl93cml0ZSA9IGZ1bmN0aW9uIChjaHVuaywgZW5jb2RpbmcsIGNiKSB7XG4gIHZhciB0cyA9IHRoaXMuX3RyYW5zZm9ybVN0YXRlO1xuICB0cy53cml0ZWNiID0gY2I7XG4gIHRzLndyaXRlY2h1bmsgPSBjaHVuaztcbiAgdHMud3JpdGVlbmNvZGluZyA9IGVuY29kaW5nO1xuXG4gIGlmICghdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdmFyIHJzID0gdGhpcy5fcmVhZGFibGVTdGF0ZTtcbiAgICBpZiAodHMubmVlZFRyYW5zZm9ybSB8fCBycy5uZWVkUmVhZGFibGUgfHwgcnMubGVuZ3RoIDwgcnMuaGlnaFdhdGVyTWFyaykgdGhpcy5fcmVhZChycy5oaWdoV2F0ZXJNYXJrKTtcbiAgfVxufTsgLy8gRG9lc24ndCBtYXR0ZXIgd2hhdCB0aGUgYXJncyBhcmUgaGVyZS5cbi8vIF90cmFuc2Zvcm0gZG9lcyBhbGwgdGhlIHdvcmsuXG4vLyBUaGF0IHdlIGdvdCBoZXJlIG1lYW5zIHRoYXQgdGhlIHJlYWRhYmxlIHNpZGUgd2FudHMgbW9yZSBkYXRhLlxuXG5cblRyYW5zZm9ybS5wcm90b3R5cGUuX3JlYWQgPSBmdW5jdGlvbiAobikge1xuICB2YXIgdHMgPSB0aGlzLl90cmFuc2Zvcm1TdGF0ZTtcblxuICBpZiAodHMud3JpdGVjaHVuayAhPT0gbnVsbCAmJiAhdHMudHJhbnNmb3JtaW5nKSB7XG4gICAgdHMudHJhbnNmb3JtaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuX3RyYW5zZm9ybSh0cy53cml0ZWNodW5rLCB0cy53cml0ZWVuY29kaW5nLCB0cy5hZnRlclRyYW5zZm9ybSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gbWFyayB0aGF0IHdlIG5lZWQgYSB0cmFuc2Zvcm0sIHNvIHRoYXQgYW55IGRhdGEgdGhhdCBjb21lcyBpblxuICAgIC8vIHdpbGwgZ2V0IHByb2Nlc3NlZCwgbm93IHRoYXQgd2UndmUgYXNrZWQgZm9yIGl0LlxuICAgIHRzLm5lZWRUcmFuc2Zvcm0gPSB0cnVlO1xuICB9XG59O1xuXG5UcmFuc2Zvcm0ucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gKGVyciwgY2IpIHtcbiAgRHVwbGV4LnByb3RvdHlwZS5fZGVzdHJveS5jYWxsKHRoaXMsIGVyciwgZnVuY3Rpb24gKGVycjIpIHtcbiAgICBjYihlcnIyKTtcbiAgfSk7XG59O1xuXG5mdW5jdGlvbiBkb25lKHN0cmVhbSwgZXIsIGRhdGEpIHtcbiAgaWYgKGVyKSByZXR1cm4gc3RyZWFtLmVtaXQoJ2Vycm9yJywgZXIpO1xuICBpZiAoZGF0YSAhPSBudWxsKSAvLyBzaW5nbGUgZXF1YWxzIGNoZWNrIGZvciBib3RoIGBudWxsYCBhbmQgYHVuZGVmaW5lZGBcbiAgICBzdHJlYW0ucHVzaChkYXRhKTsgLy8gVE9ETyhCcmlkZ2VBUik6IFdyaXRlIGEgdGVzdCBmb3IgdGhlc2UgdHdvIGVycm9yIGNhc2VzXG4gIC8vIGlmIHRoZXJlJ3Mgbm90aGluZyBpbiB0aGUgd3JpdGUgYnVmZmVyLCB0aGVuIHRoYXQgbWVhbnNcbiAgLy8gdGhhdCBub3RoaW5nIG1vcmUgd2lsbCBldmVyIGJlIHByb3ZpZGVkXG5cbiAgaWYgKHN0cmVhbS5fd3JpdGFibGVTdGF0ZS5sZW5ndGgpIHRocm93IG5ldyBFUlJfVFJBTlNGT1JNX1dJVEhfTEVOR1RIXzAoKTtcbiAgaWYgKHN0cmVhbS5fdHJhbnNmb3JtU3RhdGUudHJhbnNmb3JtaW5nKSB0aHJvdyBuZXcgRVJSX1RSQU5TRk9STV9BTFJFQURZX1RSQU5TRk9STUlORygpO1xuICByZXR1cm4gc3RyZWFtLnB1c2gobnVsbCk7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4vLyBBIGJpdCBzaW1wbGVyIHRoYW4gcmVhZGFibGUgc3RyZWFtcy5cbi8vIEltcGxlbWVudCBhbiBhc3luYyAuX3dyaXRlKGNodW5rLCBlbmNvZGluZywgY2IpLCBhbmQgaXQnbGwgaGFuZGxlIGFsbFxuLy8gdGhlIGRyYWluIGV2ZW50IGVtaXNzaW9uIGFuZCBidWZmZXJpbmcuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gV3JpdGFibGU7XG4vKiA8cmVwbGFjZW1lbnQ+ICovXG5cbmZ1bmN0aW9uIFdyaXRlUmVxKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdGhpcy5jaHVuayA9IGNodW5rO1xuICB0aGlzLmVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHRoaXMuY2FsbGJhY2sgPSBjYjtcbiAgdGhpcy5uZXh0ID0gbnVsbDtcbn0gLy8gSXQgc2VlbXMgYSBsaW5rZWQgbGlzdCBidXQgaXQgaXMgbm90XG4vLyB0aGVyZSB3aWxsIGJlIG9ubHkgMiBvZiB0aGVzZSBmb3IgZWFjaCBzdHJlYW1cblxuXG5mdW5jdGlvbiBDb3JrZWRSZXF1ZXN0KHN0YXRlKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgdGhpcy5lbnRyeSA9IG51bGw7XG5cbiAgdGhpcy5maW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgb25Db3JrZWRGaW5pc2goX3RoaXMsIHN0YXRlKTtcbiAgfTtcbn1cbi8qIDwvcmVwbGFjZW1lbnQ+ICovXG5cbi8qPHJlcGxhY2VtZW50PiovXG5cblxudmFyIER1cGxleDtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG5Xcml0YWJsZS5Xcml0YWJsZVN0YXRlID0gV3JpdGFibGVTdGF0ZTtcbi8qPHJlcGxhY2VtZW50PiovXG5cbnZhciBpbnRlcm5hbFV0aWwgPSB7XG4gIGRlcHJlY2F0ZTogcmVxdWlyZSgndXRpbC1kZXByZWNhdGUnKVxufTtcbi8qPC9yZXBsYWNlbWVudD4qL1xuXG4vKjxyZXBsYWNlbWVudD4qL1xuXG52YXIgU3RyZWFtID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0cmVhbScpO1xuLyo8L3JlcGxhY2VtZW50PiovXG5cblxudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ2J1ZmZlcicpLkJ1ZmZlcjtcblxudmFyIE91clVpbnQ4QXJyYXkgPSBnbG9iYWwuVWludDhBcnJheSB8fCBmdW5jdGlvbiAoKSB7fTtcblxuZnVuY3Rpb24gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuaykge1xuICByZXR1cm4gQnVmZmVyLmZyb20oY2h1bmspO1xufVxuXG5mdW5jdGlvbiBfaXNVaW50OEFycmF5KG9iaikge1xuICByZXR1cm4gQnVmZmVyLmlzQnVmZmVyKG9iaikgfHwgb2JqIGluc3RhbmNlb2YgT3VyVWludDhBcnJheTtcbn1cblxudmFyIGRlc3Ryb3lJbXBsID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL2Rlc3Ryb3knKTtcblxudmFyIF9yZXF1aXJlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9zdHJlYW1zL3N0YXRlJyksXG4gICAgZ2V0SGlnaFdhdGVyTWFyayA9IF9yZXF1aXJlLmdldEhpZ2hXYXRlck1hcms7XG5cbnZhciBfcmVxdWlyZSRjb2RlcyA9IHJlcXVpcmUoJy4uL2Vycm9ycycpLmNvZGVzLFxuICAgIEVSUl9JTlZBTElEX0FSR19UWVBFID0gX3JlcXVpcmUkY29kZXMuRVJSX0lOVkFMSURfQVJHX1RZUEUsXG4gICAgRVJSX01FVEhPRF9OT1RfSU1QTEVNRU5URUQgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfTUVUSE9EX05PVF9JTVBMRU1FTlRFRCxcbiAgICBFUlJfTVVMVElQTEVfQ0FMTEJBQ0sgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfTVVMVElQTEVfQ0FMTEJBQ0ssXG4gICAgRVJSX1NUUkVBTV9DQU5OT1RfUElQRSA9IF9yZXF1aXJlJGNvZGVzLkVSUl9TVFJFQU1fQ0FOTk9UX1BJUEUsXG4gICAgRVJSX1NUUkVBTV9ERVNUUk9ZRUQgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfU1RSRUFNX0RFU1RST1lFRCxcbiAgICBFUlJfU1RSRUFNX05VTExfVkFMVUVTID0gX3JlcXVpcmUkY29kZXMuRVJSX1NUUkVBTV9OVUxMX1ZBTFVFUyxcbiAgICBFUlJfU1RSRUFNX1dSSVRFX0FGVEVSX0VORCA9IF9yZXF1aXJlJGNvZGVzLkVSUl9TVFJFQU1fV1JJVEVfQUZURVJfRU5ELFxuICAgIEVSUl9VTktOT1dOX0VOQ09ESU5HID0gX3JlcXVpcmUkY29kZXMuRVJSX1VOS05PV05fRU5DT0RJTkc7XG5cbnZhciBlcnJvck9yRGVzdHJveSA9IGRlc3Ryb3lJbXBsLmVycm9yT3JEZXN0cm95O1xuXG5yZXF1aXJlKCdpbmhlcml0cycpKFdyaXRhYmxlLCBTdHJlYW0pO1xuXG5mdW5jdGlvbiBub3AoKSB7fVxuXG5mdW5jdGlvbiBXcml0YWJsZVN0YXRlKG9wdGlvbnMsIHN0cmVhbSwgaXNEdXBsZXgpIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIER1cGxleCBzdHJlYW1zIGFyZSBib3RoIHJlYWRhYmxlIGFuZCB3cml0YWJsZSwgYnV0IHNoYXJlXG4gIC8vIHRoZSBzYW1lIG9wdGlvbnMgb2JqZWN0LlxuICAvLyBIb3dldmVyLCBzb21lIGNhc2VzIHJlcXVpcmUgc2V0dGluZyBvcHRpb25zIHRvIGRpZmZlcmVudFxuICAvLyB2YWx1ZXMgZm9yIHRoZSByZWFkYWJsZSBhbmQgdGhlIHdyaXRhYmxlIHNpZGVzIG9mIHRoZSBkdXBsZXggc3RyZWFtLFxuICAvLyBlLmcuIG9wdGlvbnMucmVhZGFibGVPYmplY3RNb2RlIHZzLiBvcHRpb25zLndyaXRhYmxlT2JqZWN0TW9kZSwgZXRjLlxuXG4gIGlmICh0eXBlb2YgaXNEdXBsZXggIT09ICdib29sZWFuJykgaXNEdXBsZXggPSBzdHJlYW0gaW5zdGFuY2VvZiBEdXBsZXg7IC8vIG9iamVjdCBzdHJlYW0gZmxhZyB0byBpbmRpY2F0ZSB3aGV0aGVyIG9yIG5vdCB0aGlzIHN0cmVhbVxuICAvLyBjb250YWlucyBidWZmZXJzIG9yIG9iamVjdHMuXG5cbiAgdGhpcy5vYmplY3RNb2RlID0gISFvcHRpb25zLm9iamVjdE1vZGU7XG4gIGlmIChpc0R1cGxleCkgdGhpcy5vYmplY3RNb2RlID0gdGhpcy5vYmplY3RNb2RlIHx8ICEhb3B0aW9ucy53cml0YWJsZU9iamVjdE1vZGU7IC8vIHRoZSBwb2ludCBhdCB3aGljaCB3cml0ZSgpIHN0YXJ0cyByZXR1cm5pbmcgZmFsc2VcbiAgLy8gTm90ZTogMCBpcyBhIHZhbGlkIHZhbHVlLCBtZWFucyB0aGF0IHdlIGFsd2F5cyByZXR1cm4gZmFsc2UgaWZcbiAgLy8gdGhlIGVudGlyZSBidWZmZXIgaXMgbm90IGZsdXNoZWQgaW1tZWRpYXRlbHkgb24gd3JpdGUoKVxuXG4gIHRoaXMuaGlnaFdhdGVyTWFyayA9IGdldEhpZ2hXYXRlck1hcmsodGhpcywgb3B0aW9ucywgJ3dyaXRhYmxlSGlnaFdhdGVyTWFyaycsIGlzRHVwbGV4KTsgLy8gaWYgX2ZpbmFsIGhhcyBiZWVuIGNhbGxlZFxuXG4gIHRoaXMuZmluYWxDYWxsZWQgPSBmYWxzZTsgLy8gZHJhaW4gZXZlbnQgZmxhZy5cblxuICB0aGlzLm5lZWREcmFpbiA9IGZhbHNlOyAvLyBhdCB0aGUgc3RhcnQgb2YgY2FsbGluZyBlbmQoKVxuXG4gIHRoaXMuZW5kaW5nID0gZmFsc2U7IC8vIHdoZW4gZW5kKCkgaGFzIGJlZW4gY2FsbGVkLCBhbmQgcmV0dXJuZWRcblxuICB0aGlzLmVuZGVkID0gZmFsc2U7IC8vIHdoZW4gJ2ZpbmlzaCcgaXMgZW1pdHRlZFxuXG4gIHRoaXMuZmluaXNoZWQgPSBmYWxzZTsgLy8gaGFzIGl0IGJlZW4gZGVzdHJveWVkXG5cbiAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTsgLy8gc2hvdWxkIHdlIGRlY29kZSBzdHJpbmdzIGludG8gYnVmZmVycyBiZWZvcmUgcGFzc2luZyB0byBfd3JpdGU/XG4gIC8vIHRoaXMgaXMgaGVyZSBzbyB0aGF0IHNvbWUgbm9kZS1jb3JlIHN0cmVhbXMgY2FuIG9wdGltaXplIHN0cmluZ1xuICAvLyBoYW5kbGluZyBhdCBhIGxvd2VyIGxldmVsLlxuXG4gIHZhciBub0RlY29kZSA9IG9wdGlvbnMuZGVjb2RlU3RyaW5ncyA9PT0gZmFsc2U7XG4gIHRoaXMuZGVjb2RlU3RyaW5ncyA9ICFub0RlY29kZTsgLy8gQ3J5cHRvIGlzIGtpbmQgb2Ygb2xkIGFuZCBjcnVzdHkuICBIaXN0b3JpY2FsbHksIGl0cyBkZWZhdWx0IHN0cmluZ1xuICAvLyBlbmNvZGluZyBpcyAnYmluYXJ5JyBzbyB3ZSBoYXZlIHRvIG1ha2UgdGhpcyBjb25maWd1cmFibGUuXG4gIC8vIEV2ZXJ5dGhpbmcgZWxzZSBpbiB0aGUgdW5pdmVyc2UgdXNlcyAndXRmOCcsIHRob3VnaC5cblxuICB0aGlzLmRlZmF1bHRFbmNvZGluZyA9IG9wdGlvbnMuZGVmYXVsdEVuY29kaW5nIHx8ICd1dGY4JzsgLy8gbm90IGFuIGFjdHVhbCBidWZmZXIgd2Uga2VlcCB0cmFjayBvZiwgYnV0IGEgbWVhc3VyZW1lbnRcbiAgLy8gb2YgaG93IG11Y2ggd2UncmUgd2FpdGluZyB0byBnZXQgcHVzaGVkIHRvIHNvbWUgdW5kZXJseWluZ1xuICAvLyBzb2NrZXQgb3IgZmlsZS5cblxuICB0aGlzLmxlbmd0aCA9IDA7IC8vIGEgZmxhZyB0byBzZWUgd2hlbiB3ZSdyZSBpbiB0aGUgbWlkZGxlIG9mIGEgd3JpdGUuXG5cbiAgdGhpcy53cml0aW5nID0gZmFsc2U7IC8vIHdoZW4gdHJ1ZSBhbGwgd3JpdGVzIHdpbGwgYmUgYnVmZmVyZWQgdW50aWwgLnVuY29yaygpIGNhbGxcblxuICB0aGlzLmNvcmtlZCA9IDA7IC8vIGEgZmxhZyB0byBiZSBhYmxlIHRvIHRlbGwgaWYgdGhlIG9ud3JpdGUgY2IgaXMgY2FsbGVkIGltbWVkaWF0ZWx5LFxuICAvLyBvciBvbiBhIGxhdGVyIHRpY2suICBXZSBzZXQgdGhpcyB0byB0cnVlIGF0IGZpcnN0LCBiZWNhdXNlIGFueVxuICAvLyBhY3Rpb25zIHRoYXQgc2hvdWxkbid0IGhhcHBlbiB1bnRpbCBcImxhdGVyXCIgc2hvdWxkIGdlbmVyYWxseSBhbHNvXG4gIC8vIG5vdCBoYXBwZW4gYmVmb3JlIHRoZSBmaXJzdCB3cml0ZSBjYWxsLlxuXG4gIHRoaXMuc3luYyA9IHRydWU7IC8vIGEgZmxhZyB0byBrbm93IGlmIHdlJ3JlIHByb2Nlc3NpbmcgcHJldmlvdXNseSBidWZmZXJlZCBpdGVtcywgd2hpY2hcbiAgLy8gbWF5IGNhbGwgdGhlIF93cml0ZSgpIGNhbGxiYWNrIGluIHRoZSBzYW1lIHRpY2ssIHNvIHRoYXQgd2UgZG9uJ3RcbiAgLy8gZW5kIHVwIGluIGFuIG92ZXJsYXBwZWQgb253cml0ZSBzaXR1YXRpb24uXG5cbiAgdGhpcy5idWZmZXJQcm9jZXNzaW5nID0gZmFsc2U7IC8vIHRoZSBjYWxsYmFjayB0aGF0J3MgcGFzc2VkIHRvIF93cml0ZShjaHVuayxjYilcblxuICB0aGlzLm9ud3JpdGUgPSBmdW5jdGlvbiAoZXIpIHtcbiAgICBvbndyaXRlKHN0cmVhbSwgZXIpO1xuICB9OyAvLyB0aGUgY2FsbGJhY2sgdGhhdCB0aGUgdXNlciBzdXBwbGllcyB0byB3cml0ZShjaHVuayxlbmNvZGluZyxjYilcblxuXG4gIHRoaXMud3JpdGVjYiA9IG51bGw7IC8vIHRoZSBhbW91bnQgdGhhdCBpcyBiZWluZyB3cml0dGVuIHdoZW4gX3dyaXRlIGlzIGNhbGxlZC5cblxuICB0aGlzLndyaXRlbGVuID0gMDtcbiAgdGhpcy5idWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuICB0aGlzLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsOyAvLyBudW1iZXIgb2YgcGVuZGluZyB1c2VyLXN1cHBsaWVkIHdyaXRlIGNhbGxiYWNrc1xuICAvLyB0aGlzIG11c3QgYmUgMCBiZWZvcmUgJ2ZpbmlzaCcgY2FuIGJlIGVtaXR0ZWRcblxuICB0aGlzLnBlbmRpbmdjYiA9IDA7IC8vIGVtaXQgcHJlZmluaXNoIGlmIHRoZSBvbmx5IHRoaW5nIHdlJ3JlIHdhaXRpbmcgZm9yIGlzIF93cml0ZSBjYnNcbiAgLy8gVGhpcyBpcyByZWxldmFudCBmb3Igc3luY2hyb25vdXMgVHJhbnNmb3JtIHN0cmVhbXNcblxuICB0aGlzLnByZWZpbmlzaGVkID0gZmFsc2U7IC8vIFRydWUgaWYgdGhlIGVycm9yIHdhcyBhbHJlYWR5IGVtaXR0ZWQgYW5kIHNob3VsZCBub3QgYmUgdGhyb3duIGFnYWluXG5cbiAgdGhpcy5lcnJvckVtaXR0ZWQgPSBmYWxzZTsgLy8gU2hvdWxkIGNsb3NlIGJlIGVtaXR0ZWQgb24gZGVzdHJveS4gRGVmYXVsdHMgdG8gdHJ1ZS5cblxuICB0aGlzLmVtaXRDbG9zZSA9IG9wdGlvbnMuZW1pdENsb3NlICE9PSBmYWxzZTsgLy8gU2hvdWxkIC5kZXN0cm95KCkgYmUgY2FsbGVkIGFmdGVyICdmaW5pc2gnIChhbmQgcG90ZW50aWFsbHkgJ2VuZCcpXG5cbiAgdGhpcy5hdXRvRGVzdHJveSA9ICEhb3B0aW9ucy5hdXRvRGVzdHJveTsgLy8gY291bnQgYnVmZmVyZWQgcmVxdWVzdHNcblxuICB0aGlzLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDsgLy8gYWxsb2NhdGUgdGhlIGZpcnN0IENvcmtlZFJlcXVlc3QsIHRoZXJlIGlzIGFsd2F5c1xuICAvLyBvbmUgYWxsb2NhdGVkIGFuZCBmcmVlIHRvIHVzZSwgYW5kIHdlIG1haW50YWluIGF0IG1vc3QgdHdvXG5cbiAgdGhpcy5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBuZXcgQ29ya2VkUmVxdWVzdCh0aGlzKTtcbn1cblxuV3JpdGFibGVTdGF0ZS5wcm90b3R5cGUuZ2V0QnVmZmVyID0gZnVuY3Rpb24gZ2V0QnVmZmVyKCkge1xuICB2YXIgY3VycmVudCA9IHRoaXMuYnVmZmVyZWRSZXF1ZXN0O1xuICB2YXIgb3V0ID0gW107XG5cbiAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICBvdXQucHVzaChjdXJyZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbihmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlU3RhdGUucHJvdG90eXBlLCAnYnVmZmVyJywge1xuICAgICAgZ2V0OiBpbnRlcm5hbFV0aWwuZGVwcmVjYXRlKGZ1bmN0aW9uIHdyaXRhYmxlU3RhdGVCdWZmZXJHZXR0ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEJ1ZmZlcigpO1xuICAgICAgfSwgJ193cml0YWJsZVN0YXRlLmJ1ZmZlciBpcyBkZXByZWNhdGVkLiBVc2UgX3dyaXRhYmxlU3RhdGUuZ2V0QnVmZmVyICcgKyAnaW5zdGVhZC4nLCAnREVQMDAwMycpXG4gICAgfSk7XG4gIH0gY2F0Y2ggKF8pIHt9XG59KSgpOyAvLyBUZXN0IF93cml0YWJsZVN0YXRlIGZvciBpbmhlcml0YW5jZSB0byBhY2NvdW50IGZvciBEdXBsZXggc3RyZWFtcyxcbi8vIHdob3NlIHByb3RvdHlwZSBjaGFpbiBvbmx5IHBvaW50cyB0byBSZWFkYWJsZS5cblxuXG52YXIgcmVhbEhhc0luc3RhbmNlO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaGFzSW5zdGFuY2UgJiYgdHlwZW9mIEZ1bmN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaGFzSW5zdGFuY2VdID09PSAnZnVuY3Rpb24nKSB7XG4gIHJlYWxIYXNJbnN0YW5jZSA9IEZ1bmN0aW9uLnByb3RvdHlwZVtTeW1ib2wuaGFzSW5zdGFuY2VdO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoV3JpdGFibGUsIFN5bWJvbC5oYXNJbnN0YW5jZSwge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShvYmplY3QpIHtcbiAgICAgIGlmIChyZWFsSGFzSW5zdGFuY2UuY2FsbCh0aGlzLCBvYmplY3QpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICh0aGlzICE9PSBXcml0YWJsZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIG9iamVjdCAmJiBvYmplY3QuX3dyaXRhYmxlU3RhdGUgaW5zdGFuY2VvZiBXcml0YWJsZVN0YXRlO1xuICAgIH1cbiAgfSk7XG59IGVsc2Uge1xuICByZWFsSGFzSW5zdGFuY2UgPSBmdW5jdGlvbiByZWFsSGFzSW5zdGFuY2Uob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCBpbnN0YW5jZW9mIHRoaXM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFdyaXRhYmxlKG9wdGlvbnMpIHtcbiAgRHVwbGV4ID0gRHVwbGV4IHx8IHJlcXVpcmUoJy4vX3N0cmVhbV9kdXBsZXgnKTsgLy8gV3JpdGFibGUgY3RvciBpcyBhcHBsaWVkIHRvIER1cGxleGVzLCB0b28uXG4gIC8vIGByZWFsSGFzSW5zdGFuY2VgIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHVzaW5nIHBsYWluIGBpbnN0YW5jZW9mYFxuICAvLyB3b3VsZCByZXR1cm4gZmFsc2UsIGFzIG5vIGBfd3JpdGFibGVTdGF0ZWAgcHJvcGVydHkgaXMgYXR0YWNoZWQuXG4gIC8vIFRyeWluZyB0byB1c2UgdGhlIGN1c3RvbSBgaW5zdGFuY2VvZmAgZm9yIFdyaXRhYmxlIGhlcmUgd2lsbCBhbHNvIGJyZWFrIHRoZVxuICAvLyBOb2RlLmpzIExhenlUcmFuc2Zvcm0gaW1wbGVtZW50YXRpb24sIHdoaWNoIGhhcyBhIG5vbi10cml2aWFsIGdldHRlciBmb3JcbiAgLy8gYF93cml0YWJsZVN0YXRlYCB0aGF0IHdvdWxkIGxlYWQgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAvLyBDaGVja2luZyBmb3IgYSBTdHJlYW0uRHVwbGV4IGluc3RhbmNlIGlzIGZhc3RlciBoZXJlIGluc3RlYWQgb2YgaW5zaWRlXG4gIC8vIHRoZSBXcml0YWJsZVN0YXRlIGNvbnN0cnVjdG9yLCBhdCBsZWFzdCB3aXRoIFY4IDYuNVxuXG4gIHZhciBpc0R1cGxleCA9IHRoaXMgaW5zdGFuY2VvZiBEdXBsZXg7XG4gIGlmICghaXNEdXBsZXggJiYgIXJlYWxIYXNJbnN0YW5jZS5jYWxsKFdyaXRhYmxlLCB0aGlzKSkgcmV0dXJuIG5ldyBXcml0YWJsZShvcHRpb25zKTtcbiAgdGhpcy5fd3JpdGFibGVTdGF0ZSA9IG5ldyBXcml0YWJsZVN0YXRlKG9wdGlvbnMsIHRoaXMsIGlzRHVwbGV4KTsgLy8gbGVnYWN5LlxuXG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuXG4gIGlmIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRlID09PSAnZnVuY3Rpb24nKSB0aGlzLl93cml0ZSA9IG9wdGlvbnMud3JpdGU7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLndyaXRldiA9PT0gJ2Z1bmN0aW9uJykgdGhpcy5fd3JpdGV2ID0gb3B0aW9ucy53cml0ZXY7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHRoaXMuX2Rlc3Ryb3kgPSBvcHRpb25zLmRlc3Ryb3k7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zLmZpbmFsID09PSAnZnVuY3Rpb24nKSB0aGlzLl9maW5hbCA9IG9wdGlvbnMuZmluYWw7XG4gIH1cblxuICBTdHJlYW0uY2FsbCh0aGlzKTtcbn0gLy8gT3RoZXJ3aXNlIHBlb3BsZSBjYW4gcGlwZSBXcml0YWJsZSBzdHJlYW1zLCB3aGljaCBpcyBqdXN0IHdyb25nLlxuXG5cbldyaXRhYmxlLnByb3RvdHlwZS5waXBlID0gZnVuY3Rpb24gKCkge1xuICBlcnJvck9yRGVzdHJveSh0aGlzLCBuZXcgRVJSX1NUUkVBTV9DQU5OT1RfUElQRSgpKTtcbn07XG5cbmZ1bmN0aW9uIHdyaXRlQWZ0ZXJFbmQoc3RyZWFtLCBjYikge1xuICB2YXIgZXIgPSBuZXcgRVJSX1NUUkVBTV9XUklURV9BRlRFUl9FTkQoKTsgLy8gVE9ETzogZGVmZXIgZXJyb3IgZXZlbnRzIGNvbnNpc3RlbnRseSBldmVyeXdoZXJlLCBub3QganVzdCB0aGUgY2JcblxuICBlcnJvck9yRGVzdHJveShzdHJlYW0sIGVyKTtcbiAgcHJvY2Vzcy5uZXh0VGljayhjYiwgZXIpO1xufSAvLyBDaGVja3MgdGhhdCBhIHVzZXItc3VwcGxpZWQgY2h1bmsgaXMgdmFsaWQsIGVzcGVjaWFsbHkgZm9yIHRoZSBwYXJ0aWN1bGFyXG4vLyBtb2RlIHRoZSBzdHJlYW0gaXMgaW4uIEN1cnJlbnRseSB0aGlzIG1lYW5zIHRoYXQgYG51bGxgIGlzIG5ldmVyIGFjY2VwdGVkXG4vLyBhbmQgdW5kZWZpbmVkL25vbi1zdHJpbmcgdmFsdWVzIGFyZSBvbmx5IGFsbG93ZWQgaW4gb2JqZWN0IG1vZGUuXG5cblxuZnVuY3Rpb24gdmFsaWRDaHVuayhzdHJlYW0sIHN0YXRlLCBjaHVuaywgY2IpIHtcbiAgdmFyIGVyO1xuXG4gIGlmIChjaHVuayA9PT0gbnVsbCkge1xuICAgIGVyID0gbmV3IEVSUl9TVFJFQU1fTlVMTF9WQUxVRVMoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgY2h1bmsgIT09ICdzdHJpbmcnICYmICFzdGF0ZS5vYmplY3RNb2RlKSB7XG4gICAgZXIgPSBuZXcgRVJSX0lOVkFMSURfQVJHX1RZUEUoJ2NodW5rJywgWydzdHJpbmcnLCAnQnVmZmVyJ10sIGNodW5rKTtcbiAgfVxuXG4gIGlmIChlcikge1xuICAgIGVycm9yT3JEZXN0cm95KHN0cmVhbSwgZXIpO1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2IsIGVyKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuV3JpdGFibGUucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcbiAgdmFyIHJldCA9IGZhbHNlO1xuXG4gIHZhciBpc0J1ZiA9ICFzdGF0ZS5vYmplY3RNb2RlICYmIF9pc1VpbnQ4QXJyYXkoY2h1bmspO1xuXG4gIGlmIChpc0J1ZiAmJiAhQnVmZmVyLmlzQnVmZmVyKGNodW5rKSkge1xuICAgIGNodW5rID0gX3VpbnQ4QXJyYXlUb0J1ZmZlcihjaHVuayk7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBlbmNvZGluZztcbiAgICBlbmNvZGluZyA9IG51bGw7XG4gIH1cblxuICBpZiAoaXNCdWYpIGVuY29kaW5nID0gJ2J1ZmZlcic7ZWxzZSBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9IHN0YXRlLmRlZmF1bHRFbmNvZGluZztcbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgY2IgPSBub3A7XG4gIGlmIChzdGF0ZS5lbmRpbmcpIHdyaXRlQWZ0ZXJFbmQodGhpcywgY2IpO2Vsc2UgaWYgKGlzQnVmIHx8IHZhbGlkQ2h1bmsodGhpcywgc3RhdGUsIGNodW5rLCBjYikpIHtcbiAgICBzdGF0ZS5wZW5kaW5nY2IrKztcbiAgICByZXQgPSB3cml0ZU9yQnVmZmVyKHRoaXMsIHN0YXRlLCBpc0J1ZiwgY2h1bmssIGVuY29kaW5nLCBjYik7XG4gIH1cbiAgcmV0dXJuIHJldDtcbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5jb3JrID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl93cml0YWJsZVN0YXRlLmNvcmtlZCsrO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLnVuY29yayA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkLS07XG4gICAgaWYgKCFzdGF0ZS53cml0aW5nICYmICFzdGF0ZS5jb3JrZWQgJiYgIXN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgJiYgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0KSBjbGVhckJ1ZmZlcih0aGlzLCBzdGF0ZSk7XG4gIH1cbn07XG5cbldyaXRhYmxlLnByb3RvdHlwZS5zZXREZWZhdWx0RW5jb2RpbmcgPSBmdW5jdGlvbiBzZXREZWZhdWx0RW5jb2RpbmcoZW5jb2RpbmcpIHtcbiAgLy8gbm9kZTo6UGFyc2VFbmNvZGluZygpIHJlcXVpcmVzIGxvd2VyIGNhc2UuXG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnKSBlbmNvZGluZyA9IGVuY29kaW5nLnRvTG93ZXJDYXNlKCk7XG4gIGlmICghKFsnaGV4JywgJ3V0ZjgnLCAndXRmLTgnLCAnYXNjaWknLCAnYmluYXJ5JywgJ2Jhc2U2NCcsICd1Y3MyJywgJ3Vjcy0yJywgJ3V0ZjE2bGUnLCAndXRmLTE2bGUnLCAncmF3J10uaW5kZXhPZigoZW5jb2RpbmcgKyAnJykudG9Mb3dlckNhc2UoKSkgPiAtMSkpIHRocm93IG5ldyBFUlJfVU5LTk9XTl9FTkNPRElORyhlbmNvZGluZyk7XG4gIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVmYXVsdEVuY29kaW5nID0gZW5jb2Rpbmc7XG4gIHJldHVybiB0aGlzO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLnByb3RvdHlwZSwgJ3dyaXRhYmxlQnVmZmVyJywge1xuICAvLyBtYWtpbmcgaXQgZXhwbGljaXQgdGhpcyBwcm9wZXJ0eSBpcyBub3QgZW51bWVyYWJsZVxuICAvLyBiZWNhdXNlIG90aGVyd2lzZSBzb21lIHByb3RvdHlwZSBtYW5pcHVsYXRpb24gaW5cbiAgLy8gdXNlcmxhbmQgd2lsbCBmYWlsXG4gIGVudW1lcmFibGU6IGZhbHNlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZSAmJiB0aGlzLl93cml0YWJsZVN0YXRlLmdldEJ1ZmZlcigpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGVjb2RlQ2h1bmsoc3RhdGUsIGNodW5rLCBlbmNvZGluZykge1xuICBpZiAoIXN0YXRlLm9iamVjdE1vZGUgJiYgc3RhdGUuZGVjb2RlU3RyaW5ncyAhPT0gZmFsc2UgJiYgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJykge1xuICAgIGNodW5rID0gQnVmZmVyLmZyb20oY2h1bmssIGVuY29kaW5nKTtcbiAgfVxuXG4gIHJldHVybiBjaHVuaztcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFdyaXRhYmxlLnByb3RvdHlwZSwgJ3dyaXRhYmxlSGlnaFdhdGVyTWFyaycsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUuaGlnaFdhdGVyTWFyaztcbiAgfVxufSk7IC8vIGlmIHdlJ3JlIGFscmVhZHkgd3JpdGluZyBzb21ldGhpbmcsIHRoZW4ganVzdCBwdXQgdGhpc1xuLy8gaW4gdGhlIHF1ZXVlLCBhbmQgd2FpdCBvdXIgdHVybi4gIE90aGVyd2lzZSwgY2FsbCBfd3JpdGVcbi8vIElmIHdlIHJldHVybiBmYWxzZSwgdGhlbiB3ZSBuZWVkIGEgZHJhaW4gZXZlbnQsIHNvIHNldCB0aGF0IGZsYWcuXG5cbmZ1bmN0aW9uIHdyaXRlT3JCdWZmZXIoc3RyZWFtLCBzdGF0ZSwgaXNCdWYsIGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgaWYgKCFpc0J1Zikge1xuICAgIHZhciBuZXdDaHVuayA9IGRlY29kZUNodW5rKHN0YXRlLCBjaHVuaywgZW5jb2RpbmcpO1xuXG4gICAgaWYgKGNodW5rICE9PSBuZXdDaHVuaykge1xuICAgICAgaXNCdWYgPSB0cnVlO1xuICAgICAgZW5jb2RpbmcgPSAnYnVmZmVyJztcbiAgICAgIGNodW5rID0gbmV3Q2h1bms7XG4gICAgfVxuICB9XG5cbiAgdmFyIGxlbiA9IHN0YXRlLm9iamVjdE1vZGUgPyAxIDogY2h1bmsubGVuZ3RoO1xuICBzdGF0ZS5sZW5ndGggKz0gbGVuO1xuICB2YXIgcmV0ID0gc3RhdGUubGVuZ3RoIDwgc3RhdGUuaGlnaFdhdGVyTWFyazsgLy8gd2UgbXVzdCBlbnN1cmUgdGhhdCBwcmV2aW91cyBuZWVkRHJhaW4gd2lsbCBub3QgYmUgcmVzZXQgdG8gZmFsc2UuXG5cbiAgaWYgKCFyZXQpIHN0YXRlLm5lZWREcmFpbiA9IHRydWU7XG5cbiAgaWYgKHN0YXRlLndyaXRpbmcgfHwgc3RhdGUuY29ya2VkKSB7XG4gICAgdmFyIGxhc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSB7XG4gICAgICBjaHVuazogY2h1bmssXG4gICAgICBlbmNvZGluZzogZW5jb2RpbmcsXG4gICAgICBpc0J1ZjogaXNCdWYsXG4gICAgICBjYWxsYmFjazogY2IsXG4gICAgICBuZXh0OiBudWxsXG4gICAgfTtcblxuICAgIGlmIChsYXN0KSB7XG4gICAgICBsYXN0Lm5leHQgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0O1xuICAgIH1cblxuICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50ICs9IDE7XG4gIH0gZWxzZSB7XG4gICAgZG9Xcml0ZShzdHJlYW0sIHN0YXRlLCBmYWxzZSwgbGVuLCBjaHVuaywgZW5jb2RpbmcsIGNiKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgd3JpdGV2LCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgc3RhdGUud3JpdGVsZW4gPSBsZW47XG4gIHN0YXRlLndyaXRlY2IgPSBjYjtcbiAgc3RhdGUud3JpdGluZyA9IHRydWU7XG4gIHN0YXRlLnN5bmMgPSB0cnVlO1xuICBpZiAoc3RhdGUuZGVzdHJveWVkKSBzdGF0ZS5vbndyaXRlKG5ldyBFUlJfU1RSRUFNX0RFU1RST1lFRCgnd3JpdGUnKSk7ZWxzZSBpZiAod3JpdGV2KSBzdHJlYW0uX3dyaXRldihjaHVuaywgc3RhdGUub253cml0ZSk7ZWxzZSBzdHJlYW0uX3dyaXRlKGNodW5rLCBlbmNvZGluZywgc3RhdGUub253cml0ZSk7XG4gIHN0YXRlLnN5bmMgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gb253cml0ZUVycm9yKHN0cmVhbSwgc3RhdGUsIHN5bmMsIGVyLCBjYikge1xuICAtLXN0YXRlLnBlbmRpbmdjYjtcblxuICBpZiAoc3luYykge1xuICAgIC8vIGRlZmVyIHRoZSBjYWxsYmFjayBpZiB3ZSBhcmUgYmVpbmcgY2FsbGVkIHN5bmNocm9ub3VzbHlcbiAgICAvLyB0byBhdm9pZCBwaWxpbmcgdXAgdGhpbmdzIG9uIHRoZSBzdGFja1xuICAgIHByb2Nlc3MubmV4dFRpY2soY2IsIGVyKTsgLy8gdGhpcyBjYW4gZW1pdCBmaW5pc2gsIGFuZCBpdCB3aWxsIGFsd2F5cyBoYXBwZW5cbiAgICAvLyBhZnRlciBlcnJvclxuXG4gICAgcHJvY2Vzcy5uZXh0VGljayhmaW5pc2hNYXliZSwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgZXJyb3JPckRlc3Ryb3koc3RyZWFtLCBlcik7XG4gIH0gZWxzZSB7XG4gICAgLy8gdGhlIGNhbGxlciBleHBlY3QgdGhpcyB0byBoYXBwZW4gYmVmb3JlIGlmXG4gICAgLy8gaXQgaXMgYXN5bmNcbiAgICBjYihlcik7XG4gICAgc3RyZWFtLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgZXJyb3JPckRlc3Ryb3koc3RyZWFtLCBlcik7IC8vIHRoaXMgY2FuIGVtaXQgZmluaXNoLCBidXQgZmluaXNoIG11c3RcbiAgICAvLyBhbHdheXMgZm9sbG93IGVycm9yXG5cbiAgICBmaW5pc2hNYXliZShzdHJlYW0sIHN0YXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbndyaXRlU3RhdGVVcGRhdGUoc3RhdGUpIHtcbiAgc3RhdGUud3JpdGluZyA9IGZhbHNlO1xuICBzdGF0ZS53cml0ZWNiID0gbnVsbDtcbiAgc3RhdGUubGVuZ3RoIC09IHN0YXRlLndyaXRlbGVuO1xuICBzdGF0ZS53cml0ZWxlbiA9IDA7XG59XG5cbmZ1bmN0aW9uIG9ud3JpdGUoc3RyZWFtLCBlcikge1xuICB2YXIgc3RhdGUgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG4gIHZhciBzeW5jID0gc3RhdGUuc3luYztcbiAgdmFyIGNiID0gc3RhdGUud3JpdGVjYjtcbiAgaWYgKHR5cGVvZiBjYiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IEVSUl9NVUxUSVBMRV9DQUxMQkFDSygpO1xuICBvbndyaXRlU3RhdGVVcGRhdGUoc3RhdGUpO1xuICBpZiAoZXIpIG9ud3JpdGVFcnJvcihzdHJlYW0sIHN0YXRlLCBzeW5jLCBlciwgY2IpO2Vsc2Uge1xuICAgIC8vIENoZWNrIGlmIHdlJ3JlIGFjdHVhbGx5IHJlYWR5IHRvIGZpbmlzaCwgYnV0IGRvbid0IGVtaXQgeWV0XG4gICAgdmFyIGZpbmlzaGVkID0gbmVlZEZpbmlzaChzdGF0ZSkgfHwgc3RyZWFtLmRlc3Ryb3llZDtcblxuICAgIGlmICghZmluaXNoZWQgJiYgIXN0YXRlLmNvcmtlZCAmJiAhc3RhdGUuYnVmZmVyUHJvY2Vzc2luZyAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QpIHtcbiAgICAgIGNsZWFyQnVmZmVyKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChzeW5jKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGFmdGVyV3JpdGUsIHN0cmVhbSwgc3RhdGUsIGZpbmlzaGVkLCBjYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFmdGVyV3JpdGUoc3RyZWFtLCBzdGF0ZSwgZmluaXNoZWQsIGNiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWZ0ZXJXcml0ZShzdHJlYW0sIHN0YXRlLCBmaW5pc2hlZCwgY2IpIHtcbiAgaWYgKCFmaW5pc2hlZCkgb253cml0ZURyYWluKHN0cmVhbSwgc3RhdGUpO1xuICBzdGF0ZS5wZW5kaW5nY2ItLTtcbiAgY2IoKTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG59IC8vIE11c3QgZm9yY2UgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIG5leHRUaWNrLCBzbyB0aGF0IHdlIGRvbid0XG4vLyBlbWl0ICdkcmFpbicgYmVmb3JlIHRoZSB3cml0ZSgpIGNvbnN1bWVyIGdldHMgdGhlICdmYWxzZScgcmV0dXJuXG4vLyB2YWx1ZSwgYW5kIGhhcyBhIGNoYW5jZSB0byBhdHRhY2ggYSAnZHJhaW4nIGxpc3RlbmVyLlxuXG5cbmZ1bmN0aW9uIG9ud3JpdGVEcmFpbihzdHJlYW0sIHN0YXRlKSB7XG4gIGlmIChzdGF0ZS5sZW5ndGggPT09IDAgJiYgc3RhdGUubmVlZERyYWluKSB7XG4gICAgc3RhdGUubmVlZERyYWluID0gZmFsc2U7XG4gICAgc3RyZWFtLmVtaXQoJ2RyYWluJyk7XG4gIH1cbn0gLy8gaWYgdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIGJ1ZmZlciB3YWl0aW5nLCB0aGVuIHByb2Nlc3MgaXRcblxuXG5mdW5jdGlvbiBjbGVhckJ1ZmZlcihzdHJlYW0sIHN0YXRlKSB7XG4gIHN0YXRlLmJ1ZmZlclByb2Nlc3NpbmcgPSB0cnVlO1xuICB2YXIgZW50cnkgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3Q7XG5cbiAgaWYgKHN0cmVhbS5fd3JpdGV2ICYmIGVudHJ5ICYmIGVudHJ5Lm5leHQpIHtcbiAgICAvLyBGYXN0IGNhc2UsIHdyaXRlIGV2ZXJ5dGhpbmcgdXNpbmcgX3dyaXRldigpXG4gICAgdmFyIGwgPSBzdGF0ZS5idWZmZXJlZFJlcXVlc3RDb3VudDtcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5KGwpO1xuICAgIHZhciBob2xkZXIgPSBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWU7XG4gICAgaG9sZGVyLmVudHJ5ID0gZW50cnk7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICB2YXIgYWxsQnVmZmVycyA9IHRydWU7XG5cbiAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgIGJ1ZmZlcltjb3VudF0gPSBlbnRyeTtcbiAgICAgIGlmICghZW50cnkuaXNCdWYpIGFsbEJ1ZmZlcnMgPSBmYWxzZTtcbiAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgYnVmZmVyLmFsbEJ1ZmZlcnMgPSBhbGxCdWZmZXJzO1xuICAgIGRvV3JpdGUoc3RyZWFtLCBzdGF0ZSwgdHJ1ZSwgc3RhdGUubGVuZ3RoLCBidWZmZXIsICcnLCBob2xkZXIuZmluaXNoKTsgLy8gZG9Xcml0ZSBpcyBhbG1vc3QgYWx3YXlzIGFzeW5jLCBkZWZlciB0aGVzZSB0byBzYXZlIGEgYml0IG9mIHRpbWVcbiAgICAvLyBhcyB0aGUgaG90IHBhdGggZW5kcyB3aXRoIGRvV3JpdGVcblxuICAgIHN0YXRlLnBlbmRpbmdjYisrO1xuICAgIHN0YXRlLmxhc3RCdWZmZXJlZFJlcXVlc3QgPSBudWxsO1xuXG4gICAgaWYgKGhvbGRlci5uZXh0KSB7XG4gICAgICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUgPSBob2xkZXIubmV4dDtcbiAgICAgIGhvbGRlci5uZXh0ID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUuY29ya2VkUmVxdWVzdHNGcmVlID0gbmV3IENvcmtlZFJlcXVlc3Qoc3RhdGUpO1xuICAgIH1cblxuICAgIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdENvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBTbG93IGNhc2UsIHdyaXRlIGNodW5rcyBvbmUtYnktb25lXG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICB2YXIgY2h1bmsgPSBlbnRyeS5jaHVuaztcbiAgICAgIHZhciBlbmNvZGluZyA9IGVudHJ5LmVuY29kaW5nO1xuICAgICAgdmFyIGNiID0gZW50cnkuY2FsbGJhY2s7XG4gICAgICB2YXIgbGVuID0gc3RhdGUub2JqZWN0TW9kZSA/IDEgOiBjaHVuay5sZW5ndGg7XG4gICAgICBkb1dyaXRlKHN0cmVhbSwgc3RhdGUsIGZhbHNlLCBsZW4sIGNodW5rLCBlbmNvZGluZywgY2IpO1xuICAgICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICAgICAgc3RhdGUuYnVmZmVyZWRSZXF1ZXN0Q291bnQtLTsgLy8gaWYgd2UgZGlkbid0IGNhbGwgdGhlIG9ud3JpdGUgaW1tZWRpYXRlbHksIHRoZW5cbiAgICAgIC8vIGl0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byB3YWl0IHVudGlsIGl0IGRvZXMuXG4gICAgICAvLyBhbHNvLCB0aGF0IG1lYW5zIHRoYXQgdGhlIGNodW5rIGFuZCBjYiBhcmUgY3VycmVudGx5XG4gICAgICAvLyBiZWluZyBwcm9jZXNzZWQsIHNvIG1vdmUgdGhlIGJ1ZmZlciBjb3VudGVyIHBhc3QgdGhlbS5cblxuICAgICAgaWYgKHN0YXRlLndyaXRpbmcpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGVudHJ5ID09PSBudWxsKSBzdGF0ZS5sYXN0QnVmZmVyZWRSZXF1ZXN0ID0gbnVsbDtcbiAgfVxuXG4gIHN0YXRlLmJ1ZmZlcmVkUmVxdWVzdCA9IGVudHJ5O1xuICBzdGF0ZS5idWZmZXJQcm9jZXNzaW5nID0gZmFsc2U7XG59XG5cbldyaXRhYmxlLnByb3RvdHlwZS5fd3JpdGUgPSBmdW5jdGlvbiAoY2h1bmssIGVuY29kaW5nLCBjYikge1xuICBjYihuZXcgRVJSX01FVEhPRF9OT1RfSU1QTEVNRU5URUQoJ193cml0ZSgpJykpO1xufTtcblxuV3JpdGFibGUucHJvdG90eXBlLl93cml0ZXYgPSBudWxsO1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGNodW5rLCBlbmNvZGluZywgY2IpIHtcbiAgdmFyIHN0YXRlID0gdGhpcy5fd3JpdGFibGVTdGF0ZTtcblxuICBpZiAodHlwZW9mIGNodW5rID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBjaHVuaztcbiAgICBjaHVuayA9IG51bGw7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBlbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gZW5jb2Rpbmc7XG4gICAgZW5jb2RpbmcgPSBudWxsO1xuICB9XG5cbiAgaWYgKGNodW5rICE9PSBudWxsICYmIGNodW5rICE9PSB1bmRlZmluZWQpIHRoaXMud3JpdGUoY2h1bmssIGVuY29kaW5nKTsgLy8gLmVuZCgpIGZ1bGx5IHVuY29ya3NcblxuICBpZiAoc3RhdGUuY29ya2VkKSB7XG4gICAgc3RhdGUuY29ya2VkID0gMTtcbiAgICB0aGlzLnVuY29yaygpO1xuICB9IC8vIGlnbm9yZSB1bm5lY2Vzc2FyeSBlbmQoKSBjYWxscy5cblxuXG4gIGlmICghc3RhdGUuZW5kaW5nKSBlbmRXcml0YWJsZSh0aGlzLCBzdGF0ZSwgY2IpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICd3cml0YWJsZUxlbmd0aCcsIHtcbiAgLy8gbWFraW5nIGl0IGV4cGxpY2l0IHRoaXMgcHJvcGVydHkgaXMgbm90IGVudW1lcmFibGVcbiAgLy8gYmVjYXVzZSBvdGhlcndpc2Ugc29tZSBwcm90b3R5cGUgbWFuaXB1bGF0aW9uIGluXG4gIC8vIHVzZXJsYW5kIHdpbGwgZmFpbFxuICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3dyaXRhYmxlU3RhdGUubGVuZ3RoO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmVlZEZpbmlzaChzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUuZW5kaW5nICYmIHN0YXRlLmxlbmd0aCA9PT0gMCAmJiBzdGF0ZS5idWZmZXJlZFJlcXVlc3QgPT09IG51bGwgJiYgIXN0YXRlLmZpbmlzaGVkICYmICFzdGF0ZS53cml0aW5nO1xufVxuXG5mdW5jdGlvbiBjYWxsRmluYWwoc3RyZWFtLCBzdGF0ZSkge1xuICBzdHJlYW0uX2ZpbmFsKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBzdGF0ZS5wZW5kaW5nY2ItLTtcblxuICAgIGlmIChlcnIpIHtcbiAgICAgIGVycm9yT3JEZXN0cm95KHN0cmVhbSwgZXJyKTtcbiAgICB9XG5cbiAgICBzdGF0ZS5wcmVmaW5pc2hlZCA9IHRydWU7XG4gICAgc3RyZWFtLmVtaXQoJ3ByZWZpbmlzaCcpO1xuICAgIGZpbmlzaE1heWJlKHN0cmVhbSwgc3RhdGUpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZS5wcmVmaW5pc2hlZCAmJiAhc3RhdGUuZmluYWxDYWxsZWQpIHtcbiAgICBpZiAodHlwZW9mIHN0cmVhbS5fZmluYWwgPT09ICdmdW5jdGlvbicgJiYgIXN0YXRlLmRlc3Ryb3llZCkge1xuICAgICAgc3RhdGUucGVuZGluZ2NiKys7XG4gICAgICBzdGF0ZS5maW5hbENhbGxlZCA9IHRydWU7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGNhbGxGaW5hbCwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnByZWZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgIHN0cmVhbS5lbWl0KCdwcmVmaW5pc2gnKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSkge1xuICB2YXIgbmVlZCA9IG5lZWRGaW5pc2goc3RhdGUpO1xuXG4gIGlmIChuZWVkKSB7XG4gICAgcHJlZmluaXNoKHN0cmVhbSwgc3RhdGUpO1xuXG4gICAgaWYgKHN0YXRlLnBlbmRpbmdjYiA9PT0gMCkge1xuICAgICAgc3RhdGUuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgc3RyZWFtLmVtaXQoJ2ZpbmlzaCcpO1xuXG4gICAgICBpZiAoc3RhdGUuYXV0b0Rlc3Ryb3kpIHtcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBkdXBsZXggc3RyZWFtcyB3ZSBuZWVkIGEgd2F5IHRvIGRldGVjdFxuICAgICAgICAvLyBpZiB0aGUgcmVhZGFibGUgc2lkZSBpcyByZWFkeSBmb3IgYXV0b0Rlc3Ryb3kgYXMgd2VsbFxuICAgICAgICB2YXIgclN0YXRlID0gc3RyZWFtLl9yZWFkYWJsZVN0YXRlO1xuXG4gICAgICAgIGlmICghclN0YXRlIHx8IHJTdGF0ZS5hdXRvRGVzdHJveSAmJiByU3RhdGUuZW5kRW1pdHRlZCkge1xuICAgICAgICAgIHN0cmVhbS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmVlZDtcbn1cblxuZnVuY3Rpb24gZW5kV3JpdGFibGUoc3RyZWFtLCBzdGF0ZSwgY2IpIHtcbiAgc3RhdGUuZW5kaW5nID0gdHJ1ZTtcbiAgZmluaXNoTWF5YmUoc3RyZWFtLCBzdGF0ZSk7XG5cbiAgaWYgKGNiKSB7XG4gICAgaWYgKHN0YXRlLmZpbmlzaGVkKSBwcm9jZXNzLm5leHRUaWNrKGNiKTtlbHNlIHN0cmVhbS5vbmNlKCdmaW5pc2gnLCBjYik7XG4gIH1cblxuICBzdGF0ZS5lbmRlZCA9IHRydWU7XG4gIHN0cmVhbS53cml0YWJsZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBvbkNvcmtlZEZpbmlzaChjb3JrUmVxLCBzdGF0ZSwgZXJyKSB7XG4gIHZhciBlbnRyeSA9IGNvcmtSZXEuZW50cnk7XG4gIGNvcmtSZXEuZW50cnkgPSBudWxsO1xuXG4gIHdoaWxlIChlbnRyeSkge1xuICAgIHZhciBjYiA9IGVudHJ5LmNhbGxiYWNrO1xuICAgIHN0YXRlLnBlbmRpbmdjYi0tO1xuICAgIGNiKGVycik7XG4gICAgZW50cnkgPSBlbnRyeS5uZXh0O1xuICB9IC8vIHJldXNlIHRoZSBmcmVlIGNvcmtSZXEuXG5cblxuICBzdGF0ZS5jb3JrZWRSZXF1ZXN0c0ZyZWUubmV4dCA9IGNvcmtSZXE7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShXcml0YWJsZS5wcm90b3R5cGUsICdkZXN0cm95ZWQnLCB7XG4gIC8vIG1ha2luZyBpdCBleHBsaWNpdCB0aGlzIHByb3BlcnR5IGlzIG5vdCBlbnVtZXJhYmxlXG4gIC8vIGJlY2F1c2Ugb3RoZXJ3aXNlIHNvbWUgcHJvdG90eXBlIG1hbmlwdWxhdGlvbiBpblxuICAvLyB1c2VybGFuZCB3aWxsIGZhaWxcbiAgZW51bWVyYWJsZTogZmFsc2UsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIGlmICh0aGlzLl93cml0YWJsZVN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgLy8gd2UgaWdub3JlIHRoZSB2YWx1ZSBpZiB0aGUgc3RyZWFtXG4gICAgLy8gaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkIHlldFxuICAgIGlmICghdGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gYmFja3dhcmQgY29tcGF0aWJpbGl0eSwgdGhlIHVzZXIgaXMgZXhwbGljaXRseVxuICAgIC8vIG1hbmFnaW5nIGRlc3Ryb3llZFxuXG5cbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmRlc3Ryb3llZCA9IHZhbHVlO1xuICB9XG59KTtcbldyaXRhYmxlLnByb3RvdHlwZS5kZXN0cm95ID0gZGVzdHJveUltcGwuZGVzdHJveTtcbldyaXRhYmxlLnByb3RvdHlwZS5fdW5kZXN0cm95ID0gZGVzdHJveUltcGwudW5kZXN0cm95O1xuXG5Xcml0YWJsZS5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiAoZXJyLCBjYikge1xuICBjYihlcnIpO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBfT2JqZWN0JHNldFByb3RvdHlwZU87XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBmaW5pc2hlZCA9IHJlcXVpcmUoJy4vZW5kLW9mLXN0cmVhbScpO1xuXG52YXIga0xhc3RSZXNvbHZlID0gU3ltYm9sKCdsYXN0UmVzb2x2ZScpO1xudmFyIGtMYXN0UmVqZWN0ID0gU3ltYm9sKCdsYXN0UmVqZWN0Jyk7XG52YXIga0Vycm9yID0gU3ltYm9sKCdlcnJvcicpO1xudmFyIGtFbmRlZCA9IFN5bWJvbCgnZW5kZWQnKTtcbnZhciBrTGFzdFByb21pc2UgPSBTeW1ib2woJ2xhc3RQcm9taXNlJyk7XG52YXIga0hhbmRsZVByb21pc2UgPSBTeW1ib2woJ2hhbmRsZVByb21pc2UnKTtcbnZhciBrU3RyZWFtID0gU3ltYm9sKCdzdHJlYW0nKTtcblxuZnVuY3Rpb24gY3JlYXRlSXRlclJlc3VsdCh2YWx1ZSwgZG9uZSkge1xuICByZXR1cm4ge1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBkb25lOiBkb25lXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlYWRBbmRSZXNvbHZlKGl0ZXIpIHtcbiAgdmFyIHJlc29sdmUgPSBpdGVyW2tMYXN0UmVzb2x2ZV07XG5cbiAgaWYgKHJlc29sdmUgIT09IG51bGwpIHtcbiAgICB2YXIgZGF0YSA9IGl0ZXJba1N0cmVhbV0ucmVhZCgpOyAvLyB3ZSBkZWZlciBpZiBkYXRhIGlzIG51bGxcbiAgICAvLyB3ZSBjYW4gYmUgZXhwZWN0aW5nIGVpdGhlciAnZW5kJyBvclxuICAgIC8vICdlcnJvcidcblxuICAgIGlmIChkYXRhICE9PSBudWxsKSB7XG4gICAgICBpdGVyW2tMYXN0UHJvbWlzZV0gPSBudWxsO1xuICAgICAgaXRlcltrTGFzdFJlc29sdmVdID0gbnVsbDtcbiAgICAgIGl0ZXJba0xhc3RSZWplY3RdID0gbnVsbDtcbiAgICAgIHJlc29sdmUoY3JlYXRlSXRlclJlc3VsdChkYXRhLCBmYWxzZSkpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBvblJlYWRhYmxlKGl0ZXIpIHtcbiAgLy8gd2Ugd2FpdCBmb3IgdGhlIG5leHQgdGljaywgYmVjYXVzZSBpdCBtaWdodFxuICAvLyBlbWl0IGFuIGVycm9yIHdpdGggcHJvY2Vzcy5uZXh0VGlja1xuICBwcm9jZXNzLm5leHRUaWNrKHJlYWRBbmRSZXNvbHZlLCBpdGVyKTtcbn1cblxuZnVuY3Rpb24gd3JhcEZvck5leHQobGFzdFByb21pc2UsIGl0ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsYXN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpdGVyW2tFbmRlZF0pIHtcbiAgICAgICAgcmVzb2x2ZShjcmVhdGVJdGVyUmVzdWx0KHVuZGVmaW5lZCwgdHJ1ZSkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGl0ZXJba0hhbmRsZVByb21pc2VdKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSwgcmVqZWN0KTtcbiAgfTtcbn1cblxudmFyIEFzeW5jSXRlcmF0b3JQcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoZnVuY3Rpb24gKCkge30pO1xudmFyIFJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvclByb3RvdHlwZSA9IE9iamVjdC5zZXRQcm90b3R5cGVPZigoX09iamVjdCRzZXRQcm90b3R5cGVPID0ge1xuICBnZXQgc3RyZWFtKCkge1xuICAgIHJldHVybiB0aGlzW2tTdHJlYW1dO1xuICB9LFxuXG4gIG5leHQ6IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIC8vIGlmIHdlIGhhdmUgZGV0ZWN0ZWQgYW4gZXJyb3IgaW4gdGhlIG1lYW53aGlsZVxuICAgIC8vIHJlamVjdCBzdHJhaWdodCBhd2F5XG4gICAgdmFyIGVycm9yID0gdGhpc1trRXJyb3JdO1xuXG4gICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIGlmICh0aGlzW2tFbmRlZF0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY3JlYXRlSXRlclJlc3VsdCh1bmRlZmluZWQsIHRydWUpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpc1trU3RyZWFtXS5kZXN0cm95ZWQpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gZGVmZXIgdmlhIG5leHRUaWNrIGJlY2F1c2UgaWYgLmRlc3Ryb3koZXJyKSBpc1xuICAgICAgLy8gY2FsbGVkLCB0aGUgZXJyb3Igd2lsbCBiZSBlbWl0dGVkIHZpYSBuZXh0VGljaywgYW5kXG4gICAgICAvLyB3ZSBjYW5ub3QgZ3VhcmFudGVlIHRoYXQgdGhlcmUgaXMgbm8gZXJyb3IgbGluZ2VyaW5nIGFyb3VuZFxuICAgICAgLy8gd2FpdGluZyB0byBiZSBlbWl0dGVkLlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF90aGlzW2tFcnJvcl0pIHtcbiAgICAgICAgICAgIHJlamVjdChfdGhpc1trRXJyb3JdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzb2x2ZShjcmVhdGVJdGVyUmVzdWx0KHVuZGVmaW5lZCwgdHJ1ZSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IC8vIGlmIHdlIGhhdmUgbXVsdGlwbGUgbmV4dCgpIGNhbGxzXG4gICAgLy8gd2Ugd2lsbCB3YWl0IGZvciB0aGUgcHJldmlvdXMgUHJvbWlzZSB0byBmaW5pc2hcbiAgICAvLyB0aGlzIGxvZ2ljIGlzIG9wdGltaXplZCB0byBzdXBwb3J0IGZvciBhd2FpdCBsb29wcyxcbiAgICAvLyB3aGVyZSBuZXh0KCkgaXMgb25seSBjYWxsZWQgb25jZSBhdCBhIHRpbWVcblxuXG4gICAgdmFyIGxhc3RQcm9taXNlID0gdGhpc1trTGFzdFByb21pc2VdO1xuICAgIHZhciBwcm9taXNlO1xuXG4gICAgaWYgKGxhc3RQcm9taXNlKSB7XG4gICAgICBwcm9taXNlID0gbmV3IFByb21pc2Uod3JhcEZvck5leHQobGFzdFByb21pc2UsIHRoaXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZmFzdCBwYXRoIG5lZWRlZCB0byBzdXBwb3J0IG11bHRpcGxlIHRoaXMucHVzaCgpXG4gICAgICAvLyB3aXRob3V0IHRyaWdnZXJpbmcgdGhlIG5leHQoKSBxdWV1ZVxuICAgICAgdmFyIGRhdGEgPSB0aGlzW2tTdHJlYW1dLnJlYWQoKTtcblxuICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjcmVhdGVJdGVyUmVzdWx0KGRhdGEsIGZhbHNlKSk7XG4gICAgICB9XG5cbiAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSh0aGlzW2tIYW5kbGVQcm9taXNlXSk7XG4gICAgfVxuXG4gICAgdGhpc1trTGFzdFByb21pc2VdID0gcHJvbWlzZTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbiAgfVxufSwgX2RlZmluZVByb3BlcnR5KF9PYmplY3Qkc2V0UHJvdG90eXBlTywgU3ltYm9sLmFzeW5jSXRlcmF0b3IsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59KSwgX2RlZmluZVByb3BlcnR5KF9PYmplY3Qkc2V0UHJvdG90eXBlTywgXCJyZXR1cm5cIiwgZnVuY3Rpb24gX3JldHVybigpIHtcbiAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgLy8gZGVzdHJveShlcnIsIGNiKSBpcyBhIHByaXZhdGUgQVBJXG4gIC8vIHdlIGNhbiBndWFyYW50ZWUgd2UgaGF2ZSB0aGF0IGhlcmUsIGJlY2F1c2Ugd2UgY29udHJvbCB0aGVcbiAgLy8gUmVhZGFibGUgY2xhc3MgdGhpcyBpcyBhdHRhY2hlZCB0b1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIF90aGlzMltrU3RyZWFtXS5kZXN0cm95KG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVzb2x2ZShjcmVhdGVJdGVyUmVzdWx0KHVuZGVmaW5lZCwgdHJ1ZSkpO1xuICAgIH0pO1xuICB9KTtcbn0pLCBfT2JqZWN0JHNldFByb3RvdHlwZU8pLCBBc3luY0l0ZXJhdG9yUHJvdG90eXBlKTtcblxudmFyIGNyZWF0ZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvciA9IGZ1bmN0aW9uIGNyZWF0ZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcihzdHJlYW0pIHtcbiAgdmFyIF9PYmplY3QkY3JlYXRlO1xuXG4gIHZhciBpdGVyYXRvciA9IE9iamVjdC5jcmVhdGUoUmVhZGFibGVTdHJlYW1Bc3luY0l0ZXJhdG9yUHJvdG90eXBlLCAoX09iamVjdCRjcmVhdGUgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9PYmplY3QkY3JlYXRlLCBrU3RyZWFtLCB7XG4gICAgdmFsdWU6IHN0cmVhbSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgX2RlZmluZVByb3BlcnR5KF9PYmplY3QkY3JlYXRlLCBrTGFzdFJlc29sdmUsIHtcbiAgICB2YWx1ZTogbnVsbCxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgX2RlZmluZVByb3BlcnR5KF9PYmplY3QkY3JlYXRlLCBrTGFzdFJlamVjdCwge1xuICAgIHZhbHVlOiBudWxsLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX09iamVjdCRjcmVhdGUsIGtFcnJvciwge1xuICAgIHZhbHVlOiBudWxsLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCBfZGVmaW5lUHJvcGVydHkoX09iamVjdCRjcmVhdGUsIGtFbmRlZCwge1xuICAgIHZhbHVlOiBzdHJlYW0uX3JlYWRhYmxlU3RhdGUuZW5kRW1pdHRlZCxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9KSwgX2RlZmluZVByb3BlcnR5KF9PYmplY3QkY3JlYXRlLCBrSGFuZGxlUHJvbWlzZSwge1xuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBkYXRhID0gaXRlcmF0b3Jba1N0cmVhbV0ucmVhZCgpO1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBpdGVyYXRvcltrTGFzdFByb21pc2VdID0gbnVsbDtcbiAgICAgICAgaXRlcmF0b3Jba0xhc3RSZXNvbHZlXSA9IG51bGw7XG4gICAgICAgIGl0ZXJhdG9yW2tMYXN0UmVqZWN0XSA9IG51bGw7XG4gICAgICAgIHJlc29sdmUoY3JlYXRlSXRlclJlc3VsdChkYXRhLCBmYWxzZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaXRlcmF0b3Jba0xhc3RSZXNvbHZlXSA9IHJlc29sdmU7XG4gICAgICAgIGl0ZXJhdG9yW2tMYXN0UmVqZWN0XSA9IHJlamVjdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0pLCBfT2JqZWN0JGNyZWF0ZSkpO1xuICBpdGVyYXRvcltrTGFzdFByb21pc2VdID0gbnVsbDtcbiAgZmluaXNoZWQoc3RyZWFtLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVyciAmJiBlcnIuY29kZSAhPT0gJ0VSUl9TVFJFQU1fUFJFTUFUVVJFX0NMT1NFJykge1xuICAgICAgdmFyIHJlamVjdCA9IGl0ZXJhdG9yW2tMYXN0UmVqZWN0XTsgLy8gcmVqZWN0IGlmIHdlIGFyZSB3YWl0aW5nIGZvciBkYXRhIGluIHRoZSBQcm9taXNlXG4gICAgICAvLyByZXR1cm5lZCBieSBuZXh0KCkgYW5kIHN0b3JlIHRoZSBlcnJvclxuXG4gICAgICBpZiAocmVqZWN0ICE9PSBudWxsKSB7XG4gICAgICAgIGl0ZXJhdG9yW2tMYXN0UHJvbWlzZV0gPSBudWxsO1xuICAgICAgICBpdGVyYXRvcltrTGFzdFJlc29sdmVdID0gbnVsbDtcbiAgICAgICAgaXRlcmF0b3Jba0xhc3RSZWplY3RdID0gbnVsbDtcbiAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICB9XG5cbiAgICAgIGl0ZXJhdG9yW2tFcnJvcl0gPSBlcnI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJlc29sdmUgPSBpdGVyYXRvcltrTGFzdFJlc29sdmVdO1xuXG4gICAgaWYgKHJlc29sdmUgIT09IG51bGwpIHtcbiAgICAgIGl0ZXJhdG9yW2tMYXN0UHJvbWlzZV0gPSBudWxsO1xuICAgICAgaXRlcmF0b3Jba0xhc3RSZXNvbHZlXSA9IG51bGw7XG4gICAgICBpdGVyYXRvcltrTGFzdFJlamVjdF0gPSBudWxsO1xuICAgICAgcmVzb2x2ZShjcmVhdGVJdGVyUmVzdWx0KHVuZGVmaW5lZCwgdHJ1ZSkpO1xuICAgIH1cblxuICAgIGl0ZXJhdG9yW2tFbmRlZF0gPSB0cnVlO1xuICB9KTtcbiAgc3RyZWFtLm9uKCdyZWFkYWJsZScsIG9uUmVhZGFibGUuYmluZChudWxsLCBpdGVyYXRvcikpO1xuICByZXR1cm4gaXRlcmF0b3I7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVJlYWRhYmxlU3RyZWFtQXN5bmNJdGVyYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbnZhciBfcmVxdWlyZSA9IHJlcXVpcmUoJ2J1ZmZlcicpLFxuICAgIEJ1ZmZlciA9IF9yZXF1aXJlLkJ1ZmZlcjtcblxudmFyIF9yZXF1aXJlMiA9IHJlcXVpcmUoJ3V0aWwnKSxcbiAgICBpbnNwZWN0ID0gX3JlcXVpcmUyLmluc3BlY3Q7XG5cbnZhciBjdXN0b20gPSBpbnNwZWN0ICYmIGluc3BlY3QuY3VzdG9tIHx8ICdpbnNwZWN0JztcblxuZnVuY3Rpb24gY29weUJ1ZmZlcihzcmMsIHRhcmdldCwgb2Zmc2V0KSB7XG4gIEJ1ZmZlci5wcm90b3R5cGUuY29weS5jYWxsKHNyYywgdGFyZ2V0LCBvZmZzZXQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEJ1ZmZlckxpc3QoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEJ1ZmZlckxpc3QpO1xuXG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLnRhaWwgPSBudWxsO1xuICAgIHRoaXMubGVuZ3RoID0gMDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCdWZmZXJMaXN0LCBbe1xuICAgIGtleTogXCJwdXNoXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHB1c2godikge1xuICAgICAgdmFyIGVudHJ5ID0ge1xuICAgICAgICBkYXRhOiB2LFxuICAgICAgICBuZXh0OiBudWxsXG4gICAgICB9O1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkgdGhpcy50YWlsLm5leHQgPSBlbnRyeTtlbHNlIHRoaXMuaGVhZCA9IGVudHJ5O1xuICAgICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgICArK3RoaXMubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ1bnNoaWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVuc2hpZnQodikge1xuICAgICAgdmFyIGVudHJ5ID0ge1xuICAgICAgICBkYXRhOiB2LFxuICAgICAgICBuZXh0OiB0aGlzLmhlYWRcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy5sZW5ndGggPT09IDApIHRoaXMudGFpbCA9IGVudHJ5O1xuICAgICAgdGhpcy5oZWFkID0gZW50cnk7XG4gICAgICArK3RoaXMubGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzaGlmdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgdmFyIHJldCA9IHRoaXMuaGVhZC5kYXRhO1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO2Vsc2UgdGhpcy5oZWFkID0gdGhpcy5oZWFkLm5leHQ7XG4gICAgICAtLXRoaXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2xlYXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuICAgICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJqb2luXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGpvaW4ocykge1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gICAgICB2YXIgcCA9IHRoaXMuaGVhZDtcbiAgICAgIHZhciByZXQgPSAnJyArIHAuZGF0YTtcblxuICAgICAgd2hpbGUgKHAgPSBwLm5leHQpIHtcbiAgICAgICAgcmV0ICs9IHMgKyBwLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbmNhdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25jYXQobikge1xuICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm4gQnVmZmVyLmFsbG9jKDApO1xuICAgICAgdmFyIHJldCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShuID4+PiAwKTtcbiAgICAgIHZhciBwID0gdGhpcy5oZWFkO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB3aGlsZSAocCkge1xuICAgICAgICBjb3B5QnVmZmVyKHAuZGF0YSwgcmV0LCBpKTtcbiAgICAgICAgaSArPSBwLmRhdGEubGVuZ3RoO1xuICAgICAgICBwID0gcC5uZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH0gLy8gQ29uc3VtZXMgYSBzcGVjaWZpZWQgYW1vdW50IG9mIGJ5dGVzIG9yIGNoYXJhY3RlcnMgZnJvbSB0aGUgYnVmZmVyZWQgZGF0YS5cblxuICB9LCB7XG4gICAga2V5OiBcImNvbnN1bWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29uc3VtZShuLCBoYXNTdHJpbmdzKSB7XG4gICAgICB2YXIgcmV0O1xuXG4gICAgICBpZiAobiA8IHRoaXMuaGVhZC5kYXRhLmxlbmd0aCkge1xuICAgICAgICAvLyBgc2xpY2VgIGlzIHRoZSBzYW1lIGZvciBidWZmZXJzIGFuZCBzdHJpbmdzLlxuICAgICAgICByZXQgPSB0aGlzLmhlYWQuZGF0YS5zbGljZSgwLCBuKTtcbiAgICAgICAgdGhpcy5oZWFkLmRhdGEgPSB0aGlzLmhlYWQuZGF0YS5zbGljZShuKTtcbiAgICAgIH0gZWxzZSBpZiAobiA9PT0gdGhpcy5oZWFkLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgIC8vIEZpcnN0IGNodW5rIGlzIGEgcGVyZmVjdCBtYXRjaC5cbiAgICAgICAgcmV0ID0gdGhpcy5zaGlmdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gUmVzdWx0IHNwYW5zIG1vcmUgdGhhbiBvbmUgYnVmZmVyLlxuICAgICAgICByZXQgPSBoYXNTdHJpbmdzID8gdGhpcy5fZ2V0U3RyaW5nKG4pIDogdGhpcy5fZ2V0QnVmZmVyKG4pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJmaXJzdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmhlYWQuZGF0YTtcbiAgICB9IC8vIENvbnN1bWVzIGEgc3BlY2lmaWVkIGFtb3VudCBvZiBjaGFyYWN0ZXJzIGZyb20gdGhlIGJ1ZmZlcmVkIGRhdGEuXG5cbiAgfSwge1xuICAgIGtleTogXCJfZ2V0U3RyaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9nZXRTdHJpbmcobikge1xuICAgICAgdmFyIHAgPSB0aGlzLmhlYWQ7XG4gICAgICB2YXIgYyA9IDE7XG4gICAgICB2YXIgcmV0ID0gcC5kYXRhO1xuICAgICAgbiAtPSByZXQubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgICAgICB2YXIgc3RyID0gcC5kYXRhO1xuICAgICAgICB2YXIgbmIgPSBuID4gc3RyLmxlbmd0aCA/IHN0ci5sZW5ndGggOiBuO1xuICAgICAgICBpZiAobmIgPT09IHN0ci5sZW5ndGgpIHJldCArPSBzdHI7ZWxzZSByZXQgKz0gc3RyLnNsaWNlKDAsIG4pO1xuICAgICAgICBuIC09IG5iO1xuXG4gICAgICAgIGlmIChuID09PSAwKSB7XG4gICAgICAgICAgaWYgKG5iID09PSBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICArK2M7XG4gICAgICAgICAgICBpZiAocC5uZXh0KSB0aGlzLmhlYWQgPSBwLm5leHQ7ZWxzZSB0aGlzLmhlYWQgPSB0aGlzLnRhaWwgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSBwO1xuICAgICAgICAgICAgcC5kYXRhID0gc3RyLnNsaWNlKG5iKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgICsrYztcbiAgICAgIH1cblxuICAgICAgdGhpcy5sZW5ndGggLT0gYztcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSAvLyBDb25zdW1lcyBhIHNwZWNpZmllZCBhbW91bnQgb2YgYnl0ZXMgZnJvbSB0aGUgYnVmZmVyZWQgZGF0YS5cblxuICB9LCB7XG4gICAga2V5OiBcIl9nZXRCdWZmZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2dldEJ1ZmZlcihuKSB7XG4gICAgICB2YXIgcmV0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKG4pO1xuICAgICAgdmFyIHAgPSB0aGlzLmhlYWQ7XG4gICAgICB2YXIgYyA9IDE7XG4gICAgICBwLmRhdGEuY29weShyZXQpO1xuICAgICAgbiAtPSBwLmRhdGEubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAocCA9IHAubmV4dCkge1xuICAgICAgICB2YXIgYnVmID0gcC5kYXRhO1xuICAgICAgICB2YXIgbmIgPSBuID4gYnVmLmxlbmd0aCA/IGJ1Zi5sZW5ndGggOiBuO1xuICAgICAgICBidWYuY29weShyZXQsIHJldC5sZW5ndGggLSBuLCAwLCBuYik7XG4gICAgICAgIG4gLT0gbmI7XG5cbiAgICAgICAgaWYgKG4gPT09IDApIHtcbiAgICAgICAgICBpZiAobmIgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgICsrYztcbiAgICAgICAgICAgIGlmIChwLm5leHQpIHRoaXMuaGVhZCA9IHAubmV4dDtlbHNlIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IHA7XG4gICAgICAgICAgICBwLmRhdGEgPSBidWYuc2xpY2UobmIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgKytjO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxlbmd0aCAtPSBjO1xuICAgICAgcmV0dXJuIHJldDtcbiAgICB9IC8vIE1ha2Ugc3VyZSB0aGUgbGlua2VkIGxpc3Qgb25seSBzaG93cyB0aGUgbWluaW1hbCBuZWNlc3NhcnkgaW5mb3JtYXRpb24uXG5cbiAgfSwge1xuICAgIGtleTogY3VzdG9tLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfLCBvcHRpb25zKSB7XG4gICAgICByZXR1cm4gaW5zcGVjdCh0aGlzLCBfb2JqZWN0U3ByZWFkKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIC8vIE9ubHkgaW5zcGVjdCBvbmUgbGV2ZWwuXG4gICAgICAgIGRlcHRoOiAwLFxuICAgICAgICAvLyBJdCBzaG91bGQgbm90IHJlY3Vyc2UuXG4gICAgICAgIGN1c3RvbUluc3BlY3Q6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEJ1ZmZlckxpc3Q7XG59KCk7IiwiJ3VzZSBzdHJpY3QnOyAvLyB1bmRvY3VtZW50ZWQgY2IoKSBBUEksIG5lZWRlZCBmb3IgY29yZSwgbm90IGZvciBwdWJsaWMgQVBJXG5cbmZ1bmN0aW9uIGRlc3Ryb3koZXJyLCBjYikge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciByZWFkYWJsZURlc3Ryb3llZCA9IHRoaXMuX3JlYWRhYmxlU3RhdGUgJiYgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG4gIHZhciB3cml0YWJsZURlc3Ryb3llZCA9IHRoaXMuX3dyaXRhYmxlU3RhdGUgJiYgdGhpcy5fd3JpdGFibGVTdGF0ZS5kZXN0cm95ZWQ7XG5cbiAgaWYgKHJlYWRhYmxlRGVzdHJveWVkIHx8IHdyaXRhYmxlRGVzdHJveWVkKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICBjYihlcnIpO1xuICAgIH0gZWxzZSBpZiAoZXJyKSB7XG4gICAgICBpZiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0RXJyb3JOVCwgdGhpcywgZXJyKTtcbiAgICAgIH0gZWxzZSBpZiAoIXRoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkKSB7XG4gICAgICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkID0gdHJ1ZTtcbiAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0RXJyb3JOVCwgdGhpcywgZXJyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSAvLyB3ZSBzZXQgZGVzdHJveWVkIHRvIHRydWUgYmVmb3JlIGZpcmluZyBlcnJvciBjYWxsYmFja3MgaW4gb3JkZXJcbiAgLy8gdG8gbWFrZSBpdCByZS1lbnRyYW5jZSBzYWZlIGluIGNhc2UgZGVzdHJveSgpIGlzIGNhbGxlZCB3aXRoaW4gY2FsbGJhY2tzXG5cblxuICBpZiAodGhpcy5fcmVhZGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3JlYWRhYmxlU3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfSAvLyBpZiB0aGlzIGlzIGEgZHVwbGV4IHN0cmVhbSBtYXJrIHRoZSB3cml0YWJsZSBwYXJ0IGFzIGRlc3Ryb3llZCBhcyB3ZWxsXG5cblxuICBpZiAodGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkID0gdHJ1ZTtcbiAgfVxuXG4gIHRoaXMuX2Rlc3Ryb3koZXJyIHx8IG51bGwsIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoIWNiICYmIGVycikge1xuICAgICAgaWYgKCFfdGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRFcnJvckFuZENsb3NlTlQsIF90aGlzLCBlcnIpO1xuICAgICAgfSBlbHNlIGlmICghX3RoaXMuX3dyaXRhYmxlU3RhdGUuZXJyb3JFbWl0dGVkKSB7XG4gICAgICAgIF90aGlzLl93cml0YWJsZVN0YXRlLmVycm9yRW1pdHRlZCA9IHRydWU7XG4gICAgICAgIHByb2Nlc3MubmV4dFRpY2soZW1pdEVycm9yQW5kQ2xvc2VOVCwgX3RoaXMsIGVycik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGVtaXRDbG9zZU5ULCBfdGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjYikge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2VOVCwgX3RoaXMpO1xuICAgICAgY2IoZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhlbWl0Q2xvc2VOVCwgX3RoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRoaXM7XG59XG5cbmZ1bmN0aW9uIGVtaXRFcnJvckFuZENsb3NlTlQoc2VsZiwgZXJyKSB7XG4gIGVtaXRFcnJvck5UKHNlbGYsIGVycik7XG4gIGVtaXRDbG9zZU5UKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBlbWl0Q2xvc2VOVChzZWxmKSB7XG4gIGlmIChzZWxmLl93cml0YWJsZVN0YXRlICYmICFzZWxmLl93cml0YWJsZVN0YXRlLmVtaXRDbG9zZSkgcmV0dXJuO1xuICBpZiAoc2VsZi5fcmVhZGFibGVTdGF0ZSAmJiAhc2VsZi5fcmVhZGFibGVTdGF0ZS5lbWl0Q2xvc2UpIHJldHVybjtcbiAgc2VsZi5lbWl0KCdjbG9zZScpO1xufVxuXG5mdW5jdGlvbiB1bmRlc3Ryb3koKSB7XG4gIGlmICh0aGlzLl9yZWFkYWJsZVN0YXRlKSB7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLnJlYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9yZWFkYWJsZVN0YXRlLmVuZGVkID0gZmFsc2U7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5lbmRFbWl0dGVkID0gZmFsc2U7XG4gIH1cblxuICBpZiAodGhpcy5fd3JpdGFibGVTdGF0ZSkge1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZGVzdHJveWVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lbmRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUuZW5kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5maW5hbENhbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3dyaXRhYmxlU3RhdGUucHJlZmluaXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLl93cml0YWJsZVN0YXRlLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgdGhpcy5fd3JpdGFibGVTdGF0ZS5lcnJvckVtaXR0ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbWl0RXJyb3JOVChzZWxmLCBlcnIpIHtcbiAgc2VsZi5lbWl0KCdlcnJvcicsIGVycik7XG59XG5cbmZ1bmN0aW9uIGVycm9yT3JEZXN0cm95KHN0cmVhbSwgZXJyKSB7XG4gIC8vIFdlIGhhdmUgdGVzdHMgdGhhdCByZWx5IG9uIGVycm9ycyBiZWluZyBlbWl0dGVkXG4gIC8vIGluIHRoZSBzYW1lIHRpY2ssIHNvIGNoYW5naW5nIHRoaXMgaXMgc2VtdmVyIG1ham9yLlxuICAvLyBGb3Igbm93IHdoZW4geW91IG9wdC1pbiB0byBhdXRvRGVzdHJveSB3ZSBhbGxvd1xuICAvLyB0aGUgZXJyb3IgdG8gYmUgZW1pdHRlZCBuZXh0VGljay4gSW4gYSBmdXR1cmVcbiAgLy8gc2VtdmVyIG1ham9yIHVwZGF0ZSB3ZSBzaG91bGQgY2hhbmdlIHRoZSBkZWZhdWx0IHRvIHRoaXMuXG4gIHZhciByU3RhdGUgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGU7XG4gIHZhciB3U3RhdGUgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG4gIGlmIChyU3RhdGUgJiYgclN0YXRlLmF1dG9EZXN0cm95IHx8IHdTdGF0ZSAmJiB3U3RhdGUuYXV0b0Rlc3Ryb3kpIHN0cmVhbS5kZXN0cm95KGVycik7ZWxzZSBzdHJlYW0uZW1pdCgnZXJyb3InLCBlcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGVzdHJveTogZGVzdHJveSxcbiAgdW5kZXN0cm95OiB1bmRlc3Ryb3ksXG4gIGVycm9yT3JEZXN0cm95OiBlcnJvck9yRGVzdHJveVxufTsiLCIvLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWFmaW50b3NoL2VuZC1vZi1zdHJlYW0gd2l0aFxuLy8gcGVybWlzc2lvbiBmcm9tIHRoZSBhdXRob3IsIE1hdGhpYXMgQnV1cyAoQG1hZmludG9zaCkuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBFUlJfU1RSRUFNX1BSRU1BVFVSRV9DTE9TRSA9IHJlcXVpcmUoJy4uLy4uLy4uL2Vycm9ycycpLmNvZGVzLkVSUl9TVFJFQU1fUFJFTUFUVVJFX0NMT1NFO1xuXG5mdW5jdGlvbiBvbmNlKGNhbGxiYWNrKSB7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FsbGVkKSByZXR1cm47XG4gICAgY2FsbGVkID0gdHJ1ZTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbmZ1bmN0aW9uIGlzUmVxdWVzdChzdHJlYW0pIHtcbiAgcmV0dXJuIHN0cmVhbS5zZXRIZWFkZXIgJiYgdHlwZW9mIHN0cmVhbS5hYm9ydCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gZW9zKHN0cmVhbSwgb3B0cywgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZW9zKHN0cmVhbSwgbnVsbCwgb3B0cyk7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICBjYWxsYmFjayA9IG9uY2UoY2FsbGJhY2sgfHwgbm9vcCk7XG4gIHZhciByZWFkYWJsZSA9IG9wdHMucmVhZGFibGUgfHwgb3B0cy5yZWFkYWJsZSAhPT0gZmFsc2UgJiYgc3RyZWFtLnJlYWRhYmxlO1xuICB2YXIgd3JpdGFibGUgPSBvcHRzLndyaXRhYmxlIHx8IG9wdHMud3JpdGFibGUgIT09IGZhbHNlICYmIHN0cmVhbS53cml0YWJsZTtcblxuICB2YXIgb25sZWdhY3lmaW5pc2ggPSBmdW5jdGlvbiBvbmxlZ2FjeWZpbmlzaCgpIHtcbiAgICBpZiAoIXN0cmVhbS53cml0YWJsZSkgb25maW5pc2goKTtcbiAgfTtcblxuICB2YXIgd3JpdGFibGVFbmRlZCA9IHN0cmVhbS5fd3JpdGFibGVTdGF0ZSAmJiBzdHJlYW0uX3dyaXRhYmxlU3RhdGUuZmluaXNoZWQ7XG5cbiAgdmFyIG9uZmluaXNoID0gZnVuY3Rpb24gb25maW5pc2goKSB7XG4gICAgd3JpdGFibGUgPSBmYWxzZTtcbiAgICB3cml0YWJsZUVuZGVkID0gdHJ1ZTtcbiAgICBpZiAoIXJlYWRhYmxlKSBjYWxsYmFjay5jYWxsKHN0cmVhbSk7XG4gIH07XG5cbiAgdmFyIHJlYWRhYmxlRW5kZWQgPSBzdHJlYW0uX3JlYWRhYmxlU3RhdGUgJiYgc3RyZWFtLl9yZWFkYWJsZVN0YXRlLmVuZEVtaXR0ZWQ7XG5cbiAgdmFyIG9uZW5kID0gZnVuY3Rpb24gb25lbmQoKSB7XG4gICAgcmVhZGFibGUgPSBmYWxzZTtcbiAgICByZWFkYWJsZUVuZGVkID0gdHJ1ZTtcbiAgICBpZiAoIXdyaXRhYmxlKSBjYWxsYmFjay5jYWxsKHN0cmVhbSk7XG4gIH07XG5cbiAgdmFyIG9uZXJyb3IgPSBmdW5jdGlvbiBvbmVycm9yKGVycikge1xuICAgIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBlcnIpO1xuICB9O1xuXG4gIHZhciBvbmNsb3NlID0gZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICB2YXIgZXJyO1xuXG4gICAgaWYgKHJlYWRhYmxlICYmICFyZWFkYWJsZUVuZGVkKSB7XG4gICAgICBpZiAoIXN0cmVhbS5fcmVhZGFibGVTdGF0ZSB8fCAhc3RyZWFtLl9yZWFkYWJsZVN0YXRlLmVuZGVkKSBlcnIgPSBuZXcgRVJSX1NUUkVBTV9QUkVNQVRVUkVfQ0xPU0UoKTtcbiAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHN0cmVhbSwgZXJyKTtcbiAgICB9XG5cbiAgICBpZiAod3JpdGFibGUgJiYgIXdyaXRhYmxlRW5kZWQpIHtcbiAgICAgIGlmICghc3RyZWFtLl93cml0YWJsZVN0YXRlIHx8ICFzdHJlYW0uX3dyaXRhYmxlU3RhdGUuZW5kZWQpIGVyciA9IG5ldyBFUlJfU1RSRUFNX1BSRU1BVFVSRV9DTE9TRSgpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBlcnIpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgb25yZXF1ZXN0ID0gZnVuY3Rpb24gb25yZXF1ZXN0KCkge1xuICAgIHN0cmVhbS5yZXEub24oJ2ZpbmlzaCcsIG9uZmluaXNoKTtcbiAgfTtcblxuICBpZiAoaXNSZXF1ZXN0KHN0cmVhbSkpIHtcbiAgICBzdHJlYW0ub24oJ2NvbXBsZXRlJywgb25maW5pc2gpO1xuICAgIHN0cmVhbS5vbignYWJvcnQnLCBvbmNsb3NlKTtcbiAgICBpZiAoc3RyZWFtLnJlcSkgb25yZXF1ZXN0KCk7ZWxzZSBzdHJlYW0ub24oJ3JlcXVlc3QnLCBvbnJlcXVlc3QpO1xuICB9IGVsc2UgaWYgKHdyaXRhYmxlICYmICFzdHJlYW0uX3dyaXRhYmxlU3RhdGUpIHtcbiAgICAvLyBsZWdhY3kgc3RyZWFtc1xuICAgIHN0cmVhbS5vbignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuICAgIHN0cmVhbS5vbignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG4gIH1cblxuICBzdHJlYW0ub24oJ2VuZCcsIG9uZW5kKTtcbiAgc3RyZWFtLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gIGlmIChvcHRzLmVycm9yICE9PSBmYWxzZSkgc3RyZWFtLm9uKCdlcnJvcicsIG9uZXJyb3IpO1xuICBzdHJlYW0ub24oJ2Nsb3NlJywgb25jbG9zZSk7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcbiAgICBzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Fib3J0Jywgb25jbG9zZSk7XG4gICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcbiAgICBpZiAoc3RyZWFtLnJlcSkgc3RyZWFtLnJlcS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG4gICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG4gICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlbmQnLCBvbmVuZCk7XG4gICAgc3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlb3M7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHRocm93IG5ldyBFcnJvcignUmVhZGFibGUuZnJvbSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyJylcbn07XG4iLCIvLyBQb3J0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWFmaW50b3NoL3B1bXAgd2l0aFxuLy8gcGVybWlzc2lvbiBmcm9tIHRoZSBhdXRob3IsIE1hdGhpYXMgQnV1cyAoQG1hZmludG9zaCkuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlb3M7XG5cbmZ1bmN0aW9uIG9uY2UoY2FsbGJhY2spIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHJldHVybjtcbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGNhbGxiYWNrLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxudmFyIF9yZXF1aXJlJGNvZGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vZXJyb3JzJykuY29kZXMsXG4gICAgRVJSX01JU1NJTkdfQVJHUyA9IF9yZXF1aXJlJGNvZGVzLkVSUl9NSVNTSU5HX0FSR1MsXG4gICAgRVJSX1NUUkVBTV9ERVNUUk9ZRUQgPSBfcmVxdWlyZSRjb2Rlcy5FUlJfU1RSRUFNX0RFU1RST1lFRDtcblxuZnVuY3Rpb24gbm9vcChlcnIpIHtcbiAgLy8gUmV0aHJvdyB0aGUgZXJyb3IgaWYgaXQgZXhpc3RzIHRvIGF2b2lkIHN3YWxsb3dpbmcgaXRcbiAgaWYgKGVycikgdGhyb3cgZXJyO1xufVxuXG5mdW5jdGlvbiBpc1JlcXVlc3Qoc3RyZWFtKSB7XG4gIHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIHR5cGVvZiBzdHJlYW0uYWJvcnQgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3llcihzdHJlYW0sIHJlYWRpbmcsIHdyaXRpbmcsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gb25jZShjYWxsYmFjayk7XG4gIHZhciBjbG9zZWQgPSBmYWxzZTtcbiAgc3RyZWFtLm9uKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZWQgPSB0cnVlO1xuICB9KTtcbiAgaWYgKGVvcyA9PT0gdW5kZWZpbmVkKSBlb3MgPSByZXF1aXJlKCcuL2VuZC1vZi1zdHJlYW0nKTtcbiAgZW9zKHN0cmVhbSwge1xuICAgIHJlYWRhYmxlOiByZWFkaW5nLFxuICAgIHdyaXRhYmxlOiB3cml0aW5nXG4gIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICBjbG9zZWQgPSB0cnVlO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0pO1xuICB2YXIgZGVzdHJveWVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGNsb3NlZCkgcmV0dXJuO1xuICAgIGlmIChkZXN0cm95ZWQpIHJldHVybjtcbiAgICBkZXN0cm95ZWQgPSB0cnVlOyAvLyByZXF1ZXN0LmRlc3Ryb3kganVzdCBkbyAuZW5kIC0gLmFib3J0IGlzIHdoYXQgd2Ugd2FudFxuXG4gICAgaWYgKGlzUmVxdWVzdChzdHJlYW0pKSByZXR1cm4gc3RyZWFtLmFib3J0KCk7XG4gICAgaWYgKHR5cGVvZiBzdHJlYW0uZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHN0cmVhbS5kZXN0cm95KCk7XG4gICAgY2FsbGJhY2soZXJyIHx8IG5ldyBFUlJfU1RSRUFNX0RFU1RST1lFRCgncGlwZScpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FsbChmbikge1xuICBmbigpO1xufVxuXG5mdW5jdGlvbiBwaXBlKGZyb20sIHRvKSB7XG4gIHJldHVybiBmcm9tLnBpcGUodG8pO1xufVxuXG5mdW5jdGlvbiBwb3BDYWxsYmFjayhzdHJlYW1zKSB7XG4gIGlmICghc3RyZWFtcy5sZW5ndGgpIHJldHVybiBub29wO1xuICBpZiAodHlwZW9mIHN0cmVhbXNbc3RyZWFtcy5sZW5ndGggLSAxXSAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG5vb3A7XG4gIHJldHVybiBzdHJlYW1zLnBvcCgpO1xufVxuXG5mdW5jdGlvbiBwaXBlbGluZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0cmVhbXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3RyZWFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBjYWxsYmFjayA9IHBvcENhbGxiYWNrKHN0cmVhbXMpO1xuICBpZiAoQXJyYXkuaXNBcnJheShzdHJlYW1zWzBdKSkgc3RyZWFtcyA9IHN0cmVhbXNbMF07XG5cbiAgaWYgKHN0cmVhbXMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBFUlJfTUlTU0lOR19BUkdTKCdzdHJlYW1zJyk7XG4gIH1cblxuICB2YXIgZXJyb3I7XG4gIHZhciBkZXN0cm95cyA9IHN0cmVhbXMubWFwKGZ1bmN0aW9uIChzdHJlYW0sIGkpIHtcbiAgICB2YXIgcmVhZGluZyA9IGkgPCBzdHJlYW1zLmxlbmd0aCAtIDE7XG4gICAgdmFyIHdyaXRpbmcgPSBpID4gMDtcbiAgICByZXR1cm4gZGVzdHJveWVyKHN0cmVhbSwgcmVhZGluZywgd3JpdGluZywgZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gICAgICBpZiAoZXJyKSBkZXN0cm95cy5mb3JFYWNoKGNhbGwpO1xuICAgICAgaWYgKHJlYWRpbmcpIHJldHVybjtcbiAgICAgIGRlc3Ryb3lzLmZvckVhY2goY2FsbCk7XG4gICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gc3RyZWFtcy5yZWR1Y2UocGlwZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGlwZWxpbmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgRVJSX0lOVkFMSURfT1BUX1ZBTFVFID0gcmVxdWlyZSgnLi4vLi4vLi4vZXJyb3JzJykuY29kZXMuRVJSX0lOVkFMSURfT1BUX1ZBTFVFO1xuXG5mdW5jdGlvbiBoaWdoV2F0ZXJNYXJrRnJvbShvcHRpb25zLCBpc0R1cGxleCwgZHVwbGV4S2V5KSB7XG4gIHJldHVybiBvcHRpb25zLmhpZ2hXYXRlck1hcmsgIT0gbnVsbCA/IG9wdGlvbnMuaGlnaFdhdGVyTWFyayA6IGlzRHVwbGV4ID8gb3B0aW9uc1tkdXBsZXhLZXldIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gZ2V0SGlnaFdhdGVyTWFyayhzdGF0ZSwgb3B0aW9ucywgZHVwbGV4S2V5LCBpc0R1cGxleCkge1xuICB2YXIgaHdtID0gaGlnaFdhdGVyTWFya0Zyb20ob3B0aW9ucywgaXNEdXBsZXgsIGR1cGxleEtleSk7XG5cbiAgaWYgKGh3bSAhPSBudWxsKSB7XG4gICAgaWYgKCEoaXNGaW5pdGUoaHdtKSAmJiBNYXRoLmZsb29yKGh3bSkgPT09IGh3bSkgfHwgaHdtIDwgMCkge1xuICAgICAgdmFyIG5hbWUgPSBpc0R1cGxleCA/IGR1cGxleEtleSA6ICdoaWdoV2F0ZXJNYXJrJztcbiAgICAgIHRocm93IG5ldyBFUlJfSU5WQUxJRF9PUFRfVkFMVUUobmFtZSwgaHdtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihod20pO1xuICB9IC8vIERlZmF1bHQgdmFsdWVcblxuXG4gIHJldHVybiBzdGF0ZS5vYmplY3RNb2RlID8gMTYgOiAxNiAqIDEwMjQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRIaWdoV2F0ZXJNYXJrOiBnZXRIaWdoV2F0ZXJNYXJrXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV9yZWFkYWJsZS5qcycpO1xuZXhwb3J0cy5TdHJlYW0gPSBleHBvcnRzO1xuZXhwb3J0cy5SZWFkYWJsZSA9IGV4cG9ydHM7XG5leHBvcnRzLldyaXRhYmxlID0gcmVxdWlyZSgnLi9saWIvX3N0cmVhbV93cml0YWJsZS5qcycpO1xuZXhwb3J0cy5EdXBsZXggPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX2R1cGxleC5qcycpO1xuZXhwb3J0cy5UcmFuc2Zvcm0gPSByZXF1aXJlKCcuL2xpYi9fc3RyZWFtX3RyYW5zZm9ybS5qcycpO1xuZXhwb3J0cy5QYXNzVGhyb3VnaCA9IHJlcXVpcmUoJy4vbGliL19zdHJlYW1fcGFzc3Rocm91Z2guanMnKTtcbmV4cG9ydHMuZmluaXNoZWQgPSByZXF1aXJlKCcuL2xpYi9pbnRlcm5hbC9zdHJlYW1zL2VuZC1vZi1zdHJlYW0uanMnKTtcbmV4cG9ydHMucGlwZWxpbmUgPSByZXF1aXJlKCcuL2xpYi9pbnRlcm5hbC9zdHJlYW1zL3BpcGVsaW5lLmpzJyk7XG4iLCJjb25zdCBSREYgID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnLFxuICAgIFhTRCAgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEjJyxcbiAgICBTV0FQID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvMTAvc3dhcC8nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHhzZDoge1xuICAgIGRlY2ltYWw6IGAke1hTRH1kZWNpbWFsYCxcbiAgICBib29sZWFuOiBgJHtYU0R9Ym9vbGVhbmAsXG4gICAgZG91YmxlOiAgYCR7WFNEfWRvdWJsZWAsXG4gICAgaW50ZWdlcjogYCR7WFNEfWludGVnZXJgLFxuICAgIHN0cmluZzogIGAke1hTRH1zdHJpbmdgLFxuICB9LFxuICByZGY6IHtcbiAgICB0eXBlOiAgICAgICBgJHtSREZ9dHlwZWAsXG4gICAgbmlsOiAgICAgICAgYCR7UkRGfW5pbGAsXG4gICAgZmlyc3Q6ICAgICAgYCR7UkRGfWZpcnN0YCxcbiAgICByZXN0OiAgICAgICBgJHtSREZ9cmVzdGAsXG4gICAgbGFuZ1N0cmluZzogYCR7UkRGfWxhbmdTdHJpbmdgLFxuICB9LFxuICBvd2w6IHtcbiAgICBzYW1lQXM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAyLzA3L293bCNzYW1lQXMnLFxuICB9LFxuICByOiB7XG4gICAgZm9yU29tZTogYCR7U1dBUH1yZWlmeSNmb3JTb21lYCxcbiAgICBmb3JBbGw6ICBgJHtTV0FQfXJlaWZ5I2ZvckFsbGAsXG4gIH0sXG4gIGxvZzoge1xuICAgIGltcGxpZXM6IGAke1NXQVB9bG9nI2ltcGxpZXNgLFxuICB9LFxufTtcbiIsIi8vIE4zLmpzIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgUkRGL0pTIGNvcmUgZGF0YSB0eXBlc1xuLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZGZqcy9yZXByZXNlbnRhdGlvbi10YXNrLWZvcmNlL2Jsb2IvbWFzdGVyL2ludGVyZmFjZS1zcGVjLm1kXG5cbmltcG9ydCBuYW1lc3BhY2VzIGZyb20gJy4vSVJJcyc7XG5pbXBvcnQgeyBpc0RlZmF1bHRHcmFwaCB9IGZyb20gJy4vTjNVdGlsJztcbmNvbnN0IHsgcmRmLCB4c2QgfSA9IG5hbWVzcGFjZXM7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbmxldCBERUZBVUxUR1JBUEg7XG5sZXQgX2JsYW5rTm9kZUNvdW50ZXIgPSAwO1xuXG5jb25zdCBlc2NhcGVkTGl0ZXJhbCA9IC9eXCIoLipcIi4qKSg/PVwiW15cIl0qJCkvO1xuY29uc3QgcXVhZElkID0gL148PChcIig/OlwiXCJ8W15cIl0pKlwiW14gXSp8W14gXSspIChcIig/OlwiXCJ8W15cIl0pKlwiW14gXSp8W14gXSspIChcIig/OlwiXCJ8W15cIl0pKlwiW14gXSp8W14gXSspID8oXCIoPzpcIlwifFteXCJdKSpcIlteIF0qfFteIF0rKT8+PiQvO1xuXG4vLyAjIyBEYXRhRmFjdG9yeSBzaW5nbGV0b25cbmNvbnN0IERhdGFGYWN0b3J5ID0ge1xuICBuYW1lZE5vZGUsXG4gIGJsYW5rTm9kZSxcbiAgdmFyaWFibGUsXG4gIGxpdGVyYWwsXG4gIGRlZmF1bHRHcmFwaCxcbiAgcXVhZCxcbiAgdHJpcGxlOiBxdWFkLFxufTtcbmV4cG9ydCBkZWZhdWx0IERhdGFGYWN0b3J5O1xuXG4vLyAjIyBUZXJtIGNvbnN0cnVjdG9yXG5leHBvcnQgY2xhc3MgVGVybSB7XG4gIGNvbnN0cnVjdG9yKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgLy8gIyMjIFRoZSB2YWx1ZSBvZiB0aGlzIHRlcm1cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlkO1xuICB9XG5cbiAgLy8gIyMjIFJldHVybnMgd2hldGhlciB0aGlzIG9iamVjdCByZXByZXNlbnRzIHRoZSBzYW1lIHRlcm0gYXMgdGhlIG90aGVyXG4gIGVxdWFscyhvdGhlcikge1xuICAgIC8vIElmIGJvdGggdGVybXMgd2VyZSBjcmVhdGVkIGJ5IHRoaXMgbGlicmFyeSxcbiAgICAvLyBlcXVhbGl0eSBjYW4gYmUgY29tcHV0ZWQgdGhyb3VnaCBpZHNcbiAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBUZXJtKVxuICAgICAgcmV0dXJuIHRoaXMuaWQgPT09IG90aGVyLmlkO1xuICAgIC8vIE90aGVyd2lzZSwgY29tcGFyZSB0ZXJtIHR5cGUgYW5kIHZhbHVlXG4gICAgcmV0dXJuICEhb3RoZXIgJiYgdGhpcy50ZXJtVHlwZSA9PT0gb3RoZXIudGVybVR5cGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlICAgID09PSBvdGhlci52YWx1ZTtcbiAgfVxuXG4gIC8vICMjIyBSZXR1cm5zIGEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgdGVybVxuICB0b0pTT04oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlcm1UeXBlOiB0aGlzLnRlcm1UeXBlLFxuICAgICAgdmFsdWU6ICAgIHRoaXMudmFsdWUsXG4gICAgfTtcbiAgfVxufVxuXG5cbi8vICMjIE5hbWVkTm9kZSBjb25zdHJ1Y3RvclxuZXhwb3J0IGNsYXNzIE5hbWVkTm9kZSBleHRlbmRzIFRlcm0ge1xuICAvLyAjIyMgVGhlIHRlcm0gdHlwZSBvZiB0aGlzIHRlcm1cbiAgZ2V0IHRlcm1UeXBlKCkge1xuICAgIHJldHVybiAnTmFtZWROb2RlJztcbiAgfVxufVxuXG4vLyAjIyBMaXRlcmFsIGNvbnN0cnVjdG9yXG5leHBvcnQgY2xhc3MgTGl0ZXJhbCBleHRlbmRzIFRlcm0ge1xuICAvLyAjIyMgVGhlIHRlcm0gdHlwZSBvZiB0aGlzIHRlcm1cbiAgZ2V0IHRlcm1UeXBlKCkge1xuICAgIHJldHVybiAnTGl0ZXJhbCc7XG4gIH1cblxuICAvLyAjIyMgVGhlIHRleHQgdmFsdWUgb2YgdGhpcyBsaXRlcmFsXG4gIGdldCB2YWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pZC5zdWJzdHJpbmcoMSwgdGhpcy5pZC5sYXN0SW5kZXhPZignXCInKSk7XG4gIH1cblxuICAvLyAjIyMgVGhlIGxhbmd1YWdlIG9mIHRoaXMgbGl0ZXJhbFxuICBnZXQgbGFuZ3VhZ2UoKSB7XG4gICAgLy8gRmluZCB0aGUgbGFzdCBxdW90YXRpb24gbWFyayAoZS5nLiwgJ1wiYWJjXCJAZW4tdXMnKVxuICAgIGNvbnN0IGlkID0gdGhpcy5pZDtcbiAgICBsZXQgYXRQb3MgPSBpZC5sYXN0SW5kZXhPZignXCInKSArIDE7XG4gICAgLy8gSWYgXCJAXCIgaXQgZm9sbG93cywgcmV0dXJuIHRoZSByZW1haW5pbmcgc3Vic3RyaW5nOyBlbXB0eSBvdGhlcndpc2VcbiAgICByZXR1cm4gYXRQb3MgPCBpZC5sZW5ndGggJiYgaWRbYXRQb3MrK10gPT09ICdAJyA/IGlkLnN1YnN0cihhdFBvcykudG9Mb3dlckNhc2UoKSA6ICcnO1xuICB9XG5cbiAgLy8gIyMjIFRoZSBkYXRhdHlwZSBJUkkgb2YgdGhpcyBsaXRlcmFsXG4gIGdldCBkYXRhdHlwZSgpIHtcbiAgICByZXR1cm4gbmV3IE5hbWVkTm9kZSh0aGlzLmRhdGF0eXBlU3RyaW5nKTtcbiAgfVxuXG4gIC8vICMjIyBUaGUgZGF0YXR5cGUgc3RyaW5nIG9mIHRoaXMgbGl0ZXJhbFxuICBnZXQgZGF0YXR5cGVTdHJpbmcoKSB7XG4gICAgLy8gRmluZCB0aGUgbGFzdCBxdW90YXRpb24gbWFyayAoZS5nLiwgJ1wiYWJjXCJeXmh0dHA6Ly9leC5vcmcvdHlwZXMjdCcpXG4gICAgY29uc3QgaWQgPSB0aGlzLmlkLCBkdFBvcyA9IGlkLmxhc3RJbmRleE9mKCdcIicpICsgMTtcbiAgICBjb25zdCBjaGFyID0gZHRQb3MgPCBpZC5sZW5ndGggPyBpZFtkdFBvc10gOiAnJztcbiAgICAvLyBJZiBcIl5cIiBpdCBmb2xsb3dzLCByZXR1cm4gdGhlIHJlbWFpbmluZyBzdWJzdHJpbmdcbiAgICByZXR1cm4gY2hhciA9PT0gJ14nID8gaWQuc3Vic3RyKGR0UG9zICsgMikgOlxuICAgICAgICAgICAvLyBJZiBcIkBcIiBmb2xsb3dzLCByZXR1cm4gcmRmOmxhbmdTdHJpbmc7IHhzZDpzdHJpbmcgb3RoZXJ3aXNlXG4gICAgICAgICAgIChjaGFyICE9PSAnQCcgPyB4c2Quc3RyaW5nIDogcmRmLmxhbmdTdHJpbmcpO1xuICB9XG5cbiAgLy8gIyMjIFJldHVybnMgd2hldGhlciB0aGlzIG9iamVjdCByZXByZXNlbnRzIHRoZSBzYW1lIHRlcm0gYXMgdGhlIG90aGVyXG4gIGVxdWFscyhvdGhlcikge1xuICAgIC8vIElmIGJvdGggbGl0ZXJhbHMgd2VyZSBjcmVhdGVkIGJ5IHRoaXMgbGlicmFyeSxcbiAgICAvLyBlcXVhbGl0eSBjYW4gYmUgY29tcHV0ZWQgdGhyb3VnaCBpZHNcbiAgICBpZiAob3RoZXIgaW5zdGFuY2VvZiBMaXRlcmFsKVxuICAgICAgcmV0dXJuIHRoaXMuaWQgPT09IG90aGVyLmlkO1xuICAgIC8vIE90aGVyd2lzZSwgY29tcGFyZSB0ZXJtIHR5cGUsIHZhbHVlLCBsYW5ndWFnZSwgYW5kIGRhdGF0eXBlXG4gICAgcmV0dXJuICEhb3RoZXIgJiYgISFvdGhlci5kYXRhdHlwZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVybVR5cGUgPT09IG90aGVyLnRlcm1UeXBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSAgICA9PT0gb3RoZXIudmFsdWUgICAgJiZcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlID09PSBvdGhlci5sYW5ndWFnZSAmJlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXR5cGUudmFsdWUgPT09IG90aGVyLmRhdGF0eXBlLnZhbHVlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXJtVHlwZTogdGhpcy50ZXJtVHlwZSxcbiAgICAgIHZhbHVlOiAgICB0aGlzLnZhbHVlLFxuICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXG4gICAgICBkYXRhdHlwZTogeyB0ZXJtVHlwZTogJ05hbWVkTm9kZScsIHZhbHVlOiB0aGlzLmRhdGF0eXBlU3RyaW5nIH0sXG4gICAgfTtcbiAgfVxufVxuXG4vLyAjIyBCbGFua05vZGUgY29uc3RydWN0b3JcbmV4cG9ydCBjbGFzcyBCbGFua05vZGUgZXh0ZW5kcyBUZXJtIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHN1cGVyKGBfOiR7bmFtZX1gKTtcbiAgfVxuXG4gIC8vICMjIyBUaGUgdGVybSB0eXBlIG9mIHRoaXMgdGVybVxuICBnZXQgdGVybVR5cGUoKSB7XG4gICAgcmV0dXJuICdCbGFua05vZGUnO1xuICB9XG5cbiAgLy8gIyMjIFRoZSBuYW1lIG9mIHRoaXMgYmxhbmsgbm9kZVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaWQuc3Vic3RyKDIpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZSBleHRlbmRzIFRlcm0ge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgc3VwZXIoYD8ke25hbWV9YCk7XG4gIH1cblxuICAvLyAjIyMgVGhlIHRlcm0gdHlwZSBvZiB0aGlzIHRlcm1cbiAgZ2V0IHRlcm1UeXBlKCkge1xuICAgIHJldHVybiAnVmFyaWFibGUnO1xuICB9XG5cbiAgLy8gIyMjIFRoZSBuYW1lIG9mIHRoaXMgdmFyaWFibGVcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmlkLnN1YnN0cigxKTtcbiAgfVxufVxuXG4vLyAjIyBEZWZhdWx0R3JhcGggY29uc3RydWN0b3JcbmV4cG9ydCBjbGFzcyBEZWZhdWx0R3JhcGggZXh0ZW5kcyBUZXJtIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJycpO1xuICAgIHJldHVybiBERUZBVUxUR1JBUEggfHwgdGhpcztcbiAgfVxuXG4gIC8vICMjIyBUaGUgdGVybSB0eXBlIG9mIHRoaXMgdGVybVxuICBnZXQgdGVybVR5cGUoKSB7XG4gICAgcmV0dXJuICdEZWZhdWx0R3JhcGgnO1xuICB9XG5cbiAgLy8gIyMjIFJldHVybnMgd2hldGhlciB0aGlzIG9iamVjdCByZXByZXNlbnRzIHRoZSBzYW1lIHRlcm0gYXMgdGhlIG90aGVyXG4gIGVxdWFscyhvdGhlcikge1xuICAgIC8vIElmIGJvdGggdGVybXMgd2VyZSBjcmVhdGVkIGJ5IHRoaXMgbGlicmFyeSxcbiAgICAvLyBlcXVhbGl0eSBjYW4gYmUgY29tcHV0ZWQgdGhyb3VnaCBzdHJpY3QgZXF1YWxpdHk7XG4gICAgLy8gb3RoZXJ3aXNlLCBjb21wYXJlIHRlcm0gdHlwZXMuXG4gICAgcmV0dXJuICh0aGlzID09PSBvdGhlcikgfHwgKCEhb3RoZXIgJiYgKHRoaXMudGVybVR5cGUgPT09IG90aGVyLnRlcm1UeXBlKSk7XG4gIH1cbn1cblxuLy8gIyMgRGVmYXVsdEdyYXBoIHNpbmdsZXRvblxuREVGQVVMVEdSQVBIID0gbmV3IERlZmF1bHRHcmFwaCgpO1xuXG5cbi8vICMjIyBDb25zdHJ1Y3RzIGEgdGVybSBmcm9tIHRoZSBnaXZlbiBpbnRlcm5hbCBzdHJpbmcgSURcbmV4cG9ydCBmdW5jdGlvbiB0ZXJtRnJvbUlkKGlkLCBmYWN0b3J5KSB7XG4gIGZhY3RvcnkgPSBmYWN0b3J5IHx8IERhdGFGYWN0b3J5O1xuXG4gIC8vIEZhbHN5IHZhbHVlIG9yIGVtcHR5IHN0cmluZyBpbmRpY2F0ZSB0aGUgZGVmYXVsdCBncmFwaFxuICBpZiAoIWlkKVxuICAgIHJldHVybiBmYWN0b3J5LmRlZmF1bHRHcmFwaCgpO1xuXG4gIC8vIElkZW50aWZ5IHRoZSB0ZXJtIHR5cGUgYmFzZWQgb24gdGhlIGZpcnN0IGNoYXJhY3RlclxuICBzd2l0Y2ggKGlkWzBdKSB7XG4gIGNhc2UgJz8nOlxuICAgIHJldHVybiBmYWN0b3J5LnZhcmlhYmxlKGlkLnN1YnN0cigxKSk7XG4gIGNhc2UgJ18nOlxuICAgIHJldHVybiBmYWN0b3J5LmJsYW5rTm9kZShpZC5zdWJzdHIoMikpO1xuICBjYXNlICdcIic6XG4gICAgLy8gU2hvcnRjdXQgZm9yIGludGVybmFsIGxpdGVyYWxzXG4gICAgaWYgKGZhY3RvcnkgPT09IERhdGFGYWN0b3J5KVxuICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsKGlkKTtcbiAgICAvLyBMaXRlcmFsIHdpdGhvdXQgZGF0YXR5cGUgb3IgbGFuZ3VhZ2VcbiAgICBpZiAoaWRbaWQubGVuZ3RoIC0gMV0gPT09ICdcIicpXG4gICAgICByZXR1cm4gZmFjdG9yeS5saXRlcmFsKGlkLnN1YnN0cigxLCBpZC5sZW5ndGggLSAyKSk7XG4gICAgLy8gTGl0ZXJhbCB3aXRoIGRhdGF0eXBlIG9yIGxhbmd1YWdlXG4gICAgY29uc3QgZW5kUG9zID0gaWQubGFzdEluZGV4T2YoJ1wiJywgaWQubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGZhY3RvcnkubGl0ZXJhbChpZC5zdWJzdHIoMSwgZW5kUG9zIC0gMSksXG4gICAgICAgICAgICBpZFtlbmRQb3MgKyAxXSA9PT0gJ0AnID8gaWQuc3Vic3RyKGVuZFBvcyArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFjdG9yeS5uYW1lZE5vZGUoaWQuc3Vic3RyKGVuZFBvcyArIDMpKSk7XG4gIGNhc2UgJzwnOlxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBxdWFkSWQuZXhlYyhpZCk7XG4gICAgcmV0dXJuIGZhY3RvcnkucXVhZChcbiAgICAgIHRlcm1Gcm9tSWQodW5lc2NhcGVRdW90ZXMoY29tcG9uZW50c1sxXSksIGZhY3RvcnkpLFxuICAgICAgdGVybUZyb21JZCh1bmVzY2FwZVF1b3Rlcyhjb21wb25lbnRzWzJdKSwgZmFjdG9yeSksXG4gICAgICB0ZXJtRnJvbUlkKHVuZXNjYXBlUXVvdGVzKGNvbXBvbmVudHNbM10pLCBmYWN0b3J5KSxcbiAgICAgIGNvbXBvbmVudHNbNF0gJiYgdGVybUZyb21JZCh1bmVzY2FwZVF1b3Rlcyhjb21wb25lbnRzWzRdKSwgZmFjdG9yeSlcbiAgICApO1xuICBkZWZhdWx0OlxuICAgIHJldHVybiBmYWN0b3J5Lm5hbWVkTm9kZShpZCk7XG4gIH1cbn1cblxuLy8gIyMjIENvbnN0cnVjdHMgYW4gaW50ZXJuYWwgc3RyaW5nIElEIGZyb20gdGhlIGdpdmVuIHRlcm0gb3IgSUQgc3RyaW5nXG5leHBvcnQgZnVuY3Rpb24gdGVybVRvSWQodGVybSkge1xuICBpZiAodHlwZW9mIHRlcm0gPT09ICdzdHJpbmcnKVxuICAgIHJldHVybiB0ZXJtO1xuICBpZiAodGVybSBpbnN0YW5jZW9mIFRlcm0gJiYgdGVybS50ZXJtVHlwZSAhPT0gJ1F1YWQnKVxuICAgIHJldHVybiB0ZXJtLmlkO1xuICBpZiAoIXRlcm0pXG4gICAgcmV0dXJuIERFRkFVTFRHUkFQSC5pZDtcblxuICAvLyBUZXJtIGluc3RhbnRpYXRlZCB3aXRoIGFub3RoZXIgbGlicmFyeVxuICBzd2l0Y2ggKHRlcm0udGVybVR5cGUpIHtcbiAgY2FzZSAnTmFtZWROb2RlJzogICAgcmV0dXJuIHRlcm0udmFsdWU7XG4gIGNhc2UgJ0JsYW5rTm9kZSc6ICAgIHJldHVybiBgXzoke3Rlcm0udmFsdWV9YDtcbiAgY2FzZSAnVmFyaWFibGUnOiAgICAgcmV0dXJuIGA/JHt0ZXJtLnZhbHVlfWA7XG4gIGNhc2UgJ0RlZmF1bHRHcmFwaCc6IHJldHVybiAnJztcbiAgY2FzZSAnTGl0ZXJhbCc6ICAgICAgcmV0dXJuIGBcIiR7dGVybS52YWx1ZX1cIiR7XG4gICAgdGVybS5sYW5ndWFnZSA/IGBAJHt0ZXJtLmxhbmd1YWdlfWAgOlxuICAgICAgKHRlcm0uZGF0YXR5cGUgJiYgdGVybS5kYXRhdHlwZS52YWx1ZSAhPT0geHNkLnN0cmluZyA/IGBeXiR7dGVybS5kYXRhdHlwZS52YWx1ZX1gIDogJycpfWA7XG4gIGNhc2UgJ1F1YWQnOlxuICAgIC8vIFRvIGlkZW50aWZ5IFJERiogcXVhZCBjb21wb25lbnRzLCB3ZSBlc2NhcGUgcXVvdGVzIGJ5IGRvdWJsaW5nIHRoZW0uXG4gICAgLy8gVGhpcyBhdm9pZHMgdGhlIG92ZXJoZWFkIG9mIGJhY2tzbGFzaCBwYXJzaW5nIG9mIFR1cnRsZS1saWtlIHN5bnRheGVzLlxuICAgIHJldHVybiBgPDwke1xuICAgICAgICBlc2NhcGVRdW90ZXModGVybVRvSWQodGVybS5zdWJqZWN0KSlcbiAgICAgIH0gJHtcbiAgICAgICAgZXNjYXBlUXVvdGVzKHRlcm1Ub0lkKHRlcm0ucHJlZGljYXRlKSlcbiAgICAgIH0gJHtcbiAgICAgICAgZXNjYXBlUXVvdGVzKHRlcm1Ub0lkKHRlcm0ub2JqZWN0KSlcbiAgICAgIH0ke1xuICAgICAgICAoaXNEZWZhdWx0R3JhcGgodGVybS5ncmFwaCkpID8gJycgOiBgICR7dGVybVRvSWQodGVybS5ncmFwaCl9YFxuICAgICAgfT4+YDtcbiAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHRlcm1UeXBlOiAke3Rlcm0udGVybVR5cGV9YCk7XG4gIH1cbn1cblxuXG4vLyAjIyBRdWFkIGNvbnN0cnVjdG9yXG5leHBvcnQgY2xhc3MgUXVhZCBleHRlbmRzIFRlcm0ge1xuICBjb25zdHJ1Y3RvcihzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgpIHtcbiAgICBzdXBlcignJyk7XG4gICAgdGhpcy5zdWJqZWN0ICAgPSBzdWJqZWN0O1xuICAgIHRoaXMucHJlZGljYXRlID0gcHJlZGljYXRlO1xuICAgIHRoaXMub2JqZWN0ICAgID0gb2JqZWN0O1xuICAgIHRoaXMuZ3JhcGggICAgID0gZ3JhcGggfHwgREVGQVVMVEdSQVBIO1xuICB9XG5cbiAgLy8gIyMjIFRoZSB0ZXJtIHR5cGUgb2YgdGhpcyB0ZXJtXG4gIGdldCB0ZXJtVHlwZSgpIHtcbiAgICByZXR1cm4gJ1F1YWQnO1xuICB9XG5cbiAgLy8gIyMjIFJldHVybnMgYSBwbGFpbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBxdWFkXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVybVR5cGU6ICB0aGlzLnRlcm1UeXBlLFxuICAgICAgc3ViamVjdDogICB0aGlzLnN1YmplY3QudG9KU09OKCksXG4gICAgICBwcmVkaWNhdGU6IHRoaXMucHJlZGljYXRlLnRvSlNPTigpLFxuICAgICAgb2JqZWN0OiAgICB0aGlzLm9iamVjdC50b0pTT04oKSxcbiAgICAgIGdyYXBoOiAgICAgdGhpcy5ncmFwaC50b0pTT04oKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gIyMjIFJldHVybnMgd2hldGhlciB0aGlzIG9iamVjdCByZXByZXNlbnRzIHRoZSBzYW1lIHF1YWQgYXMgdGhlIG90aGVyXG4gIGVxdWFscyhvdGhlcikge1xuICAgIHJldHVybiAhIW90aGVyICYmIHRoaXMuc3ViamVjdC5lcXVhbHMob3RoZXIuc3ViamVjdCkgICAgICYmXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVkaWNhdGUuZXF1YWxzKG90aGVyLnByZWRpY2F0ZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iamVjdC5lcXVhbHMob3RoZXIub2JqZWN0KSAgICAgICAmJlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JhcGguZXF1YWxzKG90aGVyLmdyYXBoKTtcbiAgfVxufVxuZXhwb3J0IHsgUXVhZCBhcyBUcmlwbGUgfTtcblxuLy8gIyMjIEVzY2FwZXMgdGhlIHF1b3RlcyB3aXRoaW4gdGhlIGdpdmVuIGxpdGVyYWxcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVRdW90ZXMoaWQpIHtcbiAgcmV0dXJuIGlkLnJlcGxhY2UoZXNjYXBlZExpdGVyYWwsIChfLCBxdW90ZWQpID0+IGBcIiR7cXVvdGVkLnJlcGxhY2UoL1wiL2csICdcIlwiJyl9YCk7XG59XG5cbi8vICMjIyBVbmVzY2FwZXMgdGhlIHF1b3RlcyB3aXRoaW4gdGhlIGdpdmVuIGxpdGVyYWxcbmV4cG9ydCBmdW5jdGlvbiB1bmVzY2FwZVF1b3RlcyhpZCkge1xuICByZXR1cm4gaWQucmVwbGFjZShlc2NhcGVkTGl0ZXJhbCwgKF8sIHF1b3RlZCkgPT4gYFwiJHtxdW90ZWQucmVwbGFjZSgvXCJcIi9nLCAnXCInKX1gKTtcbn1cblxuLy8gIyMjIENyZWF0ZXMgYW4gSVJJXG5mdW5jdGlvbiBuYW1lZE5vZGUoaXJpKSB7XG4gIHJldHVybiBuZXcgTmFtZWROb2RlKGlyaSk7XG59XG5cbi8vICMjIyBDcmVhdGVzIGEgYmxhbmsgbm9kZVxuZnVuY3Rpb24gYmxhbmtOb2RlKG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBCbGFua05vZGUobmFtZSB8fCBgbjMtJHtfYmxhbmtOb2RlQ291bnRlcisrfWApO1xufVxuXG4vLyAjIyMgQ3JlYXRlcyBhIGxpdGVyYWxcbmZ1bmN0aW9uIGxpdGVyYWwodmFsdWUsIGxhbmd1YWdlT3JEYXRhVHlwZSkge1xuICAvLyBDcmVhdGUgYSBsYW5ndWFnZS10YWdnZWQgc3RyaW5nXG4gIGlmICh0eXBlb2YgbGFuZ3VhZ2VPckRhdGFUeXBlID09PSAnc3RyaW5nJylcbiAgICByZXR1cm4gbmV3IExpdGVyYWwoYFwiJHt2YWx1ZX1cIkAke2xhbmd1YWdlT3JEYXRhVHlwZS50b0xvd2VyQ2FzZSgpfWApO1xuXG4gIC8vIEF1dG9tYXRpY2FsbHkgZGV0ZXJtaW5lIGRhdGF0eXBlIGZvciBib29sZWFucyBhbmQgbnVtYmVyc1xuICBsZXQgZGF0YXR5cGUgPSBsYW5ndWFnZU9yRGF0YVR5cGUgPyBsYW5ndWFnZU9yRGF0YVR5cGUudmFsdWUgOiAnJztcbiAgaWYgKGRhdGF0eXBlID09PSAnJykge1xuICAgIC8vIENvbnZlcnQgYSBib29sZWFuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuICAgICAgZGF0YXR5cGUgPSB4c2QuYm9vbGVhbjtcbiAgICAvLyBDb252ZXJ0IGFuIGludGVnZXIgb3IgZG91YmxlXG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpXG4gICAgICAgIGRhdGF0eXBlID0gTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkgPyB4c2QuaW50ZWdlciA6IHhzZC5kb3VibGU7XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGF0YXR5cGUgPSB4c2QuZG91YmxlO1xuICAgICAgICBpZiAoIU51bWJlci5pc05hTih2YWx1ZSkpXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+IDAgPyAnSU5GJyA6ICctSU5GJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDcmVhdGUgYSBkYXRhdHlwZWQgbGl0ZXJhbFxuICByZXR1cm4gKGRhdGF0eXBlID09PSAnJyB8fCBkYXRhdHlwZSA9PT0geHNkLnN0cmluZykgP1xuICAgIG5ldyBMaXRlcmFsKGBcIiR7dmFsdWV9XCJgKSA6XG4gICAgbmV3IExpdGVyYWwoYFwiJHt2YWx1ZX1cIl5eJHtkYXRhdHlwZX1gKTtcbn1cblxuLy8gIyMjIENyZWF0ZXMgYSB2YXJpYWJsZVxuZnVuY3Rpb24gdmFyaWFibGUobmFtZSkge1xuICByZXR1cm4gbmV3IFZhcmlhYmxlKG5hbWUpO1xufVxuXG4vLyAjIyMgUmV0dXJucyB0aGUgZGVmYXVsdCBncmFwaFxuZnVuY3Rpb24gZGVmYXVsdEdyYXBoKCkge1xuICByZXR1cm4gREVGQVVMVEdSQVBIO1xufVxuXG4vLyAjIyMgQ3JlYXRlcyBhIHF1YWRcbmZ1bmN0aW9uIHF1YWQoc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKSB7XG4gIHJldHVybiBuZXcgUXVhZChzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgpO1xufVxuIiwiLy8gKipOM0xleGVyKiogdG9rZW5pemVzIE4zIGRvY3VtZW50cy5cbmltcG9ydCBuYW1lc3BhY2VzIGZyb20gJy4vSVJJcyc7XG5pbXBvcnQgcXVldWVNaWNyb3Rhc2sgZnJvbSAncXVldWUtbWljcm90YXNrJztcblxuY29uc3QgeyB4c2QgfSA9IG5hbWVzcGFjZXM7XG5cbi8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBhbmQgcmVwbGFjZW1lbnQgc3RyaW5nIHRvIGVzY2FwZSBOMyBzdHJpbmdzXG5jb25zdCBlc2NhcGVTZXF1ZW5jZSA9IC9cXFxcdShbYS1mQS1GMC05XXs0fSl8XFxcXFUoW2EtZkEtRjAtOV17OH0pfFxcXFwoW15dKS9nO1xuY29uc3QgZXNjYXBlUmVwbGFjZW1lbnRzID0ge1xuICAnXFxcXCc6ICdcXFxcJywgXCInXCI6IFwiJ1wiLCAnXCInOiAnXCInLFxuICAnbic6ICdcXG4nLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAnZic6ICdcXGYnLCAnYic6ICdcXGInLFxuICAnXyc6ICdfJywgJ34nOiAnficsICcuJzogJy4nLCAnLSc6ICctJywgJyEnOiAnIScsICckJzogJyQnLCAnJic6ICcmJyxcbiAgJygnOiAnKCcsICcpJzogJyknLCAnKic6ICcqJywgJysnOiAnKycsICcsJzogJywnLCAnOyc6ICc7JywgJz0nOiAnPScsXG4gICcvJzogJy8nLCAnPyc6ICc/JywgJyMnOiAnIycsICdAJzogJ0AnLCAnJSc6ICclJyxcbn07XG5jb25zdCBpbGxlZ2FsSXJpQ2hhcnMgPSAvW1xceDAwLVxceDIwPD5cXFxcXCJcXHtcXH1cXHxcXF5cXGBdLztcblxuY29uc3QgbGluZU1vZGVSZWdFeHBzID0ge1xuICBfaXJpOiB0cnVlLFxuICBfdW5lc2NhcGVkSXJpOiB0cnVlLFxuICBfc2ltcGxlUXVvdGVkU3RyaW5nOiB0cnVlLFxuICBfbGFuZ2NvZGU6IHRydWUsXG4gIF9ibGFuazogdHJ1ZSxcbiAgX25ld2xpbmU6IHRydWUsXG4gIF9jb21tZW50OiB0cnVlLFxuICBfd2hpdGVzcGFjZTogdHJ1ZSxcbiAgX2VuZE9mRmlsZTogdHJ1ZSxcbn07XG5jb25zdCBpbnZhbGlkUmVnRXhwID0gLyQwXi87XG5cbi8vICMjIENvbnN0cnVjdG9yXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOM0xleGVyIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIC8vICMjIFJlZ3VsYXIgZXhwcmVzc2lvbnNcbiAgICAvLyBJdCdzIHNsaWdodGx5IGZhc3RlciB0byBoYXZlIHRoZXNlIGFzIHByb3BlcnRpZXMgdGhhbiBhcyBpbi1zY29wZSB2YXJpYWJsZXNcbiAgICB0aGlzLl9pcmkgPSAvXjwoKD86W14gPD57fVxcXFxdfFxcXFxbdVVdKSspPlsgXFx0XSovOyAvLyBJUkkgd2l0aCBlc2NhcGUgc2VxdWVuY2VzOyBuZWVkcyBzYW5pdHkgY2hlY2sgYWZ0ZXIgdW5lc2NhcGluZ1xuICAgIHRoaXMuX3VuZXNjYXBlZElyaSA9IC9ePChbXlxceDAwLVxceDIwPD5cXFxcXCJcXHtcXH1cXHxcXF5cXGBdKik+WyBcXHRdKi87IC8vIElSSSB3aXRob3V0IGVzY2FwZSBzZXF1ZW5jZXM7IG5vIHVuZXNjYXBpbmdcbiAgICB0aGlzLl9zaW1wbGVRdW90ZWRTdHJpbmcgPSAvXlwiKFteXCJcXFxcXFxyXFxuXSopXCIoPz1bXlwiXSkvOyAvLyBzdHJpbmcgd2l0aG91dCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgdGhpcy5fc2ltcGxlQXBvc3Ryb3BoZVN0cmluZyA9IC9eJyhbXidcXFxcXFxyXFxuXSopJyg/PVteJ10pLztcbiAgICB0aGlzLl9sYW5nY29kZSA9IC9eQChbYS16XSsoPzotW2EtejAtOV0rKSopKD89W15hLXowLTlcXC1dKS9pO1xuICAgIHRoaXMuX3ByZWZpeCA9IC9eKCg/OltBLVphLXpcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDJmZlxcdTAzNzAtXFx1MDM3ZFxcdTAzN2YtXFx1MWZmZlxcdTIwMGNcXHUyMDBkXFx1MjA3MC1cXHUyMThmXFx1MmMwMC1cXHUyZmVmXFx1MzAwMS1cXHVkN2ZmXFx1ZjkwMC1cXHVmZGNmXFx1ZmRmMC1cXHVmZmZkXXxbXFx1ZDgwMC1cXHVkYjdmXVtcXHVkYzAwLVxcdWRmZmZdKSg/OlxcLj9bXFwtMC05QS1aX2EtelxceGI3XFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxcdTAzN2RcXHUwMzdmLVxcdTFmZmZcXHUyMDBjXFx1MjAwZFxcdTIwM2ZcXHUyMDQwXFx1MjA3MC1cXHUyMThmXFx1MmMwMC1cXHUyZmVmXFx1MzAwMS1cXHVkN2ZmXFx1ZjkwMC1cXHVmZGNmXFx1ZmRmMC1cXHVmZmZkXXxbXFx1ZDgwMC1cXHVkYjdmXVtcXHVkYzAwLVxcdWRmZmZdKSopPzooPz1bI1xcczxdKS87XG4gICAgdGhpcy5fcHJlZml4ZWQgPSAvXigoPzpbQS1aYS16XFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxcdTAyZmZcXHUwMzcwLVxcdTAzN2RcXHUwMzdmLVxcdTFmZmZcXHUyMDBjXFx1MjAwZFxcdTIwNzAtXFx1MjE4ZlxcdTJjMDAtXFx1MmZlZlxcdTMwMDEtXFx1ZDdmZlxcdWY5MDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmZmZF18W1xcdWQ4MDAtXFx1ZGI3Zl1bXFx1ZGMwMC1cXHVkZmZmXSkoPzpcXC4/W1xcLTAtOUEtWl9hLXpcXHhiN1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMzdkXFx1MDM3Zi1cXHUxZmZmXFx1MjAwY1xcdTIwMGRcXHUyMDNmXFx1MjA0MFxcdTIwNzAtXFx1MjE4ZlxcdTJjMDAtXFx1MmZlZlxcdTMwMDEtXFx1ZDdmZlxcdWY5MDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmZmZF18W1xcdWQ4MDAtXFx1ZGI3Zl1bXFx1ZGMwMC1cXHVkZmZmXSkqKT86KCg/Oig/OlswLTpBLVpfYS16XFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxcdTAyZmZcXHUwMzcwLVxcdTAzN2RcXHUwMzdmLVxcdTFmZmZcXHUyMDBjXFx1MjAwZFxcdTIwNzAtXFx1MjE4ZlxcdTJjMDAtXFx1MmZlZlxcdTMwMDEtXFx1ZDdmZlxcdWY5MDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmZmZF18W1xcdWQ4MDAtXFx1ZGI3Zl1bXFx1ZGMwMC1cXHVkZmZmXXwlWzAtOWEtZkEtRl17Mn18XFxcXFshIy1cXC87PT9cXC1AX35dKSg/Oig/OltcXC5cXC0wLTpBLVpfYS16XFx4YjdcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDM3ZFxcdTAzN2YtXFx1MWZmZlxcdTIwMGNcXHUyMDBkXFx1MjAzZlxcdTIwNDBcXHUyMDcwLVxcdTIxOGZcXHUyYzAwLVxcdTJmZWZcXHUzMDAxLVxcdWQ3ZmZcXHVmOTAwLVxcdWZkY2ZcXHVmZGYwLVxcdWZmZmRdfFtcXHVkODAwLVxcdWRiN2ZdW1xcdWRjMDAtXFx1ZGZmZl18JVswLTlhLWZBLUZdezJ9fFxcXFxbISMtXFwvOz0/XFwtQF9+XSkqKD86W1xcLTAtOkEtWl9hLXpcXHhiN1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMzdkXFx1MDM3Zi1cXHUxZmZmXFx1MjAwY1xcdTIwMGRcXHUyMDNmXFx1MjA0MFxcdTIwNzAtXFx1MjE4ZlxcdTJjMDAtXFx1MmZlZlxcdTMwMDEtXFx1ZDdmZlxcdWY5MDAtXFx1ZmRjZlxcdWZkZjAtXFx1ZmZmZF18W1xcdWQ4MDAtXFx1ZGI3Zl1bXFx1ZGMwMC1cXHVkZmZmXXwlWzAtOWEtZkEtRl17Mn18XFxcXFshIy1cXC87PT9cXC1AX35dKSk/KT8pKD86WyBcXHRdK3woPz1cXC4/Wyw7IVxcXlxccyMoKVxcW1xcXVxce1xcfVwiJzw+XSkpLztcbiAgICB0aGlzLl92YXJpYWJsZSA9IC9eXFw/KD86KD86W0EtWl9hLXpcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDJmZlxcdTAzNzAtXFx1MDM3ZFxcdTAzN2YtXFx1MWZmZlxcdTIwMGNcXHUyMDBkXFx1MjA3MC1cXHUyMThmXFx1MmMwMC1cXHUyZmVmXFx1MzAwMS1cXHVkN2ZmXFx1ZjkwMC1cXHVmZGNmXFx1ZmRmMC1cXHVmZmZkXXxbXFx1ZDgwMC1cXHVkYjdmXVtcXHVkYzAwLVxcdWRmZmZdKSg/OltcXC0wLTpBLVpfYS16XFx4YjdcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDM3ZFxcdTAzN2YtXFx1MWZmZlxcdTIwMGNcXHUyMDBkXFx1MjAzZlxcdTIwNDBcXHUyMDcwLVxcdTIxOGZcXHUyYzAwLVxcdTJmZWZcXHUzMDAxLVxcdWQ3ZmZcXHVmOTAwLVxcdWZkY2ZcXHVmZGYwLVxcdWZmZmRdfFtcXHVkODAwLVxcdWRiN2ZdW1xcdWRjMDAtXFx1ZGZmZl0pKikoPz1bLiw7IVxcXlxccyMoKVxcW1xcXVxce1xcfVwiJzw+XSkvO1xuICAgIHRoaXMuX2JsYW5rID0gL15fOigoPzpbMC05QS1aX2EtelxceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHUwMmZmXFx1MDM3MC1cXHUwMzdkXFx1MDM3Zi1cXHUxZmZmXFx1MjAwY1xcdTIwMGRcXHUyMDcwLVxcdTIxOGZcXHUyYzAwLVxcdTJmZWZcXHUzMDAxLVxcdWQ3ZmZcXHVmOTAwLVxcdWZkY2ZcXHVmZGYwLVxcdWZmZmRdfFtcXHVkODAwLVxcdWRiN2ZdW1xcdWRjMDAtXFx1ZGZmZl0pKD86XFwuP1tcXC0wLTlBLVpfYS16XFx4YjdcXHhjMC1cXHhkNlxceGQ4LVxceGY2XFx4ZjgtXFx1MDM3ZFxcdTAzN2YtXFx1MWZmZlxcdTIwMGNcXHUyMDBkXFx1MjAzZlxcdTIwNDBcXHUyMDcwLVxcdTIxOGZcXHUyYzAwLVxcdTJmZWZcXHUzMDAxLVxcdWQ3ZmZcXHVmOTAwLVxcdWZkY2ZcXHVmZGYwLVxcdWZmZmRdfFtcXHVkODAwLVxcdWRiN2ZdW1xcdWRjMDAtXFx1ZGZmZl0pKikoPzpbIFxcdF0rfCg/PVxcLj9bLDs6XFxzIygpXFxbXFxdXFx7XFx9XCInPD5dKSkvO1xuICAgIHRoaXMuX251bWJlciA9IC9eW1xcLStdPyg/OihcXGQrXFwuXFxkKnxcXC4/XFxkKylbZUVdW1xcLStdP3xcXGQqKFxcLik/KVxcZCsoPz1cXC4/Wyw7OlxccyMoKVxcW1xcXVxce1xcfVwiJzw+XSkvO1xuICAgIHRoaXMuX2Jvb2xlYW4gPSAvXig/OnRydWV8ZmFsc2UpKD89Wy4sO1xccyMoKVxcW1xcXVxce1xcfVwiJzw+XSkvO1xuICAgIHRoaXMuX2tleXdvcmQgPSAvXkBbYS16XSsoPz1bXFxzIzw6XSkvaTtcbiAgICB0aGlzLl9zcGFycWxLZXl3b3JkID0gL14oPzpQUkVGSVh8QkFTRXxHUkFQSCkoPz1bXFxzIzxdKS9pO1xuICAgIHRoaXMuX3Nob3J0UHJlZGljYXRlcyA9IC9eYSg/PVtcXHMjKClcXFtcXF1cXHtcXH1cIic8Pl0pLztcbiAgICB0aGlzLl9uZXdsaW5lID0gL15bIFxcdF0qKD86I1teXFxuXFxyXSopPyg/OlxcclxcbnxcXG58XFxyKVsgXFx0XSovO1xuICAgIHRoaXMuX2NvbW1lbnQgPSAvIyhbXlxcblxccl0qKS87XG4gICAgdGhpcy5fd2hpdGVzcGFjZSA9IC9eWyBcXHRdKy87XG4gICAgdGhpcy5fZW5kT2ZGaWxlID0gL14oPzojW15cXG5cXHJdKik/JC87XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvLyBJbiBsaW5lIG1vZGUgKE4tVHJpcGxlcyBvciBOLVF1YWRzKSwgb25seSBzaW1wbGUgZmVhdHVyZXMgbWF5IGJlIHBhcnNlZFxuICAgIGlmICh0aGlzLl9saW5lTW9kZSA9ICEhb3B0aW9ucy5saW5lTW9kZSkge1xuICAgICAgdGhpcy5fbjNNb2RlID0gZmFsc2U7XG4gICAgICAvLyBEb24ndCB0b2tlbml6ZSBzcGVjaWFsIGxpdGVyYWxzXG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzKSB7XG4gICAgICAgIGlmICghKGtleSBpbiBsaW5lTW9kZVJlZ0V4cHMpICYmIHRoaXNba2V5XSBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgICB0aGlzW2tleV0gPSBpbnZhbGlkUmVnRXhwO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBXaGVuIG5vdCBpbiBsaW5lIG1vZGUsIGVuYWJsZSBOMyBmdW5jdGlvbmFsaXR5IGJ5IGRlZmF1bHRcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX24zTW9kZSA9IG9wdGlvbnMubjMgIT09IGZhbHNlO1xuICAgIH1cbiAgICAvLyBEb24ndCBvdXRwdXQgY29tbWVudCB0b2tlbnMgYnkgZGVmYXVsdFxuICAgIHRoaXMuX2NvbW1lbnRzID0gISFvcHRpb25zLmNvbW1lbnRzO1xuICAgIC8vIENhY2hlIHRoZSBsYXN0IHRlc3RlZCBjbG9zaW5nIHBvc2l0aW9uIG9mIGxvbmcgbGl0ZXJhbHNcbiAgICB0aGlzLl9saXRlcmFsQ2xvc2luZ1BvcyA9IDA7XG4gIH1cblxuICAvLyAjIyBQcml2YXRlIG1ldGhvZHNcblxuICAvLyAjIyMgYF90b2tlbml6ZVRvRW5kYCB0b2tlbml6ZXMgYXMgZm9yIGFzIHBvc3NpYmxlLCBlbWl0dGluZyB0b2tlbnMgdGhyb3VnaCB0aGUgY2FsbGJhY2tcbiAgX3Rva2VuaXplVG9FbmQoY2FsbGJhY2ssIGlucHV0RmluaXNoZWQpIHtcbiAgICAvLyBDb250aW51ZSBwYXJzaW5nIGFzIGZhciBhcyBwb3NzaWJsZTsgdGhlIGxvb3Agd2lsbCByZXR1cm4gZXZlbnR1YWxseVxuICAgIGxldCBpbnB1dCA9IHRoaXMuX2lucHV0O1xuICAgIGNvbnN0IG91dHB1dENvbW1lbnRzID0gdGhpcy5fY29tbWVudHM7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIC8vIENvdW50IGFuZCBza2lwIHdoaXRlc3BhY2UgbGluZXNcbiAgICAgIGxldCB3aGl0ZVNwYWNlTWF0Y2gsIGNvbW1lbnQ7XG4gICAgICB3aGlsZSAod2hpdGVTcGFjZU1hdGNoID0gdGhpcy5fbmV3bGluZS5leGVjKGlucHV0KSkge1xuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGNvbW1lbnRcbiAgICAgICAgaWYgKG91dHB1dENvbW1lbnRzICYmIChjb21tZW50ID0gdGhpcy5fY29tbWVudC5leGVjKHdoaXRlU3BhY2VNYXRjaFswXSkpKVxuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHsgbGluZTogdGhpcy5fbGluZSwgdHlwZTogJ2NvbW1lbnQnLCB2YWx1ZTogY29tbWVudFsxXSwgcHJlZml4OiAnJyB9KTtcbiAgICAgICAgLy8gQWR2YW5jZSB0aGUgaW5wdXRcbiAgICAgICAgaW5wdXQgPSBpbnB1dC5zdWJzdHIod2hpdGVTcGFjZU1hdGNoWzBdLmxlbmd0aCwgaW5wdXQubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5fbGluZSsrO1xuICAgICAgfVxuICAgICAgLy8gU2tpcCB3aGl0ZXNwYWNlIG9uIGN1cnJlbnQgbGluZVxuICAgICAgaWYgKCF3aGl0ZVNwYWNlTWF0Y2ggJiYgKHdoaXRlU3BhY2VNYXRjaCA9IHRoaXMuX3doaXRlc3BhY2UuZXhlYyhpbnB1dCkpKVxuICAgICAgICBpbnB1dCA9IGlucHV0LnN1YnN0cih3aGl0ZVNwYWNlTWF0Y2hbMF0ubGVuZ3RoLCBpbnB1dC5sZW5ndGgpO1xuXG4gICAgICAvLyBTdG9wIGZvciBub3cgaWYgd2UncmUgYXQgdGhlIGVuZFxuICAgICAgaWYgKHRoaXMuX2VuZE9mRmlsZS50ZXN0KGlucHV0KSkge1xuICAgICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgZmluaXNoZWQsIGVtaXQgRU9GXG4gICAgICAgIGlmIChpbnB1dEZpbmlzaGVkKSB7XG4gICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBmaW5hbCBjb21tZW50XG4gICAgICAgICAgaWYgKG91dHB1dENvbW1lbnRzICYmIChjb21tZW50ID0gdGhpcy5fY29tbWVudC5leGVjKGlucHV0KSkpXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB7IGxpbmU6IHRoaXMuX2xpbmUsIHR5cGU6ICdjb21tZW50JywgdmFsdWU6IGNvbW1lbnRbMV0sIHByZWZpeDogJycgfSk7XG4gICAgICAgICAgY2FsbGJhY2soaW5wdXQgPSBudWxsLCB7IGxpbmU6IHRoaXMuX2xpbmUsIHR5cGU6ICdlb2YnLCB2YWx1ZTogJycsIHByZWZpeDogJycgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb2sgZm9yIHNwZWNpZmljIHRva2VuIHR5cGVzIGJhc2VkIG9uIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGxpbmUgPSB0aGlzLl9saW5lLCBmaXJzdENoYXIgPSBpbnB1dFswXTtcbiAgICAgIGxldCB0eXBlID0gJycsIHZhbHVlID0gJycsIHByZWZpeCA9ICcnLFxuICAgICAgICAgIG1hdGNoID0gbnVsbCwgbWF0Y2hMZW5ndGggPSAwLCBpbmNvbmNsdXNpdmUgPSBmYWxzZTtcbiAgICAgIHN3aXRjaCAoZmlyc3RDaGFyKSB7XG4gICAgICBjYXNlICdeJzpcbiAgICAgICAgLy8gV2UgbmVlZCBhdCBsZWFzdCAzIHRva2VucyBsb29rYWhlYWQgdG8gZGlzdGluZ3Vpc2ggXl48SVJJPiBhbmQgXl5wcmU6Zml4ZWRcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA8IDMpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIC8vIFRyeSB0byBtYXRjaCBhIHR5cGVcbiAgICAgICAgZWxzZSBpZiAoaW5wdXRbMV0gPT09ICdeJykge1xuICAgICAgICAgIHRoaXMuX3ByZXZpb3VzTWFya2VyID0gJ15eJztcbiAgICAgICAgICAvLyBNb3ZlIHRvIHR5cGUgSVJJIG9yIHByZWZpeGVkIG5hbWVcbiAgICAgICAgICBpbnB1dCA9IGlucHV0LnN1YnN0cigyKTtcbiAgICAgICAgICBpZiAoaW5wdXRbMF0gIT09ICc8Jykge1xuICAgICAgICAgICAgaW5jb25jbHVzaXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyB0eXBlLCBpdCBtdXN0IGJlIGEgcGF0aCBleHByZXNzaW9uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmICh0aGlzLl9uM01vZGUpIHtcbiAgICAgICAgICAgIG1hdGNoTGVuZ3RoID0gMTtcbiAgICAgICAgICAgIHR5cGUgPSAnXic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZhbGwgdGhyb3VnaCBpbiBjYXNlIHRoZSB0eXBlIGlzIGFuIElSSVxuICAgICAgY2FzZSAnPCc6XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGEgZnVsbCBJUkkgd2l0aG91dCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgICAgIGlmIChtYXRjaCA9IHRoaXMuX3VuZXNjYXBlZElyaS5leGVjKGlucHV0KSlcbiAgICAgICAgICB0eXBlID0gJ0lSSScsIHZhbHVlID0gbWF0Y2hbMV07XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGEgZnVsbCBJUkkgd2l0aCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgICAgIGVsc2UgaWYgKG1hdGNoID0gdGhpcy5faXJpLmV4ZWMoaW5wdXQpKSB7XG4gICAgICAgICAgdmFsdWUgPSB0aGlzLl91bmVzY2FwZShtYXRjaFsxXSk7XG4gICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IGlsbGVnYWxJcmlDaGFycy50ZXN0KHZhbHVlKSlcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRTeW50YXhFcnJvcih0aGlzKTtcbiAgICAgICAgICB0eXBlID0gJ0lSSSc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBuZXN0ZWQgdHJpcGxlXG4gICAgICAgIGVsc2UgaWYgKGlucHV0Lmxlbmd0aCA+IDEgJiYgaW5wdXRbMV0gPT09ICc8JylcbiAgICAgICAgICB0eXBlID0gJzw8JywgbWF0Y2hMZW5ndGggPSAyO1xuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGJhY2t3YXJkcyBpbXBsaWNhdGlvbiBhcnJvd1xuICAgICAgICBlbHNlIGlmICh0aGlzLl9uM01vZGUgJiYgaW5wdXQubGVuZ3RoID4gMSAmJiBpbnB1dFsxXSA9PT0gJz0nKVxuICAgICAgICAgIHR5cGUgPSAnaW52ZXJzZScsIG1hdGNoTGVuZ3RoID0gMiwgdmFsdWUgPSAnPic7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICc+JzpcbiAgICAgICAgaWYgKGlucHV0Lmxlbmd0aCA+IDEgJiYgaW5wdXRbMV0gPT09ICc+JylcbiAgICAgICAgICB0eXBlID0gJz4+JywgbWF0Y2hMZW5ndGggPSAyO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnXyc6XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGEgYmxhbmsgbm9kZS4gU2luY2UgaXQgY2FuIGNvbnRhaW4gKGJ1dCBub3QgZW5kIHdpdGgpIGEgZG90LFxuICAgICAgICAvLyB3ZSBhbHdheXMgbmVlZCBhIG5vbi1kb3QgY2hhcmFjdGVyIGJlZm9yZSBkZWNpZGluZyBpdCBpcyBhIGJsYW5rIG5vZGUuXG4gICAgICAgIC8vIFRoZXJlZm9yZSwgdHJ5IGluc2VydGluZyBhIHNwYWNlIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0LlxuICAgICAgICBpZiAoKG1hdGNoID0gdGhpcy5fYmxhbmsuZXhlYyhpbnB1dCkpIHx8XG4gICAgICAgICAgICBpbnB1dEZpbmlzaGVkICYmIChtYXRjaCA9IHRoaXMuX2JsYW5rLmV4ZWMoYCR7aW5wdXR9IGApKSlcbiAgICAgICAgICB0eXBlID0gJ2JsYW5rJywgcHJlZml4ID0gJ18nLCB2YWx1ZSA9IG1hdGNoWzFdO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnXCInOlxuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGxpdGVyYWwgd2l0aG91dCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgICAgIGlmIChtYXRjaCA9IHRoaXMuX3NpbXBsZVF1b3RlZFN0cmluZy5leGVjKGlucHV0KSlcbiAgICAgICAgICB2YWx1ZSA9IG1hdGNoWzFdO1xuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGxpdGVyYWwgd3JhcHBlZCBpbiB0aHJlZSBwYWlycyBvZiBxdW90ZXNcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgKHsgdmFsdWUsIG1hdGNoTGVuZ3RoIH0gPSB0aGlzLl9wYXJzZUxpdGVyYWwoaW5wdXQpKTtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gcmVwb3J0U3ludGF4RXJyb3IodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoICE9PSBudWxsIHx8IG1hdGNoTGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgdHlwZSA9ICdsaXRlcmFsJztcbiAgICAgICAgICB0aGlzLl9saXRlcmFsQ2xvc2luZ1BvcyA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgIGlmICghdGhpcy5fbGluZU1vZGUpIHtcbiAgICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGxpdGVyYWwgd2l0aG91dCBlc2NhcGUgc2VxdWVuY2VzXG4gICAgICAgICAgaWYgKG1hdGNoID0gdGhpcy5fc2ltcGxlQXBvc3Ryb3BoZVN0cmluZy5leGVjKGlucHV0KSlcbiAgICAgICAgICAgIHZhbHVlID0gbWF0Y2hbMV07XG4gICAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBsaXRlcmFsIHdyYXBwZWQgaW4gdGhyZWUgcGFpcnMgb2YgcXVvdGVzXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAoeyB2YWx1ZSwgbWF0Y2hMZW5ndGggfSA9IHRoaXMuX3BhcnNlTGl0ZXJhbChpbnB1dCkpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKVxuICAgICAgICAgICAgICByZXR1cm4gcmVwb3J0U3ludGF4RXJyb3IodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCB8fCBtYXRjaExlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdHlwZSA9ICdsaXRlcmFsJztcbiAgICAgICAgICAgIHRoaXMuX2xpdGVyYWxDbG9zaW5nUG9zID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJz8nOlxuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIHZhcmlhYmxlXG4gICAgICAgIGlmICh0aGlzLl9uM01vZGUgJiYgKG1hdGNoID0gdGhpcy5fdmFyaWFibGUuZXhlYyhpbnB1dCkpKVxuICAgICAgICAgIHR5cGUgPSAndmFyJywgdmFsdWUgPSBtYXRjaFswXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0AnOlxuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGxhbmd1YWdlIGNvZGVcbiAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzTWFya2VyID09PSAnbGl0ZXJhbCcgJiYgKG1hdGNoID0gdGhpcy5fbGFuZ2NvZGUuZXhlYyhpbnB1dCkpKVxuICAgICAgICAgIHR5cGUgPSAnbGFuZ2NvZGUnLCB2YWx1ZSA9IG1hdGNoWzFdO1xuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGtleXdvcmRcbiAgICAgICAgZWxzZSBpZiAobWF0Y2ggPSB0aGlzLl9rZXl3b3JkLmV4ZWMoaW5wdXQpKVxuICAgICAgICAgIHR5cGUgPSBtYXRjaFswXTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJy4nOlxuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIGRvdCBhcyBwdW5jdHVhdGlvblxuICAgICAgICBpZiAoaW5wdXQubGVuZ3RoID09PSAxID8gaW5wdXRGaW5pc2hlZCA6IChpbnB1dFsxXSA8ICcwJyB8fCBpbnB1dFsxXSA+ICc5JykpIHtcbiAgICAgICAgICB0eXBlID0gJy4nO1xuICAgICAgICAgIG1hdGNoTGVuZ3RoID0gMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBGYWxsIHRocm91Z2ggdG8gbnVtZXJpY2FsIGNhc2UgKGNvdWxkIGJlIGEgZGVjaW1hbCBkb3QpXG5cbiAgICAgIGNhc2UgJzAnOlxuICAgICAgY2FzZSAnMSc6XG4gICAgICBjYXNlICcyJzpcbiAgICAgIGNhc2UgJzMnOlxuICAgICAgY2FzZSAnNCc6XG4gICAgICBjYXNlICc1JzpcbiAgICAgIGNhc2UgJzYnOlxuICAgICAgY2FzZSAnNyc6XG4gICAgICBjYXNlICc4JzpcbiAgICAgIGNhc2UgJzknOlxuICAgICAgY2FzZSAnKyc6XG4gICAgICBjYXNlICctJzpcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBudW1iZXIuIFNpbmNlIGl0IGNhbiBjb250YWluIChidXQgbm90IGVuZCB3aXRoKSBhIGRvdCxcbiAgICAgICAgLy8gd2UgYWx3YXlzIG5lZWQgYSBub24tZG90IGNoYXJhY3RlciBiZWZvcmUgZGVjaWRpbmcgaXQgaXMgYSBudW1iZXIuXG4gICAgICAgIC8vIFRoZXJlZm9yZSwgdHJ5IGluc2VydGluZyBhIHNwYWNlIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0LlxuICAgICAgICBpZiAobWF0Y2ggPSB0aGlzLl9udW1iZXIuZXhlYyhpbnB1dCkgfHxcbiAgICAgICAgICAgIGlucHV0RmluaXNoZWQgJiYgKG1hdGNoID0gdGhpcy5fbnVtYmVyLmV4ZWMoYCR7aW5wdXR9IGApKSkge1xuICAgICAgICAgIHR5cGUgPSAnbGl0ZXJhbCcsIHZhbHVlID0gbWF0Y2hbMF07XG4gICAgICAgICAgcHJlZml4ID0gKHR5cGVvZiBtYXRjaFsxXSA9PT0gJ3N0cmluZycgPyB4c2QuZG91YmxlIDpcbiAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBtYXRjaFsyXSA9PT0gJ3N0cmluZycgPyB4c2QuZGVjaW1hbCA6IHhzZC5pbnRlZ2VyKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdwJzpcbiAgICAgIGNhc2UgJ1AnOlxuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdnJzpcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYSBTUEFSUUwtc3R5bGUga2V5d29yZFxuICAgICAgICBpZiAobWF0Y2ggPSB0aGlzLl9zcGFycWxLZXl3b3JkLmV4ZWMoaW5wdXQpKVxuICAgICAgICAgIHR5cGUgPSBtYXRjaFswXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgaW5jb25jbHVzaXZlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2YnOlxuICAgICAgY2FzZSAndCc6XG4gICAgICAgIC8vIFRyeSB0byBtYXRjaCBhIGJvb2xlYW5cbiAgICAgICAgaWYgKG1hdGNoID0gdGhpcy5fYm9vbGVhbi5leGVjKGlucHV0KSlcbiAgICAgICAgICB0eXBlID0gJ2xpdGVyYWwnLCB2YWx1ZSA9IG1hdGNoWzBdLCBwcmVmaXggPSB4c2QuYm9vbGVhbjtcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGluY29uY2x1c2l2ZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdhJzpcbiAgICAgICAgLy8gVHJ5IHRvIGZpbmQgYW4gYWJicmV2aWF0ZWQgcHJlZGljYXRlXG4gICAgICAgIGlmIChtYXRjaCA9IHRoaXMuX3Nob3J0UHJlZGljYXRlcy5leGVjKGlucHV0KSlcbiAgICAgICAgICB0eXBlID0gJ2FiYnJldmlhdGlvbicsIHZhbHVlID0gJ2EnO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgaW5jb25jbHVzaXZlID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJz0nOlxuICAgICAgICAvLyBUcnkgdG8gZmluZCBhbiBpbXBsaWNhdGlvbiBhcnJvdyBvciBlcXVhbHMgc2lnblxuICAgICAgICBpZiAodGhpcy5fbjNNb2RlICYmIGlucHV0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICB0eXBlID0gJ2FiYnJldmlhdGlvbic7XG4gICAgICAgICAgaWYgKGlucHV0WzFdICE9PSAnPicpXG4gICAgICAgICAgICBtYXRjaExlbmd0aCA9IDEsIHZhbHVlID0gJz0nO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIG1hdGNoTGVuZ3RoID0gMiwgdmFsdWUgPSAnPic7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJyEnOlxuICAgICAgICBpZiAoIXRoaXMuX24zTW9kZSlcbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJywnOlxuICAgICAgY2FzZSAnOyc6XG4gICAgICBjYXNlICdbJzpcbiAgICAgIGNhc2UgJ10nOlxuICAgICAgY2FzZSAnKCc6XG4gICAgICBjYXNlICcpJzpcbiAgICAgIGNhc2UgJ3snOlxuICAgICAgY2FzZSAnfSc6XG4gICAgICAgIGlmICghdGhpcy5fbGluZU1vZGUpIHtcbiAgICAgICAgICBtYXRjaExlbmd0aCA9IDE7XG4gICAgICAgICAgdHlwZSA9IGZpcnN0Q2hhcjtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW5jb25jbHVzaXZlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gU29tZSBmaXJzdCBjaGFyYWN0ZXJzIGRvIG5vdCBhbGxvdyBhbiBpbW1lZGlhdGUgZGVjaXNpb24sIHNvIGluc3BlY3QgbW9yZVxuICAgICAgaWYgKGluY29uY2x1c2l2ZSkge1xuICAgICAgICAvLyBUcnkgdG8gZmluZCBhIHByZWZpeFxuICAgICAgICBpZiAoKHRoaXMuX3ByZXZpb3VzTWFya2VyID09PSAnQHByZWZpeCcgfHwgdGhpcy5fcHJldmlvdXNNYXJrZXIgPT09ICdQUkVGSVgnKSAmJlxuICAgICAgICAgICAgKG1hdGNoID0gdGhpcy5fcHJlZml4LmV4ZWMoaW5wdXQpKSlcbiAgICAgICAgICB0eXBlID0gJ3ByZWZpeCcsIHZhbHVlID0gbWF0Y2hbMV0gfHwgJyc7XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGEgcHJlZml4ZWQgbmFtZS4gU2luY2UgaXQgY2FuIGNvbnRhaW4gKGJ1dCBub3QgZW5kIHdpdGgpIGEgZG90LFxuICAgICAgICAvLyB3ZSBhbHdheXMgbmVlZCBhIG5vbi1kb3QgY2hhcmFjdGVyIGJlZm9yZSBkZWNpZGluZyBpdCBpcyBhIHByZWZpeGVkIG5hbWUuXG4gICAgICAgIC8vIFRoZXJlZm9yZSwgdHJ5IGluc2VydGluZyBhIHNwYWNlIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0LlxuICAgICAgICBlbHNlIGlmICgobWF0Y2ggPSB0aGlzLl9wcmVmaXhlZC5leGVjKGlucHV0KSkgfHxcbiAgICAgICAgICAgICAgICAgaW5wdXRGaW5pc2hlZCAmJiAobWF0Y2ggPSB0aGlzLl9wcmVmaXhlZC5leGVjKGAke2lucHV0fSBgKSkpXG4gICAgICAgICAgdHlwZSA9ICdwcmVmaXhlZCcsIHByZWZpeCA9IG1hdGNoWzFdIHx8ICcnLCB2YWx1ZSA9IHRoaXMuX3VuZXNjYXBlKG1hdGNoWzJdKTtcbiAgICAgIH1cblxuICAgICAgLy8gQSB0eXBlIHRva2VuIGlzIHNwZWNpYWw6IGl0IGNhbiBvbmx5IGJlIGVtaXR0ZWQgYWZ0ZXIgYW4gSVJJIG9yIHByZWZpeGVkIG5hbWUgaXMgcmVhZFxuICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzTWFya2VyID09PSAnXl4nKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdwcmVmaXhlZCc6IHR5cGUgPSAndHlwZSc7ICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdJUkknOiAgICAgIHR5cGUgPSAndHlwZUlSSSc7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiAgICAgICAgIHR5cGUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXaGF0IGlmIG5vdGhpbmcgb2YgdGhlIGFib3ZlIHdhcyBmb3VuZD9cbiAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAvLyBXZSBjb3VsZCBiZSBpbiBzdHJlYW1pbmcgbW9kZSwgYW5kIHRoZW4gd2UganVzdCB3YWl0IGZvciBtb3JlIGlucHV0IHRvIGFycml2ZS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCBhIHN5bnRheCBlcnJvciBoYXMgb2NjdXJyZWQgaW4gdGhlIGlucHV0LlxuICAgICAgICAvLyBPbmUgZXhjZXB0aW9uOiBlcnJvciBvbiBhbiB1bmFjY291bnRlZCBsaW5lYnJlYWsgKD0gbm90IGluc2lkZSBhIHRyaXBsZS1xdW90ZWQgbGl0ZXJhbCkuXG4gICAgICAgIGlmIChpbnB1dEZpbmlzaGVkIHx8ICghL14nJyd8XlwiXCJcIi8udGVzdChpbnB1dCkgJiYgL1xcbnxcXHIvLnRlc3QoaW5wdXQpKSlcbiAgICAgICAgICByZXR1cm4gcmVwb3J0U3ludGF4RXJyb3IodGhpcyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXR1cm4gdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCB0aGUgcGFyc2VkIHRva2VuXG4gICAgICBjb25zdCB0b2tlbiA9IHsgbGluZTogbGluZSwgdHlwZTogdHlwZSwgdmFsdWU6IHZhbHVlLCBwcmVmaXg6IHByZWZpeCB9O1xuICAgICAgY2FsbGJhY2sobnVsbCwgdG9rZW4pO1xuICAgICAgdGhpcy5wcmV2aW91c1Rva2VuID0gdG9rZW47XG4gICAgICB0aGlzLl9wcmV2aW91c01hcmtlciA9IHR5cGU7XG4gICAgICAvLyBBZHZhbmNlIHRvIG5leHQgcGFydCB0byB0b2tlbml6ZVxuICAgICAgaW5wdXQgPSBpbnB1dC5zdWJzdHIobWF0Y2hMZW5ndGggfHwgbWF0Y2hbMF0ubGVuZ3RoLCBpbnB1dC5sZW5ndGgpO1xuICAgIH1cblxuICAgIC8vIFNpZ25hbHMgdGhlIHN5bnRheCBlcnJvciB0aHJvdWdoIHRoZSBjYWxsYmFja1xuICAgIGZ1bmN0aW9uIHJlcG9ydFN5bnRheEVycm9yKHNlbGYpIHsgY2FsbGJhY2soc2VsZi5fc3ludGF4RXJyb3IoL15cXFMqLy5leGVjKGlucHV0KVswXSkpOyB9XG4gIH1cblxuICAvLyAjIyMgYF91bmVzY2FwZWAgcmVwbGFjZXMgTjMgZXNjYXBlIGNvZGVzIGJ5IHRoZWlyIGNvcnJlc3BvbmRpbmcgY2hhcmFjdGVyc1xuICBfdW5lc2NhcGUoaXRlbSkge1xuICAgIGxldCBpbnZhbGlkID0gZmFsc2U7XG4gICAgY29uc3QgcmVwbGFjZWQgPSBpdGVtLnJlcGxhY2UoZXNjYXBlU2VxdWVuY2UsIChzZXF1ZW5jZSwgdW5pY29kZTQsIHVuaWNvZGU4LCBlc2NhcGVkQ2hhcikgPT4ge1xuICAgICAgLy8gNC1kaWdpdCB1bmljb2RlIGNoYXJhY3RlclxuICAgICAgaWYgKHR5cGVvZiB1bmljb2RlNCA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKE51bWJlci5wYXJzZUludCh1bmljb2RlNCwgMTYpKTtcbiAgICAgIC8vIDgtZGlnaXQgdW5pY29kZSBjaGFyYWN0ZXJcbiAgICAgIGlmICh0eXBlb2YgdW5pY29kZTggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCBjaGFyQ29kZSA9IE51bWJlci5wYXJzZUludCh1bmljb2RlOCwgMTYpO1xuICAgICAgICByZXR1cm4gY2hhckNvZGUgPD0gMHhGRkZGID8gU3RyaW5nLmZyb21DaGFyQ29kZShOdW1iZXIucGFyc2VJbnQodW5pY29kZTgsIDE2KSkgOlxuICAgICAgICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEODAwICsgKChjaGFyQ29kZSAtPSAweDEwMDAwKSA+PiAxMCksIDB4REMwMCArIChjaGFyQ29kZSAmIDB4M0ZGKSk7XG4gICAgICB9XG4gICAgICAvLyBmaXhlZCBlc2NhcGUgc2VxdWVuY2VcbiAgICAgIGlmIChlc2NhcGVkQ2hhciBpbiBlc2NhcGVSZXBsYWNlbWVudHMpXG4gICAgICAgIHJldHVybiBlc2NhcGVSZXBsYWNlbWVudHNbZXNjYXBlZENoYXJdO1xuICAgICAgLy8gaW52YWxpZCBlc2NhcGUgc2VxdWVuY2VcbiAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnZhbGlkID8gbnVsbCA6IHJlcGxhY2VkO1xuICB9XG5cbiAgLy8gIyMjIGBfcGFyc2VMaXRlcmFsYCBwYXJzZXMgYSBsaXRlcmFsIGludG8gYW4gdW5lc2NhcGVkIHZhbHVlXG4gIF9wYXJzZUxpdGVyYWwoaW5wdXQpIHtcbiAgICAvLyBFbnN1cmUgd2UgaGF2ZSBlbm91Z2ggbG9va2FoZWFkIHRvIGlkZW50aWZ5IHRyaXBsZS1xdW90ZWQgc3RyaW5nc1xuICAgIGlmIChpbnB1dC5sZW5ndGggPj0gMykge1xuICAgICAgLy8gSWRlbnRpZnkgdGhlIG9wZW5pbmcgcXVvdGUocylcbiAgICAgIGNvbnN0IG9wZW5pbmcgPSBpbnB1dC5tYXRjaCgvXig/OlwiXCJcInxcInwnJyd8J3wpLylbMF07XG4gICAgICBjb25zdCBvcGVuaW5nTGVuZ3RoID0gb3BlbmluZy5sZW5ndGg7XG5cbiAgICAgIC8vIEZpbmQgdGhlIG5leHQgY2FuZGlkYXRlIGNsb3NpbmcgcXVvdGVzXG4gICAgICBsZXQgY2xvc2luZ1BvcyA9IE1hdGgubWF4KHRoaXMuX2xpdGVyYWxDbG9zaW5nUG9zLCBvcGVuaW5nTGVuZ3RoKTtcbiAgICAgIHdoaWxlICgoY2xvc2luZ1BvcyA9IGlucHV0LmluZGV4T2Yob3BlbmluZywgY2xvc2luZ1BvcykpID4gMCkge1xuICAgICAgICAvLyBDb3VudCBiYWNrc2xhc2hlcyByaWdodCBiZWZvcmUgdGhlIGNsb3NpbmcgcXVvdGVzXG4gICAgICAgIGxldCBiYWNrc2xhc2hDb3VudCA9IDA7XG4gICAgICAgIHdoaWxlIChpbnB1dFtjbG9zaW5nUG9zIC0gYmFja3NsYXNoQ291bnQgLSAxXSA9PT0gJ1xcXFwnKVxuICAgICAgICAgIGJhY2tzbGFzaENvdW50Kys7XG5cbiAgICAgICAgLy8gQW4gZXZlbiBudW1iZXIgb2YgYmFja3NsYXNoZXMgKGluIHBhcnRpY3VsYXIgMClcbiAgICAgICAgLy8gbWVhbnMgdGhlc2UgYXJlIGFjdHVhbCwgbm9uLWVzY2FwZWQgY2xvc2luZyBxdW90ZXNcbiAgICAgICAgaWYgKGJhY2tzbGFzaENvdW50ICUgMiA9PT0gMCkge1xuICAgICAgICAgIC8vIEV4dHJhY3QgYW5kIHVuZXNjYXBlIHRoZSB2YWx1ZVxuICAgICAgICAgIGNvbnN0IHJhdyA9IGlucHV0LnN1YnN0cmluZyhvcGVuaW5nTGVuZ3RoLCBjbG9zaW5nUG9zKTtcbiAgICAgICAgICBjb25zdCBsaW5lcyA9IHJhdy5zcGxpdCgvXFxyXFxufFxccnxcXG4vKS5sZW5ndGggLSAxO1xuICAgICAgICAgIGNvbnN0IG1hdGNoTGVuZ3RoID0gY2xvc2luZ1BvcyArIG9wZW5pbmdMZW5ndGg7XG4gICAgICAgICAgLy8gT25seSB0cmlwbGUtcXVvdGVkIHN0cmluZ3MgY2FuIGJlIG11bHRpLWxpbmVcbiAgICAgICAgICBpZiAob3BlbmluZ0xlbmd0aCA9PT0gMSAmJiBsaW5lcyAhPT0gMCB8fFxuICAgICAgICAgICAgICBvcGVuaW5nTGVuZ3RoID09PSAzICYmIHRoaXMuX2xpbmVNb2RlKVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgdGhpcy5fbGluZSArPSBsaW5lcztcbiAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdGhpcy5fdW5lc2NhcGUocmF3KSwgbWF0Y2hMZW5ndGggfTtcbiAgICAgICAgfVxuICAgICAgICBjbG9zaW5nUG9zKys7XG4gICAgICB9XG4gICAgICB0aGlzLl9saXRlcmFsQ2xvc2luZ1BvcyA9IGlucHV0Lmxlbmd0aCAtIG9wZW5pbmdMZW5ndGggKyAxO1xuICAgIH1cbiAgICByZXR1cm4geyB2YWx1ZTogJycsIG1hdGNoTGVuZ3RoOiAwIH07XG4gIH1cblxuICAvLyAjIyMgYF9zeW50YXhFcnJvcmAgY3JlYXRlcyBhIHN5bnRheCBlcnJvciBmb3IgdGhlIGdpdmVuIGlzc3VlXG4gIF9zeW50YXhFcnJvcihpc3N1ZSkge1xuICAgIHRoaXMuX2lucHV0ID0gbnVsbDtcbiAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgXCIke2lzc3VlfVwiIG9uIGxpbmUgJHt0aGlzLl9saW5lfS5gKTtcbiAgICBlcnIuY29udGV4dCA9IHtcbiAgICAgIHRva2VuOiB1bmRlZmluZWQsXG4gICAgICBsaW5lOiB0aGlzLl9saW5lLFxuICAgICAgcHJldmlvdXNUb2tlbjogdGhpcy5wcmV2aW91c1Rva2VuLFxuICAgIH07XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuXG4gIC8vICMjIFB1YmxpYyBtZXRob2RzXG5cbiAgLy8gIyMjIGB0b2tlbml6ZWAgc3RhcnRzIHRoZSB0cmFuc2Zvcm1hdGlvbiBvZiBhbiBOMyBkb2N1bWVudCBpbnRvIGFuIGFycmF5IG9mIHRva2Vucy5cbiAgLy8gVGhlIGlucHV0IGNhbiBiZSBhIHN0cmluZyBvciBhIHN0cmVhbS5cbiAgdG9rZW5pemUoaW5wdXQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fbGluZSA9IDE7XG5cbiAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBzdHJpbmcsIGNvbnRpbnVvdXNseSBlbWl0IHRva2VucyB0aHJvdWdoIHRoZSBjYWxsYmFjayB1bnRpbCB0aGUgZW5kXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG4gICAgICAvLyBJZiBhIGNhbGxiYWNrIHdhcyBwYXNzZWQsIGFzeW5jaHJvbm91c2x5IGNhbGwgaXRcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpXG4gICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHRoaXMuX3Rva2VuaXplVG9FbmQoY2FsbGJhY2ssIHRydWUpKTtcbiAgICAgIC8vIElmIG5vIGNhbGxiYWNrIHdhcyBwYXNzZWQsIHRva2VuaXplIHN5bmNocm9ub3VzbHkgYW5kIHJldHVyblxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IFtdO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIHRoaXMuX3Rva2VuaXplVG9FbmQoKGUsIHQpID0+IGUgPyAoZXJyb3IgPSBlKSA6IHRva2Vucy5wdXNoKHQpLCB0cnVlKTtcbiAgICAgICAgaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgICAgICAgcmV0dXJuIHRva2VucztcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCB0aGUgaW5wdXQgbXVzdCBiZSBhIHN0cmVhbVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5faW5wdXQgPSAnJztcbiAgICAgIHRoaXMuX3BlbmRpbmdCdWZmZXIgPSBudWxsO1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dC5zZXRFbmNvZGluZyA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgaW5wdXQuc2V0RW5jb2RpbmcoJ3V0ZjgnKTtcbiAgICAgIC8vIEFkZHMgdGhlIGRhdGEgY2h1bmsgdG8gdGhlIGJ1ZmZlciBhbmQgcGFyc2VzIGFzIGZhciBhcyBwb3NzaWJsZVxuICAgICAgaW5wdXQub24oJ2RhdGEnLCBkYXRhID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ICE9PSBudWxsICYmIGRhdGEubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgLy8gUHJlcGVuZCBhbnkgcHJldmlvdXMgcGVuZGluZyB3cml0ZXNcbiAgICAgICAgICBpZiAodGhpcy5fcGVuZGluZ0J1ZmZlcikge1xuICAgICAgICAgICAgZGF0YSA9IEJ1ZmZlci5jb25jYXQoW3RoaXMuX3BlbmRpbmdCdWZmZXIsIGRhdGFdKTtcbiAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdCdWZmZXIgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBIb2xkIGlmIHRoZSBidWZmZXIgZW5kcyBpbiBhbiBpbmNvbXBsZXRlIHVuaWNvZGUgc2VxdWVuY2VcbiAgICAgICAgICBpZiAoZGF0YVtkYXRhLmxlbmd0aCAtIDFdICYgMHg4MCkge1xuICAgICAgICAgICAgdGhpcy5fcGVuZGluZ0J1ZmZlciA9IGRhdGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIE90aGVyd2lzZSwgdG9rZW5pemUgYXMgZmFyIGFzIHBvc3NpYmxlXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9pbnB1dCArPSBkYXRhO1xuICAgICAgICAgICAgdGhpcy5fdG9rZW5pemVUb0VuZChjYWxsYmFjaywgZmFsc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBQYXJzZXMgdW50aWwgdGhlIGVuZFxuICAgICAgaW5wdXQub24oJ2VuZCcsICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2lucHV0ICE9PSBudWxsKVxuICAgICAgICAgIHRoaXMuX3Rva2VuaXplVG9FbmQoY2FsbGJhY2ssIHRydWUpO1xuICAgICAgfSk7XG4gICAgICBpbnB1dC5vbignZXJyb3InLCBjYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG4iLCIvLyAqKk4zUGFyc2VyKiogcGFyc2VzIE4zIGRvY3VtZW50cy5cbmltcG9ydCBOM0xleGVyIGZyb20gJy4vTjNMZXhlcic7XG5pbXBvcnQgTjNEYXRhRmFjdG9yeSBmcm9tICcuL04zRGF0YUZhY3RvcnknO1xuaW1wb3J0IG5hbWVzcGFjZXMgZnJvbSAnLi9JUklzJztcblxubGV0IGJsYW5rTm9kZVByZWZpeCA9IDA7XG5cbi8vICMjIENvbnN0cnVjdG9yXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOM1BhcnNlciB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLl9jb250ZXh0U3RhY2sgPSBbXTtcbiAgICB0aGlzLl9ncmFwaCA9IG51bGw7XG5cbiAgICAvLyBTZXQgdGhlIGRvY3VtZW50IElSSVxuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuX3NldEJhc2Uob3B0aW9ucy5iYXNlSVJJKTtcbiAgICBvcHRpb25zLmZhY3RvcnkgJiYgaW5pdERhdGFGYWN0b3J5KHRoaXMsIG9wdGlvbnMuZmFjdG9yeSk7XG5cbiAgICAvLyBTZXQgc3VwcG9ydGVkIGZlYXR1cmVzIGRlcGVuZGluZyBvbiB0aGUgZm9ybWF0XG4gICAgY29uc3QgZm9ybWF0ID0gKHR5cGVvZiBvcHRpb25zLmZvcm1hdCA9PT0gJ3N0cmluZycpID9cbiAgICAgICAgICAgICAgICAgb3B0aW9ucy5mb3JtYXQubWF0Y2goL1xcdyokLylbMF0udG9Mb3dlckNhc2UoKSA6ICcnLFxuICAgICAgICBpc1R1cnRsZSA9IC90dXJ0bGUvLnRlc3QoZm9ybWF0KSwgaXNUcmlHID0gL3RyaWcvLnRlc3QoZm9ybWF0KSxcbiAgICAgICAgaXNOVHJpcGxlcyA9IC90cmlwbGUvLnRlc3QoZm9ybWF0KSwgaXNOUXVhZHMgPSAvcXVhZC8udGVzdChmb3JtYXQpLFxuICAgICAgICBpc04zID0gdGhpcy5fbjNNb2RlID0gL24zLy50ZXN0KGZvcm1hdCksXG4gICAgICAgIGlzTGluZU1vZGUgPSBpc05UcmlwbGVzIHx8IGlzTlF1YWRzO1xuICAgIGlmICghKHRoaXMuX3N1cHBvcnRzTmFtZWRHcmFwaHMgPSAhKGlzVHVydGxlIHx8IGlzTjMpKSlcbiAgICAgIHRoaXMuX3JlYWRQcmVkaWNhdGVPck5hbWVkR3JhcGggPSB0aGlzLl9yZWFkUHJlZGljYXRlO1xuICAgIC8vIFN1cHBvcnQgdHJpcGxlcyBpbiBvdGhlciBncmFwaHNcbiAgICB0aGlzLl9zdXBwb3J0c1F1YWRzID0gIShpc1R1cnRsZSB8fCBpc1RyaUcgfHwgaXNOVHJpcGxlcyB8fCBpc04zKTtcbiAgICAvLyBTdXBwb3J0IG5lc3Rpbmcgb2YgdHJpcGxlc1xuICAgIHRoaXMuX3N1cHBvcnRzUkRGU3RhciA9IGZvcm1hdCA9PT0gJycgfHwgL3N0YXJ8XFwqJC8udGVzdChmb3JtYXQpO1xuICAgIC8vIERpc2FibGUgcmVsYXRpdmUgSVJJcyBpbiBOLVRyaXBsZXMgb3IgTi1RdWFkcyBtb2RlXG4gICAgaWYgKGlzTGluZU1vZGUpXG4gICAgICB0aGlzLl9yZXNvbHZlUmVsYXRpdmVJUkkgPSBpcmkgPT4geyByZXR1cm4gbnVsbDsgfTtcbiAgICB0aGlzLl9ibGFua05vZGVQcmVmaXggPSB0eXBlb2Ygb3B0aW9ucy5ibGFua05vZGVQcmVmaXggIT09ICdzdHJpbmcnID8gJycgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5ibGFua05vZGVQcmVmaXgucmVwbGFjZSgvXig/IV86KS8sICdfOicpO1xuICAgIHRoaXMuX2xleGVyID0gb3B0aW9ucy5sZXhlciB8fCBuZXcgTjNMZXhlcih7IGxpbmVNb2RlOiBpc0xpbmVNb2RlLCBuMzogaXNOMyB9KTtcbiAgICAvLyBEaXNhYmxlIGV4cGxpY2l0IHF1YW50aWZpZXJzIGJ5IGRlZmF1bHRcbiAgICB0aGlzLl9leHBsaWNpdFF1YW50aWZpZXJzID0gISFvcHRpb25zLmV4cGxpY2l0UXVhbnRpZmllcnM7XG4gIH1cblxuICAvLyAjIyBTdGF0aWMgY2xhc3MgbWV0aG9kc1xuXG4gIC8vICMjIyBgX3Jlc2V0QmxhbmtOb2RlUHJlZml4YCByZXN0YXJ0cyBibGFuayBub2RlIHByZWZpeCBpZGVudGlmaWNhdGlvblxuICBzdGF0aWMgX3Jlc2V0QmxhbmtOb2RlUHJlZml4KCkge1xuICAgIGJsYW5rTm9kZVByZWZpeCA9IDA7XG4gIH1cblxuICAvLyAjIyBQcml2YXRlIG1ldGhvZHNcblxuICAvLyAjIyMgYF9zZXRCYXNlYCBzZXRzIHRoZSBiYXNlIElSSSB0byByZXNvbHZlIHJlbGF0aXZlIElSSXNcbiAgX3NldEJhc2UoYmFzZUlSSSkge1xuICAgIGlmICghYmFzZUlSSSkge1xuICAgICAgdGhpcy5fYmFzZSA9ICcnO1xuICAgICAgdGhpcy5fYmFzZVBhdGggPSAnJztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAvLyBSZW1vdmUgZnJhZ21lbnQgaWYgcHJlc2VudFxuICAgICAgY29uc3QgZnJhZ21lbnRQb3MgPSBiYXNlSVJJLmluZGV4T2YoJyMnKTtcbiAgICAgIGlmIChmcmFnbWVudFBvcyA+PSAwKVxuICAgICAgICBiYXNlSVJJID0gYmFzZUlSSS5zdWJzdHIoMCwgZnJhZ21lbnRQb3MpO1xuICAgICAgLy8gU2V0IGJhc2UgSVJJIGFuZCBpdHMgY29tcG9uZW50c1xuICAgICAgdGhpcy5fYmFzZSA9IGJhc2VJUkk7XG4gICAgICB0aGlzLl9iYXNlUGF0aCAgID0gYmFzZUlSSS5pbmRleE9mKCcvJykgPCAwID8gYmFzZUlSSSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgYmFzZUlSSS5yZXBsYWNlKC9bXlxcLz9dKig/OlxcPy4qKT8kLywgJycpO1xuICAgICAgYmFzZUlSSSA9IGJhc2VJUkkubWF0Y2goL14oPzooW2Etel1bYS16MC05Ky4tXSo6KSk/KD86XFwvXFwvW15cXC9dKik/L2kpO1xuICAgICAgdGhpcy5fYmFzZVJvb3QgICA9IGJhc2VJUklbMF07XG4gICAgICB0aGlzLl9iYXNlU2NoZW1lID0gYmFzZUlSSVsxXTtcbiAgICB9XG4gIH1cblxuICAvLyAjIyMgYF9zYXZlQ29udGV4dGAgc3RvcmVzIHRoZSBjdXJyZW50IHBhcnNpbmcgY29udGV4dFxuICAvLyB3aGVuIGVudGVyaW5nIGEgbmV3IHNjb3BlIChsaXN0LCBibGFuayBub2RlLCBmb3JtdWxhKVxuICBfc2F2ZUNvbnRleHQodHlwZSwgZ3JhcGgsIHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0KSB7XG4gICAgY29uc3QgbjNNb2RlID0gdGhpcy5fbjNNb2RlO1xuICAgIHRoaXMuX2NvbnRleHRTdGFjay5wdXNoKHtcbiAgICAgIHN1YmplY3Q6IHN1YmplY3QsIHByZWRpY2F0ZTogcHJlZGljYXRlLCBvYmplY3Q6IG9iamVjdCxcbiAgICAgIGdyYXBoOiBncmFwaCwgdHlwZTogdHlwZSxcbiAgICAgIGludmVyc2U6IG4zTW9kZSA/IHRoaXMuX2ludmVyc2VQcmVkaWNhdGUgOiBmYWxzZSxcbiAgICAgIGJsYW5rUHJlZml4OiBuM01vZGUgPyB0aGlzLl9wcmVmaXhlcy5fIDogJycsXG4gICAgICBxdWFudGlmaWVkOiBuM01vZGUgPyB0aGlzLl9xdWFudGlmaWVkIDogbnVsbCxcbiAgICB9KTtcbiAgICAvLyBUaGUgc2V0dGluZ3MgYmVsb3cgb25seSBhcHBseSB0byBOMyBzdHJlYW1zXG4gICAgaWYgKG4zTW9kZSkge1xuICAgICAgLy8gRXZlcnkgbmV3IHNjb3BlIHJlc2V0cyB0aGUgcHJlZGljYXRlIGRpcmVjdGlvblxuICAgICAgdGhpcy5faW52ZXJzZVByZWRpY2F0ZSA9IGZhbHNlO1xuICAgICAgLy8gSW4gTjMsIGJsYW5rIG5vZGVzIGFyZSBzY29wZWQgdG8gYSBmb3JtdWxhXG4gICAgICAvLyAodXNpbmcgYSBkb3QgYXMgc2VwYXJhdG9yLCBhcyBhIGJsYW5rIG5vZGUgbGFiZWwgY2Fubm90IHN0YXJ0IHdpdGggaXQpXG4gICAgICB0aGlzLl9wcmVmaXhlcy5fID0gKHRoaXMuX2dyYXBoID8gYCR7dGhpcy5fZ3JhcGguaWQuc3Vic3RyKDIpfS5gIDogJy4nKTtcbiAgICAgIC8vIFF1YW50aWZpZXJzIGFyZSBzY29wZWQgdG8gYSBmb3JtdWxhXG4gICAgICB0aGlzLl9xdWFudGlmaWVkID0gT2JqZWN0LmNyZWF0ZSh0aGlzLl9xdWFudGlmaWVkKTtcbiAgICB9XG4gIH1cblxuICAvLyAjIyMgYF9yZXN0b3JlQ29udGV4dGAgcmVzdG9yZXMgdGhlIHBhcmVudCBjb250ZXh0XG4gIC8vIHdoZW4gbGVhdmluZyBhIHNjb3BlIChsaXN0LCBibGFuayBub2RlLCBmb3JtdWxhKVxuICBfcmVzdG9yZUNvbnRleHQoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2NvbnRleHRTdGFjay5wb3AoKSwgbjNNb2RlID0gdGhpcy5fbjNNb2RlO1xuICAgIHRoaXMuX3N1YmplY3QgICA9IGNvbnRleHQuc3ViamVjdDtcbiAgICB0aGlzLl9wcmVkaWNhdGUgPSBjb250ZXh0LnByZWRpY2F0ZTtcbiAgICB0aGlzLl9vYmplY3QgICAgPSBjb250ZXh0Lm9iamVjdDtcbiAgICB0aGlzLl9ncmFwaCAgICAgPSBjb250ZXh0LmdyYXBoO1xuICAgIC8vIFRoZSBzZXR0aW5ncyBiZWxvdyBvbmx5IGFwcGx5IHRvIE4zIHN0cmVhbXNcbiAgICBpZiAobjNNb2RlKSB7XG4gICAgICB0aGlzLl9pbnZlcnNlUHJlZGljYXRlID0gY29udGV4dC5pbnZlcnNlO1xuICAgICAgdGhpcy5fcHJlZml4ZXMuXyA9IGNvbnRleHQuYmxhbmtQcmVmaXg7XG4gICAgICB0aGlzLl9xdWFudGlmaWVkID0gY29udGV4dC5xdWFudGlmaWVkO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRJblRvcENvbnRleHRgIHJlYWRzIGEgdG9rZW4gd2hlbiBpbiB0aGUgdG9wIGNvbnRleHRcbiAgX3JlYWRJblRvcENvbnRleHQodG9rZW4pIHtcbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAvLyBJZiBhbiBFT0YgdG9rZW4gYXJyaXZlcyBpbiB0aGUgdG9wIGNvbnRleHQsIHNpZ25hbCB0aGF0IHdlJ3JlIGRvbmVcbiAgICBjYXNlICdlb2YnOlxuICAgICAgaWYgKHRoaXMuX2dyYXBoICE9PSBudWxsKVxuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoJ1VuY2xvc2VkIGdyYXBoJywgdG9rZW4pO1xuICAgICAgZGVsZXRlIHRoaXMuX3ByZWZpeGVzLl87XG4gICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2sobnVsbCwgbnVsbCwgdGhpcy5fcHJlZml4ZXMpO1xuICAgIC8vIEl0IGNvdWxkIGJlIGEgcHJlZml4IGRlY2xhcmF0aW9uXG4gICAgY2FzZSAnUFJFRklYJzpcbiAgICAgIHRoaXMuX3NwYXJxbFN0eWxlID0gdHJ1ZTtcbiAgICBjYXNlICdAcHJlZml4JzpcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkUHJlZml4O1xuICAgIC8vIEl0IGNvdWxkIGJlIGEgYmFzZSBkZWNsYXJhdGlvblxuICAgIGNhc2UgJ0JBU0UnOlxuICAgICAgdGhpcy5fc3BhcnFsU3R5bGUgPSB0cnVlO1xuICAgIGNhc2UgJ0BiYXNlJzpcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkQmFzZUlSSTtcbiAgICAvLyBJdCBjb3VsZCBiZSBhIGdyYXBoXG4gICAgY2FzZSAneyc6XG4gICAgICBpZiAodGhpcy5fc3VwcG9ydHNOYW1lZEdyYXBocykge1xuICAgICAgICB0aGlzLl9ncmFwaCA9ICcnO1xuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWRTdWJqZWN0O1xuICAgICAgfVxuICAgIGNhc2UgJ0dSQVBIJzpcbiAgICAgIGlmICh0aGlzLl9zdXBwb3J0c05hbWVkR3JhcGhzKVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZE5hbWVkR3JhcGhMYWJlbDtcbiAgICAvLyBPdGhlcndpc2UsIHRoZSBuZXh0IHRva2VuIG11c3QgYmUgYSBzdWJqZWN0XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkU3ViamVjdCh0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgLy8gIyMjIGBfcmVhZEVudGl0eWAgcmVhZHMgYW4gSVJJLCBwcmVmaXhlZCBuYW1lLCBibGFuayBub2RlLCBvciB2YXJpYWJsZVxuICBfcmVhZEVudGl0eSh0b2tlbiwgcXVhbnRpZmllcikge1xuICAgIGxldCB2YWx1ZTtcbiAgICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICAvLyBSZWFkIGEgcmVsYXRpdmUgb3IgYWJzb2x1dGUgSVJJXG4gICAgY2FzZSAnSVJJJzpcbiAgICBjYXNlICd0eXBlSVJJJzpcbiAgICAgIGNvbnN0IGlyaSA9IHRoaXMuX3Jlc29sdmVJUkkodG9rZW4udmFsdWUpO1xuICAgICAgaWYgKGlyaSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdJbnZhbGlkIElSSScsIHRva2VuKTtcbiAgICAgIHZhbHVlID0gdGhpcy5fbmFtZWROb2RlKGlyaSk7XG4gICAgICBicmVhaztcbiAgICAvLyBSZWFkIGEgcHJlZml4ZWQgbmFtZVxuICAgIGNhc2UgJ3R5cGUnOlxuICAgIGNhc2UgJ3ByZWZpeGVkJzpcbiAgICAgIGNvbnN0IHByZWZpeCA9IHRoaXMuX3ByZWZpeGVzW3Rva2VuLnByZWZpeF07XG4gICAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzLl9lcnJvcihgVW5kZWZpbmVkIHByZWZpeCBcIiR7dG9rZW4ucHJlZml4fTpcImAsIHRva2VuKTtcbiAgICAgIHZhbHVlID0gdGhpcy5fbmFtZWROb2RlKHByZWZpeCArIHRva2VuLnZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFJlYWQgYSBibGFuayBub2RlXG4gICAgY2FzZSAnYmxhbmsnOlxuICAgICAgdmFsdWUgPSB0aGlzLl9ibGFua05vZGUodGhpcy5fcHJlZml4ZXNbdG9rZW4ucHJlZml4XSArIHRva2VuLnZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIFJlYWQgYSB2YXJpYWJsZVxuICAgIGNhc2UgJ3Zhcic6XG4gICAgICB2YWx1ZSA9IHRoaXMuX3ZhcmlhYmxlKHRva2VuLnZhbHVlLnN1YnN0cigxKSk7XG4gICAgICBicmVhaztcbiAgICAvLyBFdmVyeXRoaW5nIGVsc2UgaXMgbm90IGFuIGVudGl0eVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoYEV4cGVjdGVkIGVudGl0eSBidXQgZ290ICR7dG9rZW4udHlwZX1gLCB0b2tlbik7XG4gICAgfVxuICAgIC8vIEluIE4zIG1vZGUsIHJlcGxhY2UgdGhlIGVudGl0eSBpZiBpdCBpcyBxdWFudGlmaWVkXG4gICAgaWYgKCFxdWFudGlmaWVyICYmIHRoaXMuX24zTW9kZSAmJiAodmFsdWUuaWQgaW4gdGhpcy5fcXVhbnRpZmllZCkpXG4gICAgICB2YWx1ZSA9IHRoaXMuX3F1YW50aWZpZWRbdmFsdWUuaWRdO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRTdWJqZWN0YCByZWFkcyBhIHF1YWQncyBzdWJqZWN0XG4gIF9yZWFkU3ViamVjdCh0b2tlbikge1xuICAgIHRoaXMuX3ByZWRpY2F0ZSA9IG51bGw7XG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgY2FzZSAnWyc6XG4gICAgICAvLyBTdGFydCBhIG5ldyBxdWFkIHdpdGggYSBuZXcgYmxhbmsgbm9kZSBhcyBzdWJqZWN0XG4gICAgICB0aGlzLl9zYXZlQ29udGV4dCgnYmxhbmsnLCB0aGlzLl9ncmFwaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSB0aGlzLl9ibGFua05vZGUoKSwgbnVsbCwgbnVsbCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZEJsYW5rTm9kZUhlYWQ7XG4gICAgY2FzZSAnKCc6XG4gICAgICAvLyBTdGFydCBhIG5ldyBsaXN0XG4gICAgICB0aGlzLl9zYXZlQ29udGV4dCgnbGlzdCcsIHRoaXMuX2dyYXBoLCB0aGlzLlJERl9OSUwsIG51bGwsIG51bGwpO1xuICAgICAgdGhpcy5fc3ViamVjdCA9IG51bGw7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZExpc3RJdGVtO1xuICAgIGNhc2UgJ3snOlxuICAgICAgLy8gU3RhcnQgYSBuZXcgZm9ybXVsYVxuICAgICAgaWYgKCF0aGlzLl9uM01vZGUpXG4gICAgICAgIHJldHVybiB0aGlzLl9lcnJvcignVW5leHBlY3RlZCBncmFwaCcsIHRva2VuKTtcbiAgICAgIHRoaXMuX3NhdmVDb250ZXh0KCdmb3JtdWxhJywgdGhpcy5fZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncmFwaCA9IHRoaXMuX2JsYW5rTm9kZSgpLCBudWxsLCBudWxsKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkU3ViamVjdDtcbiAgICBjYXNlICd9JzpcbiAgICAgICAvLyBObyBzdWJqZWN0OyB0aGUgZ3JhcGggaW4gd2hpY2ggd2UgYXJlIHJlYWRpbmcgaXMgY2xvc2VkIGluc3RlYWRcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkUHVuY3R1YXRpb24odG9rZW4pO1xuICAgIGNhc2UgJ0Bmb3JTb21lJzpcbiAgICAgIGlmICghdGhpcy5fbjNNb2RlKVxuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoJ1VuZXhwZWN0ZWQgXCJAZm9yU29tZVwiJywgdG9rZW4pO1xuICAgICAgdGhpcy5fc3ViamVjdCA9IG51bGw7XG4gICAgICB0aGlzLl9wcmVkaWNhdGUgPSB0aGlzLk4zX0ZPUlNPTUU7XG4gICAgICB0aGlzLl9xdWFudGlmaWVyID0gdGhpcy5fYmxhbmtOb2RlO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlYWRRdWFudGlmaWVyTGlzdDtcbiAgICBjYXNlICdAZm9yQWxsJzpcbiAgICAgIGlmICghdGhpcy5fbjNNb2RlKVxuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoJ1VuZXhwZWN0ZWQgXCJAZm9yQWxsXCInLCB0b2tlbik7XG4gICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgIHRoaXMuX3ByZWRpY2F0ZSA9IHRoaXMuTjNfRk9SQUxMO1xuICAgICAgdGhpcy5fcXVhbnRpZmllciA9IHRoaXMuX3ZhcmlhYmxlO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlYWRRdWFudGlmaWVyTGlzdDtcbiAgICBjYXNlICdsaXRlcmFsJzpcbiAgICAgIGlmICghdGhpcy5fbjNNb2RlKVxuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoJ1VuZXhwZWN0ZWQgbGl0ZXJhbCcsIHRva2VuKTtcblxuICAgICAgaWYgKHRva2VuLnByZWZpeC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5fbGl0ZXJhbFZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb21wbGV0ZVN1YmplY3RMaXRlcmFsO1xuICAgICAgfVxuICAgICAgZWxzZVxuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gdGhpcy5fbGl0ZXJhbCh0b2tlbi52YWx1ZSwgdGhpcy5fbmFtZWROb2RlKHRva2VuLnByZWZpeCkpO1xuXG4gICAgICBicmVhaztcbiAgICBjYXNlICc8PCc6XG4gICAgICBpZiAoIXRoaXMuX3N1cHBvcnRzUkRGU3RhcilcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdVbmV4cGVjdGVkIFJERiogc3ludGF4JywgdG9rZW4pO1xuICAgICAgdGhpcy5fc2F2ZUNvbnRleHQoJzw8JywgdGhpcy5fZ3JhcGgsIG51bGwsIG51bGwsIG51bGwpO1xuICAgICAgdGhpcy5fZ3JhcGggPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlYWRTdWJqZWN0O1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBSZWFkIHRoZSBzdWJqZWN0IGVudGl0eVxuICAgICAgaWYgKCh0aGlzLl9zdWJqZWN0ID0gdGhpcy5fcmVhZEVudGl0eSh0b2tlbikpID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybjtcbiAgICAgIC8vIEluIE4zIG1vZGUsIHRoZSBzdWJqZWN0IG1pZ2h0IGJlIGEgcGF0aFxuICAgICAgaWYgKHRoaXMuX24zTW9kZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFBhdGhSZWFkZXIodGhpcy5fcmVhZFByZWRpY2F0ZU9yTmFtZWRHcmFwaCk7XG4gICAgfVxuXG4gICAgLy8gVGhlIG5leHQgdG9rZW4gbXVzdCBiZSBhIHByZWRpY2F0ZSxcbiAgICAvLyBvciwgaWYgdGhlIHN1YmplY3Qgd2FzIGFjdHVhbGx5IGEgZ3JhcGggSVJJLCBhIG5hbWVkIGdyYXBoXG4gICAgcmV0dXJuIHRoaXMuX3JlYWRQcmVkaWNhdGVPck5hbWVkR3JhcGg7XG4gIH1cblxuICAvLyAjIyMgYF9yZWFkUHJlZGljYXRlYCByZWFkcyBhIHF1YWQncyBwcmVkaWNhdGVcbiAgX3JlYWRQcmVkaWNhdGUodG9rZW4pIHtcbiAgICBjb25zdCB0eXBlID0gdG9rZW4udHlwZTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdpbnZlcnNlJzpcbiAgICAgIHRoaXMuX2ludmVyc2VQcmVkaWNhdGUgPSB0cnVlO1xuICAgIGNhc2UgJ2FiYnJldmlhdGlvbic6XG4gICAgICB0aGlzLl9wcmVkaWNhdGUgPSB0aGlzLkFCQlJFVklBVElPTlNbdG9rZW4udmFsdWVdO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLic6XG4gICAgY2FzZSAnXSc6XG4gICAgY2FzZSAnfSc6XG4gICAgICAvLyBFeHBlY3RlZCBwcmVkaWNhdGUgZGlkbid0IGNvbWUsIG11c3QgaGF2ZSBiZWVuIHRyYWlsaW5nIHNlbWljb2xvblxuICAgICAgaWYgKHRoaXMuX3ByZWRpY2F0ZSA9PT0gbnVsbClcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKGBVbmV4cGVjdGVkICR7dHlwZX1gLCB0b2tlbik7XG4gICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgIHJldHVybiB0eXBlID09PSAnXScgPyB0aGlzLl9yZWFkQmxhbmtOb2RlVGFpbCh0b2tlbikgOiB0aGlzLl9yZWFkUHVuY3R1YXRpb24odG9rZW4pO1xuICAgIGNhc2UgJzsnOlxuICAgICAgLy8gQWRkaXRpb25hbCBzZW1pY29sb25zIGNhbiBiZSBzYWZlbHkgaWdub3JlZFxuICAgICAgcmV0dXJuIHRoaXMuX3ByZWRpY2F0ZSAhPT0gbnVsbCA/IHRoaXMuX3JlYWRQcmVkaWNhdGUgOlxuICAgICAgICAgICAgIHRoaXMuX2Vycm9yKCdFeHBlY3RlZCBwcmVkaWNhdGUgYnV0IGdvdCA7JywgdG9rZW4pO1xuICAgIGNhc2UgJ2JsYW5rJzpcbiAgICAgIGlmICghdGhpcy5fbjNNb2RlKVxuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoJ0Rpc2FsbG93ZWQgYmxhbmsgbm9kZSBhcyBwcmVkaWNhdGUnLCB0b2tlbik7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICgodGhpcy5fcHJlZGljYXRlID0gdGhpcy5fcmVhZEVudGl0eSh0b2tlbikpID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVGhlIG5leHQgdG9rZW4gbXVzdCBiZSBhbiBvYmplY3RcbiAgICByZXR1cm4gdGhpcy5fcmVhZE9iamVjdDtcbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRPYmplY3RgIHJlYWRzIGEgcXVhZCdzIG9iamVjdFxuICBfcmVhZE9iamVjdCh0b2tlbikge1xuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgIGNhc2UgJ2xpdGVyYWwnOlxuICAgICAgLy8gUmVndWxhciBsaXRlcmFsLCBjYW4gc3RpbGwgZ2V0IGEgZGF0YXR5cGUgb3IgbGFuZ3VhZ2VcbiAgICAgIGlmICh0b2tlbi5wcmVmaXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2xpdGVyYWxWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZERhdGFUeXBlT3JMYW5nO1xuICAgICAgfVxuICAgICAgLy8gUHJlLWRhdGF0eXBlZCBzdHJpbmcgbGl0ZXJhbCAocHJlZml4IHN0b3JlcyB0aGUgZGF0YXR5cGUpXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuX29iamVjdCA9IHRoaXMuX2xpdGVyYWwodG9rZW4udmFsdWUsIHRoaXMuX25hbWVkTm9kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1snOlxuICAgICAgLy8gU3RhcnQgYSBuZXcgcXVhZCB3aXRoIGEgbmV3IGJsYW5rIG5vZGUgYXMgc3ViamVjdFxuICAgICAgdGhpcy5fc2F2ZUNvbnRleHQoJ2JsYW5rJywgdGhpcy5fZ3JhcGgsIHRoaXMuX3N1YmplY3QsIHRoaXMuX3ByZWRpY2F0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSB0aGlzLl9ibGFua05vZGUoKSk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZEJsYW5rTm9kZUhlYWQ7XG4gICAgY2FzZSAnKCc6XG4gICAgICAvLyBTdGFydCBhIG5ldyBsaXN0XG4gICAgICB0aGlzLl9zYXZlQ29udGV4dCgnbGlzdCcsIHRoaXMuX2dyYXBoLCB0aGlzLl9zdWJqZWN0LCB0aGlzLl9wcmVkaWNhdGUsIHRoaXMuUkRGX05JTCk7XG4gICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkTGlzdEl0ZW07XG4gICAgY2FzZSAneyc6XG4gICAgICAvLyBTdGFydCBhIG5ldyBmb3JtdWxhXG4gICAgICBpZiAoIXRoaXMuX24zTW9kZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdVbmV4cGVjdGVkIGdyYXBoJywgdG9rZW4pO1xuICAgICAgdGhpcy5fc2F2ZUNvbnRleHQoJ2Zvcm11bGEnLCB0aGlzLl9ncmFwaCwgdGhpcy5fc3ViamVjdCwgdGhpcy5fcHJlZGljYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGggPSB0aGlzLl9ibGFua05vZGUoKSk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZFN1YmplY3Q7XG4gICAgY2FzZSAnPDwnOlxuICAgICAgaWYgKCF0aGlzLl9zdXBwb3J0c1JERlN0YXIpXG4gICAgICAgIHJldHVybiB0aGlzLl9lcnJvcignVW5leHBlY3RlZCBSREYqIHN5bnRheCcsIHRva2VuKTtcbiAgICAgIHRoaXMuX3NhdmVDb250ZXh0KCc8PCcsIHRoaXMuX2dyYXBoLCB0aGlzLl9zdWJqZWN0LCB0aGlzLl9wcmVkaWNhdGUsIG51bGwpO1xuICAgICAgdGhpcy5fZ3JhcGggPSBudWxsO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlYWRTdWJqZWN0O1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBSZWFkIHRoZSBvYmplY3QgZW50aXR5XG4gICAgICBpZiAoKHRoaXMuX29iamVjdCA9IHRoaXMuX3JlYWRFbnRpdHkodG9rZW4pKSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm47XG4gICAgICAvLyBJbiBOMyBtb2RlLCB0aGUgb2JqZWN0IG1pZ2h0IGJlIGEgcGF0aFxuICAgICAgaWYgKHRoaXMuX24zTW9kZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldFBhdGhSZWFkZXIodGhpcy5fZ2V0Q29udGV4dEVuZFJlYWRlcigpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2dldENvbnRleHRFbmRSZWFkZXIoKTtcbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRQcmVkaWNhdGVPck5hbWVkR3JhcGhgIHJlYWRzIGEgcXVhZCdzIHByZWRpY2F0ZSwgb3IgYSBuYW1lZCBncmFwaFxuICBfcmVhZFByZWRpY2F0ZU9yTmFtZWRHcmFwaCh0b2tlbikge1xuICAgIHJldHVybiB0b2tlbi50eXBlID09PSAneycgPyB0aGlzLl9yZWFkR3JhcGgodG9rZW4pIDogdGhpcy5fcmVhZFByZWRpY2F0ZSh0b2tlbik7XG4gIH1cblxuICAvLyAjIyMgYF9yZWFkR3JhcGhgIHJlYWRzIGEgZ3JhcGhcbiAgX3JlYWRHcmFwaCh0b2tlbikge1xuICAgIGlmICh0b2tlbi50eXBlICE9PSAneycpXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoYEV4cGVjdGVkIGdyYXBoIGJ1dCBnb3QgJHt0b2tlbi50eXBlfWAsIHRva2VuKTtcbiAgICAvLyBUaGUgXCJzdWJqZWN0XCIgd2UgcmVhZCBpcyBhY3R1YWxseSB0aGUgR1JBUEgncyBsYWJlbFxuICAgIHRoaXMuX2dyYXBoID0gdGhpcy5fc3ViamVjdCwgdGhpcy5fc3ViamVjdCA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRTdWJqZWN0O1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZEJsYW5rTm9kZUhlYWRgIHJlYWRzIHRoZSBoZWFkIG9mIGEgYmxhbmsgbm9kZVxuICBfcmVhZEJsYW5rTm9kZUhlYWQodG9rZW4pIHtcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJ10nKSB7XG4gICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkQmxhbmtOb2RlVGFpbCh0b2tlbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fcHJlZGljYXRlID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkUHJlZGljYXRlKHRva2VuKTtcbiAgICB9XG4gIH1cblxuICAvLyAjIyMgYF9yZWFkQmxhbmtOb2RlVGFpbGAgcmVhZHMgdGhlIGVuZCBvZiBhIGJsYW5rIG5vZGVcbiAgX3JlYWRCbGFua05vZGVUYWlsKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgIT09ICddJylcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkQmxhbmtOb2RlUHVuY3R1YXRpb24odG9rZW4pO1xuXG4gICAgLy8gU3RvcmUgYmxhbmsgbm9kZSBxdWFkXG4gICAgaWYgKHRoaXMuX3N1YmplY3QgIT09IG51bGwpXG4gICAgICB0aGlzLl9lbWl0KHRoaXMuX3N1YmplY3QsIHRoaXMuX3ByZWRpY2F0ZSwgdGhpcy5fb2JqZWN0LCB0aGlzLl9ncmFwaCk7XG5cbiAgICAvLyBSZXN0b3JlIHRoZSBwYXJlbnQgY29udGV4dCBjb250YWluaW5nIHRoaXMgYmxhbmsgbm9kZVxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5fcHJlZGljYXRlID09PSBudWxsO1xuICAgIHRoaXMuX3Jlc3RvcmVDb250ZXh0KCk7XG4gICAgLy8gSWYgdGhlIGJsYW5rIG5vZGUgd2FzIHRoZSBzdWJqZWN0LCBjb250aW51ZSByZWFkaW5nIHRoZSBwcmVkaWNhdGVcbiAgICBpZiAodGhpcy5fb2JqZWN0ID09PSBudWxsKVxuICAgICAgLy8gSWYgdGhlIGJsYW5rIG5vZGUgd2FzIGVtcHR5LCBpdCBjb3VsZCBiZSBhIG5hbWVkIGdyYXBoIGxhYmVsXG4gICAgICByZXR1cm4gZW1wdHkgPyB0aGlzLl9yZWFkUHJlZGljYXRlT3JOYW1lZEdyYXBoIDogdGhpcy5fcmVhZFByZWRpY2F0ZUFmdGVyQmxhbms7XG4gICAgLy8gSWYgdGhlIGJsYW5rIG5vZGUgd2FzIHRoZSBvYmplY3QsIHJlc3RvcmUgcHJldmlvdXMgY29udGV4dCBhbmQgcmVhZCBwdW5jdHVhdGlvblxuICAgIGVsc2VcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDb250ZXh0RW5kUmVhZGVyKCk7XG4gIH1cblxuICAvLyAjIyMgYF9yZWFkUHJlZGljYXRlQWZ0ZXJCbGFua2AgcmVhZHMgYSBwcmVkaWNhdGUgYWZ0ZXIgYW4gYW5vbnltb3VzIGJsYW5rIG5vZGVcbiAgX3JlYWRQcmVkaWNhdGVBZnRlckJsYW5rKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgY2FzZSAnLic6XG4gICAgY2FzZSAnfSc6XG4gICAgICAvLyBObyBwcmVkaWNhdGUgaXMgY29taW5nIGlmIHRoZSB0cmlwbGUgaXMgdGVybWluYXRlZCBoZXJlXG4gICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkUHVuY3R1YXRpb24odG9rZW4pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZFByZWRpY2F0ZSh0b2tlbik7XG4gICAgfVxuICB9XG5cbiAgLy8gIyMjIGBfcmVhZExpc3RJdGVtYCByZWFkcyBpdGVtcyBmcm9tIGEgbGlzdFxuICBfcmVhZExpc3RJdGVtKHRva2VuKSB7XG4gICAgbGV0IGl0ZW0gPSBudWxsLCAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgaXRlbSBvZiB0aGUgbGlzdFxuICAgICAgICBsaXN0ID0gbnVsbCwgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGxpc3QgaXRzZWxmXG4gICAgICAgIG5leHQgPSB0aGlzLl9yZWFkTGlzdEl0ZW07ICAgICAgICAvLyBUaGUgbmV4dCBmdW5jdGlvbiB0byBleGVjdXRlXG4gICAgY29uc3QgcHJldmlvdXNMaXN0ID0gdGhpcy5fc3ViamVjdCwgICAvLyBUaGUgcHJldmlvdXMgbGlzdCB0aGF0IGNvbnRhaW5zIHRoaXMgbGlzdFxuICAgICAgICBzdGFjayA9IHRoaXMuX2NvbnRleHRTdGFjaywgICAgICAgLy8gVGhlIHN0YWNrIG9mIHBhcmVudCBjb250ZXh0c1xuICAgICAgICBwYXJlbnQgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTsgLy8gVGhlIHBhcmVudCBjb250YWluaW5nIHRoZSBjdXJyZW50IGxpc3RcblxuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgIGNhc2UgJ1snOlxuICAgICAgLy8gU3RhY2sgdGhlIGN1cnJlbnQgbGlzdCBxdWFkIGFuZCBzdGFydCBhIG5ldyBxdWFkIHdpdGggYSBibGFuayBub2RlIGFzIHN1YmplY3RcbiAgICAgIHRoaXMuX3NhdmVDb250ZXh0KCdibGFuaycsIHRoaXMuX2dyYXBoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IHRoaXMuX2JsYW5rTm9kZSgpLCB0aGlzLlJERl9GSVJTVCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSBpdGVtID0gdGhpcy5fYmxhbmtOb2RlKCkpO1xuICAgICAgbmV4dCA9IHRoaXMuX3JlYWRCbGFua05vZGVIZWFkO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnKCc6XG4gICAgICAvLyBTdGFjayB0aGUgY3VycmVudCBsaXN0IHF1YWQgYW5kIHN0YXJ0IGEgbmV3IGxpc3RcbiAgICAgIHRoaXMuX3NhdmVDb250ZXh0KCdsaXN0JywgdGhpcy5fZ3JhcGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gdGhpcy5fYmxhbmtOb2RlKCksIHRoaXMuUkRGX0ZJUlNULCB0aGlzLlJERl9OSUwpO1xuICAgICAgdGhpcy5fc3ViamVjdCA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcpJzpcbiAgICAgIC8vIENsb3NpbmcgdGhlIGxpc3Q7IHJlc3RvcmUgdGhlIHBhcmVudCBjb250ZXh0XG4gICAgICB0aGlzLl9yZXN0b3JlQ29udGV4dCgpO1xuICAgICAgLy8gSWYgdGhpcyBsaXN0IGlzIGNvbnRhaW5lZCB3aXRoaW4gYSBwYXJlbnQgbGlzdCwgcmV0dXJuIHRoZSBtZW1iZXJzaGlwIHF1YWQgaGVyZS5cbiAgICAgIC8vIFRoaXMgd2lsbCBiZSBgPHBhcmVudCBsaXN0IGVsZW1lbnQ+IHJkZjpmaXJzdCA8dGhpcyBsaXN0Pi5gLlxuICAgICAgaWYgKHN0YWNrLmxlbmd0aCAhPT0gMCAmJiBzdGFja1tzdGFjay5sZW5ndGggLSAxXS50eXBlID09PSAnbGlzdCcpXG4gICAgICAgIHRoaXMuX2VtaXQodGhpcy5fc3ViamVjdCwgdGhpcy5fcHJlZGljYXRlLCB0aGlzLl9vYmplY3QsIHRoaXMuX2dyYXBoKTtcbiAgICAgIC8vIFdhcyB0aGlzIGxpc3QgdGhlIHBhcmVudCdzIHN1YmplY3Q/XG4gICAgICBpZiAodGhpcy5fcHJlZGljYXRlID09PSBudWxsKSB7XG4gICAgICAgIC8vIFRoZSBuZXh0IHRva2VuIGlzIHRoZSBwcmVkaWNhdGVcbiAgICAgICAgbmV4dCA9IHRoaXMuX3JlYWRQcmVkaWNhdGU7XG4gICAgICAgIC8vIE5vIGxpc3QgdGFpbCBpZiB0aGlzIHdhcyBhbiBlbXB0eSBsaXN0XG4gICAgICAgIGlmICh0aGlzLl9zdWJqZWN0ID09PSB0aGlzLlJERl9OSUwpXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICB9XG4gICAgICAvLyBUaGUgbGlzdCB3YXMgaW4gdGhlIHBhcmVudCBjb250ZXh0J3Mgb2JqZWN0XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV4dCA9IHRoaXMuX2dldENvbnRleHRFbmRSZWFkZXIoKTtcbiAgICAgICAgLy8gTm8gbGlzdCB0YWlsIGlmIHRoaXMgd2FzIGFuIGVtcHR5IGxpc3RcbiAgICAgICAgaWYgKHRoaXMuX29iamVjdCA9PT0gdGhpcy5SREZfTklMKVxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgfVxuICAgICAgLy8gQ2xvc2UgdGhlIGxpc3QgYnkgbWFraW5nIHRoZSBoZWFkIG5pbFxuICAgICAgbGlzdCA9IHRoaXMuUkRGX05JTDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2xpdGVyYWwnOlxuICAgICAgLy8gUmVndWxhciBsaXRlcmFsLCBjYW4gc3RpbGwgZ2V0IGEgZGF0YXR5cGUgb3IgbGFuZ3VhZ2VcbiAgICAgIGlmICh0b2tlbi5wcmVmaXgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuX2xpdGVyYWxWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICBuZXh0ID0gdGhpcy5fcmVhZExpc3RJdGVtRGF0YVR5cGVPckxhbmc7XG4gICAgICB9XG4gICAgICAvLyBQcmUtZGF0YXR5cGVkIHN0cmluZyBsaXRlcmFsIChwcmVmaXggc3RvcmVzIHRoZSBkYXRhdHlwZSlcbiAgICAgIGVsc2Uge1xuICAgICAgICBpdGVtID0gdGhpcy5fbGl0ZXJhbCh0b2tlbi52YWx1ZSwgdGhpcy5fbmFtZWROb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICBuZXh0ID0gdGhpcy5fZ2V0Q29udGV4dEVuZFJlYWRlcigpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAneyc6XG4gICAgICAvLyBTdGFydCBhIG5ldyBmb3JtdWxhXG4gICAgICBpZiAoIXRoaXMuX24zTW9kZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdVbmV4cGVjdGVkIGdyYXBoJywgdG9rZW4pO1xuICAgICAgdGhpcy5fc2F2ZUNvbnRleHQoJ2Zvcm11bGEnLCB0aGlzLl9ncmFwaCwgdGhpcy5fc3ViamVjdCwgdGhpcy5fcHJlZGljYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JhcGggPSB0aGlzLl9ibGFua05vZGUoKSk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZFN1YmplY3Q7XG4gICAgZGVmYXVsdDpcbiAgICAgIGlmICgoaXRlbSA9IHRoaXMuX3JlYWRFbnRpdHkodG9rZW4pKSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgIC8vIENyZWF0ZSBhIG5ldyBibGFuayBub2RlIGlmIG5vIGl0ZW0gaGVhZCB3YXMgYXNzaWduZWQgeWV0XG4gICAgaWYgKGxpc3QgPT09IG51bGwpXG4gICAgICB0aGlzLl9zdWJqZWN0ID0gbGlzdCA9IHRoaXMuX2JsYW5rTm9kZSgpO1xuXG4gICAgLy8gSXMgdGhpcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgbGlzdD9cbiAgICBpZiAocHJldmlvdXNMaXN0ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGxpc3QgaXMgZWl0aGVyIHRoZSBzdWJqZWN0IG9yIHRoZSBvYmplY3Qgb2YgaXRzIHBhcmVudFxuICAgICAgaWYgKHBhcmVudC5wcmVkaWNhdGUgPT09IG51bGwpXG4gICAgICAgIHBhcmVudC5zdWJqZWN0ID0gbGlzdDtcbiAgICAgIGVsc2VcbiAgICAgICAgcGFyZW50Lm9iamVjdCA9IGxpc3Q7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gQ29udGludWUgdGhlIHByZXZpb3VzIGxpc3Qgd2l0aCB0aGUgY3VycmVudCBsaXN0XG4gICAgICB0aGlzLl9lbWl0KHByZXZpb3VzTGlzdCwgdGhpcy5SREZfUkVTVCwgbGlzdCwgdGhpcy5fZ3JhcGgpO1xuICAgIH1cbiAgICAvLyBJZiBhbiBpdGVtIHdhcyByZWFkLCBhZGQgaXQgdG8gdGhlIGxpc3RcbiAgICBpZiAoaXRlbSAhPT0gbnVsbCkge1xuICAgICAgLy8gSW4gTjMgbW9kZSwgdGhlIGl0ZW0gbWlnaHQgYmUgYSBwYXRoXG4gICAgICBpZiAodGhpcy5fbjNNb2RlICYmICh0b2tlbi50eXBlID09PSAnSVJJJyB8fCB0b2tlbi50eXBlID09PSAncHJlZml4ZWQnKSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgY29udGV4dCB0byBhZGQgdGhlIGl0ZW0ncyBwYXRoXG4gICAgICAgIHRoaXMuX3NhdmVDb250ZXh0KCdpdGVtJywgdGhpcy5fZ3JhcGgsIGxpc3QsIHRoaXMuUkRGX0ZJUlNULCBpdGVtKTtcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IGl0ZW0sIHRoaXMuX3ByZWRpY2F0ZSA9IG51bGw7XG4gICAgICAgIC8vIF9yZWFkUGF0aCB3aWxsIHJlc3RvcmUgdGhlIGNvbnRleHQgYW5kIG91dHB1dCB0aGUgaXRlbVxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0UGF0aFJlYWRlcih0aGlzLl9yZWFkTGlzdEl0ZW0pO1xuICAgICAgfVxuICAgICAgLy8gT3V0cHV0IHRoZSBpdGVtXG4gICAgICB0aGlzLl9lbWl0KGxpc3QsIHRoaXMuUkRGX0ZJUlNULCBpdGVtLCB0aGlzLl9ncmFwaCk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZERhdGFUeXBlT3JMYW5nYCByZWFkcyBhbiBfb3B0aW9uYWxfIGRhdGF0eXBlIG9yIGxhbmd1YWdlXG4gIF9yZWFkRGF0YVR5cGVPckxhbmcodG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxldGVPYmplY3RMaXRlcmFsKHRva2VuLCBmYWxzZSk7XG4gIH1cblxuXG4gIC8vICMjIyBgX3JlYWRMaXN0SXRlbURhdGFUeXBlT3JMYW5nYCByZWFkcyBhbiBfb3B0aW9uYWxfIGRhdGF0eXBlIG9yIGxhbmd1YWdlIGluIGEgbGlzdFxuICBfcmVhZExpc3RJdGVtRGF0YVR5cGVPckxhbmcodG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGxldGVPYmplY3RMaXRlcmFsKHRva2VuLCB0cnVlKTtcbiAgfVxuXG4gIC8vICMjIyBgX2NvbXBsZXRlTGl0ZXJhbGAgY29tcGxldGVzIGEgbGl0ZXJhbCB3aXRoIGFuIG9wdGlvbmFsIGRhdGF0eXBlIG9yIGxhbmd1YWdlXG4gIF9jb21wbGV0ZUxpdGVyYWwodG9rZW4pIHtcbiAgICAvLyBDcmVhdGUgYSBzaW1wbGUgc3RyaW5nIGxpdGVyYWwgYnkgZGVmYXVsdFxuICAgIGxldCBsaXRlcmFsID0gdGhpcy5fbGl0ZXJhbCh0aGlzLl9saXRlcmFsVmFsdWUpO1xuXG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgLy8gQ3JlYXRlIGEgZGF0YXR5cGVkIGxpdGVyYWxcbiAgICBjYXNlICd0eXBlJzpcbiAgICBjYXNlICd0eXBlSVJJJzpcbiAgICAgIGNvbnN0IGRhdGF0eXBlID0gdGhpcy5fcmVhZEVudGl0eSh0b2tlbik7XG4gICAgICBpZiAoZGF0YXR5cGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBObyBkYXRhdHlwZSBtZWFucyBhbiBlcnJvciBvY2N1cnJlZFxuICAgICAgbGl0ZXJhbCA9IHRoaXMuX2xpdGVyYWwodGhpcy5fbGl0ZXJhbFZhbHVlLCBkYXRhdHlwZSk7XG4gICAgICB0b2tlbiA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICAvLyBDcmVhdGUgYSBsYW5ndWFnZS10YWdnZWQgc3RyaW5nXG4gICAgY2FzZSAnbGFuZ2NvZGUnOlxuICAgICAgbGl0ZXJhbCA9IHRoaXMuX2xpdGVyYWwodGhpcy5fbGl0ZXJhbFZhbHVlLCB0b2tlbi52YWx1ZSk7XG4gICAgICB0b2tlbiA9IG51bGw7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b2tlbiwgbGl0ZXJhbCB9O1xuICB9XG5cbiAgLy8gQ29tcGxldGVzIGEgbGl0ZXJhbCBpbiBzdWJqZWN0IHBvc2l0aW9uXG4gIF9jb21wbGV0ZVN1YmplY3RMaXRlcmFsKHRva2VuKSB7XG4gICAgdGhpcy5fc3ViamVjdCA9IHRoaXMuX2NvbXBsZXRlTGl0ZXJhbCh0b2tlbikubGl0ZXJhbDtcbiAgICByZXR1cm4gdGhpcy5fcmVhZFByZWRpY2F0ZU9yTmFtZWRHcmFwaDtcbiAgfVxuXG4gIC8vIENvbXBsZXRlcyBhIGxpdGVyYWwgaW4gb2JqZWN0IHBvc2l0aW9uXG4gIF9jb21wbGV0ZU9iamVjdExpdGVyYWwodG9rZW4sIGxpc3RJdGVtKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gdGhpcy5fY29tcGxldGVMaXRlcmFsKHRva2VuKTtcbiAgICBpZiAoIWNvbXBsZXRlZClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLl9vYmplY3QgPSBjb21wbGV0ZWQubGl0ZXJhbDtcblxuICAgIC8vIElmIHRoaXMgbGl0ZXJhbCB3YXMgcGFydCBvZiBhIGxpc3QsIHdyaXRlIHRoZSBpdGVtXG4gICAgLy8gKHdlIGNvdWxkIGFsc28gY2hlY2sgdGhlIGNvbnRleHQgc3RhY2ssIGJ1dCBwYXNzaW5nIGluIGEgZmxhZyBpcyBmYXN0ZXIpXG4gICAgaWYgKGxpc3RJdGVtKVxuICAgICAgdGhpcy5fZW1pdCh0aGlzLl9zdWJqZWN0LCB0aGlzLlJERl9GSVJTVCwgdGhpcy5fb2JqZWN0LCB0aGlzLl9ncmFwaCk7XG4gICAgLy8gSWYgdGhlIHRva2VuIHdhcyBjb25zdW1lZCwgY29udGludWUgd2l0aCB0aGUgcmVzdCBvZiB0aGUgaW5wdXRcbiAgICBpZiAoY29tcGxldGVkLnRva2VuID09PSBudWxsKVxuICAgICAgcmV0dXJuIHRoaXMuX2dldENvbnRleHRFbmRSZWFkZXIoKTtcbiAgICAvLyBPdGhlcndpc2UsIGNvbnN1bWUgdGhlIHRva2VuIG5vd1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fcmVhZENhbGxiYWNrID0gdGhpcy5fZ2V0Q29udGV4dEVuZFJlYWRlcigpO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlYWRDYWxsYmFjayhjb21wbGV0ZWQudG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRGb3JtdWxhVGFpbGAgcmVhZHMgdGhlIGVuZCBvZiBhIGZvcm11bGFcbiAgX3JlYWRGb3JtdWxhVGFpbCh0b2tlbikge1xuICAgIGlmICh0b2tlbi50eXBlICE9PSAnfScpXG4gICAgICByZXR1cm4gdGhpcy5fcmVhZFB1bmN0dWF0aW9uKHRva2VuKTtcblxuICAgIC8vIFN0b3JlIHRoZSBsYXN0IHF1YWQgb2YgdGhlIGZvcm11bGFcbiAgICBpZiAodGhpcy5fc3ViamVjdCAhPT0gbnVsbClcbiAgICAgIHRoaXMuX2VtaXQodGhpcy5fc3ViamVjdCwgdGhpcy5fcHJlZGljYXRlLCB0aGlzLl9vYmplY3QsIHRoaXMuX2dyYXBoKTtcblxuICAgIC8vIFJlc3RvcmUgdGhlIHBhcmVudCBjb250ZXh0IGNvbnRhaW5pbmcgdGhpcyBmb3JtdWxhXG4gICAgdGhpcy5fcmVzdG9yZUNvbnRleHQoKTtcbiAgICAvLyBJZiB0aGUgZm9ybXVsYSB3YXMgdGhlIHN1YmplY3QsIGNvbnRpbnVlIHJlYWRpbmcgdGhlIHByZWRpY2F0ZS5cbiAgICAvLyBJZiB0aGUgZm9ybXVsYSB3YXMgdGhlIG9iamVjdCwgcmVhZCBwdW5jdHVhdGlvbi5cbiAgICByZXR1cm4gdGhpcy5fb2JqZWN0ID09PSBudWxsID8gdGhpcy5fcmVhZFByZWRpY2F0ZSA6IHRoaXMuX2dldENvbnRleHRFbmRSZWFkZXIoKTtcbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRQdW5jdHVhdGlvbmAgcmVhZHMgcHVuY3R1YXRpb24gYmV0d2VlbiBxdWFkcyBvciBxdWFkIHBhcnRzXG4gIF9yZWFkUHVuY3R1YXRpb24odG9rZW4pIHtcbiAgICBsZXQgbmV4dCwgZ3JhcGggPSB0aGlzLl9ncmFwaDtcbiAgICBjb25zdCBzdWJqZWN0ID0gdGhpcy5fc3ViamVjdCwgaW52ZXJzZVByZWRpY2F0ZSA9IHRoaXMuX2ludmVyc2VQcmVkaWNhdGU7XG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgLy8gQSBjbG9zaW5nIGJyYWNlIGVuZHMgYSBncmFwaFxuICAgIGNhc2UgJ30nOlxuICAgICAgaWYgKHRoaXMuX2dyYXBoID09PSBudWxsKVxuICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3IoJ1VuZXhwZWN0ZWQgZ3JhcGggY2xvc2luZycsIHRva2VuKTtcbiAgICAgIGlmICh0aGlzLl9uM01vZGUpXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkRm9ybXVsYVRhaWwodG9rZW4pO1xuICAgICAgdGhpcy5fZ3JhcGggPSBudWxsO1xuICAgIC8vIEEgZG90IGp1c3QgZW5kcyB0aGUgc3RhdGVtZW50LCB3aXRob3V0IHNoYXJpbmcgYW55dGhpbmcgd2l0aCB0aGUgbmV4dFxuICAgIGNhc2UgJy4nOlxuICAgICAgdGhpcy5fc3ViamVjdCA9IG51bGw7XG4gICAgICBuZXh0ID0gdGhpcy5fY29udGV4dFN0YWNrLmxlbmd0aCA/IHRoaXMuX3JlYWRTdWJqZWN0IDogdGhpcy5fcmVhZEluVG9wQ29udGV4dDtcbiAgICAgIGlmIChpbnZlcnNlUHJlZGljYXRlKSB0aGlzLl9pbnZlcnNlUHJlZGljYXRlID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICAvLyBTZW1pY29sb24gbWVhbnMgdGhlIHN1YmplY3QgaXMgc2hhcmVkOyBwcmVkaWNhdGUgYW5kIG9iamVjdCBhcmUgZGlmZmVyZW50XG4gICAgY2FzZSAnOyc6XG4gICAgICBuZXh0ID0gdGhpcy5fcmVhZFByZWRpY2F0ZTtcbiAgICAgIGJyZWFrO1xuICAgIC8vIENvbW1hIG1lYW5zIGJvdGggdGhlIHN1YmplY3QgYW5kIHByZWRpY2F0ZSBhcmUgc2hhcmVkOyB0aGUgb2JqZWN0IGlzIGRpZmZlcmVudFxuICAgIGNhc2UgJywnOlxuICAgICAgbmV4dCA9IHRoaXMuX3JlYWRPYmplY3Q7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gQW4gZW50aXR5IG1lYW5zIHRoaXMgaXMgYSBxdWFkIChvbmx5IGFsbG93ZWQgaWYgbm90IGFscmVhZHkgaW5zaWRlIGEgZ3JhcGgpXG4gICAgICBpZiAodGhpcy5fc3VwcG9ydHNRdWFkcyAmJiB0aGlzLl9ncmFwaCA9PT0gbnVsbCAmJiAoZ3JhcGggPSB0aGlzLl9yZWFkRW50aXR5KHRva2VuKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuZXh0ID0gdGhpcy5fcmVhZFF1YWRQdW5jdHVhdGlvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoYEV4cGVjdGVkIHB1bmN0dWF0aW9uIHRvIGZvbGxvdyBcIiR7dGhpcy5fb2JqZWN0LmlkfVwiYCwgdG9rZW4pO1xuICAgIH1cbiAgICAvLyBBIHF1YWQgaGFzIGJlZW4gY29tcGxldGVkIG5vdywgc28gcmV0dXJuIGl0XG4gICAgaWYgKHN1YmplY3QgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByZWRpY2F0ZSA9IHRoaXMuX3ByZWRpY2F0ZSwgb2JqZWN0ID0gdGhpcy5fb2JqZWN0O1xuICAgICAgaWYgKCFpbnZlcnNlUHJlZGljYXRlKVxuICAgICAgICB0aGlzLl9lbWl0KHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCAgZ3JhcGgpO1xuICAgICAgZWxzZVxuICAgICAgICB0aGlzLl9lbWl0KG9iamVjdCwgIHByZWRpY2F0ZSwgc3ViamVjdCwgZ3JhcGgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dDtcbiAgfVxuXG4gICAgLy8gIyMjIGBfcmVhZEJsYW5rTm9kZVB1bmN0dWF0aW9uYCByZWFkcyBwdW5jdHVhdGlvbiBpbiBhIGJsYW5rIG5vZGVcbiAgX3JlYWRCbGFua05vZGVQdW5jdHVhdGlvbih0b2tlbikge1xuICAgIGxldCBuZXh0O1xuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgIC8vIFNlbWljb2xvbiBtZWFucyB0aGUgc3ViamVjdCBpcyBzaGFyZWQ7IHByZWRpY2F0ZSBhbmQgb2JqZWN0IGFyZSBkaWZmZXJlbnRcbiAgICBjYXNlICc7JzpcbiAgICAgIG5leHQgPSB0aGlzLl9yZWFkUHJlZGljYXRlO1xuICAgICAgYnJlYWs7XG4gICAgLy8gQ29tbWEgbWVhbnMgYm90aCB0aGUgc3ViamVjdCBhbmQgcHJlZGljYXRlIGFyZSBzaGFyZWQ7IHRoZSBvYmplY3QgaXMgZGlmZmVyZW50XG4gICAgY2FzZSAnLCc6XG4gICAgICBuZXh0ID0gdGhpcy5fcmVhZE9iamVjdDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoYEV4cGVjdGVkIHB1bmN0dWF0aW9uIHRvIGZvbGxvdyBcIiR7dGhpcy5fb2JqZWN0LmlkfVwiYCwgdG9rZW4pO1xuICAgIH1cbiAgICAvLyBBIHF1YWQgaGFzIGJlZW4gY29tcGxldGVkIG5vdywgc28gcmV0dXJuIGl0XG4gICAgdGhpcy5fZW1pdCh0aGlzLl9zdWJqZWN0LCB0aGlzLl9wcmVkaWNhdGUsIHRoaXMuX29iamVjdCwgdGhpcy5fZ3JhcGgpO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZFF1YWRQdW5jdHVhdGlvbmAgcmVhZHMgcHVuY3R1YXRpb24gYWZ0ZXIgYSBxdWFkXG4gIF9yZWFkUXVhZFB1bmN0dWF0aW9uKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgIT09ICcuJylcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvcignRXhwZWN0ZWQgZG90IHRvIGZvbGxvdyBxdWFkJywgdG9rZW4pO1xuICAgIHJldHVybiB0aGlzLl9yZWFkSW5Ub3BDb250ZXh0O1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZFByZWZpeGAgcmVhZHMgdGhlIHByZWZpeCBvZiBhIHByZWZpeCBkZWNsYXJhdGlvblxuICBfcmVhZFByZWZpeCh0b2tlbikge1xuICAgIGlmICh0b2tlbi50eXBlICE9PSAncHJlZml4JylcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvcignRXhwZWN0ZWQgcHJlZml4IHRvIGZvbGxvdyBAcHJlZml4JywgdG9rZW4pO1xuICAgIHRoaXMuX3ByZWZpeCA9IHRva2VuLnZhbHVlO1xuICAgIHJldHVybiB0aGlzLl9yZWFkUHJlZml4SVJJO1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZFByZWZpeElSSWAgcmVhZHMgdGhlIElSSSBvZiBhIHByZWZpeCBkZWNsYXJhdGlvblxuICBfcmVhZFByZWZpeElSSSh0b2tlbikge1xuICAgIGlmICh0b2tlbi50eXBlICE9PSAnSVJJJylcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvcihgRXhwZWN0ZWQgSVJJIHRvIGZvbGxvdyBwcmVmaXggXCIke3RoaXMuX3ByZWZpeH06XCJgLCB0b2tlbik7XG4gICAgY29uc3QgcHJlZml4Tm9kZSA9IHRoaXMuX3JlYWRFbnRpdHkodG9rZW4pO1xuICAgIHRoaXMuX3ByZWZpeGVzW3RoaXMuX3ByZWZpeF0gPSBwcmVmaXhOb2RlLnZhbHVlO1xuICAgIHRoaXMuX3ByZWZpeENhbGxiYWNrKHRoaXMuX3ByZWZpeCwgcHJlZml4Tm9kZSk7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWREZWNsYXJhdGlvblB1bmN0dWF0aW9uO1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZEJhc2VJUklgIHJlYWRzIHRoZSBJUkkgb2YgYSBiYXNlIGRlY2xhcmF0aW9uXG4gIF9yZWFkQmFzZUlSSSh0b2tlbikge1xuICAgIGNvbnN0IGlyaSA9IHRva2VuLnR5cGUgPT09ICdJUkknICYmIHRoaXMuX3Jlc29sdmVJUkkodG9rZW4udmFsdWUpO1xuICAgIGlmICghaXJpKVxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdFeHBlY3RlZCB2YWxpZCBJUkkgdG8gZm9sbG93IGJhc2UgZGVjbGFyYXRpb24nLCB0b2tlbik7XG4gICAgdGhpcy5fc2V0QmFzZShpcmkpO1xuICAgIHJldHVybiB0aGlzLl9yZWFkRGVjbGFyYXRpb25QdW5jdHVhdGlvbjtcbiAgfVxuXG4gIC8vICMjIyBgX3JlYWROYW1lZEdyYXBoTGFiZWxgIHJlYWRzIHRoZSBsYWJlbCBvZiBhIG5hbWVkIGdyYXBoXG4gIF9yZWFkTmFtZWRHcmFwaExhYmVsKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgY2FzZSAnSVJJJzpcbiAgICBjYXNlICdibGFuayc6XG4gICAgY2FzZSAncHJlZml4ZWQnOlxuICAgICAgcmV0dXJuIHRoaXMuX3JlYWRTdWJqZWN0KHRva2VuKSwgdGhpcy5fcmVhZEdyYXBoO1xuICAgIGNhc2UgJ1snOlxuICAgICAgcmV0dXJuIHRoaXMuX3JlYWROYW1lZEdyYXBoQmxhbmtMYWJlbDtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdJbnZhbGlkIGdyYXBoIGxhYmVsJywgdG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX3JlYWROYW1lZEdyYXBoTGFiZWxgIHJlYWRzIGEgYmxhbmsgbm9kZSBsYWJlbCBvZiBhIG5hbWVkIGdyYXBoXG4gIF9yZWFkTmFtZWRHcmFwaEJsYW5rTGFiZWwodG9rZW4pIHtcbiAgICBpZiAodG9rZW4udHlwZSAhPT0gJ10nKVxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdJbnZhbGlkIGdyYXBoIGxhYmVsJywgdG9rZW4pO1xuICAgIHRoaXMuX3N1YmplY3QgPSB0aGlzLl9ibGFua05vZGUoKTtcbiAgICByZXR1cm4gdGhpcy5fcmVhZEdyYXBoO1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZERlY2xhcmF0aW9uUHVuY3R1YXRpb25gIHJlYWRzIHRoZSBwdW5jdHVhdGlvbiBvZiBhIGRlY2xhcmF0aW9uXG4gIF9yZWFkRGVjbGFyYXRpb25QdW5jdHVhdGlvbih0b2tlbikge1xuICAgIC8vIFNQQVJRTC1zdHlsZSBkZWNsYXJhdGlvbnMgZG9uJ3QgaGF2ZSBwdW5jdHVhdGlvblxuICAgIGlmICh0aGlzLl9zcGFycWxTdHlsZSkge1xuICAgICAgdGhpcy5fc3BhcnFsU3R5bGUgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkSW5Ub3BDb250ZXh0KHRva2VuKTtcbiAgICB9XG5cbiAgICBpZiAodG9rZW4udHlwZSAhPT0gJy4nKVxuICAgICAgcmV0dXJuIHRoaXMuX2Vycm9yKCdFeHBlY3RlZCBkZWNsYXJhdGlvbiB0byBlbmQgd2l0aCBhIGRvdCcsIHRva2VuKTtcbiAgICByZXR1cm4gdGhpcy5fcmVhZEluVG9wQ29udGV4dDtcbiAgfVxuXG4gIC8vIFJlYWRzIGEgbGlzdCBvZiBxdWFudGlmaWVkIHN5bWJvbHMgZnJvbSBhIEBmb3JTb21lIG9yIEBmb3JBbGwgc3RhdGVtZW50XG4gIF9yZWFkUXVhbnRpZmllckxpc3QodG9rZW4pIHtcbiAgICBsZXQgZW50aXR5O1xuICAgIHN3aXRjaCAodG9rZW4udHlwZSkge1xuICAgIGNhc2UgJ0lSSSc6XG4gICAgY2FzZSAncHJlZml4ZWQnOlxuICAgICAgaWYgKChlbnRpdHkgPSB0aGlzLl9yZWFkRW50aXR5KHRva2VuLCB0cnVlKSkgIT09IHVuZGVmaW5lZClcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0aGlzLl9lcnJvcihgVW5leHBlY3RlZCAke3Rva2VuLnR5cGV9YCwgdG9rZW4pO1xuICAgIH1cbiAgICAvLyBXaXRob3V0IGV4cGxpY2l0IHF1YW50aWZpZXJzLCBtYXAgZW50aXRpZXMgdG8gYSBxdWFudGlmaWVkIGVudGl0eVxuICAgIGlmICghdGhpcy5fZXhwbGljaXRRdWFudGlmaWVycylcbiAgICAgIHRoaXMuX3F1YW50aWZpZWRbZW50aXR5LmlkXSA9IHRoaXMuX3F1YW50aWZpZXIodGhpcy5fYmxhbmtOb2RlKCkudmFsdWUpO1xuICAgIC8vIFdpdGggZXhwbGljaXQgcXVhbnRpZmllcnMsIG91dHB1dCB0aGUgcmVpZmllZCBxdWFudGlmaWVyXG4gICAgZWxzZSB7XG4gICAgICAvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBpdGVtLCBzdGFydCBhIG5ldyBxdWFudGlmaWVyIGxpc3RcbiAgICAgIGlmICh0aGlzLl9zdWJqZWN0ID09PSBudWxsKVxuICAgICAgICB0aGlzLl9lbWl0KHRoaXMuX2dyYXBoIHx8IHRoaXMuREVGQVVMVEdSQVBILCB0aGlzLl9wcmVkaWNhdGUsXG4gICAgICAgICAgICAgICAgICAgdGhpcy5fc3ViamVjdCA9IHRoaXMuX2JsYW5rTm9kZSgpLCB0aGlzLlFVQU5USUZJRVJTX0dSQVBIKTtcbiAgICAgIC8vIE90aGVyd2lzZSwgY29udGludWUgdGhlIHByZXZpb3VzIGxpc3RcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5fZW1pdCh0aGlzLl9zdWJqZWN0LCB0aGlzLlJERl9SRVNULFxuICAgICAgICAgICAgICAgICAgIHRoaXMuX3N1YmplY3QgPSB0aGlzLl9ibGFua05vZGUoKSwgdGhpcy5RVUFOVElGSUVSU19HUkFQSCk7XG4gICAgICAvLyBPdXRwdXQgdGhlIGxpc3QgaXRlbVxuICAgICAgdGhpcy5fZW1pdCh0aGlzLl9zdWJqZWN0LCB0aGlzLlJERl9GSVJTVCwgZW50aXR5LCB0aGlzLlFVQU5USUZJRVJTX0dSQVBIKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRRdWFudGlmaWVyUHVuY3R1YXRpb247XG4gIH1cblxuICAvLyBSZWFkcyBwdW5jdHVhdGlvbiBmcm9tIGEgQGZvclNvbWUgb3IgQGZvckFsbCBzdGF0ZW1lbnRcbiAgX3JlYWRRdWFudGlmaWVyUHVuY3R1YXRpb24odG9rZW4pIHtcbiAgICAvLyBSZWFkIG1vcmUgcXVhbnRpZmllcnNcbiAgICBpZiAodG9rZW4udHlwZSA9PT0gJywnKVxuICAgICAgcmV0dXJuIHRoaXMuX3JlYWRRdWFudGlmaWVyTGlzdDtcbiAgICAvLyBFbmQgb2YgdGhlIHF1YW50aWZpZXIgbGlzdFxuICAgIGVsc2Uge1xuICAgICAgLy8gV2l0aCBleHBsaWNpdCBxdWFudGlmaWVycywgY2xvc2UgdGhlIHF1YW50aWZpZXIgbGlzdFxuICAgICAgaWYgKHRoaXMuX2V4cGxpY2l0UXVhbnRpZmllcnMpIHtcbiAgICAgICAgdGhpcy5fZW1pdCh0aGlzLl9zdWJqZWN0LCB0aGlzLlJERl9SRVNULCB0aGlzLlJERl9OSUwsIHRoaXMuUVVBTlRJRklFUlNfR1JBUEgpO1xuICAgICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIFJlYWQgYSBkb3RcbiAgICAgIHRoaXMuX3JlYWRDYWxsYmFjayA9IHRoaXMuX2dldENvbnRleHRFbmRSZWFkZXIoKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkQ2FsbGJhY2sodG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX2dldFBhdGhSZWFkZXJgIHJlYWRzIGEgcG90ZW50aWFsIHBhdGggYW5kIHRoZW4gcmVzdW1lcyB3aXRoIHRoZSBnaXZlbiBmdW5jdGlvblxuICBfZ2V0UGF0aFJlYWRlcihhZnRlclBhdGgpIHtcbiAgICB0aGlzLl9hZnRlclBhdGggPSBhZnRlclBhdGg7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRQYXRoO1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZFBhdGhgIHJlYWRzIGEgcG90ZW50aWFsIHBhdGhcbiAgX3JlYWRQYXRoKHRva2VuKSB7XG4gICAgc3dpdGNoICh0b2tlbi50eXBlKSB7XG4gICAgLy8gRm9yd2FyZCBwYXRoXG4gICAgY2FzZSAnISc6IHJldHVybiB0aGlzLl9yZWFkRm9yd2FyZFBhdGg7XG4gICAgLy8gQmFja3dhcmQgcGF0aFxuICAgIGNhc2UgJ14nOiByZXR1cm4gdGhpcy5fcmVhZEJhY2t3YXJkUGF0aDtcbiAgICAvLyBOb3QgYSBwYXRoOyByZXN1bWUgcmVhZGluZyB3aGVyZSB3ZSBsZWZ0IG9mZlxuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zdCBzdGFjayA9IHRoaXMuX2NvbnRleHRTdGFjaywgcGFyZW50ID0gc3RhY2subGVuZ3RoICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuICAgICAgLy8gSWYgd2Ugd2VyZSByZWFkaW5nIGEgbGlzdCBpdGVtLCB3ZSBzdGlsbCBuZWVkIHRvIG91dHB1dCBpdFxuICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQudHlwZSA9PT0gJ2l0ZW0nKSB7XG4gICAgICAgIC8vIFRoZSBsaXN0IGl0ZW0gaXMgdGhlIHJlbWFpbmluZyBzdWJlamN0IGFmdGVyIHJlYWRpbmcgdGhlIHBhdGhcbiAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX3N1YmplY3Q7XG4gICAgICAgIC8vIFN3aXRjaCBiYWNrIHRvIHRoZSBjb250ZXh0IG9mIHRoZSBsaXN0XG4gICAgICAgIHRoaXMuX3Jlc3RvcmVDb250ZXh0KCk7XG4gICAgICAgIC8vIE91dHB1dCB0aGUgbGlzdCBpdGVtXG4gICAgICAgIHRoaXMuX2VtaXQodGhpcy5fc3ViamVjdCwgdGhpcy5SREZfRklSU1QsIGl0ZW0sIHRoaXMuX2dyYXBoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLl9hZnRlclBhdGgodG9rZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRGb3J3YXJkUGF0aGAgcmVhZHMgYSAnIScgcGF0aFxuICBfcmVhZEZvcndhcmRQYXRoKHRva2VuKSB7XG4gICAgbGV0IHN1YmplY3QsIHByZWRpY2F0ZTtcbiAgICBjb25zdCBvYmplY3QgPSB0aGlzLl9ibGFua05vZGUoKTtcbiAgICAvLyBUaGUgbmV4dCB0b2tlbiBpcyB0aGUgcHJlZGljYXRlXG4gICAgaWYgKChwcmVkaWNhdGUgPSB0aGlzLl9yZWFkRW50aXR5KHRva2VuKSkgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybjtcbiAgICAvLyBJZiB3ZSB3ZXJlIHJlYWRpbmcgYSBzdWJqZWN0LCByZXBsYWNlIHRoZSBzdWJqZWN0IGJ5IHRoZSBwYXRoJ3Mgb2JqZWN0XG4gICAgaWYgKHRoaXMuX3ByZWRpY2F0ZSA9PT0gbnVsbClcbiAgICAgIHN1YmplY3QgPSB0aGlzLl9zdWJqZWN0LCB0aGlzLl9zdWJqZWN0ID0gb2JqZWN0O1xuICAgIC8vIElmIHdlIHdlcmUgcmVhZGluZyBhbiBvYmplY3QsIHJlcGxhY2UgdGhlIHN1YmplY3QgYnkgdGhlIHBhdGgncyBvYmplY3RcbiAgICBlbHNlXG4gICAgICBzdWJqZWN0ID0gdGhpcy5fb2JqZWN0LCAgdGhpcy5fb2JqZWN0ICA9IG9iamVjdDtcbiAgICAvLyBFbWl0IHRoZSBwYXRoJ3MgY3VycmVudCBxdWFkIGFuZCByZWFkIGl0cyBuZXh0IHNlY3Rpb25cbiAgICB0aGlzLl9lbWl0KHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCB0aGlzLl9ncmFwaCk7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRQYXRoO1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZEJhY2t3YXJkUGF0aGAgcmVhZHMgYSAnXicgcGF0aFxuICBfcmVhZEJhY2t3YXJkUGF0aCh0b2tlbikge1xuICAgIGNvbnN0IHN1YmplY3QgPSB0aGlzLl9ibGFua05vZGUoKTtcbiAgICBsZXQgcHJlZGljYXRlLCBvYmplY3Q7XG4gICAgLy8gVGhlIG5leHQgdG9rZW4gaXMgdGhlIHByZWRpY2F0ZVxuICAgIGlmICgocHJlZGljYXRlID0gdGhpcy5fcmVhZEVudGl0eSh0b2tlbikpID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm47XG4gICAgLy8gSWYgd2Ugd2VyZSByZWFkaW5nIGEgc3ViamVjdCwgcmVwbGFjZSB0aGUgc3ViamVjdCBieSB0aGUgcGF0aCdzIHN1YmplY3RcbiAgICBpZiAodGhpcy5fcHJlZGljYXRlID09PSBudWxsKVxuICAgICAgb2JqZWN0ID0gdGhpcy5fc3ViamVjdCwgdGhpcy5fc3ViamVjdCA9IHN1YmplY3Q7XG4gICAgLy8gSWYgd2Ugd2VyZSByZWFkaW5nIGFuIG9iamVjdCwgcmVwbGFjZSB0aGUgc3ViamVjdCBieSB0aGUgcGF0aCdzIHN1YmplY3RcbiAgICBlbHNlXG4gICAgICBvYmplY3QgPSB0aGlzLl9vYmplY3QsICB0aGlzLl9vYmplY3QgID0gc3ViamVjdDtcbiAgICAvLyBFbWl0IHRoZSBwYXRoJ3MgY3VycmVudCBxdWFkIGFuZCByZWFkIGl0cyBuZXh0IHNlY3Rpb25cbiAgICB0aGlzLl9lbWl0KHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCB0aGlzLl9ncmFwaCk7XG4gICAgcmV0dXJuIHRoaXMuX3JlYWRQYXRoO1xuICB9XG5cbiAgLy8gIyMjIGBfcmVhZFJERlN0YXJUYWlsT3JHcmFwaGAgcmVhZHMgdGhlIGdyYXBoIG9mIGEgbmVzdGVkIFJERiogcXVhZCBvciB0aGUgZW5kIG9mIGEgbmVzdGVkIFJERiogdHJpcGxlXG4gIF9yZWFkUkRGU3RhclRhaWxPckdyYXBoKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgIT09ICc+PicpIHtcbiAgICAgIC8vIEFuIGVudGl0eSBtZWFucyB0aGlzIGlzIGEgcXVhZCAob25seSBhbGxvd2VkIGlmIG5vdCBhbHJlYWR5IGluc2lkZSBhIGdyYXBoKVxuICAgICAgaWYgKHRoaXMuX3N1cHBvcnRzUXVhZHMgJiYgdGhpcy5fZ3JhcGggPT09IG51bGwgJiYgKHRoaXMuX2dyYXBoID0gdGhpcy5fcmVhZEVudGl0eSh0b2tlbikpICE9PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkUkRGU3RhclRhaWw7XG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoYEV4cGVjdGVkID4+IHRvIGZvbGxvdyBcIiR7dGhpcy5fb2JqZWN0LmlkfVwiYCwgdG9rZW4pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fcmVhZFJERlN0YXJUYWlsKHRva2VuKTtcbiAgfVxuXG4gIC8vICMjIyBgX3JlYWRSREZTdGFyVGFpbGAgcmVhZHMgdGhlIGVuZCBvZiBhIG5lc3RlZCBSREYqIHRyaXBsZVxuICBfcmVhZFJERlN0YXJUYWlsKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgIT09ICc+PicpXG4gICAgICByZXR1cm4gdGhpcy5fZXJyb3IoYEV4cGVjdGVkID4+IGJ1dCBnb3QgJHt0b2tlbi50eXBlfWAsIHRva2VuKTtcbiAgICAvLyBSZWFkIHRoZSBxdWFkIGFuZCByZXN0b3JlIHRoZSBwcmV2aW91cyBjb250ZXh0XG4gICAgY29uc3QgcXVhZCA9IHRoaXMuX3F1YWQodGhpcy5fc3ViamVjdCwgdGhpcy5fcHJlZGljYXRlLCB0aGlzLl9vYmplY3QsXG4gICAgICB0aGlzLl9ncmFwaCB8fCB0aGlzLkRFRkFVTFRHUkFQSCk7XG4gICAgdGhpcy5fcmVzdG9yZUNvbnRleHQoKTtcbiAgICAvLyBJZiB0aGUgdHJpcGxlIHdhcyB0aGUgc3ViamVjdCwgY29udGludWUgYnkgcmVhZGluZyB0aGUgcHJlZGljYXRlLlxuICAgIGlmICh0aGlzLl9zdWJqZWN0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLl9zdWJqZWN0ID0gcXVhZDtcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkUHJlZGljYXRlO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgdHJpcGxlIHdhcyB0aGUgb2JqZWN0LCByZWFkIGNvbnRleHQgZW5kLlxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fb2JqZWN0ID0gcXVhZDtcbiAgICAgIHJldHVybiB0aGlzLl9nZXRDb250ZXh0RW5kUmVhZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gIyMjIGBfZ2V0Q29udGV4dEVuZFJlYWRlcmAgZ2V0cyB0aGUgbmV4dCByZWFkZXIgZnVuY3Rpb24gYXQgdGhlIGVuZCBvZiBhIGNvbnRleHRcbiAgX2dldENvbnRleHRFbmRSZWFkZXIoKSB7XG4gICAgY29uc3QgY29udGV4dFN0YWNrID0gdGhpcy5fY29udGV4dFN0YWNrO1xuICAgIGlmICghY29udGV4dFN0YWNrLmxlbmd0aClcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkUHVuY3R1YXRpb247XG5cbiAgICBzd2l0Y2ggKGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV0udHlwZSkge1xuICAgIGNhc2UgJ2JsYW5rJzpcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkQmxhbmtOb2RlVGFpbDtcbiAgICBjYXNlICdsaXN0JzpcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkTGlzdEl0ZW07XG4gICAgY2FzZSAnZm9ybXVsYSc6XG4gICAgICByZXR1cm4gdGhpcy5fcmVhZEZvcm11bGFUYWlsO1xuICAgIGNhc2UgJzw8JzpcbiAgICAgIHJldHVybiB0aGlzLl9yZWFkUkRGU3RhclRhaWxPckdyYXBoO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX2VtaXRgIHNlbmRzIGEgcXVhZCB0aHJvdWdoIHRoZSBjYWxsYmFja1xuICBfZW1pdChzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgpIHtcbiAgICB0aGlzLl9jYWxsYmFjayhudWxsLCB0aGlzLl9xdWFkKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCB8fCB0aGlzLkRFRkFVTFRHUkFQSCkpO1xuICB9XG5cbiAgLy8gIyMjIGBfZXJyb3JgIGVtaXRzIGFuIGVycm9yIG1lc3NhZ2UgdGhyb3VnaCB0aGUgY2FsbGJhY2tcbiAgX2Vycm9yKG1lc3NhZ2UsIHRva2VuKSB7XG4gICAgY29uc3QgZXJyID0gbmV3IEVycm9yKGAke21lc3NhZ2V9IG9uIGxpbmUgJHt0b2tlbi5saW5lfS5gKTtcbiAgICBlcnIuY29udGV4dCA9IHtcbiAgICAgIHRva2VuOiB0b2tlbixcbiAgICAgIGxpbmU6IHRva2VuLmxpbmUsXG4gICAgICBwcmV2aW91c1Rva2VuOiB0aGlzLl9sZXhlci5wcmV2aW91c1Rva2VuLFxuICAgIH07XG4gICAgdGhpcy5fY2FsbGJhY2soZXJyKTtcbiAgICB0aGlzLl9jYWxsYmFjayA9IG5vb3A7XG4gIH1cblxuICAvLyAjIyMgYF9yZXNvbHZlSVJJYCByZXNvbHZlcyBhbiBJUkkgYWdhaW5zdCB0aGUgYmFzZSBwYXRoXG4gIF9yZXNvbHZlSVJJKGlyaSkge1xuICAgIHJldHVybiAvXlthLXpdW2EtejAtOSsuLV0qOi9pLnRlc3QoaXJpKSA/IGlyaSA6IHRoaXMuX3Jlc29sdmVSZWxhdGl2ZUlSSShpcmkpO1xuICB9XG5cbiAgLy8gIyMjIGBfcmVzb2x2ZVJlbGF0aXZlSVJJYCByZXNvbHZlcyBhbiBJUkkgYWdhaW5zdCB0aGUgYmFzZSBwYXRoLFxuICAvLyBhc3N1bWluZyB0aGF0IGEgYmFzZSBwYXRoIGhhcyBiZWVuIHNldCBhbmQgdGhhdCB0aGUgSVJJIGlzIGluZGVlZCByZWxhdGl2ZVxuICBfcmVzb2x2ZVJlbGF0aXZlSVJJKGlyaSkge1xuICAgIC8vIEFuIGVtcHR5IHJlbGF0aXZlIElSSSBpbmRpY2F0ZXMgdGhlIGJhc2UgSVJJXG4gICAgaWYgKCFpcmkubGVuZ3RoKVxuICAgICAgcmV0dXJuIHRoaXMuX2Jhc2U7XG4gICAgLy8gRGVjaWRlIHJlc29sdmluZyBzdHJhdGVneSBiYXNlZCBpbiB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgc3dpdGNoIChpcmlbMF0pIHtcbiAgICAvLyBSZXNvbHZlIHJlbGF0aXZlIGZyYWdtZW50IElSSXMgYWdhaW5zdCB0aGUgYmFzZSBJUklcbiAgICBjYXNlICcjJzogcmV0dXJuIHRoaXMuX2Jhc2UgKyBpcmk7XG4gICAgLy8gUmVzb2x2ZSByZWxhdGl2ZSBxdWVyeSBzdHJpbmcgSVJJcyBieSByZXBsYWNpbmcgdGhlIHF1ZXJ5IHN0cmluZ1xuICAgIGNhc2UgJz8nOiByZXR1cm4gdGhpcy5fYmFzZS5yZXBsYWNlKC8oPzpcXD8uKik/JC8sIGlyaSk7XG4gICAgLy8gUmVzb2x2ZSByb290LXJlbGF0aXZlIElSSXMgYXQgdGhlIHJvb3Qgb2YgdGhlIGJhc2UgSVJJXG4gICAgY2FzZSAnLyc6XG4gICAgICAvLyBSZXNvbHZlIHNjaGVtZS1yZWxhdGl2ZSBJUklzIHRvIHRoZSBzY2hlbWVcbiAgICAgIHJldHVybiAoaXJpWzFdID09PSAnLycgPyB0aGlzLl9iYXNlU2NoZW1lIDogdGhpcy5fYmFzZVJvb3QpICsgdGhpcy5fcmVtb3ZlRG90U2VnbWVudHMoaXJpKTtcbiAgICAvLyBSZXNvbHZlIGFsbCBvdGhlciBJUklzIGF0IHRoZSBiYXNlIElSSSdzIHBhdGhcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gUmVsYXRpdmUgSVJJcyBjYW5ub3QgY29udGFpbiBhIGNvbG9uIGluIHRoZSBmaXJzdCBwYXRoIHNlZ21lbnRcbiAgICAgIHJldHVybiAoL15bXi86XSo6Ly50ZXN0KGlyaSkpID8gbnVsbCA6IHRoaXMuX3JlbW92ZURvdFNlZ21lbnRzKHRoaXMuX2Jhc2VQYXRoICsgaXJpKTtcbiAgICB9XG4gIH1cblxuICAvLyAjIyMgYF9yZW1vdmVEb3RTZWdtZW50c2AgcmVzb2x2ZXMgJy4vJyBhbmQgJy4uLycgcGF0aCBzZWdtZW50cyBpbiBhbiBJUkkgYXMgcGVyIFJGQzM5ODZcbiAgX3JlbW92ZURvdFNlZ21lbnRzKGlyaSkge1xuICAgIC8vIERvbid0IG1vZGlmeSB0aGUgSVJJIGlmIGl0IGRvZXMgbm90IGNvbnRhaW4gYW55IGRvdCBzZWdtZW50c1xuICAgIGlmICghLyhefFxcLylcXC5cXC4/KCR8Wy8jP10pLy50ZXN0KGlyaSkpXG4gICAgICByZXR1cm4gaXJpO1xuXG4gICAgLy8gU3RhcnQgd2l0aCBhbiBpbWFnaW5hcnkgc2xhc2ggYmVmb3JlIHRoZSBJUkkgaW4gb3JkZXIgdG8gcmVzb2x2ZSB0cmFpbGluZyAnLi8nIGFuZCAnLi4vJ1xuICAgIGNvbnN0IGxlbmd0aCA9IGlyaS5sZW5ndGg7XG4gICAgbGV0IHJlc3VsdCA9ICcnLCBpID0gLTEsIHBhdGhTdGFydCA9IC0xLCBzZWdtZW50U3RhcnQgPSAwLCBuZXh0ID0gJy8nO1xuXG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIHN3aXRjaCAobmV4dCkge1xuICAgICAgLy8gVGhlIHBhdGggc3RhcnRzIHdpdGggdGhlIGZpcnN0IHNsYXNoIGFmdGVyIHRoZSBhdXRob3JpdHlcbiAgICAgIGNhc2UgJzonOlxuICAgICAgICBpZiAocGF0aFN0YXJ0IDwgMCkge1xuICAgICAgICAgIC8vIFNraXAgdHdvIHNsYXNoZXMgYmVmb3JlIHRoZSBhdXRob3JpdHlcbiAgICAgICAgICBpZiAoaXJpWysraV0gPT09ICcvJyAmJiBpcmlbKytpXSA9PT0gJy8nKVxuICAgICAgICAgICAgLy8gU2tpcCB0byBzbGFzaCBhZnRlciB0aGUgYXV0aG9yaXR5XG4gICAgICAgICAgICB3aGlsZSAoKHBhdGhTdGFydCA9IGkgKyAxKSA8IGxlbmd0aCAmJiBpcmlbcGF0aFN0YXJ0XSAhPT0gJy8nKVxuICAgICAgICAgICAgICBpID0gcGF0aFN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gRG9uJ3QgbW9kaWZ5IGEgcXVlcnkgc3RyaW5nIG9yIGZyYWdtZW50XG4gICAgICBjYXNlICc/JzpcbiAgICAgIGNhc2UgJyMnOlxuICAgICAgICBpID0gbGVuZ3RoO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIEhhbmRsZSAnLy4nIG9yICcvLi4nIHBhdGggc2VnbWVudHNcbiAgICAgIGNhc2UgJy8nOlxuICAgICAgICBpZiAoaXJpW2kgKyAxXSA9PT0gJy4nKSB7XG4gICAgICAgICAgbmV4dCA9IGlyaVsrK2kgKyAxXTtcbiAgICAgICAgICBzd2l0Y2ggKG5leHQpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgYSAnLy4nIHNlZ21lbnRcbiAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIHJlc3VsdCArPSBpcmkuc3Vic3RyaW5nKHNlZ21lbnRTdGFydCwgaSAtIDEpO1xuICAgICAgICAgICAgc2VnbWVudFN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAvLyBSZW1vdmUgYSB0cmFpbGluZyAnLy4nIHNlZ21lbnRcbiAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICBjYXNlICc/JzpcbiAgICAgICAgICBjYXNlICcjJzpcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgKyBpcmkuc3Vic3RyaW5nKHNlZ21lbnRTdGFydCwgaSkgKyBpcmkuc3Vic3RyKGkgKyAxKTtcbiAgICAgICAgICAvLyBSZW1vdmUgYSAnLy4uJyBzZWdtZW50XG4gICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICBuZXh0ID0gaXJpWysraSArIDFdO1xuICAgICAgICAgICAgaWYgKG5leHQgPT09IHVuZGVmaW5lZCB8fCBuZXh0ID09PSAnLycgfHwgbmV4dCA9PT0gJz8nIHx8IG5leHQgPT09ICcjJykge1xuICAgICAgICAgICAgICByZXN1bHQgKz0gaXJpLnN1YnN0cmluZyhzZWdtZW50U3RhcnQsIGkgLSAyKTtcbiAgICAgICAgICAgICAgLy8gVHJ5IHRvIHJlbW92ZSB0aGUgcGFyZW50IHBhdGggZnJvbSByZXN1bHRcbiAgICAgICAgICAgICAgaWYgKChzZWdtZW50U3RhcnQgPSByZXN1bHQubGFzdEluZGV4T2YoJy8nKSkgPj0gcGF0aFN0YXJ0KVxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgc2VnbWVudFN0YXJ0KTtcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIGEgdHJhaWxpbmcgJy8uLicgc2VnbWVudFxuICAgICAgICAgICAgICBpZiAobmV4dCAhPT0gJy8nKVxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtyZXN1bHR9LyR7aXJpLnN1YnN0cihpICsgMSl9YDtcbiAgICAgICAgICAgICAgc2VnbWVudFN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBuZXh0ID0gaXJpWysraV07XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQgKyBpcmkuc3Vic3RyaW5nKHNlZ21lbnRTdGFydCk7XG4gIH1cblxuICAvLyAjIyBQdWJsaWMgbWV0aG9kc1xuXG4gIC8vICMjIyBgcGFyc2VgIHBhcnNlcyB0aGUgTjMgaW5wdXQgYW5kIGVtaXRzIGVhY2ggcGFyc2VkIHF1YWQgdGhyb3VnaCB0aGUgY2FsbGJhY2tcbiAgcGFyc2UoaW5wdXQsIHF1YWRDYWxsYmFjaywgcHJlZml4Q2FsbGJhY2spIHtcbiAgICAvLyBUaGUgcmVhZCBjYWxsYmFjayBpcyB0aGUgbmV4dCBmdW5jdGlvbiB0byBiZSBleGVjdXRlZCB3aGVuIGEgdG9rZW4gYXJyaXZlcy5cbiAgICAvLyBXZSBzdGFydCByZWFkaW5nIGluIHRoZSB0b3AgY29udGV4dC5cbiAgICB0aGlzLl9yZWFkQ2FsbGJhY2sgPSB0aGlzLl9yZWFkSW5Ub3BDb250ZXh0O1xuICAgIHRoaXMuX3NwYXJxbFN0eWxlID0gZmFsc2U7XG4gICAgdGhpcy5fcHJlZml4ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuX3ByZWZpeGVzLl8gPSB0aGlzLl9ibGFua05vZGVQcmVmaXggPyB0aGlzLl9ibGFua05vZGVQcmVmaXguc3Vic3RyKDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBiJHtibGFua05vZGVQcmVmaXgrK31fYDtcbiAgICB0aGlzLl9wcmVmaXhDYWxsYmFjayA9IHByZWZpeENhbGxiYWNrIHx8IG5vb3A7XG4gICAgdGhpcy5faW52ZXJzZVByZWRpY2F0ZSA9IGZhbHNlO1xuICAgIHRoaXMuX3F1YW50aWZpZWQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgLy8gUGFyc2Ugc3luY2hyb25vdXNseSBpZiBubyBxdWFkIGNhbGxiYWNrIGlzIGdpdmVuXG4gICAgaWYgKCFxdWFkQ2FsbGJhY2spIHtcbiAgICAgIGNvbnN0IHF1YWRzID0gW107XG4gICAgICBsZXQgZXJyb3I7XG4gICAgICB0aGlzLl9jYWxsYmFjayA9IChlLCB0KSA9PiB7IGUgPyAoZXJyb3IgPSBlKSA6IHQgJiYgcXVhZHMucHVzaCh0KTsgfTtcbiAgICAgIHRoaXMuX2xleGVyLnRva2VuaXplKGlucHV0KS5ldmVyeSh0b2tlbiA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWFkQ2FsbGJhY2sgPSB0aGlzLl9yZWFkQ2FsbGJhY2sodG9rZW4pO1xuICAgICAgfSk7XG4gICAgICBpZiAoZXJyb3IpIHRocm93IGVycm9yO1xuICAgICAgcmV0dXJuIHF1YWRzO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIGFzeW5jaHJvbm91c2x5IG90aGVyd2lzZSwgZXhlY3V0aW5nIHRoZSByZWFkIGNhbGxiYWNrIHdoZW4gYSB0b2tlbiBhcnJpdmVzXG4gICAgdGhpcy5fY2FsbGJhY2sgPSBxdWFkQ2FsbGJhY2s7XG4gICAgdGhpcy5fbGV4ZXIudG9rZW5pemUoaW5wdXQsIChlcnJvciwgdG9rZW4pID0+IHtcbiAgICAgIGlmIChlcnJvciAhPT0gbnVsbClcbiAgICAgICAgdGhpcy5fY2FsbGJhY2soZXJyb3IpLCB0aGlzLl9jYWxsYmFjayA9IG5vb3A7XG4gICAgICBlbHNlIGlmICh0aGlzLl9yZWFkQ2FsbGJhY2spXG4gICAgICAgIHRoaXMuX3JlYWRDYWxsYmFjayA9IHRoaXMuX3JlYWRDYWxsYmFjayh0b2tlbik7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gVGhlIGVtcHR5IGZ1bmN0aW9uXG5mdW5jdGlvbiBub29wKCkge31cblxuLy8gSW5pdGlhbGl6ZXMgdGhlIHBhcnNlciB3aXRoIHRoZSBnaXZlbiBkYXRhIGZhY3RvcnlcbmZ1bmN0aW9uIGluaXREYXRhRmFjdG9yeShwYXJzZXIsIGZhY3RvcnkpIHtcbiAgLy8gU2V0IGZhY3RvcnkgbWV0aG9kc1xuICBjb25zdCBuYW1lZE5vZGUgPSBmYWN0b3J5Lm5hbWVkTm9kZTtcbiAgcGFyc2VyLl9uYW1lZE5vZGUgICA9IG5hbWVkTm9kZTtcbiAgcGFyc2VyLl9ibGFua05vZGUgICA9IGZhY3RvcnkuYmxhbmtOb2RlO1xuICBwYXJzZXIuX2xpdGVyYWwgICAgID0gZmFjdG9yeS5saXRlcmFsO1xuICBwYXJzZXIuX3ZhcmlhYmxlICAgID0gZmFjdG9yeS52YXJpYWJsZTtcbiAgcGFyc2VyLl9xdWFkICAgICAgICA9IGZhY3RvcnkucXVhZDtcbiAgcGFyc2VyLkRFRkFVTFRHUkFQSCA9IGZhY3RvcnkuZGVmYXVsdEdyYXBoKCk7XG5cbiAgLy8gU2V0IGNvbW1vbiBuYW1lZCBub2Rlc1xuICBwYXJzZXIuUkRGX0ZJUlNUICA9IG5hbWVkTm9kZShuYW1lc3BhY2VzLnJkZi5maXJzdCk7XG4gIHBhcnNlci5SREZfUkVTVCAgID0gbmFtZWROb2RlKG5hbWVzcGFjZXMucmRmLnJlc3QpO1xuICBwYXJzZXIuUkRGX05JTCAgICA9IG5hbWVkTm9kZShuYW1lc3BhY2VzLnJkZi5uaWwpO1xuICBwYXJzZXIuTjNfRk9SQUxMICA9IG5hbWVkTm9kZShuYW1lc3BhY2VzLnIuZm9yQWxsKTtcbiAgcGFyc2VyLk4zX0ZPUlNPTUUgPSBuYW1lZE5vZGUobmFtZXNwYWNlcy5yLmZvclNvbWUpO1xuICBwYXJzZXIuQUJCUkVWSUFUSU9OUyA9IHtcbiAgICAnYSc6IG5hbWVkTm9kZShuYW1lc3BhY2VzLnJkZi50eXBlKSxcbiAgICAnPSc6IG5hbWVkTm9kZShuYW1lc3BhY2VzLm93bC5zYW1lQXMpLFxuICAgICc+JzogbmFtZWROb2RlKG5hbWVzcGFjZXMubG9nLmltcGxpZXMpLFxuICB9O1xuICBwYXJzZXIuUVVBTlRJRklFUlNfR1JBUEggPSBuYW1lZE5vZGUoJ3VybjpuMzpxdWFudGlmaWVycycpO1xufVxuaW5pdERhdGFGYWN0b3J5KE4zUGFyc2VyLnByb3RvdHlwZSwgTjNEYXRhRmFjdG9yeSk7XG4iLCIvLyAqKk4zU3RvcmUqKiBvYmplY3RzIHN0b3JlIE4zIHF1YWRzIGJ5IGdyYXBoIGluIG1lbW9yeS5cbmltcG9ydCB7IGRlZmF1bHQgYXMgTjNEYXRhRmFjdG9yeSwgdGVybVRvSWQsIHRlcm1Gcm9tSWQgfSBmcm9tICcuL04zRGF0YUZhY3RvcnknO1xuaW1wb3J0IHsgUmVhZGFibGUgfSBmcm9tICdyZWFkYWJsZS1zdHJlYW0nO1xuaW1wb3J0IG5hbWVzcGFjZXMgZnJvbSAnLi9JUklzJztcblxuLy8gIyMgQ29uc3RydWN0b3JcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4zU3RvcmUge1xuICBjb25zdHJ1Y3RvcihxdWFkcywgb3B0aW9ucykge1xuICAgIC8vIFRoZSBudW1iZXIgb2YgcXVhZHMgaXMgaW5pdGlhbGx5IHplcm9cbiAgICB0aGlzLl9zaXplID0gMDtcbiAgICAvLyBgX2dyYXBoc2AgY29udGFpbnMgc3ViamVjdCwgcHJlZGljYXRlLCBhbmQgb2JqZWN0IGluZGV4ZXMgcGVyIGdyYXBoXG4gICAgdGhpcy5fZ3JhcGhzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAvLyBgX2lkc2AgbWFwcyBlbnRpdGllcyBzdWNoIGFzIGBodHRwOi8veG1sbnMuY29tL2ZvYWYvMC4xL25hbWVgIHRvIG51bWJlcnMsXG4gICAgLy8gc2F2aW5nIG1lbW9yeSBieSB1c2luZyBvbmx5IG51bWJlcnMgYXMga2V5cyBpbiBgX2dyYXBoc2BcbiAgICB0aGlzLl9pZCA9IDA7XG4gICAgdGhpcy5faWRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9pZHNbJz48J10gPSAwOyAvLyBkdW1teSBlbnRyeSwgc28gdGhlIGZpcnN0IGFjdHVhbCBrZXkgaXMgbm9uLXplcm9cbiAgICB0aGlzLl9lbnRpdGllcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7IC8vIGludmVyc2Ugb2YgYF9pZHNgXG4gICAgLy8gYF9ibGFua05vZGVJbmRleGAgaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGF1dG9tYXRpY2FsbHkgbmFtZWQgYmxhbmsgbm9kZVxuICAgIHRoaXMuX2JsYW5rTm9kZUluZGV4ID0gMDtcblxuICAgIC8vIFNoaWZ0IHBhcmFtZXRlcnMgaWYgYHF1YWRzYCBpcyBub3QgZ2l2ZW5cbiAgICBpZiAoIW9wdGlvbnMgJiYgcXVhZHMgJiYgIXF1YWRzWzBdKVxuICAgICAgb3B0aW9ucyA9IHF1YWRzLCBxdWFkcyA9IG51bGw7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgdGhpcy5fZmFjdG9yeSA9IG9wdGlvbnMuZmFjdG9yeSB8fCBOM0RhdGFGYWN0b3J5O1xuXG4gICAgLy8gQWRkIHF1YWRzIGlmIHBhc3NlZFxuICAgIGlmIChxdWFkcylcbiAgICAgIHRoaXMuYWRkUXVhZHMocXVhZHMpO1xuICB9XG5cbiAgLy8gIyMgUHVibGljIHByb3BlcnRpZXNcblxuICAvLyAjIyMgYHNpemVgIHJldHVybnMgdGhlIG51bWJlciBvZiBxdWFkcyBpbiB0aGUgc3RvcmVcbiAgZ2V0IHNpemUoKSB7XG4gICAgLy8gUmV0dXJuIHRoZSBxdWFkIGNvdW50IGlmIGlmIHdhcyBjYWNoZWRcbiAgICBsZXQgc2l6ZSA9IHRoaXMuX3NpemU7XG4gICAgaWYgKHNpemUgIT09IG51bGwpXG4gICAgICByZXR1cm4gc2l6ZTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgbnVtYmVyIG9mIHF1YWRzIGJ5IGNvdW50aW5nIHRvIHRoZSBkZWVwZXN0IGxldmVsXG4gICAgc2l6ZSA9IDA7XG4gICAgY29uc3QgZ3JhcGhzID0gdGhpcy5fZ3JhcGhzO1xuICAgIGxldCBzdWJqZWN0cywgc3ViamVjdDtcbiAgICBmb3IgKGNvbnN0IGdyYXBoS2V5IGluIGdyYXBocylcbiAgICAgIGZvciAoY29uc3Qgc3ViamVjdEtleSBpbiAoc3ViamVjdHMgPSBncmFwaHNbZ3JhcGhLZXldLnN1YmplY3RzKSlcbiAgICAgICAgZm9yIChjb25zdCBwcmVkaWNhdGVLZXkgaW4gKHN1YmplY3QgPSBzdWJqZWN0c1tzdWJqZWN0S2V5XSkpXG4gICAgICAgICAgc2l6ZSArPSBPYmplY3Qua2V5cyhzdWJqZWN0W3ByZWRpY2F0ZUtleV0pLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZSA9IHNpemU7XG4gIH1cblxuICAvLyAjIyBQcml2YXRlIG1ldGhvZHNcblxuICAvLyAjIyMgYF9hZGRUb0luZGV4YCBhZGRzIGEgcXVhZCB0byBhIHRocmVlLWxheWVyZWQgaW5kZXguXG4gIC8vIFJldHVybnMgaWYgdGhlIGluZGV4IGhhcyBjaGFuZ2VkLCBpZiB0aGUgZW50cnkgZGlkIG5vdCBhbHJlYWR5IGV4aXN0LlxuICBfYWRkVG9JbmRleChpbmRleDAsIGtleTAsIGtleTEsIGtleTIpIHtcbiAgICAvLyBDcmVhdGUgbGF5ZXJzIGFzIG5lY2Vzc2FyeVxuICAgIGNvbnN0IGluZGV4MSA9IGluZGV4MFtrZXkwXSB8fCAoaW5kZXgwW2tleTBdID0ge30pO1xuICAgIGNvbnN0IGluZGV4MiA9IGluZGV4MVtrZXkxXSB8fCAoaW5kZXgxW2tleTFdID0ge30pO1xuICAgIC8vIFNldHRpbmcgdGhlIGtleSB0byBfYW55XyB2YWx1ZSBzaWduYWxzIHRoZSBwcmVzZW5jZSBvZiB0aGUgcXVhZFxuICAgIGNvbnN0IGV4aXN0ZWQgPSBrZXkyIGluIGluZGV4MjtcbiAgICBpZiAoIWV4aXN0ZWQpXG4gICAgICBpbmRleDJba2V5Ml0gPSBudWxsO1xuICAgIHJldHVybiAhZXhpc3RlZDtcbiAgfVxuXG4gIC8vICMjIyBgX3JlbW92ZUZyb21JbmRleGAgcmVtb3ZlcyBhIHF1YWQgZnJvbSBhIHRocmVlLWxheWVyZWQgaW5kZXhcbiAgX3JlbW92ZUZyb21JbmRleChpbmRleDAsIGtleTAsIGtleTEsIGtleTIpIHtcbiAgICAvLyBSZW1vdmUgdGhlIHF1YWQgZnJvbSB0aGUgaW5kZXhcbiAgICBjb25zdCBpbmRleDEgPSBpbmRleDBba2V5MF0sIGluZGV4MiA9IGluZGV4MVtrZXkxXTtcbiAgICBkZWxldGUgaW5kZXgyW2tleTJdO1xuXG4gICAgLy8gUmVtb3ZlIGludGVybWVkaWFyeSBpbmRleCBsYXllcnMgaWYgdGhleSBhcmUgZW1wdHlcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBpbmRleDIpIHJldHVybjtcbiAgICBkZWxldGUgaW5kZXgxW2tleTFdO1xuICAgIGZvciAoY29uc3Qga2V5IGluIGluZGV4MSkgcmV0dXJuO1xuICAgIGRlbGV0ZSBpbmRleDBba2V5MF07XG4gIH1cblxuICAvLyAjIyMgYF9maW5kSW5JbmRleGAgZmluZHMgYSBzZXQgb2YgcXVhZHMgaW4gYSB0aHJlZS1sYXllcmVkIGluZGV4LlxuICAvLyBUaGUgaW5kZXggYmFzZSBpcyBgaW5kZXgwYCBhbmQgdGhlIGtleXMgYXQgZWFjaCBsZXZlbCBhcmUgYGtleTBgLCBga2V5MWAsIGFuZCBga2V5MmAuXG4gIC8vIEFueSBvZiB0aGVzZSBrZXlzIGNhbiBiZSB1bmRlZmluZWQsIHdoaWNoIGlzIGludGVycHJldGVkIGFzIGEgd2lsZGNhcmQuXG4gIC8vIGBuYW1lMGAsIGBuYW1lMWAsIGFuZCBgbmFtZTJgIGFyZSB0aGUgbmFtZXMgb2YgdGhlIGtleXMgYXQgZWFjaCBsZXZlbCxcbiAgLy8gdXNlZCB3aGVuIHJlY29uc3RydWN0aW5nIHRoZSByZXN1bHRpbmcgcXVhZFxuICAvLyAoZm9yIGluc3RhbmNlOiBfc3ViamVjdF8sIF9wcmVkaWNhdGVfLCBhbmQgX29iamVjdF8pLlxuICAvLyBGaW5hbGx5LCBgZ3JhcGhgIHdpbGwgYmUgdGhlIGdyYXBoIG9mIHRoZSBjcmVhdGVkIHF1YWRzLlxuICAvLyBJZiBgY2FsbGJhY2tgIGlzIGdpdmVuLCBlYWNoIHJlc3VsdCBpcyBwYXNzZWQgdGhyb3VnaCBpdFxuICAvLyBhbmQgaXRlcmF0aW9uIGhhbHRzIHdoZW4gaXQgcmV0dXJucyB0cnV0aHkgZm9yIGFueSBxdWFkLlxuICAvLyBJZiBpbnN0ZWFkIGBhcnJheWAgaXMgZ2l2ZW4sIGVhY2ggcmVzdWx0IGlzIGFkZGVkIHRvIHRoZSBhcnJheS5cbiAgX2ZpbmRJbkluZGV4KGluZGV4MCwga2V5MCwga2V5MSwga2V5MiwgbmFtZTAsIG5hbWUxLCBuYW1lMiwgZ3JhcGgsIGNhbGxiYWNrLCBhcnJheSkge1xuICAgIGxldCB0bXAsIGluZGV4MSwgaW5kZXgyO1xuICAgIC8vIERlcGVuZGluZyBvbiB0aGUgbnVtYmVyIG9mIHZhcmlhYmxlcywga2V5cyBvciByZXZlcnNlIGluZGV4IGFyZSBmYXN0ZXJcbiAgICBjb25zdCB2YXJDb3VudCA9ICFrZXkwICsgIWtleTEgKyAha2V5MixcbiAgICAgICAgZW50aXR5S2V5cyA9IHZhckNvdW50ID4gMSA/IE9iamVjdC5rZXlzKHRoaXMuX2lkcykgOiB0aGlzLl9lbnRpdGllcztcblxuICAgIC8vIElmIGEga2V5IGlzIHNwZWNpZmllZCwgdXNlIG9ubHkgdGhhdCBwYXJ0IG9mIGluZGV4IDAuXG4gICAgaWYgKGtleTApICh0bXAgPSBpbmRleDAsIGluZGV4MCA9IHt9KVtrZXkwXSA9IHRtcFtrZXkwXTtcbiAgICBmb3IgKGNvbnN0IHZhbHVlMCBpbiBpbmRleDApIHtcbiAgICAgIGNvbnN0IGVudGl0eTAgPSBlbnRpdHlLZXlzW3ZhbHVlMF07XG5cbiAgICAgIGlmIChpbmRleDEgPSBpbmRleDBbdmFsdWUwXSkge1xuICAgICAgICAvLyBJZiBhIGtleSBpcyBzcGVjaWZpZWQsIHVzZSBvbmx5IHRoYXQgcGFydCBvZiBpbmRleCAxLlxuICAgICAgICBpZiAoa2V5MSkgKHRtcCA9IGluZGV4MSwgaW5kZXgxID0ge30pW2tleTFdID0gdG1wW2tleTFdO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlMSBpbiBpbmRleDEpIHtcbiAgICAgICAgICBjb25zdCBlbnRpdHkxID0gZW50aXR5S2V5c1t2YWx1ZTFdO1xuXG4gICAgICAgICAgaWYgKGluZGV4MiA9IGluZGV4MVt2YWx1ZTFdKSB7XG4gICAgICAgICAgICAvLyBJZiBhIGtleSBpcyBzcGVjaWZpZWQsIHVzZSBvbmx5IHRoYXQgcGFydCBvZiBpbmRleCAyLCBpZiBpdCBleGlzdHMuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBrZXkyID8gKGtleTIgaW4gaW5kZXgyID8gW2tleTJdIDogW10pIDogT2JqZWN0LmtleXMoaW5kZXgyKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBxdWFkcyBmb3IgYWxsIGl0ZW1zIGZvdW5kIGluIGluZGV4IDIuXG4gICAgICAgICAgICBmb3IgKGxldCBsID0gMDsgbCA8IHZhbHVlcy5sZW5ndGg7IGwrKykge1xuICAgICAgICAgICAgICBjb25zdCBwYXJ0cyA9IHsgc3ViamVjdDogbnVsbCwgcHJlZGljYXRlOiBudWxsLCBvYmplY3Q6IG51bGwgfTtcbiAgICAgICAgICAgICAgcGFydHNbbmFtZTBdID0gdGVybUZyb21JZChlbnRpdHkwLCB0aGlzLl9mYWN0b3J5KTtcbiAgICAgICAgICAgICAgcGFydHNbbmFtZTFdID0gdGVybUZyb21JZChlbnRpdHkxLCB0aGlzLl9mYWN0b3J5KTtcbiAgICAgICAgICAgICAgcGFydHNbbmFtZTJdID0gdGVybUZyb21JZChlbnRpdHlLZXlzW3ZhbHVlc1tsXV0sIHRoaXMuX2ZhY3RvcnkpO1xuICAgICAgICAgICAgICBjb25zdCBxdWFkID0gdGhpcy5fZmFjdG9yeS5xdWFkKFxuICAgICAgICAgICAgICAgIHBhcnRzLnN1YmplY3QsIHBhcnRzLnByZWRpY2F0ZSwgcGFydHMub2JqZWN0LCB0ZXJtRnJvbUlkKGdyYXBoLCB0aGlzLl9mYWN0b3J5KSk7XG4gICAgICAgICAgICAgIGlmIChhcnJheSlcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKHF1YWQpO1xuICAgICAgICAgICAgICBlbHNlIGlmIChjYWxsYmFjayhxdWFkKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgLy8gIyMjIGBfbG9vcGAgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIG9uIGFsbCBrZXlzIG9mIGluZGV4IDBcbiAgX2xvb3AoaW5kZXgwLCBjYWxsYmFjaykge1xuICAgIGZvciAoY29uc3Qga2V5MCBpbiBpbmRleDApXG4gICAgICBjYWxsYmFjayhrZXkwKTtcbiAgfVxuXG4gIC8vICMjIyBgX2xvb3BCeUtleTBgIGV4ZWN1dGVzIHRoZSBjYWxsYmFjayBvbiBhbGwga2V5cyBvZiBhIGNlcnRhaW4gZW50cnkgaW4gaW5kZXggMFxuICBfbG9vcEJ5S2V5MChpbmRleDAsIGtleTAsIGNhbGxiYWNrKSB7XG4gICAgbGV0IGluZGV4MSwga2V5MTtcbiAgICBpZiAoaW5kZXgxID0gaW5kZXgwW2tleTBdKSB7XG4gICAgICBmb3IgKGtleTEgaW4gaW5kZXgxKVxuICAgICAgICBjYWxsYmFjayhrZXkxKTtcbiAgICB9XG4gIH1cblxuICAvLyAjIyMgYF9sb29wQnlLZXkxYCBleGVjdXRlcyB0aGUgY2FsbGJhY2sgb24gZ2l2ZW4ga2V5cyBvZiBhbGwgZW50cmllcyBpbiBpbmRleCAwXG4gIF9sb29wQnlLZXkxKGluZGV4MCwga2V5MSwgY2FsbGJhY2spIHtcbiAgICBsZXQga2V5MCwgaW5kZXgxO1xuICAgIGZvciAoa2V5MCBpbiBpbmRleDApIHtcbiAgICAgIGluZGV4MSA9IGluZGV4MFtrZXkwXTtcbiAgICAgIGlmIChpbmRleDFba2V5MV0pXG4gICAgICAgIGNhbGxiYWNrKGtleTApO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX2xvb3BCeTJLZXlzYCBleGVjdXRlcyB0aGUgY2FsbGJhY2sgb24gZ2l2ZW4ga2V5cyBvZiBjZXJ0YWluIGVudHJpZXMgaW4gaW5kZXggMlxuICBfbG9vcEJ5MktleXMoaW5kZXgwLCBrZXkwLCBrZXkxLCBjYWxsYmFjaykge1xuICAgIGxldCBpbmRleDEsIGluZGV4Miwga2V5MjtcbiAgICBpZiAoKGluZGV4MSA9IGluZGV4MFtrZXkwXSkgJiYgKGluZGV4MiA9IGluZGV4MVtrZXkxXSkpIHtcbiAgICAgIGZvciAoa2V5MiBpbiBpbmRleDIpXG4gICAgICAgIGNhbGxiYWNrKGtleTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX2NvdW50SW5JbmRleGAgY291bnRzIG1hdGNoaW5nIHF1YWRzIGluIGEgdGhyZWUtbGF5ZXJlZCBpbmRleC5cbiAgLy8gVGhlIGluZGV4IGJhc2UgaXMgYGluZGV4MGAgYW5kIHRoZSBrZXlzIGF0IGVhY2ggbGV2ZWwgYXJlIGBrZXkwYCwgYGtleTFgLCBhbmQgYGtleTJgLlxuICAvLyBBbnkgb2YgdGhlc2Uga2V5cyBjYW4gYmUgdW5kZWZpbmVkLCB3aGljaCBpcyBpbnRlcnByZXRlZCBhcyBhIHdpbGRjYXJkLlxuICBfY291bnRJbkluZGV4KGluZGV4MCwga2V5MCwga2V5MSwga2V5Mikge1xuICAgIGxldCBjb3VudCA9IDAsIHRtcCwgaW5kZXgxLCBpbmRleDI7XG5cbiAgICAvLyBJZiBhIGtleSBpcyBzcGVjaWZpZWQsIGNvdW50IG9ubHkgdGhhdCBwYXJ0IG9mIGluZGV4IDBcbiAgICBpZiAoa2V5MCkgKHRtcCA9IGluZGV4MCwgaW5kZXgwID0ge30pW2tleTBdID0gdG1wW2tleTBdO1xuICAgIGZvciAoY29uc3QgdmFsdWUwIGluIGluZGV4MCkge1xuICAgICAgaWYgKGluZGV4MSA9IGluZGV4MFt2YWx1ZTBdKSB7XG4gICAgICAgIC8vIElmIGEga2V5IGlzIHNwZWNpZmllZCwgY291bnQgb25seSB0aGF0IHBhcnQgb2YgaW5kZXggMVxuICAgICAgICBpZiAoa2V5MSkgKHRtcCA9IGluZGV4MSwgaW5kZXgxID0ge30pW2tleTFdID0gdG1wW2tleTFdO1xuICAgICAgICBmb3IgKGNvbnN0IHZhbHVlMSBpbiBpbmRleDEpIHtcbiAgICAgICAgICBpZiAoaW5kZXgyID0gaW5kZXgxW3ZhbHVlMV0pIHtcbiAgICAgICAgICAgIC8vIElmIGEga2V5IGlzIHNwZWNpZmllZCwgY291bnQgdGhlIHF1YWQgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICBpZiAoa2V5MikgKGtleTIgaW4gaW5kZXgyKSAmJiBjb3VudCsrO1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBjb3VudCBhbGwgcXVhZHNcbiAgICAgICAgICAgIGVsc2UgY291bnQgKz0gT2JqZWN0LmtleXMoaW5kZXgyKS5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIC8vICMjIyBgX2dldEdyYXBoc2AgcmV0dXJucyBhbiBhcnJheSB3aXRoIHRoZSBnaXZlbiBncmFwaCxcbiAgLy8gb3IgYWxsIGdyYXBocyBpZiB0aGUgYXJndW1lbnQgaXMgbnVsbCBvciB1bmRlZmluZWQuXG4gIF9nZXRHcmFwaHMoZ3JhcGgpIHtcbiAgICBpZiAoIWlzU3RyaW5nKGdyYXBoKSlcbiAgICAgIHJldHVybiB0aGlzLl9ncmFwaHM7XG4gICAgY29uc3QgZ3JhcGhzID0ge307XG4gICAgZ3JhcGhzW2dyYXBoXSA9IHRoaXMuX2dyYXBoc1tncmFwaF07XG4gICAgcmV0dXJuIGdyYXBocztcbiAgfVxuXG4gIC8vICMjIyBgX3VuaXF1ZUVudGl0aWVzYCByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFuIGVudGl0eSBJRFxuICAvLyBhbmQgcGFzc2VzIHRoZSBjb3JyZXNwb25kaW5nIGVudGl0eSB0byBjYWxsYmFjayBpZiBpdCBoYXNuJ3Qgb2NjdXJyZWQgYmVmb3JlLlxuICBfdW5pcXVlRW50aXRpZXMoY2FsbGJhY2spIHtcbiAgICBjb25zdCB1bmlxdWVJZHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiBpZCA9PiB7XG4gICAgICBpZiAoIShpZCBpbiB1bmlxdWVJZHMpKSB7XG4gICAgICAgIHVuaXF1ZUlkc1tpZF0gPSB0cnVlO1xuICAgICAgICBjYWxsYmFjayh0ZXJtRnJvbUlkKHRoaXMuX2VudGl0aWVzW2lkXSwgdGhpcy5fZmFjdG9yeSkpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyAjIyBQdWJsaWMgbWV0aG9kc1xuXG4gIC8vICMjIyBgYWRkUXVhZGAgYWRkcyBhIG5ldyBxdWFkIHRvIHRoZSBzdG9yZS5cbiAgLy8gUmV0dXJucyBpZiB0aGUgcXVhZCBpbmRleCBoYXMgY2hhbmdlZCwgaWYgdGhlIHF1YWQgZGlkIG5vdCBhbHJlYWR5IGV4aXN0LlxuICBhZGRRdWFkKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCkge1xuICAgIC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBhIHF1YWQgb2JqZWN0IGlzIGdpdmVuIGluc3RlYWQgb2YgY29tcG9uZW50c1xuICAgIGlmICghcHJlZGljYXRlKVxuICAgICAgZ3JhcGggPSBzdWJqZWN0LmdyYXBoLCBvYmplY3QgPSBzdWJqZWN0Lm9iamVjdCxcbiAgICAgICAgcHJlZGljYXRlID0gc3ViamVjdC5wcmVkaWNhdGUsIHN1YmplY3QgPSBzdWJqZWN0LnN1YmplY3Q7XG5cbiAgICAvLyBDb252ZXJ0IHRlcm1zIHRvIGludGVybmFsIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgIHN1YmplY3QgPSB0ZXJtVG9JZChzdWJqZWN0KTtcbiAgICBwcmVkaWNhdGUgPSB0ZXJtVG9JZChwcmVkaWNhdGUpO1xuICAgIG9iamVjdCA9IHRlcm1Ub0lkKG9iamVjdCk7XG4gICAgZ3JhcGggPSB0ZXJtVG9JZChncmFwaCk7XG5cbiAgICAvLyBGaW5kIHRoZSBncmFwaCB0aGF0IHdpbGwgY29udGFpbiB0aGUgdHJpcGxlXG4gICAgbGV0IGdyYXBoSXRlbSA9IHRoaXMuX2dyYXBoc1tncmFwaF07XG4gICAgLy8gQ3JlYXRlIHRoZSBncmFwaCBpZiBpdCBkb2Vzbid0IGV4aXN0IHlldFxuICAgIGlmICghZ3JhcGhJdGVtKSB7XG4gICAgICBncmFwaEl0ZW0gPSB0aGlzLl9ncmFwaHNbZ3JhcGhdID0geyBzdWJqZWN0czoge30sIHByZWRpY2F0ZXM6IHt9LCBvYmplY3RzOiB7fSB9O1xuICAgICAgLy8gRnJlZXppbmcgYSBncmFwaCBoZWxwcyBzdWJzZXF1ZW50IGBhZGRgIHBlcmZvcm1hbmNlLFxuICAgICAgLy8gYW5kIHByb3BlcnRpZXMgd2lsbCBuZXZlciBiZSBtb2RpZmllZCBhbnl3YXlcbiAgICAgIE9iamVjdC5mcmVlemUoZ3JhcGhJdGVtKTtcbiAgICB9XG5cbiAgICAvLyBTaW5jZSBlbnRpdGllcyBjYW4gb2Z0ZW4gYmUgbG9uZyBJUklzLCB3ZSBhdm9pZCBzdG9yaW5nIHRoZW0gaW4gZXZlcnkgaW5kZXguXG4gICAgLy8gSW5zdGVhZCwgd2UgaGF2ZSBhIHNlcGFyYXRlIGluZGV4IHRoYXQgbWFwcyBlbnRpdGllcyB0byBudW1iZXJzLFxuICAgIC8vIHdoaWNoIGFyZSB0aGVuIHVzZWQgYXMga2V5cyBpbiB0aGUgb3RoZXIgaW5kZXhlcy5cbiAgICBjb25zdCBpZHMgPSB0aGlzLl9pZHM7XG4gICAgY29uc3QgZW50aXRpZXMgPSB0aGlzLl9lbnRpdGllcztcbiAgICBzdWJqZWN0ICAgPSBpZHNbc3ViamVjdF0gICB8fCAoaWRzW2VudGl0aWVzWysrdGhpcy5faWRdID0gc3ViamVjdF0gICA9IHRoaXMuX2lkKTtcbiAgICBwcmVkaWNhdGUgPSBpZHNbcHJlZGljYXRlXSB8fCAoaWRzW2VudGl0aWVzWysrdGhpcy5faWRdID0gcHJlZGljYXRlXSA9IHRoaXMuX2lkKTtcbiAgICBvYmplY3QgICAgPSBpZHNbb2JqZWN0XSAgICB8fCAoaWRzW2VudGl0aWVzWysrdGhpcy5faWRdID0gb2JqZWN0XSAgICA9IHRoaXMuX2lkKTtcblxuICAgIGNvbnN0IGNoYW5nZWQgPSB0aGlzLl9hZGRUb0luZGV4KGdyYXBoSXRlbS5zdWJqZWN0cywgICBzdWJqZWN0LCAgIHByZWRpY2F0ZSwgb2JqZWN0KTtcbiAgICB0aGlzLl9hZGRUb0luZGV4KGdyYXBoSXRlbS5wcmVkaWNhdGVzLCBwcmVkaWNhdGUsIG9iamVjdCwgICAgc3ViamVjdCk7XG4gICAgdGhpcy5fYWRkVG9JbmRleChncmFwaEl0ZW0ub2JqZWN0cywgICAgb2JqZWN0LCAgICBzdWJqZWN0LCAgIHByZWRpY2F0ZSk7XG5cbiAgICAvLyBUaGUgY2FjaGVkIHF1YWQgY291bnQgaXMgbm93IGludmFsaWRcbiAgICB0aGlzLl9zaXplID0gbnVsbDtcbiAgICByZXR1cm4gY2hhbmdlZDtcbiAgfVxuXG4gIC8vICMjIyBgYWRkUXVhZHNgIGFkZHMgbXVsdGlwbGUgcXVhZHMgdG8gdGhlIHN0b3JlXG4gIGFkZFF1YWRzKHF1YWRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFkcy5sZW5ndGg7IGkrKylcbiAgICAgIHRoaXMuYWRkUXVhZChxdWFkc1tpXSk7XG4gIH1cblxuICAvLyAjIyMgYGltcG9ydGAgYWRkcyBhIHN0cmVhbSBvZiBxdWFkcyB0byB0aGUgc3RvcmVcbiAgaW1wb3J0KHN0cmVhbSkge1xuICAgIHN0cmVhbS5vbignZGF0YScsIHF1YWQgPT4geyB0aGlzLmFkZFF1YWQocXVhZCk7IH0pO1xuICAgIHJldHVybiBzdHJlYW07XG4gIH1cblxuICAvLyAjIyMgYHJlbW92ZVF1YWRgIHJlbW92ZXMgYSBxdWFkIGZyb20gdGhlIHN0b3JlIGlmIGl0IGV4aXN0c1xuICByZW1vdmVRdWFkKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCkge1xuICAgIC8vIFNoaWZ0IGFyZ3VtZW50cyBpZiBhIHF1YWQgb2JqZWN0IGlzIGdpdmVuIGluc3RlYWQgb2YgY29tcG9uZW50c1xuICAgIGlmICghcHJlZGljYXRlKVxuICAgICAgZ3JhcGggPSBzdWJqZWN0LmdyYXBoLCBvYmplY3QgPSBzdWJqZWN0Lm9iamVjdCxcbiAgICAgICAgcHJlZGljYXRlID0gc3ViamVjdC5wcmVkaWNhdGUsIHN1YmplY3QgPSBzdWJqZWN0LnN1YmplY3Q7XG5cbiAgICAvLyBDb252ZXJ0IHRlcm1zIHRvIGludGVybmFsIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgIHN1YmplY3QgPSB0ZXJtVG9JZChzdWJqZWN0KTtcbiAgICBwcmVkaWNhdGUgPSB0ZXJtVG9JZChwcmVkaWNhdGUpO1xuICAgIG9iamVjdCA9IHRlcm1Ub0lkKG9iamVjdCk7XG4gICAgZ3JhcGggPSB0ZXJtVG9JZChncmFwaCk7XG5cbiAgICAvLyBGaW5kIGludGVybmFsIGlkZW50aWZpZXJzIGZvciBhbGwgY29tcG9uZW50c1xuICAgIC8vIGFuZCB2ZXJpZnkgdGhlIHF1YWQgZXhpc3RzLlxuICAgIGNvbnN0IGlkcyA9IHRoaXMuX2lkcywgZ3JhcGhzID0gdGhpcy5fZ3JhcGhzO1xuICAgIGxldCBncmFwaEl0ZW0sIHN1YmplY3RzLCBwcmVkaWNhdGVzO1xuICAgIGlmICghKHN1YmplY3QgICAgPSBpZHNbc3ViamVjdF0pIHx8ICEocHJlZGljYXRlID0gaWRzW3ByZWRpY2F0ZV0pIHx8XG4gICAgICAgICEob2JqZWN0ICAgICA9IGlkc1tvYmplY3RdKSAgfHwgIShncmFwaEl0ZW0gPSBncmFwaHNbZ3JhcGhdKSAgfHxcbiAgICAgICAgIShzdWJqZWN0cyAgID0gZ3JhcGhJdGVtLnN1YmplY3RzW3N1YmplY3RdKSB8fFxuICAgICAgICAhKHByZWRpY2F0ZXMgPSBzdWJqZWN0c1twcmVkaWNhdGVdKSB8fFxuICAgICAgICAhKG9iamVjdCBpbiBwcmVkaWNhdGVzKSlcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSBpdCBmcm9tIGFsbCBpbmRleGVzXG4gICAgdGhpcy5fcmVtb3ZlRnJvbUluZGV4KGdyYXBoSXRlbS5zdWJqZWN0cywgICBzdWJqZWN0LCAgIHByZWRpY2F0ZSwgb2JqZWN0KTtcbiAgICB0aGlzLl9yZW1vdmVGcm9tSW5kZXgoZ3JhcGhJdGVtLnByZWRpY2F0ZXMsIHByZWRpY2F0ZSwgb2JqZWN0LCAgICBzdWJqZWN0KTtcbiAgICB0aGlzLl9yZW1vdmVGcm9tSW5kZXgoZ3JhcGhJdGVtLm9iamVjdHMsICAgIG9iamVjdCwgICAgc3ViamVjdCwgICBwcmVkaWNhdGUpO1xuICAgIGlmICh0aGlzLl9zaXplICE9PSBudWxsKSB0aGlzLl9zaXplLS07XG5cbiAgICAvLyBSZW1vdmUgdGhlIGdyYXBoIGlmIGl0IGlzIGVtcHR5XG4gICAgZm9yIChzdWJqZWN0IGluIGdyYXBoSXRlbS5zdWJqZWN0cykgcmV0dXJuIHRydWU7XG4gICAgZGVsZXRlIGdyYXBoc1tncmFwaF07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyAjIyMgYHJlbW92ZVF1YWRzYCByZW1vdmVzIG11bHRpcGxlIHF1YWRzIGZyb20gdGhlIHN0b3JlXG4gIHJlbW92ZVF1YWRzKHF1YWRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFkcy5sZW5ndGg7IGkrKylcbiAgICAgIHRoaXMucmVtb3ZlUXVhZChxdWFkc1tpXSk7XG4gIH1cblxuICAvLyAjIyMgYHJlbW92ZWAgcmVtb3ZlcyBhIHN0cmVhbSBvZiBxdWFkcyBmcm9tIHRoZSBzdG9yZVxuICByZW1vdmUoc3RyZWFtKSB7XG4gICAgc3RyZWFtLm9uKCdkYXRhJywgcXVhZCA9PiB7IHRoaXMucmVtb3ZlUXVhZChxdWFkKTsgfSk7XG4gICAgcmV0dXJuIHN0cmVhbTtcbiAgfVxuXG4gIC8vICMjIyBgcmVtb3ZlTWF0Y2hlc2AgcmVtb3ZlcyBhbGwgbWF0Y2hpbmcgcXVhZHMgZnJvbSB0aGUgc3RvcmVcbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICByZW1vdmVNYXRjaGVzKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZSh0aGlzLm1hdGNoKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCkpO1xuICB9XG5cbiAgLy8gIyMjIGBkZWxldGVHcmFwaGAgcmVtb3ZlcyBhbGwgdHJpcGxlcyB3aXRoIHRoZSBnaXZlbiBncmFwaCBmcm9tIHRoZSBzdG9yZVxuICBkZWxldGVHcmFwaChncmFwaCkge1xuICAgIHJldHVybiB0aGlzLnJlbW92ZU1hdGNoZXMobnVsbCwgbnVsbCwgbnVsbCwgZ3JhcGgpO1xuICB9XG5cbiAgLy8gIyMjIGBnZXRRdWFkc2AgcmV0dXJucyBhbiBhcnJheSBvZiBxdWFkcyBtYXRjaGluZyBhIHBhdHRlcm4uXG4gIC8vIFNldHRpbmcgYW55IGZpZWxkIHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCBpbmRpY2F0ZXMgYSB3aWxkY2FyZC5cbiAgZ2V0UXVhZHMoc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKSB7XG4gICAgLy8gQ29udmVydCB0ZXJtcyB0byBpbnRlcm5hbCBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICBzdWJqZWN0ID0gc3ViamVjdCAmJiB0ZXJtVG9JZChzdWJqZWN0KTtcbiAgICBwcmVkaWNhdGUgPSBwcmVkaWNhdGUgJiYgdGVybVRvSWQocHJlZGljYXRlKTtcbiAgICBvYmplY3QgPSBvYmplY3QgJiYgdGVybVRvSWQob2JqZWN0KTtcbiAgICBncmFwaCA9IGdyYXBoICYmIHRlcm1Ub0lkKGdyYXBoKTtcblxuICAgIGNvbnN0IHF1YWRzID0gW10sIGdyYXBocyA9IHRoaXMuX2dldEdyYXBocyhncmFwaCksIGlkcyA9IHRoaXMuX2lkcztcbiAgICBsZXQgY29udGVudCwgc3ViamVjdElkLCBwcmVkaWNhdGVJZCwgb2JqZWN0SWQ7XG5cbiAgICAvLyBUcmFuc2xhdGUgSVJJcyB0byBpbnRlcm5hbCBpbmRleCBrZXlzLlxuICAgIGlmIChpc1N0cmluZyhzdWJqZWN0KSAgICYmICEoc3ViamVjdElkICAgPSBpZHNbc3ViamVjdF0pICAgfHxcbiAgICAgICAgaXNTdHJpbmcocHJlZGljYXRlKSAmJiAhKHByZWRpY2F0ZUlkID0gaWRzW3ByZWRpY2F0ZV0pIHx8XG4gICAgICAgIGlzU3RyaW5nKG9iamVjdCkgICAgJiYgIShvYmplY3RJZCAgICA9IGlkc1tvYmplY3RdKSlcbiAgICAgIHJldHVybiBxdWFkcztcblxuICAgIGZvciAoY29uc3QgZ3JhcGhJZCBpbiBncmFwaHMpIHtcbiAgICAgIC8vIE9ubHkgaWYgdGhlIHNwZWNpZmllZCBncmFwaCBjb250YWlucyB0cmlwbGVzLCB0aGVyZSBjYW4gYmUgcmVzdWx0c1xuICAgICAgaWYgKGNvbnRlbnQgPSBncmFwaHNbZ3JhcGhJZF0pIHtcbiAgICAgICAgLy8gQ2hvb3NlIHRoZSBvcHRpbWFsIGluZGV4LCBiYXNlZCBvbiB3aGF0IGZpZWxkcyBhcmUgcHJlc2VudFxuICAgICAgICBpZiAoc3ViamVjdElkKSB7XG4gICAgICAgICAgaWYgKG9iamVjdElkKVxuICAgICAgICAgICAgLy8gSWYgc3ViamVjdCBhbmQgb2JqZWN0IGFyZSBnaXZlbiwgdGhlIG9iamVjdCBpbmRleCB3aWxsIGJlIHRoZSBmYXN0ZXN0XG4gICAgICAgICAgICB0aGlzLl9maW5kSW5JbmRleChjb250ZW50Lm9iamVjdHMsIG9iamVjdElkLCBzdWJqZWN0SWQsIHByZWRpY2F0ZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ29iamVjdCcsICdzdWJqZWN0JywgJ3ByZWRpY2F0ZScsIGdyYXBoSWQsIG51bGwsIHF1YWRzKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAvLyBJZiBvbmx5IHN1YmplY3QgYW5kIHBvc3NpYmx5IHByZWRpY2F0ZSBhcmUgZ2l2ZW4sIHRoZSBzdWJqZWN0IGluZGV4IHdpbGwgYmUgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgIHRoaXMuX2ZpbmRJbkluZGV4KGNvbnRlbnQuc3ViamVjdHMsIHN1YmplY3RJZCwgcHJlZGljYXRlSWQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc3ViamVjdCcsICdwcmVkaWNhdGUnLCAnb2JqZWN0JywgZ3JhcGhJZCwgbnVsbCwgcXVhZHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByZWRpY2F0ZUlkKVxuICAgICAgICAgIC8vIElmIG9ubHkgcHJlZGljYXRlIGFuZCBwb3NzaWJseSBvYmplY3QgYXJlIGdpdmVuLCB0aGUgcHJlZGljYXRlIGluZGV4IHdpbGwgYmUgdGhlIGZhc3Rlc3RcbiAgICAgICAgICB0aGlzLl9maW5kSW5JbmRleChjb250ZW50LnByZWRpY2F0ZXMsIHByZWRpY2F0ZUlkLCBvYmplY3RJZCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJlZGljYXRlJywgJ29iamVjdCcsICdzdWJqZWN0JywgZ3JhcGhJZCwgbnVsbCwgcXVhZHMpO1xuICAgICAgICBlbHNlIGlmIChvYmplY3RJZClcbiAgICAgICAgICAvLyBJZiBvbmx5IG9iamVjdCBpcyBnaXZlbiwgdGhlIG9iamVjdCBpbmRleCB3aWxsIGJlIHRoZSBmYXN0ZXN0XG4gICAgICAgICAgdGhpcy5fZmluZEluSW5kZXgoY29udGVudC5vYmplY3RzLCBvYmplY3RJZCwgbnVsbCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb2JqZWN0JywgJ3N1YmplY3QnLCAncHJlZGljYXRlJywgZ3JhcGhJZCwgbnVsbCwgcXVhZHMpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgLy8gSWYgbm90aGluZyBpcyBnaXZlbiwgaXRlcmF0ZSBzdWJqZWN0cyBhbmQgcHJlZGljYXRlcyBmaXJzdFxuICAgICAgICAgIHRoaXMuX2ZpbmRJbkluZGV4KGNvbnRlbnQuc3ViamVjdHMsIG51bGwsIG51bGwsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1YmplY3QnLCAncHJlZGljYXRlJywgJ29iamVjdCcsIGdyYXBoSWQsIG51bGwsIHF1YWRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHF1YWRzO1xuICB9XG5cbiAgLy8gIyMjIGBtYXRjaGAgcmV0dXJucyBhIHN0cmVhbSBvZiBxdWFkcyBtYXRjaGluZyBhIHBhdHRlcm4uXG4gIC8vIFNldHRpbmcgYW55IGZpZWxkIHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCBpbmRpY2F0ZXMgYSB3aWxkY2FyZC5cbiAgbWF0Y2goc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKSB7XG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IFJlYWRhYmxlKHsgb2JqZWN0TW9kZTogdHJ1ZSB9KTtcblxuICAgIC8vIEluaXRpYWxpemUgc3RyZWFtIG9uY2UgaXQgaXMgYmVpbmcgcmVhZFxuICAgIHN0cmVhbS5fcmVhZCA9ICgpID0+IHtcbiAgICAgIGZvciAoY29uc3QgcXVhZCBvZiB0aGlzLmdldFF1YWRzKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCkpXG4gICAgICAgIHN0cmVhbS5wdXNoKHF1YWQpO1xuICAgICAgc3RyZWFtLnB1c2gobnVsbCk7XG4gICAgfTtcblxuICAgIHJldHVybiBzdHJlYW07XG4gIH1cblxuICAvLyAjIyMgYGNvdW50UXVhZHNgIHJldHVybnMgdGhlIG51bWJlciBvZiBxdWFkcyBtYXRjaGluZyBhIHBhdHRlcm4uXG4gIC8vIFNldHRpbmcgYW55IGZpZWxkIHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCBpbmRpY2F0ZXMgYSB3aWxkY2FyZC5cbiAgY291bnRRdWFkcyhzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgpIHtcbiAgICAvLyBDb252ZXJ0IHRlcm1zIHRvIGludGVybmFsIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgIHN1YmplY3QgPSBzdWJqZWN0ICYmIHRlcm1Ub0lkKHN1YmplY3QpO1xuICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZSAmJiB0ZXJtVG9JZChwcmVkaWNhdGUpO1xuICAgIG9iamVjdCA9IG9iamVjdCAmJiB0ZXJtVG9JZChvYmplY3QpO1xuICAgIGdyYXBoID0gZ3JhcGggJiYgdGVybVRvSWQoZ3JhcGgpO1xuXG4gICAgY29uc3QgZ3JhcGhzID0gdGhpcy5fZ2V0R3JhcGhzKGdyYXBoKSwgaWRzID0gdGhpcy5faWRzO1xuICAgIGxldCBjb3VudCA9IDAsIGNvbnRlbnQsIHN1YmplY3RJZCwgcHJlZGljYXRlSWQsIG9iamVjdElkO1xuXG4gICAgLy8gVHJhbnNsYXRlIElSSXMgdG8gaW50ZXJuYWwgaW5kZXgga2V5cy5cbiAgICBpZiAoaXNTdHJpbmcoc3ViamVjdCkgICAmJiAhKHN1YmplY3RJZCAgID0gaWRzW3N1YmplY3RdKSAgIHx8XG4gICAgICAgIGlzU3RyaW5nKHByZWRpY2F0ZSkgJiYgIShwcmVkaWNhdGVJZCA9IGlkc1twcmVkaWNhdGVdKSB8fFxuICAgICAgICBpc1N0cmluZyhvYmplY3QpICAgICYmICEob2JqZWN0SWQgICAgPSBpZHNbb2JqZWN0XSkpXG4gICAgICByZXR1cm4gMDtcblxuICAgIGZvciAoY29uc3QgZ3JhcGhJZCBpbiBncmFwaHMpIHtcbiAgICAgIC8vIE9ubHkgaWYgdGhlIHNwZWNpZmllZCBncmFwaCBjb250YWlucyB0cmlwbGVzLCB0aGVyZSBjYW4gYmUgcmVzdWx0c1xuICAgICAgaWYgKGNvbnRlbnQgPSBncmFwaHNbZ3JhcGhJZF0pIHtcbiAgICAgICAgLy8gQ2hvb3NlIHRoZSBvcHRpbWFsIGluZGV4LCBiYXNlZCBvbiB3aGF0IGZpZWxkcyBhcmUgcHJlc2VudFxuICAgICAgICBpZiAoc3ViamVjdCkge1xuICAgICAgICAgIGlmIChvYmplY3QpXG4gICAgICAgICAgICAvLyBJZiBzdWJqZWN0IGFuZCBvYmplY3QgYXJlIGdpdmVuLCB0aGUgb2JqZWN0IGluZGV4IHdpbGwgYmUgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgIGNvdW50ICs9IHRoaXMuX2NvdW50SW5JbmRleChjb250ZW50Lm9iamVjdHMsIG9iamVjdElkLCBzdWJqZWN0SWQsIHByZWRpY2F0ZUlkKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAvLyBJZiBvbmx5IHN1YmplY3QgYW5kIHBvc3NpYmx5IHByZWRpY2F0ZSBhcmUgZ2l2ZW4sIHRoZSBzdWJqZWN0IGluZGV4IHdpbGwgYmUgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgIGNvdW50ICs9IHRoaXMuX2NvdW50SW5JbmRleChjb250ZW50LnN1YmplY3RzLCBzdWJqZWN0SWQsIHByZWRpY2F0ZUlkLCBvYmplY3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJlZGljYXRlKSB7XG4gICAgICAgICAgLy8gSWYgb25seSBwcmVkaWNhdGUgYW5kIHBvc3NpYmx5IG9iamVjdCBhcmUgZ2l2ZW4sIHRoZSBwcmVkaWNhdGUgaW5kZXggd2lsbCBiZSB0aGUgZmFzdGVzdFxuICAgICAgICAgIGNvdW50ICs9IHRoaXMuX2NvdW50SW5JbmRleChjb250ZW50LnByZWRpY2F0ZXMsIHByZWRpY2F0ZUlkLCBvYmplY3RJZCwgc3ViamVjdElkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvLyBJZiBvbmx5IG9iamVjdCBpcyBwb3NzaWJseSBnaXZlbiwgdGhlIG9iamVjdCBpbmRleCB3aWxsIGJlIHRoZSBmYXN0ZXN0XG4gICAgICAgICAgY291bnQgKz0gdGhpcy5fY291bnRJbkluZGV4KGNvbnRlbnQub2JqZWN0cywgb2JqZWN0SWQsIHN1YmplY3RJZCwgcHJlZGljYXRlSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIC8vICMjIyBgZm9yRWFjaGAgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIG9uIGFsbCBxdWFkcy5cbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICBmb3JFYWNoKGNhbGxiYWNrLCBzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgpIHtcbiAgICB0aGlzLnNvbWUocXVhZCA9PiB7XG4gICAgICBjYWxsYmFjayhxdWFkKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LCBzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgpO1xuICB9XG5cbiAgLy8gIyMjIGBldmVyeWAgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIG9uIGFsbCBxdWFkcyxcbiAgLy8gYW5kIHJldHVybnMgYHRydWVgIGlmIGl0IHJldHVybnMgdHJ1dGh5IGZvciBhbGwgdGhlbS5cbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICBldmVyeShjYWxsYmFjaywgc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKSB7XG4gICAgbGV0IHNvbWUgPSBmYWxzZTtcbiAgICBjb25zdCBldmVyeSA9ICF0aGlzLnNvbWUocXVhZCA9PiB7XG4gICAgICBzb21lID0gdHJ1ZTtcbiAgICAgIHJldHVybiAhY2FsbGJhY2socXVhZCk7XG4gICAgfSwgc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKTtcbiAgICByZXR1cm4gc29tZSAmJiBldmVyeTtcbiAgfVxuXG4gIC8vICMjIyBgc29tZWAgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIG9uIGFsbCBxdWFkcyxcbiAgLy8gYW5kIHJldHVybnMgYHRydWVgIGlmIGl0IHJldHVybnMgdHJ1dGh5IGZvciBhbnkgb2YgdGhlbS5cbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICBzb21lKGNhbGxiYWNrLCBzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgpIHtcbiAgICAvLyBDb252ZXJ0IHRlcm1zIHRvIGludGVybmFsIHN0cmluZyByZXByZXNlbnRhdGlvblxuICAgIHN1YmplY3QgPSBzdWJqZWN0ICYmIHRlcm1Ub0lkKHN1YmplY3QpO1xuICAgIHByZWRpY2F0ZSA9IHByZWRpY2F0ZSAmJiB0ZXJtVG9JZChwcmVkaWNhdGUpO1xuICAgIG9iamVjdCA9IG9iamVjdCAmJiB0ZXJtVG9JZChvYmplY3QpO1xuICAgIGdyYXBoID0gZ3JhcGggJiYgdGVybVRvSWQoZ3JhcGgpO1xuXG4gICAgY29uc3QgZ3JhcGhzID0gdGhpcy5fZ2V0R3JhcGhzKGdyYXBoKSwgaWRzID0gdGhpcy5faWRzO1xuICAgIGxldCBjb250ZW50LCBzdWJqZWN0SWQsIHByZWRpY2F0ZUlkLCBvYmplY3RJZDtcblxuICAgIC8vIFRyYW5zbGF0ZSBJUklzIHRvIGludGVybmFsIGluZGV4IGtleXMuXG4gICAgaWYgKGlzU3RyaW5nKHN1YmplY3QpICAgJiYgIShzdWJqZWN0SWQgICA9IGlkc1tzdWJqZWN0XSkgICB8fFxuICAgICAgICBpc1N0cmluZyhwcmVkaWNhdGUpICYmICEocHJlZGljYXRlSWQgPSBpZHNbcHJlZGljYXRlXSkgfHxcbiAgICAgICAgaXNTdHJpbmcob2JqZWN0KSAgICAmJiAhKG9iamVjdElkICAgID0gaWRzW29iamVjdF0pKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBncmFwaElkIGluIGdyYXBocykge1xuICAgICAgLy8gT25seSBpZiB0aGUgc3BlY2lmaWVkIGdyYXBoIGNvbnRhaW5zIHRyaXBsZXMsIHRoZXJlIGNhbiBiZSByZXN1bHRzXG4gICAgICBpZiAoY29udGVudCA9IGdyYXBoc1tncmFwaElkXSkge1xuICAgICAgICAvLyBDaG9vc2UgdGhlIG9wdGltYWwgaW5kZXgsIGJhc2VkIG9uIHdoYXQgZmllbGRzIGFyZSBwcmVzZW50XG4gICAgICAgIGlmIChzdWJqZWN0SWQpIHtcbiAgICAgICAgICBpZiAob2JqZWN0SWQpIHtcbiAgICAgICAgICAvLyBJZiBzdWJqZWN0IGFuZCBvYmplY3QgYXJlIGdpdmVuLCB0aGUgb2JqZWN0IGluZGV4IHdpbGwgYmUgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgIGlmICh0aGlzLl9maW5kSW5JbmRleChjb250ZW50Lm9iamVjdHMsIG9iamVjdElkLCBzdWJqZWN0SWQsIHByZWRpY2F0ZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdvYmplY3QnLCAnc3ViamVjdCcsICdwcmVkaWNhdGUnLCBncmFwaElkLCBjYWxsYmFjaywgbnVsbCkpXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAvLyBJZiBvbmx5IHN1YmplY3QgYW5kIHBvc3NpYmx5IHByZWRpY2F0ZSBhcmUgZ2l2ZW4sIHRoZSBzdWJqZWN0IGluZGV4IHdpbGwgYmUgdGhlIGZhc3Rlc3RcbiAgICAgICAgICAgIGlmICh0aGlzLl9maW5kSW5JbmRleChjb250ZW50LnN1YmplY3RzLCBzdWJqZWN0SWQsIHByZWRpY2F0ZUlkLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzdWJqZWN0JywgJ3ByZWRpY2F0ZScsICdvYmplY3QnLCBncmFwaElkLCBjYWxsYmFjaywgbnVsbCkpXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByZWRpY2F0ZUlkKSB7XG4gICAgICAgICAgLy8gSWYgb25seSBwcmVkaWNhdGUgYW5kIHBvc3NpYmx5IG9iamVjdCBhcmUgZ2l2ZW4sIHRoZSBwcmVkaWNhdGUgaW5kZXggd2lsbCBiZSB0aGUgZmFzdGVzdFxuICAgICAgICAgIGlmICh0aGlzLl9maW5kSW5JbmRleChjb250ZW50LnByZWRpY2F0ZXMsIHByZWRpY2F0ZUlkLCBvYmplY3RJZCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ByZWRpY2F0ZScsICdvYmplY3QnLCAnc3ViamVjdCcsIGdyYXBoSWQsIGNhbGxiYWNrLCBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdElkKSB7XG4gICAgICAgICAgLy8gSWYgb25seSBvYmplY3QgaXMgZ2l2ZW4sIHRoZSBvYmplY3QgaW5kZXggd2lsbCBiZSB0aGUgZmFzdGVzdFxuICAgICAgICAgIGlmICh0aGlzLl9maW5kSW5JbmRleChjb250ZW50Lm9iamVjdHMsIG9iamVjdElkLCBudWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnb2JqZWN0JywgJ3N1YmplY3QnLCAncHJlZGljYXRlJywgZ3JhcGhJZCwgY2FsbGJhY2ssIG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAvLyBJZiBub3RoaW5nIGlzIGdpdmVuLCBpdGVyYXRlIHN1YmplY3RzIGFuZCBwcmVkaWNhdGVzIGZpcnN0XG4gICAgICAgIGlmICh0aGlzLl9maW5kSW5JbmRleChjb250ZW50LnN1YmplY3RzLCBudWxsLCBudWxsLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N1YmplY3QnLCAncHJlZGljYXRlJywgJ29iamVjdCcsIGdyYXBoSWQsIGNhbGxiYWNrLCBudWxsKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vICMjIyBgZ2V0U3ViamVjdHNgIHJldHVybnMgYWxsIHN1YmplY3RzIHRoYXQgbWF0Y2ggdGhlIHBhdHRlcm4uXG4gIC8vIFNldHRpbmcgYW55IGZpZWxkIHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCBpbmRpY2F0ZXMgYSB3aWxkY2FyZC5cbiAgZ2V0U3ViamVjdHMocHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuZm9yU3ViamVjdHMocyA9PiB7IHJlc3VsdHMucHVzaChzKTsgfSwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8vICMjIyBgZm9yU3ViamVjdHNgIGV4ZWN1dGVzIHRoZSBjYWxsYmFjayBvbiBhbGwgc3ViamVjdHMgdGhhdCBtYXRjaCB0aGUgcGF0dGVybi5cbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICBmb3JTdWJqZWN0cyhjYWxsYmFjaywgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKSB7XG4gICAgLy8gQ29udmVydCB0ZXJtcyB0byBpbnRlcm5hbCBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICBwcmVkaWNhdGUgPSBwcmVkaWNhdGUgJiYgdGVybVRvSWQocHJlZGljYXRlKTtcbiAgICBvYmplY3QgPSBvYmplY3QgJiYgdGVybVRvSWQob2JqZWN0KTtcbiAgICBncmFwaCA9IGdyYXBoICYmIHRlcm1Ub0lkKGdyYXBoKTtcblxuICAgIGNvbnN0IGlkcyA9IHRoaXMuX2lkcywgZ3JhcGhzID0gdGhpcy5fZ2V0R3JhcGhzKGdyYXBoKTtcbiAgICBsZXQgY29udGVudCwgcHJlZGljYXRlSWQsIG9iamVjdElkO1xuICAgIGNhbGxiYWNrID0gdGhpcy5fdW5pcXVlRW50aXRpZXMoY2FsbGJhY2spO1xuXG4gICAgLy8gVHJhbnNsYXRlIElSSXMgdG8gaW50ZXJuYWwgaW5kZXgga2V5cy5cbiAgICBpZiAoaXNTdHJpbmcocHJlZGljYXRlKSAmJiAhKHByZWRpY2F0ZUlkID0gaWRzW3ByZWRpY2F0ZV0pIHx8XG4gICAgICAgIGlzU3RyaW5nKG9iamVjdCkgICAgJiYgIShvYmplY3RJZCAgICA9IGlkc1tvYmplY3RdKSlcbiAgICAgIHJldHVybjtcblxuICAgIGZvciAoZ3JhcGggaW4gZ3JhcGhzKSB7XG4gICAgICAvLyBPbmx5IGlmIHRoZSBzcGVjaWZpZWQgZ3JhcGggY29udGFpbnMgdHJpcGxlcywgdGhlcmUgY2FuIGJlIHJlc3VsdHNcbiAgICAgIGlmIChjb250ZW50ID0gZ3JhcGhzW2dyYXBoXSkge1xuICAgICAgICAvLyBDaG9vc2Ugb3B0aW1hbCBpbmRleCBiYXNlZCBvbiB3aGljaCBmaWVsZHMgYXJlIHdpbGRjYXJkc1xuICAgICAgICBpZiAocHJlZGljYXRlSWQpIHtcbiAgICAgICAgICBpZiAob2JqZWN0SWQpXG4gICAgICAgICAgICAvLyBJZiBwcmVkaWNhdGUgYW5kIG9iamVjdCBhcmUgZ2l2ZW4sIHRoZSBQT1MgaW5kZXggaXMgYmVzdC5cbiAgICAgICAgICAgIHRoaXMuX2xvb3BCeTJLZXlzKGNvbnRlbnQucHJlZGljYXRlcywgcHJlZGljYXRlSWQsIG9iamVjdElkLCBjYWxsYmFjayk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLy8gSWYgb25seSBwcmVkaWNhdGUgaXMgZ2l2ZW4sIHRoZSBTUE8gaW5kZXggaXMgYmVzdC5cbiAgICAgICAgICAgIHRoaXMuX2xvb3BCeUtleTEoY29udGVudC5zdWJqZWN0cywgcHJlZGljYXRlSWQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvYmplY3RJZClcbiAgICAgICAgICAvLyBJZiBvbmx5IG9iamVjdCBpcyBnaXZlbiwgdGhlIE9TUCBpbmRleCBpcyBiZXN0LlxuICAgICAgICAgIHRoaXMuX2xvb3BCeUtleTAoY29udGVudC5vYmplY3RzLCBvYmplY3RJZCwgY2FsbGJhY2spO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgLy8gSWYgbm8gcGFyYW1zIGdpdmVuLCBpdGVyYXRlIGFsbCB0aGUgc3ViamVjdHNcbiAgICAgICAgICB0aGlzLl9sb29wKGNvbnRlbnQuc3ViamVjdHMsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAjIyMgYGdldFByZWRpY2F0ZXNgIHJldHVybnMgYWxsIHByZWRpY2F0ZXMgdGhhdCBtYXRjaCB0aGUgcGF0dGVybi5cbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICBnZXRQcmVkaWNhdGVzKHN1YmplY3QsIG9iamVjdCwgZ3JhcGgpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW107XG4gICAgdGhpcy5mb3JQcmVkaWNhdGVzKHAgPT4geyByZXN1bHRzLnB1c2gocCk7IH0sIHN1YmplY3QsIG9iamVjdCwgZ3JhcGgpO1xuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgLy8gIyMjIGBmb3JQcmVkaWNhdGVzYCBleGVjdXRlcyB0aGUgY2FsbGJhY2sgb24gYWxsIHByZWRpY2F0ZXMgdGhhdCBtYXRjaCB0aGUgcGF0dGVybi5cbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICBmb3JQcmVkaWNhdGVzKGNhbGxiYWNrLCBzdWJqZWN0LCBvYmplY3QsIGdyYXBoKSB7XG4gICAgLy8gQ29udmVydCB0ZXJtcyB0byBpbnRlcm5hbCBzdHJpbmcgcmVwcmVzZW50YXRpb25cbiAgICBzdWJqZWN0ID0gc3ViamVjdCAmJiB0ZXJtVG9JZChzdWJqZWN0KTtcbiAgICBvYmplY3QgPSBvYmplY3QgJiYgdGVybVRvSWQob2JqZWN0KTtcbiAgICBncmFwaCA9IGdyYXBoICYmIHRlcm1Ub0lkKGdyYXBoKTtcblxuICAgIGNvbnN0IGlkcyA9IHRoaXMuX2lkcywgZ3JhcGhzID0gdGhpcy5fZ2V0R3JhcGhzKGdyYXBoKTtcbiAgICBsZXQgY29udGVudCwgc3ViamVjdElkLCBvYmplY3RJZDtcbiAgICBjYWxsYmFjayA9IHRoaXMuX3VuaXF1ZUVudGl0aWVzKGNhbGxiYWNrKTtcblxuICAgIC8vIFRyYW5zbGF0ZSBJUklzIHRvIGludGVybmFsIGluZGV4IGtleXMuXG4gICAgaWYgKGlzU3RyaW5nKHN1YmplY3QpICYmICEoc3ViamVjdElkID0gaWRzW3N1YmplY3RdKSB8fFxuICAgICAgICBpc1N0cmluZyhvYmplY3QpICAmJiAhKG9iamVjdElkICA9IGlkc1tvYmplY3RdKSlcbiAgICAgIHJldHVybjtcblxuICAgIGZvciAoZ3JhcGggaW4gZ3JhcGhzKSB7XG4gICAgICAvLyBPbmx5IGlmIHRoZSBzcGVjaWZpZWQgZ3JhcGggY29udGFpbnMgdHJpcGxlcywgdGhlcmUgY2FuIGJlIHJlc3VsdHNcbiAgICAgIGlmIChjb250ZW50ID0gZ3JhcGhzW2dyYXBoXSkge1xuICAgICAgICAvLyBDaG9vc2Ugb3B0aW1hbCBpbmRleCBiYXNlZCBvbiB3aGljaCBmaWVsZHMgYXJlIHdpbGRjYXJkc1xuICAgICAgICBpZiAoc3ViamVjdElkKSB7XG4gICAgICAgICAgaWYgKG9iamVjdElkKVxuICAgICAgICAgICAgLy8gSWYgc3ViamVjdCBhbmQgb2JqZWN0IGFyZSBnaXZlbiwgdGhlIE9TUCBpbmRleCBpcyBiZXN0LlxuICAgICAgICAgICAgdGhpcy5fbG9vcEJ5MktleXMoY29udGVudC5vYmplY3RzLCBvYmplY3RJZCwgc3ViamVjdElkLCBjYWxsYmFjayk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgLy8gSWYgb25seSBzdWJqZWN0IGlzIGdpdmVuLCB0aGUgU1BPIGluZGV4IGlzIGJlc3QuXG4gICAgICAgICAgICB0aGlzLl9sb29wQnlLZXkwKGNvbnRlbnQuc3ViamVjdHMsIHN1YmplY3RJZCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdElkKVxuICAgICAgICAgIC8vIElmIG9ubHkgb2JqZWN0IGlzIGdpdmVuLCB0aGUgUE9TIGluZGV4IGlzIGJlc3QuXG4gICAgICAgICAgdGhpcy5fbG9vcEJ5S2V5MShjb250ZW50LnByZWRpY2F0ZXMsIG9iamVjdElkLCBjYWxsYmFjayk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAvLyBJZiBubyBwYXJhbXMgZ2l2ZW4sIGl0ZXJhdGUgYWxsIHRoZSBwcmVkaWNhdGVzLlxuICAgICAgICAgIHRoaXMuX2xvb3AoY29udGVudC5wcmVkaWNhdGVzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gIyMjIGBnZXRPYmplY3RzYCByZXR1cm5zIGFsbCBvYmplY3RzIHRoYXQgbWF0Y2ggdGhlIHBhdHRlcm4uXG4gIC8vIFNldHRpbmcgYW55IGZpZWxkIHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCBpbmRpY2F0ZXMgYSB3aWxkY2FyZC5cbiAgZ2V0T2JqZWN0cyhzdWJqZWN0LCBwcmVkaWNhdGUsIGdyYXBoKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgIHRoaXMuZm9yT2JqZWN0cyhvID0+IHsgcmVzdWx0cy5wdXNoKG8pOyB9LCBzdWJqZWN0LCBwcmVkaWNhdGUsIGdyYXBoKTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8vICMjIyBgZm9yT2JqZWN0c2AgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIG9uIGFsbCBvYmplY3RzIHRoYXQgbWF0Y2ggdGhlIHBhdHRlcm4uXG4gIC8vIFNldHRpbmcgYW55IGZpZWxkIHRvIGB1bmRlZmluZWRgIG9yIGBudWxsYCBpbmRpY2F0ZXMgYSB3aWxkY2FyZC5cbiAgZm9yT2JqZWN0cyhjYWxsYmFjaywgc3ViamVjdCwgcHJlZGljYXRlLCBncmFwaCkge1xuICAgIC8vIENvbnZlcnQgdGVybXMgdG8gaW50ZXJuYWwgc3RyaW5nIHJlcHJlc2VudGF0aW9uXG4gICAgc3ViamVjdCA9IHN1YmplY3QgJiYgdGVybVRvSWQoc3ViamVjdCk7XG4gICAgcHJlZGljYXRlID0gcHJlZGljYXRlICYmIHRlcm1Ub0lkKHByZWRpY2F0ZSk7XG4gICAgZ3JhcGggPSBncmFwaCAmJiB0ZXJtVG9JZChncmFwaCk7XG5cbiAgICBjb25zdCBpZHMgPSB0aGlzLl9pZHMsIGdyYXBocyA9IHRoaXMuX2dldEdyYXBocyhncmFwaCk7XG4gICAgbGV0IGNvbnRlbnQsIHN1YmplY3RJZCwgcHJlZGljYXRlSWQ7XG4gICAgY2FsbGJhY2sgPSB0aGlzLl91bmlxdWVFbnRpdGllcyhjYWxsYmFjayk7XG5cbiAgICAvLyBUcmFuc2xhdGUgSVJJcyB0byBpbnRlcm5hbCBpbmRleCBrZXlzLlxuICAgIGlmIChpc1N0cmluZyhzdWJqZWN0KSAgICYmICEoc3ViamVjdElkICAgPSBpZHNbc3ViamVjdF0pIHx8XG4gICAgICAgIGlzU3RyaW5nKHByZWRpY2F0ZSkgJiYgIShwcmVkaWNhdGVJZCA9IGlkc1twcmVkaWNhdGVdKSlcbiAgICAgIHJldHVybjtcblxuICAgIGZvciAoZ3JhcGggaW4gZ3JhcGhzKSB7XG4gICAgICAvLyBPbmx5IGlmIHRoZSBzcGVjaWZpZWQgZ3JhcGggY29udGFpbnMgdHJpcGxlcywgdGhlcmUgY2FuIGJlIHJlc3VsdHNcbiAgICAgIGlmIChjb250ZW50ID0gZ3JhcGhzW2dyYXBoXSkge1xuICAgICAgICAvLyBDaG9vc2Ugb3B0aW1hbCBpbmRleCBiYXNlZCBvbiB3aGljaCBmaWVsZHMgYXJlIHdpbGRjYXJkc1xuICAgICAgICBpZiAoc3ViamVjdElkKSB7XG4gICAgICAgICAgaWYgKHByZWRpY2F0ZUlkKVxuICAgICAgICAgICAgLy8gSWYgc3ViamVjdCBhbmQgcHJlZGljYXRlIGFyZSBnaXZlbiwgdGhlIFNQTyBpbmRleCBpcyBiZXN0LlxuICAgICAgICAgICAgdGhpcy5fbG9vcEJ5MktleXMoY29udGVudC5zdWJqZWN0cywgc3ViamVjdElkLCBwcmVkaWNhdGVJZCwgY2FsbGJhY2spO1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIC8vIElmIG9ubHkgc3ViamVjdCBpcyBnaXZlbiwgdGhlIE9TUCBpbmRleCBpcyBiZXN0LlxuICAgICAgICAgICAgdGhpcy5fbG9vcEJ5S2V5MShjb250ZW50Lm9iamVjdHMsIHN1YmplY3RJZCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByZWRpY2F0ZUlkKVxuICAgICAgICAgIC8vIElmIG9ubHkgcHJlZGljYXRlIGlzIGdpdmVuLCB0aGUgUE9TIGluZGV4IGlzIGJlc3QuXG4gICAgICAgICAgdGhpcy5fbG9vcEJ5S2V5MChjb250ZW50LnByZWRpY2F0ZXMsIHByZWRpY2F0ZUlkLCBjYWxsYmFjayk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAvLyBJZiBubyBwYXJhbXMgZ2l2ZW4sIGl0ZXJhdGUgYWxsIHRoZSBvYmplY3RzLlxuICAgICAgICAgIHRoaXMuX2xvb3AoY29udGVudC5vYmplY3RzLCBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gIyMjIGBnZXRHcmFwaHNgIHJldHVybnMgYWxsIGdyYXBocyB0aGF0IG1hdGNoIHRoZSBwYXR0ZXJuLlxuICAvLyBTZXR0aW5nIGFueSBmaWVsZCB0byBgdW5kZWZpbmVkYCBvciBgbnVsbGAgaW5kaWNhdGVzIGEgd2lsZGNhcmQuXG4gIGdldEdyYXBocyhzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICB0aGlzLmZvckdyYXBocyhnID0+IHsgcmVzdWx0cy5wdXNoKGcpOyB9LCBzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvLyAjIyMgYGZvckdyYXBoc2AgZXhlY3V0ZXMgdGhlIGNhbGxiYWNrIG9uIGFsbCBncmFwaHMgdGhhdCBtYXRjaCB0aGUgcGF0dGVybi5cbiAgLy8gU2V0dGluZyBhbnkgZmllbGQgdG8gYHVuZGVmaW5lZGAgb3IgYG51bGxgIGluZGljYXRlcyBhIHdpbGRjYXJkLlxuICBmb3JHcmFwaHMoY2FsbGJhY2ssIHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0KSB7XG4gICAgZm9yIChjb25zdCBncmFwaCBpbiB0aGlzLl9ncmFwaHMpIHtcbiAgICAgIHRoaXMuc29tZShxdWFkID0+IHtcbiAgICAgICAgY2FsbGJhY2socXVhZC5ncmFwaCk7XG4gICAgICAgIHJldHVybiB0cnVlOyAvLyBIYWx0IGl0ZXJhdGlvbiBvZiBzb21lKClcbiAgICAgIH0sIHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCk7XG4gICAgfVxuICB9XG5cbiAgLy8gIyMjIGBjcmVhdGVCbGFua05vZGVgIGNyZWF0ZXMgYSBuZXcgYmxhbmsgbm9kZSwgcmV0dXJuaW5nIGl0cyBuYW1lXG4gIGNyZWF0ZUJsYW5rTm9kZShzdWdnZXN0ZWROYW1lKSB7XG4gICAgbGV0IG5hbWUsIGluZGV4O1xuICAgIC8vIEdlbmVyYXRlIGEgbmFtZSBiYXNlZCBvbiB0aGUgc3VnZ2VzdGVkIG5hbWVcbiAgICBpZiAoc3VnZ2VzdGVkTmFtZSkge1xuICAgICAgbmFtZSA9IHN1Z2dlc3RlZE5hbWUgPSBgXzoke3N1Z2dlc3RlZE5hbWV9YCwgaW5kZXggPSAxO1xuICAgICAgd2hpbGUgKHRoaXMuX2lkc1tuYW1lXSlcbiAgICAgICAgbmFtZSA9IHN1Z2dlc3RlZE5hbWUgKyBpbmRleCsrO1xuICAgIH1cbiAgICAvLyBHZW5lcmF0ZSBhIGdlbmVyaWMgYmxhbmsgbm9kZSBuYW1lXG4gICAgZWxzZSB7XG4gICAgICBkbyB7IG5hbWUgPSBgXzpiJHt0aGlzLl9ibGFua05vZGVJbmRleCsrfWA7IH1cbiAgICAgIHdoaWxlICh0aGlzLl9pZHNbbmFtZV0pO1xuICAgIH1cbiAgICAvLyBBZGQgdGhlIGJsYW5rIG5vZGUgdG8gdGhlIGVudGl0aWVzLCBhdm9pZGluZyB0aGUgZ2VuZXJhdGlvbiBvZiBkdXBsaWNhdGVzXG4gICAgdGhpcy5faWRzW25hbWVdID0gKyt0aGlzLl9pZDtcbiAgICB0aGlzLl9lbnRpdGllc1t0aGlzLl9pZF0gPSBuYW1lO1xuICAgIHJldHVybiB0aGlzLl9mYWN0b3J5LmJsYW5rTm9kZShuYW1lLnN1YnN0cigyKSk7XG4gIH1cblxuICAvLyAjIyMgYGV4dHJhY3RMaXN0c2AgZmluZHMgYW5kIHJlbW92ZXMgYWxsIGxpc3QgdHJpcGxlc1xuICAvLyBhbmQgcmV0dXJucyB0aGUgaXRlbXMgcGVyIGxpc3QuXG4gIGV4dHJhY3RMaXN0cyh7IHJlbW92ZSA9IGZhbHNlLCBpZ25vcmVFcnJvcnMgPSBmYWxzZSB9ID0ge30pIHtcbiAgICBjb25zdCBsaXN0cyA9IHt9OyAvLyBoYXMgc2NhbGFyIGtleXMgc28gY291bGQgYmUgYSBzaW1wbGUgT2JqZWN0XG4gICAgY29uc3Qgb25FcnJvciA9IGlnbm9yZUVycm9ycyA/ICgoKSA9PiB0cnVlKSA6XG4gICAgICAgICAgICAgICAgICAoKG5vZGUsIG1lc3NhZ2UpID0+IHsgdGhyb3cgbmV3IEVycm9yKGAke25vZGUudmFsdWV9ICR7bWVzc2FnZX1gKTsgfSk7XG5cbiAgICAvLyBUcmF2ZXJzZSBlYWNoIGxpc3QgZnJvbSBpdHMgdGFpbFxuICAgIGNvbnN0IHRhaWxzID0gdGhpcy5nZXRRdWFkcyhudWxsLCBuYW1lc3BhY2VzLnJkZi5yZXN0LCBuYW1lc3BhY2VzLnJkZi5uaWwsIG51bGwpO1xuICAgIGNvbnN0IHRvUmVtb3ZlID0gcmVtb3ZlID8gWy4uLnRhaWxzXSA6IFtdO1xuICAgIHRhaWxzLmZvckVhY2godGFpbFF1YWQgPT4ge1xuICAgICAgY29uc3QgaXRlbXMgPSBbXTsgICAgICAgICAgICAgLy8gdGhlIG1lbWJlcnMgZm91bmQgYXMgb2JqZWN0cyBvZiByZGY6Zmlyc3QgcXVhZHNcbiAgICAgIGxldCBtYWxmb3JtZWQgPSBmYWxzZTsgICAgICAvLyBzaWduYWxzIHdoZXRoZXIgdGhlIGN1cnJlbnQgbGlzdCBpcyBtYWxmb3JtZWRcbiAgICAgIGxldCBoZWFkOyAgICAgICAgICAgICAgICAgICAvLyB0aGUgaGVhZCBvZiB0aGUgbGlzdCAoXzpiMSBpbiBhYm92ZSBleGFtcGxlKVxuICAgICAgbGV0IGhlYWRQb3M7ICAgICAgICAgICAgICAgIC8vIHNldCB0byBzdWJqZWN0IG9yIG9iamVjdCB3aGVuIGhlYWQgaXMgc2V0XG4gICAgICBjb25zdCBncmFwaCA9IHRhaWxRdWFkLmdyYXBoOyAvLyBtYWtlIHN1cmUgbGlzdCBpcyBpbiBleGFjdGx5IG9uZSBncmFwaFxuXG4gICAgICAvLyBUcmF2ZXJzZSB0aGUgbGlzdCBmcm9tIHRhaWwgdG8gZW5kXG4gICAgICBsZXQgY3VycmVudCA9IHRhaWxRdWFkLnN1YmplY3Q7XG4gICAgICB3aGlsZSAoY3VycmVudCAmJiAhbWFsZm9ybWVkKSB7XG4gICAgICAgIGNvbnN0IG9iamVjdFF1YWRzID0gdGhpcy5nZXRRdWFkcyhudWxsLCBudWxsLCBjdXJyZW50LCBudWxsKTtcbiAgICAgICAgY29uc3Qgc3ViamVjdFF1YWRzID0gdGhpcy5nZXRRdWFkcyhjdXJyZW50LCBudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgbGV0IHF1YWQsIGZpcnN0ID0gbnVsbCwgcmVzdCA9IG51bGwsIHBhcmVudCA9IG51bGw7XG5cbiAgICAgICAgLy8gRmluZCB0aGUgZmlyc3QgYW5kIHJlc3Qgb2YgdGhpcyBsaXN0IG5vZGVcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJqZWN0UXVhZHMubGVuZ3RoICYmICFtYWxmb3JtZWQ7IGkrKykge1xuICAgICAgICAgIHF1YWQgPSBzdWJqZWN0UXVhZHNbaV07XG4gICAgICAgICAgaWYgKCFxdWFkLmdyYXBoLmVxdWFscyhncmFwaCkpXG4gICAgICAgICAgICBtYWxmb3JtZWQgPSBvbkVycm9yKGN1cnJlbnQsICdub3QgY29uZmluZWQgdG8gc2luZ2xlIGdyYXBoJyk7XG4gICAgICAgICAgZWxzZSBpZiAoaGVhZClcbiAgICAgICAgICAgIG1hbGZvcm1lZCA9IG9uRXJyb3IoY3VycmVudCwgJ2hhcyBub24tbGlzdCBhcmNzIG91dCcpO1xuXG4gICAgICAgICAgLy8gb25lIHJkZjpmaXJzdFxuICAgICAgICAgIGVsc2UgaWYgKHF1YWQucHJlZGljYXRlLnZhbHVlID09PSBuYW1lc3BhY2VzLnJkZi5maXJzdCkge1xuICAgICAgICAgICAgaWYgKGZpcnN0KVxuICAgICAgICAgICAgICBtYWxmb3JtZWQgPSBvbkVycm9yKGN1cnJlbnQsICdoYXMgbXVsdGlwbGUgcmRmOmZpcnN0IGFyY3MnKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgdG9SZW1vdmUucHVzaChmaXJzdCA9IHF1YWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIG9uZSByZGY6cmVzdFxuICAgICAgICAgIGVsc2UgaWYgKHF1YWQucHJlZGljYXRlLnZhbHVlID09PSBuYW1lc3BhY2VzLnJkZi5yZXN0KSB7XG4gICAgICAgICAgICBpZiAocmVzdClcbiAgICAgICAgICAgICAgbWFsZm9ybWVkID0gb25FcnJvcihjdXJyZW50LCAnaGFzIG11bHRpcGxlIHJkZjpyZXN0IGFyY3MnKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgdG9SZW1vdmUucHVzaChyZXN0ID0gcXVhZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYWxpZW4gdHJpcGxlXG4gICAgICAgICAgZWxzZSBpZiAob2JqZWN0UXVhZHMubGVuZ3RoKVxuICAgICAgICAgICAgbWFsZm9ybWVkID0gb25FcnJvcihjdXJyZW50LCAnY2FuXFwndCBiZSBzdWJqZWN0IGFuZCBvYmplY3QnKTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhlYWQgPSBxdWFkOyAvLyBlLmcuIHsgKDEgMiAzKSA6cCA6byB9XG4gICAgICAgICAgICBoZWFkUG9zID0gJ3N1YmplY3QnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHsgOnMgOnAgKDEgMikgfSBhcnJpdmVzIGhlcmUgd2l0aCBubyBoZWFkXG4gICAgICAgIC8vIHsgKDEgMikgOnAgOm8gfSBhcnJpdmVzIGhlcmUgd2l0aCBoZWFkIHNldCB0byB0aGUgbGlzdC5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RRdWFkcy5sZW5ndGggJiYgIW1hbGZvcm1lZDsgKytpKSB7XG4gICAgICAgICAgcXVhZCA9IG9iamVjdFF1YWRzW2ldO1xuICAgICAgICAgIGlmIChoZWFkKVxuICAgICAgICAgICAgbWFsZm9ybWVkID0gb25FcnJvcihjdXJyZW50LCAnY2FuXFwndCBoYXZlIGNvcmVmZXJlbmNlcycpO1xuICAgICAgICAgIC8vIG9uZSByZGY6cmVzdFxuICAgICAgICAgIGVsc2UgaWYgKHF1YWQucHJlZGljYXRlLnZhbHVlID09PSBuYW1lc3BhY2VzLnJkZi5yZXN0KSB7XG4gICAgICAgICAgICBpZiAocGFyZW50KVxuICAgICAgICAgICAgICBtYWxmb3JtZWQgPSBvbkVycm9yKGN1cnJlbnQsICdoYXMgaW5jb21pbmcgcmRmOnJlc3QgYXJjcycpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBwYXJlbnQgPSBxdWFkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhlYWQgPSBxdWFkOyAvLyBlLmcuIHsgOnMgOnAgKDEgMikgfVxuICAgICAgICAgICAgaGVhZFBvcyA9ICdvYmplY3QnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBsaXN0IGl0ZW0gYW5kIGNvbnRpbnVlIHdpdGggcGFyZW50XG4gICAgICAgIGlmICghZmlyc3QpXG4gICAgICAgICAgbWFsZm9ybWVkID0gb25FcnJvcihjdXJyZW50LCAnaGFzIG5vIGxpc3QgaGVhZCcpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgaXRlbXMudW5zaGlmdChmaXJzdC5vYmplY3QpO1xuICAgICAgICBjdXJyZW50ID0gcGFyZW50ICYmIHBhcmVudC5zdWJqZWN0O1xuICAgICAgfVxuXG4gICAgICAvLyBEb24ndCByZW1vdmUgYW55IHF1YWRzIGlmIHRoZSBsaXN0IGlzIG1hbGZvcm1lZFxuICAgICAgaWYgKG1hbGZvcm1lZClcbiAgICAgICAgcmVtb3ZlID0gZmFsc2U7XG4gICAgICAvLyBTdG9yZSB0aGUgbGlzdCB1bmRlciB0aGUgdmFsdWUgb2YgaXRzIGhlYWRcbiAgICAgIGVsc2UgaWYgKGhlYWQpXG4gICAgICAgIGxpc3RzW2hlYWRbaGVhZFBvc10udmFsdWVdID0gaXRlbXM7XG4gICAgfSk7XG5cbiAgICAvLyBSZW1vdmUgbGlzdCBxdWFkcyBpZiByZXF1ZXN0ZWRcbiAgICBpZiAocmVtb3ZlKVxuICAgICAgdGhpcy5yZW1vdmVRdWFkcyh0b1JlbW92ZSk7XG4gICAgcmV0dXJuIGxpc3RzO1xuICB9XG59XG5cbi8vIERldGVybWluZXMgd2hldGhlciB0aGUgYXJndW1lbnQgaXMgYSBzdHJpbmdcbmZ1bmN0aW9uIGlzU3RyaW5nKHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBzID09PSAnc3RyaW5nJyB8fCBzIGluc3RhbmNlb2YgU3RyaW5nO1xufVxuIiwiLy8gKipOM1N0cmVhbVBhcnNlcioqIHBhcnNlcyBhIHRleHQgc3RyZWFtIGludG8gYSBxdWFkIHN0cmVhbS5cbmltcG9ydCBOM1BhcnNlciBmcm9tICcuL04zUGFyc2VyJztcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ3JlYWRhYmxlLXN0cmVhbSc7XG5cbi8vICMjIENvbnN0cnVjdG9yXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOM1N0cmVhbVBhcnNlciBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcih7IGRlY29kZVN0cmluZ3M6IHRydWUgfSk7XG4gICAgdGhpcy5fcmVhZGFibGVTdGF0ZS5vYmplY3RNb2RlID0gdHJ1ZTtcblxuICAgIC8vIFNldCB1cCBwYXJzZXIgd2l0aCBkdW1teSBzdHJlYW0gdG8gb2J0YWluIGBkYXRhYCBhbmQgYGVuZGAgY2FsbGJhY2tzXG4gICAgY29uc3QgcGFyc2VyID0gbmV3IE4zUGFyc2VyKG9wdGlvbnMpO1xuICAgIGxldCBvbkRhdGEsIG9uRW5kO1xuICAgIHBhcnNlci5wYXJzZSh7XG4gICAgICBvbjogKGV2ZW50LCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XG4gICAgICAgIGNhc2UgJ2RhdGEnOiBvbkRhdGEgPSBjYWxsYmFjazsgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VuZCc6ICAgb25FbmQgPSBjYWxsYmFjazsgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgICAgIC8vIEhhbmRsZSBxdWFkcyBieSBwdXNoaW5nIHRoZW0gZG93biB0aGUgcGlwZWxpbmVcbiAgICAgIChlcnJvciwgcXVhZCkgPT4geyBlcnJvciAmJiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpIHx8IHF1YWQgJiYgdGhpcy5wdXNoKHF1YWQpOyB9LFxuICAgICAgLy8gRW1pdCBwcmVmaXhlcyB0aHJvdWdoIHRoZSBgcHJlZml4YCBldmVudFxuICAgICAgKHByZWZpeCwgdXJpKSA9PiB7IHRoaXMuZW1pdCgncHJlZml4JywgcHJlZml4LCB1cmkpOyB9XG4gICAgKTtcblxuICAgIC8vIEltcGxlbWVudCBUcmFuc2Zvcm0gbWV0aG9kcyB0aHJvdWdoIHBhcnNlciBjYWxsYmFja3NcbiAgICB0aGlzLl90cmFuc2Zvcm0gPSAoY2h1bmssIGVuY29kaW5nLCBkb25lKSA9PiB7IG9uRGF0YShjaHVuayk7IGRvbmUoKTsgfTtcbiAgICB0aGlzLl9mbHVzaCA9IGRvbmUgPT4geyBvbkVuZCgpOyBkb25lKCk7IH07XG4gIH1cblxuICAvLyAjIyMgUGFyc2VzIGEgc3RyZWFtIG9mIHN0cmluZ3NcbiAgaW1wb3J0KHN0cmVhbSkge1xuICAgIHN0cmVhbS5vbignZGF0YScsICBjaHVuayA9PiB7IHRoaXMud3JpdGUoY2h1bmspOyB9KTtcbiAgICBzdHJlYW0ub24oJ2VuZCcsICAgKCkgICAgICA9PiB7IHRoaXMuZW5kKCk7IH0pO1xuICAgIHN0cmVhbS5vbignZXJyb3InLCBlcnJvciA9PiB7IHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7IH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvLyAqKk4zU3RyZWFtV3JpdGVyKiogc2VyaWFsaXplcyBhIHF1YWQgc3RyZWFtIGludG8gYSB0ZXh0IHN0cmVhbS5cbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gJ3JlYWRhYmxlLXN0cmVhbSc7XG5pbXBvcnQgTjNXcml0ZXIgZnJvbSAnLi9OM1dyaXRlcic7XG5cbi8vICMjIENvbnN0cnVjdG9yXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOM1N0cmVhbVdyaXRlciBleHRlbmRzIFRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBzdXBlcih7IGVuY29kaW5nOiAndXRmOCcsIHdyaXRhYmxlT2JqZWN0TW9kZTogdHJ1ZSB9KTtcblxuICAgIC8vIFNldCB1cCB3cml0ZXIgd2l0aCBhIGR1bW15IHN0cmVhbSBvYmplY3RcbiAgICBjb25zdCB3cml0ZXIgPSB0aGlzLl93cml0ZXIgPSBuZXcgTjNXcml0ZXIoe1xuICAgICAgd3JpdGU6IChxdWFkLCBlbmNvZGluZywgY2FsbGJhY2spID0+IHsgdGhpcy5wdXNoKHF1YWQpOyBjYWxsYmFjayAmJiBjYWxsYmFjaygpOyB9LFxuICAgICAgZW5kOiBjYWxsYmFjayA9PiB7IHRoaXMucHVzaChudWxsKTsgY2FsbGJhY2sgJiYgY2FsbGJhY2soKTsgfSxcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIC8vIEltcGxlbWVudCBUcmFuc2Zvcm0gbWV0aG9kcyBvbiB0b3Agb2Ygd3JpdGVyXG4gICAgdGhpcy5fdHJhbnNmb3JtID0gKHF1YWQsIGVuY29kaW5nLCBkb25lKSA9PiB7IHdyaXRlci5hZGRRdWFkKHF1YWQsIGRvbmUpOyB9O1xuICAgIHRoaXMuX2ZsdXNoID0gZG9uZSA9PiB7IHdyaXRlci5lbmQoZG9uZSk7IH07XG4gIH1cblxuLy8gIyMjIFNlcmlhbGl6ZXMgYSBzdHJlYW0gb2YgcXVhZHNcbiAgaW1wb3J0KHN0cmVhbSkge1xuICAgIHN0cmVhbS5vbignZGF0YScsICAgcXVhZCA9PiB7IHRoaXMud3JpdGUocXVhZCk7IH0pO1xuICAgIHN0cmVhbS5vbignZW5kJywgICAgKCkgPT4geyB0aGlzLmVuZCgpOyB9KTtcbiAgICBzdHJlYW0ub24oJ2Vycm9yJywgIGVycm9yID0+IHsgdGhpcy5lbWl0KCdlcnJvcicsIGVycm9yKTsgfSk7XG4gICAgc3RyZWFtLm9uKCdwcmVmaXgnLCAocHJlZml4LCBpcmkpID0+IHsgdGhpcy5fd3JpdGVyLmFkZFByZWZpeChwcmVmaXgsIGlyaSk7IH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG4iLCIvLyAqKk4zVXRpbCoqIHByb3ZpZGVzIE4zIHV0aWxpdHkgZnVuY3Rpb25zLlxuXG5pbXBvcnQgTjNEYXRhRmFjdG9yeSBmcm9tICcuL04zRGF0YUZhY3RvcnknO1xuXG4vLyBUZXN0cyB3aGV0aGVyIHRoZSBnaXZlbiB0ZXJtIHJlcHJlc2VudHMgYW4gSVJJXG5leHBvcnQgZnVuY3Rpb24gaXNOYW1lZE5vZGUodGVybSkge1xuICByZXR1cm4gISF0ZXJtICYmIHRlcm0udGVybVR5cGUgPT09ICdOYW1lZE5vZGUnO1xufVxuXG4vLyBUZXN0cyB3aGV0aGVyIHRoZSBnaXZlbiB0ZXJtIHJlcHJlc2VudHMgYSBibGFuayBub2RlXG5leHBvcnQgZnVuY3Rpb24gaXNCbGFua05vZGUodGVybSkge1xuICByZXR1cm4gISF0ZXJtICYmIHRlcm0udGVybVR5cGUgPT09ICdCbGFua05vZGUnO1xufVxuXG4vLyBUZXN0cyB3aGV0aGVyIHRoZSBnaXZlbiB0ZXJtIHJlcHJlc2VudHMgYSBsaXRlcmFsXG5leHBvcnQgZnVuY3Rpb24gaXNMaXRlcmFsKHRlcm0pIHtcbiAgcmV0dXJuICEhdGVybSAmJiB0ZXJtLnRlcm1UeXBlID09PSAnTGl0ZXJhbCc7XG59XG5cbi8vIFRlc3RzIHdoZXRoZXIgdGhlIGdpdmVuIHRlcm0gcmVwcmVzZW50cyBhIHZhcmlhYmxlXG5leHBvcnQgZnVuY3Rpb24gaXNWYXJpYWJsZSh0ZXJtKSB7XG4gIHJldHVybiAhIXRlcm0gJiYgdGVybS50ZXJtVHlwZSA9PT0gJ1ZhcmlhYmxlJztcbn1cblxuLy8gVGVzdHMgd2hldGhlciB0aGUgZ2l2ZW4gdGVybSByZXByZXNlbnRzIHRoZSBkZWZhdWx0IGdyYXBoXG5leHBvcnQgZnVuY3Rpb24gaXNEZWZhdWx0R3JhcGgodGVybSkge1xuICByZXR1cm4gISF0ZXJtICYmIHRlcm0udGVybVR5cGUgPT09ICdEZWZhdWx0R3JhcGgnO1xufVxuXG4vLyBUZXN0cyB3aGV0aGVyIHRoZSBnaXZlbiBxdWFkIGlzIGluIHRoZSBkZWZhdWx0IGdyYXBoXG5leHBvcnQgZnVuY3Rpb24gaW5EZWZhdWx0R3JhcGgocXVhZCkge1xuICByZXR1cm4gaXNEZWZhdWx0R3JhcGgocXVhZC5ncmFwaCk7XG59XG5cbi8vIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHByZXBlbmRzIHRoZSBnaXZlbiBJUkkgdG8gYSBsb2NhbCBuYW1lXG5leHBvcnQgZnVuY3Rpb24gcHJlZml4KGlyaSwgZmFjdG9yeSkge1xuICByZXR1cm4gcHJlZml4ZXMoeyAnJzogaXJpIH0sIGZhY3RvcnkpKCcnKTtcbn1cblxuLy8gQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgYWxsb3dzIHJlZ2lzdGVyaW5nIGFuZCBleHBhbmRpbmcgcHJlZml4ZXNcbmV4cG9ydCBmdW5jdGlvbiBwcmVmaXhlcyhkZWZhdWx0UHJlZml4ZXMsIGZhY3RvcnkpIHtcbiAgLy8gQWRkIGFsbCBvZiB0aGUgZGVmYXVsdCBwcmVmaXhlc1xuICBjb25zdCBwcmVmaXhlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGZvciAoY29uc3QgcHJlZml4IGluIGRlZmF1bHRQcmVmaXhlcylcbiAgICBwcm9jZXNzUHJlZml4KHByZWZpeCwgZGVmYXVsdFByZWZpeGVzW3ByZWZpeF0pO1xuICAvLyBTZXQgdGhlIGRlZmF1bHQgZmFjdG9yeSBpZiBub25lIHdhcyBzcGVjaWZpZWRcbiAgZmFjdG9yeSA9IGZhY3RvcnkgfHwgTjNEYXRhRmFjdG9yeTtcblxuICAvLyBSZWdpc3RlcnMgYSBuZXcgcHJlZml4IChpZiBhbiBJUkkgd2FzIHNwZWNpZmllZClcbiAgLy8gb3IgcmV0cmlldmVzIGEgZnVuY3Rpb24gdGhhdCBleHBhbmRzIGFuIGV4aXN0aW5nIHByZWZpeCAoaWYgbm8gSVJJIHdhcyBzcGVjaWZpZWQpXG4gIGZ1bmN0aW9uIHByb2Nlc3NQcmVmaXgocHJlZml4LCBpcmkpIHtcbiAgICAvLyBDcmVhdGUgYSBuZXcgcHJlZml4IGlmIGFuIElSSSBpcyBzcGVjaWZpZWQgb3IgdGhlIHByZWZpeCBkb2Vzbid0IGV4aXN0XG4gICAgaWYgKHR5cGVvZiBpcmkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBDcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGV4cGFuZHMgdGhlIHByZWZpeFxuICAgICAgY29uc3QgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgcHJlZml4ZXNbcHJlZml4XSA9IGxvY2FsID0+IHtcbiAgICAgICAgcmV0dXJuIGNhY2hlW2xvY2FsXSB8fCAoY2FjaGVbbG9jYWxdID0gZmFjdG9yeS5uYW1lZE5vZGUoaXJpICsgbG9jYWwpKTtcbiAgICAgIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKCEocHJlZml4IGluIHByZWZpeGVzKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIHByZWZpeDogJHtwcmVmaXh9YCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVmaXhlc1twcmVmaXhdO1xuICB9XG4gIHJldHVybiBwcm9jZXNzUHJlZml4O1xufVxuIiwiLy8gKipOM1dyaXRlcioqIHdyaXRlcyBOMyBkb2N1bWVudHMuXG5pbXBvcnQgbmFtZXNwYWNlcyBmcm9tICcuL0lSSXMnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBOM0RhdGFGYWN0b3J5LCBUZXJtIH0gZnJvbSAnLi9OM0RhdGFGYWN0b3J5JztcbmltcG9ydCB7IGlzRGVmYXVsdEdyYXBoIH0gZnJvbSAnLi9OM1V0aWwnO1xuXG5jb25zdCBERUZBVUxUR1JBUEggPSBOM0RhdGFGYWN0b3J5LmRlZmF1bHRHcmFwaCgpO1xuXG5jb25zdCB7IHJkZiwgeHNkIH0gPSBuYW1lc3BhY2VzO1xuXG4vLyBDaGFyYWN0ZXJzIGluIGxpdGVyYWxzIHRoYXQgcmVxdWlyZSBlc2NhcGluZ1xuY29uc3QgZXNjYXBlICAgID0gL1tcIlxcXFxcXHRcXG5cXHJcXGJcXGZcXHUwMDAwLVxcdTAwMTlcXHVkODAwLVxcdWRiZmZdLyxcbiAgICBlc2NhcGVBbGwgPSAvW1wiXFxcXFxcdFxcblxcclxcYlxcZlxcdTAwMDAtXFx1MDAxOV18W1xcdWQ4MDAtXFx1ZGJmZl1bXFx1ZGMwMC1cXHVkZmZmXS9nLFxuICAgIGVzY2FwZWRDaGFyYWN0ZXJzID0ge1xuICAgICAgJ1xcXFwnOiAnXFxcXFxcXFwnLCAnXCInOiAnXFxcXFwiJywgJ1xcdCc6ICdcXFxcdCcsXG4gICAgICAnXFxuJzogJ1xcXFxuJywgJ1xccic6ICdcXFxccicsICdcXGInOiAnXFxcXGInLCAnXFxmJzogJ1xcXFxmJyxcbiAgICB9O1xuXG4vLyAjIyBQbGFjZWhvbGRlciBjbGFzcyB0byByZXByZXNlbnQgYWxyZWFkeSBwcmV0dHktcHJpbnRlZCB0ZXJtc1xuY2xhc3MgU2VyaWFsaXplZFRlcm0gZXh0ZW5kcyBUZXJtIHtcbiAgLy8gUHJldHR5LXByaW50ZWQgbm9kZXMgYXJlIG5vdCBlcXVhbCB0byBhbnkgb3RoZXIgbm9kZVxuICAvLyAoZS5nLiwgW10gZG9lcyBub3QgZXF1YWwgW10pXG4gIGVxdWFscygpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gIyMgQ29uc3RydWN0b3JcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE4zV3JpdGVyIHtcbiAgY29uc3RydWN0b3Iob3V0cHV0U3RyZWFtLCBvcHRpb25zKSB7XG4gICAgLy8gIyMjIGBfcHJlZml4UmVnZXhgIG1hdGNoZXMgYSBwcmVmaXhlZCBuYW1lIG9yIElSSSB0aGF0IGJlZ2lucyB3aXRoIG9uZSBvZiB0aGUgYWRkZWQgcHJlZml4ZXNcbiAgICB0aGlzLl9wcmVmaXhSZWdleCA9IC8kMF4vO1xuXG4gICAgLy8gU2hpZnQgYXJndW1lbnRzIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYSBzdHJlYW1cbiAgICBpZiAob3V0cHV0U3RyZWFtICYmIHR5cGVvZiBvdXRwdXRTdHJlYW0ud3JpdGUgIT09ICdmdW5jdGlvbicpXG4gICAgICBvcHRpb25zID0gb3V0cHV0U3RyZWFtLCBvdXRwdXRTdHJlYW0gPSBudWxsO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIHRoaXMuX2xpc3RzID0gb3B0aW9ucy5saXN0cztcblxuICAgIC8vIElmIG5vIG91dHB1dCBzdHJlYW0gZ2l2ZW4sIHNlbmQgdGhlIG91dHB1dCBhcyBzdHJpbmcgdGhyb3VnaCB0aGUgZW5kIGNhbGxiYWNrXG4gICAgaWYgKCFvdXRwdXRTdHJlYW0pIHtcbiAgICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICAgIHRoaXMuX291dHB1dFN0cmVhbSA9IHtcbiAgICAgICAgd3JpdGUoY2h1bmssIGVuY29kaW5nLCBkb25lKSB7IG91dHB1dCArPSBjaHVuazsgZG9uZSAmJiBkb25lKCk7IH0sXG4gICAgICAgIGVuZDogZG9uZSA9PiB7IGRvbmUgJiYgZG9uZShudWxsLCBvdXRwdXQpOyB9LFxuICAgICAgfTtcbiAgICAgIHRoaXMuX2VuZFN0cmVhbSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fb3V0cHV0U3RyZWFtID0gb3V0cHV0U3RyZWFtO1xuICAgICAgdGhpcy5fZW5kU3RyZWFtID0gb3B0aW9ucy5lbmQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiAhIW9wdGlvbnMuZW5kO1xuICAgIH1cblxuICAgIC8vIEluaXRpYWxpemUgd3JpdGVyLCBkZXBlbmRpbmcgb24gdGhlIGZvcm1hdFxuICAgIHRoaXMuX3N1YmplY3QgPSBudWxsO1xuICAgIGlmICghKC90cmlwbGV8cXVhZC9pKS50ZXN0KG9wdGlvbnMuZm9ybWF0KSkge1xuICAgICAgdGhpcy5fbGluZU1vZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2dyYXBoID0gREVGQVVMVEdSQVBIO1xuICAgICAgdGhpcy5fYmFzZUlSSSA9IG9wdGlvbnMuYmFzZUlSSTtcbiAgICAgIHRoaXMuX3ByZWZpeElSSXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgb3B0aW9ucy5wcmVmaXhlcyAmJiB0aGlzLmFkZFByZWZpeGVzKG9wdGlvbnMucHJlZml4ZXMpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX2xpbmVNb2RlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX3dyaXRlUXVhZCA9IHRoaXMuX3dyaXRlUXVhZExpbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gIyMgUHJpdmF0ZSBtZXRob2RzXG5cbiAgLy8gIyMjIFdoZXRoZXIgdGhlIGN1cnJlbnQgZ3JhcGggaXMgdGhlIGRlZmF1bHQgZ3JhcGhcbiAgZ2V0IF9pbkRlZmF1bHRHcmFwaCgpIHtcbiAgICByZXR1cm4gREVGQVVMVEdSQVBILmVxdWFscyh0aGlzLl9ncmFwaCk7XG4gIH1cblxuICAvLyAjIyMgYF93cml0ZWAgd3JpdGVzIHRoZSBhcmd1bWVudCB0byB0aGUgb3V0cHV0IHN0cmVhbVxuICBfd3JpdGUoc3RyaW5nLCBjYWxsYmFjaykge1xuICAgIHRoaXMuX291dHB1dFN0cmVhbS53cml0ZShzdHJpbmcsICd1dGY4JywgY2FsbGJhY2spO1xuICB9XG5cbiAgLy8gIyMjIGBfd3JpdGVRdWFkYCB3cml0ZXMgdGhlIHF1YWQgdG8gdGhlIG91dHB1dCBzdHJlYW1cbiAgX3dyaXRlUXVhZChzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGgsIGRvbmUpIHtcbiAgICB0cnkge1xuICAgICAgLy8gV3JpdGUgdGhlIGdyYXBoJ3MgbGFiZWwgaWYgaXQgaGFzIGNoYW5nZWRcbiAgICAgIGlmICghZ3JhcGguZXF1YWxzKHRoaXMuX2dyYXBoKSkge1xuICAgICAgICAvLyBDbG9zZSB0aGUgcHJldmlvdXMgZ3JhcGggYW5kIHN0YXJ0IHRoZSBuZXcgb25lXG4gICAgICAgIHRoaXMuX3dyaXRlKCh0aGlzLl9zdWJqZWN0ID09PSBudWxsID8gJycgOiAodGhpcy5faW5EZWZhdWx0R3JhcGggPyAnLlxcbicgOiAnXFxufVxcbicpKSArXG4gICAgICAgICAgICAgICAgICAgIChERUZBVUxUR1JBUEguZXF1YWxzKGdyYXBoKSA/ICcnIDogYCR7dGhpcy5fZW5jb2RlSXJpT3JCbGFuayhncmFwaCl9IHtcXG5gKSk7XG4gICAgICAgIHRoaXMuX2dyYXBoID0gZ3JhcGg7XG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gRG9uJ3QgcmVwZWF0IHRoZSBzdWJqZWN0IGlmIGl0J3MgdGhlIHNhbWVcbiAgICAgIGlmIChzdWJqZWN0LmVxdWFscyh0aGlzLl9zdWJqZWN0KSkge1xuICAgICAgICAvLyBEb24ndCByZXBlYXQgdGhlIHByZWRpY2F0ZSBpZiBpdCdzIHRoZSBzYW1lXG4gICAgICAgIGlmIChwcmVkaWNhdGUuZXF1YWxzKHRoaXMuX3ByZWRpY2F0ZSkpXG4gICAgICAgICAgdGhpcy5fd3JpdGUoYCwgJHt0aGlzLl9lbmNvZGVPYmplY3Qob2JqZWN0KX1gLCBkb25lKTtcbiAgICAgICAgLy8gU2FtZSBzdWJqZWN0LCBkaWZmZXJlbnQgcHJlZGljYXRlXG4gICAgICAgIGVsc2VcbiAgICAgICAgICB0aGlzLl93cml0ZShgO1xcbiAgICAke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuY29kZVByZWRpY2F0ZSh0aGlzLl9wcmVkaWNhdGUgPSBwcmVkaWNhdGUpfSAke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuY29kZU9iamVjdChvYmplY3QpfWAsIGRvbmUpO1xuICAgICAgfVxuICAgICAgLy8gRGlmZmVyZW50IHN1YmplY3Q7IHdyaXRlIHRoZSB3aG9sZSBxdWFkXG4gICAgICBlbHNlXG4gICAgICAgIHRoaXMuX3dyaXRlKGAkeyh0aGlzLl9zdWJqZWN0ID09PSBudWxsID8gJycgOiAnLlxcbicpICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5jb2RlU3ViamVjdCh0aGlzLl9zdWJqZWN0ID0gc3ViamVjdCl9ICR7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuY29kZVByZWRpY2F0ZSh0aGlzLl9wcmVkaWNhdGUgPSBwcmVkaWNhdGUpfSAke1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbmNvZGVPYmplY3Qob2JqZWN0KX1gLCBkb25lKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGRvbmUgJiYgZG9uZShlcnJvcik7IH1cbiAgfVxuXG4gIC8vICMjIyBgX3dyaXRlUXVhZExpbmVgIHdyaXRlcyB0aGUgcXVhZCB0byB0aGUgb3V0cHV0IHN0cmVhbSBhcyBhIHNpbmdsZSBsaW5lXG4gIF93cml0ZVF1YWRMaW5lKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCwgZG9uZSkge1xuICAgIC8vIFdyaXRlIHRoZSBxdWFkIHdpdGhvdXQgcHJlZml4ZXNcbiAgICBkZWxldGUgdGhpcy5fcHJlZml4TWF0Y2g7XG4gICAgdGhpcy5fd3JpdGUodGhpcy5xdWFkVG9TdHJpbmcoc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoKSwgZG9uZSk7XG4gIH1cblxuICAvLyAjIyMgYHF1YWRUb1N0cmluZ2Agc2VyaWFsaXplcyBhIHF1YWQgYXMgYSBzdHJpbmdcbiAgcXVhZFRvU3RyaW5nKHN1YmplY3QsIHByZWRpY2F0ZSwgb2JqZWN0LCBncmFwaCkge1xuICAgIHJldHVybiAgYCR7dGhpcy5fZW5jb2RlU3ViamVjdChzdWJqZWN0KX0gJHtcbiAgICAgICAgICAgIHRoaXMuX2VuY29kZUlyaU9yQmxhbmsocHJlZGljYXRlKX0gJHtcbiAgICAgICAgICAgIHRoaXMuX2VuY29kZU9iamVjdChvYmplY3QpXG4gICAgICAgICAgICB9JHtncmFwaCAmJiBncmFwaC52YWx1ZSA/IGAgJHt0aGlzLl9lbmNvZGVJcmlPckJsYW5rKGdyYXBoKX0gLlxcbmAgOiAnIC5cXG4nfWA7XG4gIH1cblxuICAvLyAjIyMgYHF1YWRzVG9TdHJpbmdgIHNlcmlhbGl6ZXMgYW4gYXJyYXkgb2YgcXVhZHMgYXMgYSBzdHJpbmdcbiAgcXVhZHNUb1N0cmluZyhxdWFkcykge1xuICAgIHJldHVybiBxdWFkcy5tYXAodCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5xdWFkVG9TdHJpbmcodC5zdWJqZWN0LCB0LnByZWRpY2F0ZSwgdC5vYmplY3QsIHQuZ3JhcGgpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9XG5cbiAgLy8gIyMjIGBfZW5jb2RlU3ViamVjdGAgcmVwcmVzZW50cyBhIHN1YmplY3RcbiAgX2VuY29kZVN1YmplY3QoZW50aXR5KSB7XG4gICAgcmV0dXJuIGVudGl0eS50ZXJtVHlwZSA9PT0gJ1F1YWQnID9cbiAgICAgIHRoaXMuX2VuY29kZVF1YWQoZW50aXR5KSA6IHRoaXMuX2VuY29kZUlyaU9yQmxhbmsoZW50aXR5KTtcbiAgfVxuXG4gIC8vICMjIyBgX2VuY29kZUlyaU9yQmxhbmtgIHJlcHJlc2VudHMgYW4gSVJJIG9yIGJsYW5rIG5vZGVcbiAgX2VuY29kZUlyaU9yQmxhbmsoZW50aXR5KSB7XG4gICAgLy8gQSBibGFuayBub2RlIG9yIGxpc3QgaXMgcmVwcmVzZW50ZWQgYXMtaXNcbiAgICBpZiAoZW50aXR5LnRlcm1UeXBlICE9PSAnTmFtZWROb2RlJykge1xuICAgICAgLy8gSWYgaXQgaXMgYSBsaXN0IGhlYWQsIHByZXR0eS1wcmludCBpdFxuICAgICAgaWYgKHRoaXMuX2xpc3RzICYmIChlbnRpdHkudmFsdWUgaW4gdGhpcy5fbGlzdHMpKVxuICAgICAgICBlbnRpdHkgPSB0aGlzLmxpc3QodGhpcy5fbGlzdHNbZW50aXR5LnZhbHVlXSk7XG4gICAgICByZXR1cm4gJ2lkJyBpbiBlbnRpdHkgPyBlbnRpdHkuaWQgOiBgXzoke2VudGl0eS52YWx1ZX1gO1xuICAgIH1cbiAgICBsZXQgaXJpID0gZW50aXR5LnZhbHVlO1xuICAgIC8vIFVzZSByZWxhdGl2ZSBJUklzIGlmIHJlcXVlc3RlZCBhbmQgcG9zc2libGVcbiAgICBpZiAodGhpcy5fYmFzZUlSSSAmJiBpcmkuc3RhcnRzV2l0aCh0aGlzLl9iYXNlSVJJKSlcbiAgICAgIGlyaSA9IGlyaS5zdWJzdHIodGhpcy5fYmFzZUlSSS5sZW5ndGgpO1xuICAgIC8vIEVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnNcbiAgICBpZiAoZXNjYXBlLnRlc3QoaXJpKSlcbiAgICAgIGlyaSA9IGlyaS5yZXBsYWNlKGVzY2FwZUFsbCwgY2hhcmFjdGVyUmVwbGFjZXIpO1xuICAgIC8vIFRyeSB0byByZXByZXNlbnQgdGhlIElSSSBhcyBwcmVmaXhlZCBuYW1lXG4gICAgY29uc3QgcHJlZml4TWF0Y2ggPSB0aGlzLl9wcmVmaXhSZWdleC5leGVjKGlyaSk7XG4gICAgcmV0dXJuICFwcmVmaXhNYXRjaCA/IGA8JHtpcml9PmAgOlxuICAgICAgICAgICAoIXByZWZpeE1hdGNoWzFdID8gaXJpIDogdGhpcy5fcHJlZml4SVJJc1twcmVmaXhNYXRjaFsxXV0gKyBwcmVmaXhNYXRjaFsyXSk7XG4gIH1cblxuICAvLyAjIyMgYF9lbmNvZGVMaXRlcmFsYCByZXByZXNlbnRzIGEgbGl0ZXJhbFxuICBfZW5jb2RlTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgLy8gRXNjYXBlIHNwZWNpYWwgY2hhcmFjdGVyc1xuICAgIGxldCB2YWx1ZSA9IGxpdGVyYWwudmFsdWU7XG4gICAgaWYgKGVzY2FwZS50ZXN0KHZhbHVlKSlcbiAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShlc2NhcGVBbGwsIGNoYXJhY3RlclJlcGxhY2VyKTtcblxuICAgIC8vIFdyaXRlIGEgbGFuZ3VhZ2UtdGFnZ2VkIGxpdGVyYWxcbiAgICBpZiAobGl0ZXJhbC5sYW5ndWFnZSlcbiAgICAgIHJldHVybiBgXCIke3ZhbHVlfVwiQCR7bGl0ZXJhbC5sYW5ndWFnZX1gO1xuXG4gICAgLy8gV3JpdGUgZGVkaWNhdGVkIGxpdGVyYWxzIHBlciBkYXRhIHR5cGVcbiAgICBpZiAodGhpcy5fbGluZU1vZGUpIHtcbiAgICAgIC8vIE9ubHkgYWJicmV2aWF0ZSBzdHJpbmdzIGluIE4tVHJpcGxlcyBvciBOLVF1YWRzXG4gICAgICBpZiAobGl0ZXJhbC5kYXRhdHlwZS52YWx1ZSA9PT0geHNkLnN0cmluZylcbiAgICAgICAgcmV0dXJuIGBcIiR7dmFsdWV9XCJgO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFVzZSBjb21tb24gZGF0YXR5cGUgYWJicmV2aWF0aW9ucyBpbiBUdXJ0bGUgb3IgVHJpR1xuICAgICAgc3dpdGNoIChsaXRlcmFsLmRhdGF0eXBlLnZhbHVlKSB7XG4gICAgICBjYXNlIHhzZC5zdHJpbmc6XG4gICAgICAgIHJldHVybiBgXCIke3ZhbHVlfVwiYDtcbiAgICAgIGNhc2UgeHNkLmJvb2xlYW46XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ3RydWUnIHx8IHZhbHVlID09PSAnZmFsc2UnKVxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHhzZC5pbnRlZ2VyOlxuICAgICAgICBpZiAoL15bKy1dP1xcZCskLy50ZXN0KHZhbHVlKSlcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSB4c2QuZGVjaW1hbDpcbiAgICAgICAgaWYgKC9eWystXT9cXGQqXFwuXFxkKyQvLnRlc3QodmFsdWUpKVxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHhzZC5kb3VibGU6XG4gICAgICAgIGlmICgvXlsrLV0/KD86XFxkK1xcLlxcZCp8XFwuP1xcZCspW2VFXVsrLV0/XFxkKyQvLnRlc3QodmFsdWUpKVxuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV3JpdGUgYSByZWd1bGFyIGRhdGF0eXBlZCBsaXRlcmFsXG4gICAgcmV0dXJuIGBcIiR7dmFsdWV9XCJeXiR7dGhpcy5fZW5jb2RlSXJpT3JCbGFuayhsaXRlcmFsLmRhdGF0eXBlKX1gO1xuICB9XG5cbiAgLy8gIyMjIGBfZW5jb2RlUHJlZGljYXRlYCByZXByZXNlbnRzIGEgcHJlZGljYXRlXG4gIF9lbmNvZGVQcmVkaWNhdGUocHJlZGljYXRlKSB7XG4gICAgcmV0dXJuIHByZWRpY2F0ZS52YWx1ZSA9PT0gcmRmLnR5cGUgPyAnYScgOiB0aGlzLl9lbmNvZGVJcmlPckJsYW5rKHByZWRpY2F0ZSk7XG4gIH1cblxuICAvLyAjIyMgYF9lbmNvZGVPYmplY3RgIHJlcHJlc2VudHMgYW4gb2JqZWN0XG4gIF9lbmNvZGVPYmplY3Qob2JqZWN0KSB7XG4gICAgc3dpdGNoIChvYmplY3QudGVybVR5cGUpIHtcbiAgICBjYXNlICdRdWFkJzpcbiAgICAgIHJldHVybiB0aGlzLl9lbmNvZGVRdWFkKG9iamVjdCk7XG4gICAgY2FzZSAnTGl0ZXJhbCc6XG4gICAgICByZXR1cm4gdGhpcy5fZW5jb2RlTGl0ZXJhbChvYmplY3QpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdGhpcy5fZW5jb2RlSXJpT3JCbGFuayhvYmplY3QpO1xuICAgIH1cbiAgfVxuXG4gIC8vICMjIyBgX2VuY29kZVF1YWRgIGVuY29kZXMgYW4gUkRGKiBxdWFkXG4gIF9lbmNvZGVRdWFkKHsgc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoIH0pIHtcbiAgICByZXR1cm4gYDw8JHtcbiAgICAgIHRoaXMuX2VuY29kZVN1YmplY3Qoc3ViamVjdCl9ICR7XG4gICAgICB0aGlzLl9lbmNvZGVQcmVkaWNhdGUocHJlZGljYXRlKX0gJHtcbiAgICAgIHRoaXMuX2VuY29kZU9iamVjdChvYmplY3QpfSR7XG4gICAgICBpc0RlZmF1bHRHcmFwaChncmFwaCkgPyAnJyA6IGAgJHt0aGlzLl9lbmNvZGVJcmlPckJsYW5rKGdyYXBoKX1gfT4+YDtcbiAgfVxuXG4gIC8vICMjIyBgX2Jsb2NrZWRXcml0ZWAgcmVwbGFjZXMgYF93cml0ZWAgYWZ0ZXIgdGhlIHdyaXRlciBoYXMgYmVlbiBjbG9zZWRcbiAgX2Jsb2NrZWRXcml0ZSgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCB3cml0ZSBiZWNhdXNlIHRoZSB3cml0ZXIgaGFzIGJlZW4gY2xvc2VkLicpO1xuICB9XG5cbiAgLy8gIyMjIGBhZGRRdWFkYCBhZGRzIHRoZSBxdWFkIHRvIHRoZSBvdXRwdXQgc3RyZWFtXG4gIGFkZFF1YWQoc3ViamVjdCwgcHJlZGljYXRlLCBvYmplY3QsIGdyYXBoLCBkb25lKSB7XG4gICAgLy8gVGhlIHF1YWQgd2FzIGdpdmVuIGFzIGFuIG9iamVjdCwgc28gc2hpZnQgcGFyYW1ldGVyc1xuICAgIGlmIChvYmplY3QgPT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuX3dyaXRlUXVhZChzdWJqZWN0LnN1YmplY3QsIHN1YmplY3QucHJlZGljYXRlLCBzdWJqZWN0Lm9iamVjdCwgc3ViamVjdC5ncmFwaCwgcHJlZGljYXRlKTtcbiAgICAvLyBUaGUgb3B0aW9uYWwgYGdyYXBoYCBwYXJhbWV0ZXIgd2FzIG5vdCBwcm92aWRlZFxuICAgIGVsc2UgaWYgKHR5cGVvZiBncmFwaCA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgIHRoaXMuX3dyaXRlUXVhZChzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgREVGQVVMVEdSQVBILCBncmFwaCk7XG4gICAgLy8gVGhlIGBncmFwaGAgcGFyYW1ldGVyIHdhcyBwcm92aWRlZFxuICAgIGVsc2VcbiAgICAgIHRoaXMuX3dyaXRlUXVhZChzdWJqZWN0LCBwcmVkaWNhdGUsIG9iamVjdCwgZ3JhcGggfHwgREVGQVVMVEdSQVBILCBkb25lKTtcbiAgfVxuXG4gIC8vICMjIyBgYWRkUXVhZHNgIGFkZHMgdGhlIHF1YWRzIHRvIHRoZSBvdXRwdXQgc3RyZWFtXG4gIGFkZFF1YWRzKHF1YWRzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWFkcy5sZW5ndGg7IGkrKylcbiAgICAgIHRoaXMuYWRkUXVhZChxdWFkc1tpXSk7XG4gIH1cblxuICAvLyAjIyMgYGFkZFByZWZpeGAgYWRkcyB0aGUgcHJlZml4IHRvIHRoZSBvdXRwdXQgc3RyZWFtXG4gIGFkZFByZWZpeChwcmVmaXgsIGlyaSwgZG9uZSkge1xuICAgIGNvbnN0IHByZWZpeGVzID0ge307XG4gICAgcHJlZml4ZXNbcHJlZml4XSA9IGlyaTtcbiAgICB0aGlzLmFkZFByZWZpeGVzKHByZWZpeGVzLCBkb25lKTtcbiAgfVxuXG4gIC8vICMjIyBgYWRkUHJlZml4ZXNgIGFkZHMgdGhlIHByZWZpeGVzIHRvIHRoZSBvdXRwdXQgc3RyZWFtXG4gIGFkZFByZWZpeGVzKHByZWZpeGVzLCBkb25lKSB7XG4gICAgLy8gSWdub3JlIHByZWZpeGVzIGlmIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIHNlcmlhbGl6YXRpb25cbiAgICBpZiAoIXRoaXMuX3ByZWZpeElSSXMpXG4gICAgICByZXR1cm4gZG9uZSAmJiBkb25lKCk7XG5cbiAgICAvLyBXcml0ZSBhbGwgbmV3IHByZWZpeGVzXG4gICAgbGV0IGhhc1ByZWZpeGVzID0gZmFsc2U7XG4gICAgZm9yIChsZXQgcHJlZml4IGluIHByZWZpeGVzKSB7XG4gICAgICBsZXQgaXJpID0gcHJlZml4ZXNbcHJlZml4XTtcbiAgICAgIGlmICh0eXBlb2YgaXJpICE9PSAnc3RyaW5nJylcbiAgICAgICAgaXJpID0gaXJpLnZhbHVlO1xuICAgICAgaGFzUHJlZml4ZXMgPSB0cnVlO1xuICAgICAgLy8gRmluaXNoIGEgcG9zc2libGUgcGVuZGluZyBxdWFkXG4gICAgICBpZiAodGhpcy5fc3ViamVjdCAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl93cml0ZSh0aGlzLl9pbkRlZmF1bHRHcmFwaCA/ICcuXFxuJyA6ICdcXG59XFxuJyk7XG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBudWxsLCB0aGlzLl9ncmFwaCA9ICcnO1xuICAgICAgfVxuICAgICAgLy8gU3RvcmUgYW5kIHdyaXRlIHRoZSBwcmVmaXhcbiAgICAgIHRoaXMuX3ByZWZpeElSSXNbaXJpXSA9IChwcmVmaXggKz0gJzonKTtcbiAgICAgIHRoaXMuX3dyaXRlKGBAcHJlZml4ICR7cHJlZml4fSA8JHtpcml9Pi5cXG5gKTtcbiAgICB9XG4gICAgLy8gUmVjcmVhdGUgdGhlIHByZWZpeCBtYXRjaGVyXG4gICAgaWYgKGhhc1ByZWZpeGVzKSB7XG4gICAgICBsZXQgSVJJbGlzdCA9ICcnLCBwcmVmaXhMaXN0ID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHByZWZpeElSSSBpbiB0aGlzLl9wcmVmaXhJUklzKSB7XG4gICAgICAgIElSSWxpc3QgKz0gSVJJbGlzdCA/IGB8JHtwcmVmaXhJUkl9YCA6IHByZWZpeElSSTtcbiAgICAgICAgcHJlZml4TGlzdCArPSAocHJlZml4TGlzdCA/ICd8JyA6ICcnKSArIHRoaXMuX3ByZWZpeElSSXNbcHJlZml4SVJJXTtcbiAgICAgIH1cbiAgICAgIElSSWxpc3QgPSBJUklsaXN0LnJlcGxhY2UoL1tcXF1cXC9cXChcXClcXCpcXCtcXD9cXC5cXFxcXFwkXS9nLCAnXFxcXCQmJyk7XG4gICAgICB0aGlzLl9wcmVmaXhSZWdleCA9IG5ldyBSZWdFeHAoYF4oPzoke3ByZWZpeExpc3R9KVteXFwvXSokfGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBeKCR7SVJJbGlzdH0pKFthLXpBLVpdW1xcXFwtX2EtekEtWjAtOV0qKSRgKTtcbiAgICB9XG4gICAgLy8gRW5kIGEgcHJlZml4IGJsb2NrIHdpdGggYSBuZXdsaW5lXG4gICAgdGhpcy5fd3JpdGUoaGFzUHJlZml4ZXMgPyAnXFxuJyA6ICcnLCBkb25lKTtcbiAgfVxuXG4gIC8vICMjIyBgYmxhbmtgIGNyZWF0ZXMgYSBibGFuayBub2RlIHdpdGggdGhlIGdpdmVuIGNvbnRlbnRcbiAgYmxhbmsocHJlZGljYXRlLCBvYmplY3QpIHtcbiAgICBsZXQgY2hpbGRyZW4gPSBwcmVkaWNhdGUsIGNoaWxkLCBsZW5ndGg7XG4gICAgLy8gRW1wdHkgYmxhbmsgbm9kZVxuICAgIGlmIChwcmVkaWNhdGUgPT09IHVuZGVmaW5lZClcbiAgICAgIGNoaWxkcmVuID0gW107XG4gICAgLy8gQmxhbmsgbm9kZSBwYXNzZWQgYXMgYmxhbmsoVGVybShcInByZWRpY2F0ZVwiKSwgVGVybShcIm9iamVjdFwiKSlcbiAgICBlbHNlIGlmIChwcmVkaWNhdGUudGVybVR5cGUpXG4gICAgICBjaGlsZHJlbiA9IFt7IHByZWRpY2F0ZTogcHJlZGljYXRlLCBvYmplY3Q6IG9iamVjdCB9XTtcbiAgICAvLyBCbGFuayBub2RlIHBhc3NlZCBhcyBibGFuayh7IHByZWRpY2F0ZTogcHJlZGljYXRlLCBvYmplY3Q6IG9iamVjdCB9KVxuICAgIGVsc2UgaWYgKCEoJ2xlbmd0aCcgaW4gcHJlZGljYXRlKSlcbiAgICAgIGNoaWxkcmVuID0gW3ByZWRpY2F0ZV07XG5cbiAgICBzd2l0Y2ggKGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgIC8vIEdlbmVyYXRlIGFuIGVtcHR5IGJsYW5rIG5vZGVcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gbmV3IFNlcmlhbGl6ZWRUZXJtKCdbXScpO1xuICAgIC8vIEdlbmVyYXRlIGEgbm9uLW5lc3RlZCBvbmUtdHJpcGxlIGJsYW5rIG5vZGVcbiAgICBjYXNlIDE6XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuWzBdO1xuICAgICAgaWYgKCEoY2hpbGQub2JqZWN0IGluc3RhbmNlb2YgU2VyaWFsaXplZFRlcm0pKVxuICAgICAgICByZXR1cm4gbmV3IFNlcmlhbGl6ZWRUZXJtKGBbICR7dGhpcy5fZW5jb2RlUHJlZGljYXRlKGNoaWxkLnByZWRpY2F0ZSl9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5jb2RlT2JqZWN0KGNoaWxkLm9iamVjdCl9IF1gKTtcbiAgICAvLyBHZW5lcmF0ZSBhIG11bHRpLXRyaXBsZSBvciBuZXN0ZWQgYmxhbmsgbm9kZVxuICAgIGRlZmF1bHQ6XG4gICAgICBsZXQgY29udGVudHMgPSAnWyc7XG4gICAgICAvLyBXcml0ZSBhbGwgdHJpcGxlcyBpbiBvcmRlclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAvLyBXcml0ZSBvbmx5IHRoZSBvYmplY3QgaXMgdGhlIHByZWRpY2F0ZSBpcyB0aGUgc2FtZSBhcyB0aGUgcHJldmlvdXNcbiAgICAgICAgaWYgKGNoaWxkLnByZWRpY2F0ZS5lcXVhbHMocHJlZGljYXRlKSlcbiAgICAgICAgICBjb250ZW50cyArPSBgLCAke3RoaXMuX2VuY29kZU9iamVjdChjaGlsZC5vYmplY3QpfWA7XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd3JpdGUgdGhlIHByZWRpY2F0ZSBhbmQgdGhlIG9iamVjdFxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250ZW50cyArPSBgJHsoaSA/ICc7XFxuICAnIDogJ1xcbiAgJykgK1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuY29kZVByZWRpY2F0ZShjaGlsZC5wcmVkaWNhdGUpfSAke1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuY29kZU9iamVjdChjaGlsZC5vYmplY3QpfWA7XG4gICAgICAgICAgcHJlZGljYXRlID0gY2hpbGQucHJlZGljYXRlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFNlcmlhbGl6ZWRUZXJtKGAke2NvbnRlbnRzfVxcbl1gKTtcbiAgICB9XG4gIH1cblxuICAvLyAjIyMgYGxpc3RgIGNyZWF0ZXMgYSBsaXN0IG5vZGUgd2l0aCB0aGUgZ2l2ZW4gY29udGVudFxuICBsaXN0KGVsZW1lbnRzKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gZWxlbWVudHMgJiYgZWxlbWVudHMubGVuZ3RoIHx8IDAsIGNvbnRlbnRzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgIGNvbnRlbnRzW2ldID0gdGhpcy5fZW5jb2RlT2JqZWN0KGVsZW1lbnRzW2ldKTtcbiAgICByZXR1cm4gbmV3IFNlcmlhbGl6ZWRUZXJtKGAoJHtjb250ZW50cy5qb2luKCcgJyl9KWApO1xuICB9XG5cbiAgLy8gIyMjIGBlbmRgIHNpZ25hbHMgdGhlIGVuZCBvZiB0aGUgb3V0cHV0IHN0cmVhbVxuICBlbmQoZG9uZSkge1xuICAgIC8vIEZpbmlzaCBhIHBvc3NpYmxlIHBlbmRpbmcgcXVhZFxuICAgIGlmICh0aGlzLl9zdWJqZWN0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLl93cml0ZSh0aGlzLl9pbkRlZmF1bHRHcmFwaCA/ICcuXFxuJyA6ICdcXG59XFxuJyk7XG4gICAgICB0aGlzLl9zdWJqZWN0ID0gbnVsbDtcbiAgICB9XG4gICAgLy8gRGlzYWxsb3cgZnVydGhlciB3cml0aW5nXG4gICAgdGhpcy5fd3JpdGUgPSB0aGlzLl9ibG9ja2VkV3JpdGU7XG5cbiAgICAvLyBUcnkgdG8gZW5kIHRoZSB1bmRlcmx5aW5nIHN0cmVhbSwgZW5zdXJpbmcgZG9uZSBpcyBjYWxsZWQgZXhhY3RseSBvbmUgdGltZVxuICAgIGxldCBzaW5nbGVEb25lID0gZG9uZSAmJiAoKGVycm9yLCByZXN1bHQpID0+IHsgc2luZ2xlRG9uZSA9IG51bGwsIGRvbmUoZXJyb3IsIHJlc3VsdCk7IH0pO1xuICAgIGlmICh0aGlzLl9lbmRTdHJlYW0pIHtcbiAgICAgIHRyeSB7IHJldHVybiB0aGlzLl9vdXRwdXRTdHJlYW0uZW5kKHNpbmdsZURvbmUpOyB9XG4gICAgICBjYXRjaCAoZXJyb3IpIHsgLyogZXJyb3IgY2xvc2luZyBzdHJlYW0gKi8gfVxuICAgIH1cbiAgICBzaW5nbGVEb25lICYmIHNpbmdsZURvbmUoKTtcbiAgfVxufVxuXG4vLyBSZXBsYWNlcyBhIGNoYXJhY3RlciBieSBpdHMgZXNjYXBlZCB2ZXJzaW9uXG5mdW5jdGlvbiBjaGFyYWN0ZXJSZXBsYWNlcihjaGFyYWN0ZXIpIHtcbiAgLy8gUmVwbGFjZSBhIHNpbmdsZSBjaGFyYWN0ZXIgYnkgaXRzIGVzY2FwZWQgdmVyc2lvblxuICBsZXQgcmVzdWx0ID0gZXNjYXBlZENoYXJhY3RlcnNbY2hhcmFjdGVyXTtcbiAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gUmVwbGFjZSBhIHNpbmdsZSBjaGFyYWN0ZXIgd2l0aCBpdHMgNC1iaXQgdW5pY29kZSBlc2NhcGUgc2VxdWVuY2VcbiAgICBpZiAoY2hhcmFjdGVyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmVzdWx0ID0gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpO1xuICAgICAgcmVzdWx0ID0gJ1xcXFx1MDAwMCcuc3Vic3RyKDAsIDYgLSByZXN1bHQubGVuZ3RoKSArIHJlc3VsdDtcbiAgICB9XG4gICAgLy8gUmVwbGFjZSBhIHN1cnJvZ2F0ZSBwYWlyIHdpdGggaXRzIDgtYml0IHVuaWNvZGUgZXNjYXBlIHNlcXVlbmNlXG4gICAgZWxzZSB7XG4gICAgICByZXN1bHQgPSAoKGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIC0gMHhEODAwKSAqIDB4NDAwICtcbiAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLmNoYXJDb2RlQXQoMSkgKyAweDI0MDApLnRvU3RyaW5nKDE2KTtcbiAgICAgIHJlc3VsdCA9ICdcXFxcVTAwMDAwMDAwJy5zdWJzdHIoMCwgMTAgLSByZXN1bHQubGVuZ3RoKSArIHJlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCBMZXhlciBmcm9tICcuL04zTGV4ZXInO1xuaW1wb3J0IFBhcnNlciBmcm9tICcuL04zUGFyc2VyJztcbmltcG9ydCBXcml0ZXIgZnJvbSAnLi9OM1dyaXRlcic7XG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9OM1N0b3JlJztcbmltcG9ydCBTdHJlYW1QYXJzZXIgZnJvbSAnLi9OM1N0cmVhbVBhcnNlcic7XG5pbXBvcnQgU3RyZWFtV3JpdGVyIGZyb20gJy4vTjNTdHJlYW1Xcml0ZXInO1xuaW1wb3J0ICogYXMgVXRpbCBmcm9tICcuL04zVXRpbCc7XG5cbmltcG9ydCB7XG4gIGRlZmF1bHQgYXMgRGF0YUZhY3RvcnksXG5cbiAgVGVybSxcbiAgTmFtZWROb2RlLFxuICBMaXRlcmFsLFxuICBCbGFua05vZGUsXG4gIFZhcmlhYmxlLFxuICBEZWZhdWx0R3JhcGgsXG4gIFF1YWQsXG4gIFRyaXBsZSxcblxuICB0ZXJtRnJvbUlkLFxuICB0ZXJtVG9JZCxcbn0gZnJvbSAnLi9OM0RhdGFGYWN0b3J5JztcblxuZXhwb3J0IHtcbiAgTGV4ZXIsXG4gIFBhcnNlcixcbiAgV3JpdGVyLFxuICBTdG9yZSxcbiAgU3RyZWFtUGFyc2VyLFxuICBTdHJlYW1Xcml0ZXIsXG4gIFV0aWwsXG5cbiAgRGF0YUZhY3RvcnksXG5cbiAgVGVybSxcbiAgTmFtZWROb2RlLFxuICBMaXRlcmFsLFxuICBCbGFua05vZGUsXG4gIFZhcmlhYmxlLFxuICBEZWZhdWx0R3JhcGgsXG4gIFF1YWQsXG4gIFRyaXBsZSxcblxuICB0ZXJtRnJvbUlkLFxuICB0ZXJtVG9JZCxcbn07XG4iLCIvKiEgcXVldWUtbWljcm90YXNrLiBNSVQgTGljZW5zZS4gRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnL29wZW5zb3VyY2U+ICovXG5sZXQgcHJvbWlzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBxdWV1ZU1pY3JvdGFzayA9PT0gJ2Z1bmN0aW9uJ1xuICA/IHF1ZXVlTWljcm90YXNrLmJpbmQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpXG4gIC8vIHJldXNlIHJlc29sdmVkIHByb21pc2UsIGFuZCBhbGxvY2F0ZSBpdCBsYXppbHlcbiAgOiBjYiA9PiAocHJvbWlzZSB8fCAocHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpKSlcbiAgICAudGhlbihjYilcbiAgICAuY2F0Y2goZXJyID0+IHNldFRpbWVvdXQoKCkgPT4geyB0aHJvdyBlcnIgfSwgMCkpXG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9