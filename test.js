var finalize = require('./finalize.js');

var finalized = false;
var ok = 0;

var obj = { x: 1 };
finalize(obj, function () {
  if (this.x == 1)
    finalized = true;
});
global.gc();
if (!finalized)
  ++ok;
obj = null;
global.gc();
if (finalized)
  ++ok;

process.exit((ok == 2) ? 0 : -1);
