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
a('x', 'y', 'z');
a('x', 'y');
a('x');
a();

var b = curry(a);
b();
b('x');
b('x')('y');
b('x')('y')('z');
b('x')('y')();
b('x')()();
b()('y')();
b()()('z');
b()()();

var c = b('x');
c();
c('y');
c('y')('z');
c('y')();
c()('z');
c()();

var d = c('y');
d('z');
d();

var e = d('z');
e();
