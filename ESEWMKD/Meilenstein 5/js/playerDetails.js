var request = new XMLHttpRequest();
var playerDataArray;

function loadPlayers() {
    request.open("GET", "../js/data.json");
    request.onreadystatechange = requestHandler;
    request.send();

    var reiterRechts = document.getElementsByClassName("tabellenReiterRechts")[0];
    var reiterLinks = document.getElementsByClassName("tabellenReiterLinks")[0];

    reiterRechts.addEventListener("click", function() {
        switchTabs(reiterLinks, reiterRechts);
    });

    reiterLinks.addEventListener("click", function() {
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

function loadTable() {
    for(var i = 0; i < playerDataArray.length; ++i) {
        var tableRow = document.getElementById("spielerTabelle").insertRow(i+1);

        // fuege dem style des tablerows das display hinzu damit
        // es bei dem reiter wechsel verfuegbar ist
        tableRow.style.display = "table-row";
        playerDataArray[i].pRow = tableRow;

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



function switchVisibility() {
    for(var i = 0; i < playerDataArray.length; ++i) {
        if(!playerDataArray[i].isFavorite)
            if(playerDataArray[i].pRow.style.display == "table-row")
                playerDataArray[i].pRow.style.display = "none";
            else
                playerDataArray[i].pRow.style.display = "table-row";
    }
}

function switchTabs(reiter1, reiter2) {
    if (reiter1.classList.contains("selected")) {
        reiter2.classList.add("selected");
        reiter1.classList.remove("selected");

        switchVisibility();
    }
}

