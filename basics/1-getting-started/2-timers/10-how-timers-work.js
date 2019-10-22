setTimeout(console.log, 3, 1);
setTimeout(console.log, 0, 2);
setTimeout(console.log, 0, 3);
setTimeout(console.log, 0, 4);
setTimeout(console.log, 0, 5);
setTimeout(console.log, 0, 6);
setTimeout(console.log, 0, 7);
setTimeout(console.log, 0, 8);
setTimeout(console.log, 0, 9);
setTimeout(console.log, 0, 10);
setTimeout(console.log, 0, 11);
setTimeout(console.log, 0, 12);
setTimeout(console.log, 0, 13);

// Test Micro and Macro task
(function() {
  setTimeout(console.log, 0, 1);
  new Promise(resolve => resolve()).then(() => {
    console.log("Promise resolved");
  });
})();
