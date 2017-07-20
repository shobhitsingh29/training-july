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


/////**************alan////////////////////////
function partial(fn /*, args...*/) {
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



function partialRight(f /*, args...*/) {
    // A reference to the Array#slice method.
   /* var slice = Array.prototype.slice;
    // Convert arguments object to an array, removing the first argument.
    var args = slice.call(arguments, 1);

    return function() {
        // Invoke the originally-specified function, passing in all just-
        // specified arguments, followed by any originally-specified arguments.
        return fn.apply(this, slice.call(arguments, 0).concat(args));
    };*/


    var flength = f.length;
    var args= new Array(flength);
    var arglength= arguments.length-1;
    for (var i = arglength, j = flength- arglength; i >=1; i--, j++){
        args[j] = arguments[i+""];
    }

    return f.apply(null, args[i]);
}

function wedgie(a, b) {
    return a + ' gives ' + b + ' a wedgie.';
}

var joeGivesWedgie = partial(wedgie, 'Joe');
joeGivesWedgie('Ron');    // "Joe gives Ron a wedgie."
joeGivesWedgie('Bob');    // "Joe gives Bob a wedgie."

var joeReceivesWedgie = partialRight(wedgie, 'Joe');
joeReceivesWedgie('Ron'); // "Ron gives Joe a wedgie."
joeReceivesWedgie('Bob'); // "Bob gives Joe a wedgie."