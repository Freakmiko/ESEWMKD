/**
 * Created by m.kurila on 04.11.15.
 */


function onLoad() {
    var button = document.getElementById('submitButton');
    button.addEventListener('click', checkInput);
}

function checkInput() {
    var regexp = /^[a-zA-Z-äöüÄÖÜéàèÉÈ]+$/;
    var name = document.getElementsByName("name")[0];
    var vorname = document.getElementsByName("vorname")[0];
    var verein = document.getElementsByName("verein")[0];
    var hcoach = document.getElementsByName("hcoach")[0];
    var acoach = document.getElementsByName("acoach")[0];
    var rueckennummer = document.getElementsByName("number")[0];
    var jahr = document.getElementsByName("jahr")[0];
    var valid = true;

    // reset fields
    name.style.border = "";
    vorname.style.border = "";
    verein.style.border = "";
    hcoach.style.border = "";
    acoach.style.border = "";
    jahr.style.border = "";
    rueckennummer.style.border = "";


    // TODO: REDUNANZ VERMEIDEN METHODE EXTRAHIEREN
    // TODO: leeres jahr? Bug? keine Ahnung?
    if(jahr.value <= 0 || jahr.value > 2015) {
        jahr.style.border = "thick solid #FF0000";
        jahr.focus();

        valid = false;
    }
    if(rueckennummer.value < 4 || rueckennummer.value > 15) {
        rueckennummer.style.border = "thick solid #FF0000";
        rueckennummer.focus();

        valid =  false;
    }

    if(!acoach.value.match(regexp)) {
        acoach.style.border = "thick solid #FF0000";
        acoach.focus();

        valid = false;
    }

    if(!hcoach.value.match(regexp)) {
        hcoach.style.border = "thick solid #FF0000";
        hcoach.focus();

        valid = false;
    }

    if(!verein.value.match(regexp)) {
        verein.style.border = "thick solid #FF0000";
        verein.focus();

        valid = false;
    }

    if(!vorname.value.match(regexp)) {
        vorname.style.border = "thick solid #FF0000";
        vorname.focus();

        valid = false;
    }

    if(!name.value.match(regexp)) {
        name.style.border = "thick solid #FF0000";
        name.focus();

        valid = false;
    }

    if(!valid) {
        alert("Einige Eingaben sind fehlerhaft. Bitte überprüfen Sie ihre Eingaben");
    }
    return valid;
}


