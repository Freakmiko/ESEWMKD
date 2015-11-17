var request = new XMLHttpRequest();

function loadPlayers() {
    request.open("GET", "http://localhost:63342/ESEWMKD/ESEWMKD/Meilenstein%204/js/data.json");
    request.onreadystatechange = requestHandler;
    request.send();
}

function requestHandler() {
    if ((request.readyState == 4)
        && (request.status == 200)
        && (request.responseText != null)) {
        var playerArray = JSON.parse(request.responseText);
        for (var i = 0; i < playerArray.length; i++) {
            var tablerow = document.createElement("tr");

            var spieler = document.createElement("td");
            spieler.innerHTML = playerArray[i].firstname + " " + playerArray[i].surname;
            tablerow.appendChild(spieler);

            var team = document.createElement("td");
            team.innerHTML = playerArray[i].team;
            tablerow.appendChild(team);

            var headcoach = document.createElement("td");
            headcoach.innerHTML = playerArray[i].headcoach;
            tablerow.appendChild(headcoach);

            var asisstantcoach = document.createElement("td");
            asisstantcoach.innerHTML = playerArray[i].asisstantcoach;
            tablerow.appendChild(asisstantcoach);

            var position = document.createElement("td");
            position.innerHTML = playerArray[i].position;
            tablerow.appendChild(position);

            var isactive = document.createElement("td");
            isactive.innerHTML = playerArray[i].isActive;
            tablerow.appendChild(isactive);

            var number = document.createElement("td");
            number.innerHTML = playerArray[i].number;
            tablerow.appendChild(number);

            var year = document.createElement("td");
            year.innerHTML = playerArray[i].year;
            tablerow.appendChild(year);

            document.getElementById("spielerTabelle").firstElementChild.appendChild(tablerow);
        }

    }
}
