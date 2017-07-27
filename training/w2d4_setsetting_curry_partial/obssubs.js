var publisher = (function () {
    var arr = [];

    function fire() {
        for (var i in arr) {

            console.log(arr[i].sucess());
        }
    }

    function subscribe(a) {
        arr.push(a);
    }

    function unsubscribe(name) {
        arr.pop(name);
    }

    return {
        unsubscribe: unsubscribe,
        subscribe: subscribe,
        fire: fire

    };
})();


var a1 = publisher.subscribe({
    sucess: function abc() {
        console.log("1");
    }
});
var a2 = publisher.subscribe({
    sucess: function xyz() {
        console.log("2");
    }
});
var a3 = publisher.unsubscribe(xyz);

publisher.fire();