function curry(fn, n) {
    // If `n` argument was omitted, use the function .length property.
    if (typeof n !== 'number') {
        n = fn.length;
    }

    function getCurriedFn(prev) {
        return function(arg) {
            // Concat the just-specified argument with the array of
            // previously-specified arguments.
            var args = prev.concat(arg);
            if (args.length < n) {
                // Not all arguments have been satisfied yet, so return a curried
                // version of the original function.
                return getCurriedFn(args);
            } else {
                // Otherwise, invoke the original function with the arguments and
                // return its value.
                return fn.apply(this, args);
            }
        };
    }

    // Return a curried version of the original function.
    return getCurriedFn([]);
}


var i = 0;
function a(arg1, arg2, arg3) {
    return ++i + ': ' + arg1 + ', ' + arg2 + ', ' + arg3;
}


a('x', 'y', 'z'); // "1: x, y, z"
a('x', 'y');      // "2: x, y, undefined"
a('x');           // "3: x, undefined, undefined"
a();              // "4: undefined, undefined, undefined"

// Curried function invocation.

var b = curry(a);
b();              // `a` not invoked, curried function returned
b('x');           // `a` not invoked, curried function returned
b('x')('y');      // `a` not invoked, curried function returned
b('x')('y')('z'); // "5: x, y, z"
b('x')('y')();    // "6: x, y, undefined"
b('x')()();       // "7: x, undefined, undefined"
b()('y')();       // "8: undefined, y, undefined"
b()()('z');       // "9: undefined, undefined, z"
b()()();          // "10: undefined, undefined, undefined"

var c = b('x');
c();              // `a` not invoked, curried function returned
c('y');           // `a` not invoked, curried function returned
c('y')('z');      // "11: x, y, z"
c('y')();         // "12: x, y, undefined"
c()('z');         // "13: x, undefined, z"
c()();            // "14: x, undefined, undefined"

var d = c('y');
d('z');           // "15: x, y, z"
d();              // "16: x, y, undefined"

var e = d('z');
e;                // "17: x, y, z"


http://benalman.com/news/2012/09/partial-application-in-javascript/