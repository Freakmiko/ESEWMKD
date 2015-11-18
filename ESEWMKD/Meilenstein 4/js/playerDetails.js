var request = new XMLHttpRequest();
var playerDataArray;

function loadPlayers() {
    request.open("GET", "http://localhost:63342/WAW/ESEWMKD/Meilenstein 4/js/data.json");
    request.onreadystatechange = requestHandler;
    request.send();

    document.getElementsByClassName("tabellenReiterRechts")[0].addEventListener("click", function() {
    });
}

function loadTable() {
    for(var i = 0; i < playerDataArray.length; ++i) {
        var tableRow = document.getElementById("spielerTabelle").insertRow(i+1);
        tableRow.insertCell(0).innerHTML = playerDataArray[i].firstname + " " + playerDataArray[i].surname;
        tableRow.insertCell(1).innerHTML = playerDataArray[i].team;
        tableRow.insertCell(2).innerHTML = playerDataArray[i].headcoach;
        tableRow.insertCell(3).innerHTML = playerDataArray[i].asisstantcoach;
        tableRow.insertCell(4).innerHTML = playerDataArray[i].position;
        tableRow.insertCell(5).innerHTML = playerDataArray[i].isActive;
        tableRow.insertCell(6).innerHTML = playerDataArray[i].number;
        tableRow.insertCell(7).innerHTML = playerDataArray[i].year;

    }
}
function requestHandler() {
    if ((request.readyState == 4)
        && (request.status == 200)
        && (request.responseText != null)) {
        playerDataArray = JSON.parse(request.responseText);

        loadTable();
    }
}
