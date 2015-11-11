
var request = new XMLHttpRequest();

function loadPlayers() {
    request.open("GET", "http://martinakraus.net/data.json");
    request.onreadystatechange = requestHandler;
    request.send();
}

function requestHandler() {
    if ((request.readyState == 4)
        && (request.status == 200)
        && (request.responseText != null)) {
    alert(request.responseText);
    }
    alert(request.statusText);
}
