// Need to print "Hello after 4 sec" after 4 seconds and "Hello after 8 sec" after 8 seconds.

// Wrong Implementation
// function printCounter(counter) {
//   console.log(++counter);
// }

// (function() {
//   var counter = 0;
//   setInterval(printCounter, 1000, counter);
// })();

// Correct Implementation
(function() {
  let counter = 0;
  setInterval(function printCounter() {
    console.log(`Hello after ${++counter} sec`);
  }, 1000);
})();

// Create a timer function which when invoked starts a timer which prints "1" after 1 sec, "2" after 2 sec and so on.

let timer = (function() {
  let counter = 0;
  return () =>
    setInterval(function printCounter() {
      console.log(`${++counter}`);
    }, 1000);
})();
