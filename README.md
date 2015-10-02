finalize
==============================

Node module to register a garbage collector callback for objects

## Usage

```javascript
var finalize = require('finalize');

var obj = { x: 1337 };
finalize(obj, function () {
  console.log(this.x); // this will print '1337'
});
global.gc();
// nothing will happen, var obj above holds obj alive
obj = null;
global.gc();
// the previous line should trigger the callback above
```
