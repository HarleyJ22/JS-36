let interval;
function repeatHello(callback) {
     interval = setInterval(callback, 1000);
}

setTimeout(() => {
  clearInterval(interval), console.log("STOP");
}, 5000);

const callingBack = () => console.log("Hello");
repeatHello(callingBack);
