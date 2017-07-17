(function () {
    let ty="";
    //var instance = new Date();
    //var obj = owner(instance, ty);
    //console.log("edwq");
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    process.stdin.on('data', function (chunk) {
       ty.concat(chunk);
    });
    process.stdin.on('end', function (chunk) {
        ty
    }
        //var instance = new Date();
        //while (!(proto = Object.getPrototypeOf(proto)).hasOwnProperty(ty)) {
        //}
//// do something with 'proto'
//        var obj = owner(instance, ty);
//        console.log("edwq");
//    });

    //function owner(obj, prop) {
    //    var hasOwnProperty = Object.prototype.hasOwnProperty;
    //    while (obj && !hasOwnProperty.call(obj, prop))
    //        obj = Object.getPrototypeOf(obj);
    //    return obj;
    //}



})();