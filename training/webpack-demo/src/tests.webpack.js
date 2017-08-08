/**
 * Created by shob on 20-07-2017.
 */
// tests.webpack.src
var context = require.context('./src', true, /-test\.jsx?$/);
context.keys().forEach(context);