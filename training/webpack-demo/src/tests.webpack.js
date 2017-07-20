/**
 * Created by shob on 20-07-2017.
 */
// tests.webpack.js
var context = require.context('./src', true, /-test\.jsx?$/);
context.keys().forEach(context);