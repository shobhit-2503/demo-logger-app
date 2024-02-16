var logs = [];

(function (){
    var originalLog = console.log;
    console.log = function (message) {
        logs.push(message);
        originalLog.apply(console, arguments);
    };
})();

function displayLogs() {
    var textarea = document.getElementById('log-display');
    textarea.value = logs.join('\n');
}

const clickButton = document.getElementById('click-button');
clickButton.addEventListener('mousedown', function(event){
    if(event.button === 0){
        console.log('Left mouse click is captured');
    }
});

const headingText = document.getElementById('page-heading');
headingText.addEventListener('mouseover', function(event){
    console.log("Mouse over heading captured");
});

headingText.addEventListener('mouseout', function(event){
    console.log("Mouse out of heading captured");
});

const inputText = document.getElementById('text-input');
inputText.addEventListener('keypress', function(event){
    console.log("Key press captured");
});



function sendLogs() {
    var sendURL = "https://jsonplaceholder.typicode.com/todos";

    fetch(sendURL, {
        method: "POST",
        body: JSON.stringify(logs),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    console.log("Send logs completed");
}