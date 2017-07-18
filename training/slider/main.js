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
/*myApp.addRow = function (n) {
    var root = document.getElementById('mytab').getElementsByTagName('tbody')[0];
    var rows = root.getElementsByTagName('tr');
    for (var i = 0; i < n; i++) {

        var clone = myApp.cloneEl(rows[rows.length - 1]);
        root.appendChild(clone);

    }
};
myApp.addColumn = function (n) {
    var rows = document.getElementById('mytab').getElementsByTagName('tr'), i = 0, r, c, clone;
    while (r = rows[i++]) {
        c = r.getElementsByTagName('td');
        for (var j = 0; j < n; j++) {

            clone = myApp.cloneEl(c[c.length - 1]);
            c[0].parentNode.appendChild(clone);
        }
    }
};*/
myApp.createTable=function(){

    var mytable = document.createElement('<div id="parent"></div>').attr({ id: "basicTable" });
    var rows = new Number(document.getElementById("chosenrow").value());
    var cols = new Number(document.getElementById("chosencol").value());
    var tr = [];
    for (var i = 0; i < rows; i++) {
        var row = document.createElement('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
        for (var j = 0; j < cols; j++) {
            document.createElement('<td class="colElements"></td>').text("text1").appendTo(row);
        }

    }
    console.log("TTTTT:"+mytable.html());
    mytable.appendTo("#box");

}

/*

var rows;
var columns;

var table = document.createElement('table');
for (var i = 1; i < 4; i++){
    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');

    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);

    table.appendChild(tr);
}
document.body.appendChild(table);
myApp.noOfRow = function (n) {
    rows = n;
};
myApp.noOfCol = function (m) {
    columns = m;
};

myApp.createRow = function (n) {
    var row = table.insertRow(-1);
    for (var i = 0; i < n; i++) {
        var headerCell = document.createElement("TH");
        row.appendChild(headerCell);
    }
};
myApp.createCol = function (m) {
    for (var i = 1; i < m.length; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = customers[i][j];
        }
    }
};
myApp.createTable = function () {
    var dvTable = document.getElementById("dvTable");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
};

myApp.render = function () {
    myApp.createRow(rows);
    myApp.createCol(columns);
    myApp.createTable();
};
myApp.cloneEl = function (el) {
    var clo = el.cloneNode(true);
    return clo;
};*/
