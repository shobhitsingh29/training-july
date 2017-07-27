if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(accumulator) {
        var curr; /// here l is the length of the array from which we called it
        if (arguments.length < 2) { //since value is not pasded here assign current index to  first array value
            curr = this[0];
        }
        else {
            curr = arguments[1];
        }
        this.forEach(function(element) {
            curr = accumulator.call(null, curr, element);

        });
        return curr;
    };
}
var total = [0, 1, 2, 3].reduce(function (sum, value) {
    /*debugger;*/
    return sum + value;
}, 0);
console.log(total);
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
    return a.concat(b);
}, []);
console.log(flattened);