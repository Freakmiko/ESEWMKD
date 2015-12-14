var request = new XMLHttpRequest();
var playerDataArray;
var lastNumberOfPlayers=0;

function loadPlayers() {
    request.open("GET", "/AllPlayers");
    request.onreadystatechange = requestHandler;
    request.send();

    var reiterRechts = document.getElementsByClassName("tabellenReiterRechts")[0];
    var reiterLinks = document.getElementsByClassName("tabellenReiterLinks")[0];

    reiterRechts.addEventListener("click", function() {
        request.open("GET", "/Favorites");
        request.onreadystatechange = requestHandler;
        request.send();
        switchTabs(reiterLinks, reiterRechts);
    });

    reiterLinks.addEventListener("click", function() {
        request.open("GET", "/AllPlayers");
        request.onreadystatechange = requestHandler;
        request.send();
        switchTabs(reiterRechts, reiterLinks);
    });
}

function requestHandler() {
    if ((request.readyState == 4)
        && (request.status == 200)
        && (request.responseText != null)) {
        playerDataArray = JSON.parse(request.responseText);

        loadTable();
    }
}

function clearTable() {
    for (var k = 0; k < lastNumberOfPlayers; ++k)
        document.getElementById("spielerTabelle").deleteRow(1);

    lastNumberOfPlayers = 0;
}

function loadTable() {
    clearTable();

    for(var i = 0; i < playerDataArray.length; ++i) {
        var tableRow = document.getElementById("spielerTabelle").insertRow(i + 1);

        tableRow.insertCell(0).innerHTML = playerDataArray[i].firstname + " " + playerDataArray[i].surname;
        tableRow.insertCell(1).innerHTML = playerDataArray[i].team;
        tableRow.insertCell(2).innerHTML = playerDataArray[i].headcoach;
        tableRow.insertCell(3).innerHTML = playerDataArray[i].asisstantcoach;
        tableRow.insertCell(4).innerHTML = playerDataArray[i].position;
        tableRow.insertCell(5).innerHTML = playerDataArray[i].isActive;
        tableRow.insertCell(6).innerHTML = playerDataArray[i].number;
        tableRow.insertCell(7).innerHTML = playerDataArray[i].year;

        lastNumberOfPlayers++;
    }
}

function switchTabs(reiter1, reiter2) {
    if (reiter1.classList.contains("selected")) {
        reiter2.classList.add("selected");
        reiter1.classList.remove("selected");
    }
}

