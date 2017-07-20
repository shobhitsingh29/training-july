function partialRight(fn) {
    // Convert arguments object to an array, removing the first argument.
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        // Invoke the originally-specified function, passing in all just-
        // specified arguments, followed by any originally-specified arguments.
        return fn.apply(this, Array.prototype.slice.call(arguments, 0).concat(args));
    };
}

function adding(a, b) {
    return a + ' is added to ' + b;
}

var firstAddedSecond = partialRight(adding, 'abc');
console.log(firstAddedSecond('def'));
console.log(firstAddedSecond('ghi'));








































































/*
 function partialRightFunc(f) {
 var flength = f.length;
 var args = new Array(flength);
 var arglength = arguments.length - 1;
 for (var i = 1 ,j = flength - arglength; i<=arglength ; i++ , j++) {
 args[j] = arguments[i + ""];
 }

 return f.apply(null, args);
 }

 function f(a, b, c, d) {
 debugger;
 }


 /////!**************alan////////////////////////
 function partial(fn /!*, args...*!/) {
 // A reference to the Array#slice method.
 var slice = Array.prototype.slice;
 // Convert arguments object to an array, removing the first argument.
 var args = slice.call(arguments, 1);

 return function() {
 // Invoke the originally-specified function, passing in all originally-
 // specified arguments, followed by any just-specified arguments.
 return fn.apply(this, args.concat(slice.call(arguments, 0)));
 };
 }


 var firstAddedSecond = partial(adding, 'abc');
 console.log(firstAddedSecond('def'));
 console.log(firstAddedSecond('ghi'));
 */
