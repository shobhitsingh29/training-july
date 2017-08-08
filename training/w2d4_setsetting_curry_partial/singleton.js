var mySingleton = (function () {
var instance;
function init() {
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";

    return {
        publicMethod: function () {
            console.log( "The dist can see me!" );
        },

        publicProperty: "I am also dist"
    };

}
	return {
    getInstance: function () {

        if ( !instance ) {
            instance = init();
        }

        return instance;
    }

};

})();


var singleA = mySingleton.getInstance();
var singleB = mySingleton.getInstance();
console.log( singleA === singleB );