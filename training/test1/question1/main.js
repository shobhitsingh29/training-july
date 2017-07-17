/**
 * Created by shob on 13-07-2017.
 */
document.getElementById("file").onchange = function () {
    var fileName = this.value;
    var fileExtension = fileName.substr(fileName.length - 4);

    console.log(fileExtension);
    if (fileExtension != ".xls" || fileExtension != ".doc") {
        alert("That ain't no .xls or .doc file!");
    }
}