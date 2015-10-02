/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */

var weak = require('weak');

// Call the given callback on the object immediately prior to garbage collection.
function finalize(obj, callback) {
  var weakref = weak(obj);
  weak(obj, function () {
    // We avoid closing over obj here because that reference would keep obj alive
    // and the callback would never get triggered.
    var strongref = weak.get(weakref);
    if (!strongref)
      return;
    callback.call(strongref);
  });
}

module.exports = finalize;
