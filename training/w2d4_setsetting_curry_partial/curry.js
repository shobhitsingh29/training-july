function curry(fn) {
    var n = fn.length, args = [];

    function getCurriedFn(prev) {
        return function (arg) {
            args = prev.concat(arg);
            if (args.length < n) { // base condition check if arguments  supplied  is less than specified in func definaion
                return getCurriedFn(args);
            } else {
                return fn.apply(this, args);// base condition arguments equals the specified no of  args ,thus call the func will conactinated array of arguments
            }
        };
    }

    return getCurriedFn(args);
}

function a(arg1, arg2, arg3) {
    return arg1 + ', ' + arg2 + ', ' + arg3;
}
var b = curry(a);

var c = b('x');

var d = c('y');

var e = d('z');