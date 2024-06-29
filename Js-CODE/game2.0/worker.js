var worker = new Worker("test.js");

worker.onmessage = function(event) {
  // Receive result from the worker
  var result = event.data;
  console.log('Result received from worker:', result);
};

// Send data to the worker
var dataToSend = 5;
worker.postMessage(dataToSend);