var worker = new SharedWorker("jsworker.js");

worker.port.addEventListener("message", function(e) {
    alert(e.data);
}, false);

worker.port.start();

// post a message to the shared web worker
worker.port.postMessage("Alyssa");