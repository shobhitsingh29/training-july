self.onmessage = function(e) {
    setTimeout(function() {
        console.log("Inside timeout=====");
    }, 1000);
    console.log(e.data);
    var arr = [];
    for(var i = 0; i<2000; i++) {
        arr[i] = [];
        for(var j = 0; j<290; j++) {
            arr[i][j] = Math.random();
        }
    }
    self.postMessage(arr);
    arr=null;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "" +
        "index.html", true);
    xhr.onload = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function (e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);
} ;