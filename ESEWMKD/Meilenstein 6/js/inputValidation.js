/**
 * Created by m.kurila on 04.11.15.
 */

var request = new XMLHttpRequest();

function onSubmit() {
    var name = document.getElementsByName("name")[0];
    var vorname = document.getElementsByName("vorname")[0];
    var verein = document.getElementsByName("verein")[0];
    var hcoach = document.getElementsByName("hcoach")[0];
    var acoach = document.getElementsByName("acoach")[0];
    var rueckennummer = document.getElementsByName("number")[0];
    var jahr = document.getElementsByName("jahr")[0];
    var position = document.getElementsByName("position")[0];


    var player = {
        name: name.value,
        vorname: vorname.value,
        verein: verein.value,
        hcoach: hcoach.value,
        acoach: acoach.value,
        number: rueckennummer.value,
        jahr: jahr.value,
        position: position.value
    };

    request.open("PUT", "/Player");
    request.send(JSON.stringify(player));

    return true;
}

