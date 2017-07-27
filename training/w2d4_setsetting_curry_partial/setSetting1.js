var state = {
    a: {
        b: {
            c: {d: 1}
        }

        , f: 2
    }
};
var setpath = function (path, value) {
    var arr = path.split('/');
    var j = 0;

    function recset(obj, value) {
        function eachRecursive(obj) {

            for (var k in obj) {
                if (typeof obj[k] == "object" && obj[k] !== null){
                    if (obj.hasOwnProperty(arr[j])) {
                        console.log(obj)
                        console.log(arr[j])
                        recset(obj[k], value);
                        j++;
                    }
                    eachRecursive(obj[k]);
                }

                else {

                    console.log(obj);

                }
            }
        }
        eachRecursive(obj)


    };

    recset(state, value);
};


setpath('a/b/c/d', 3);





