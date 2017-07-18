/**
 * Created by shob on 18-07-2017.
 */
var myApp = {};
myApp.updateSliderRow = function (slideAmount) {
    var display = document.getElementById("chosenrow");
    var Slidisplay = document.getElementById("sliderow");
    Slidisplay.value = slideAmount;
    display.value = slideAmount;

};
myApp.updateSliderCol = function (slideAmount) {
    var display = document.getElementById("chosencol");
    var Slidisplay = document.getElementById("slidercol");
    Slidisplay.value = slideAmount;
    display.value = slideAmount;

};
myApp.createTable = function () {
    var mytable = $('<div id="parent"></div>').attr({id: "basicTable"});
    var rows = new Number($("#chosenrow").val());
    var cols = new Number($("#chosencol").val());
    var tr = [];
    for (var i = 0; i < rows; i++) {
        var row = $('<div></div>').attr({class: ["class1", "class2", "class3"].join(' ')}).appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            $('<div class="colElements"></div>').text("text").appendTo(row);
        }

    }
    console.log("TTTTT:" + mytable.html());
    mytable.appendTo("#dvTable");

};
