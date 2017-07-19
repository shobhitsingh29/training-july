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

    var mytable = $('<div id="basicTable"></div>');
    document.getElementById("dvTable").innerHTML='';
    var rows = parseInt($("#chosenrow").val());
    var cols = parseInt($("#chosencol").val());
    for (var i = 0; i < rows; i++) {
        var row = $('<div></div>').appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            $('<div class="colElements"></div>').text("text").appendTo(row);
        }

    }
    mytable.appendTo("#dvTable");

};
