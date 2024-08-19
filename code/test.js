var timeId;
function start() {
    var timeId = setInterval(function () {
        console.log(new Date().toLocaleString());
    }, 1000);
}

function stop() {
    clearInterval(timeId)
}