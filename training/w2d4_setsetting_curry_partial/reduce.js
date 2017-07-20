if (!Array.prototype.reduce) {
    Array.prototype.reduce = function reduce(accumulator) {
        var i = 0, l = this.length, curr;
        if (arguments.length < 2) {
            curr = this[0];
            i = 1;
        }
        else {
            curr = arguments[1];
        }
        while (i < l) {
            if (i in this) {
                curr = accumulator.call(undefined, curr, this[i], i, this);
                ++i;
            }
        }
        return curr;
    };
}
var total = [0, 1, 2, 3].reduce(function (sum, value) {
    debugger;
    return sum + value;
}, 0);
console.log(total);