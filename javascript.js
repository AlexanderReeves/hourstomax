$.ajaxSetup({ //Prevent future code loading before previous code finishes.
    async: false
});

//Set variables
//Array of XP values
var raXpArray = [90000, 130000, 140000, 675000, 710000, 850000];
var prXpArray = [50000, 250000, 437000, 600000, 800000, 1250000];
var maXpArray = [78000, 150000, 150000, 175000, 380000];
var wcXpArray = [68000, 75000, 90000, 90000, 100000];
var ruXpArray = [35000, 60000, 65000, 70000, 80000, 100000];
var coXpArray = [190000, 400000, 450000, 500000, 580000, 850000, 1000000];
var agXpArray = [45000, 50000, 50000, 55000, 65000, 65000, 90000];
var heXpArray = [110000, 170000, 210000, 400000, 500000];
var thXpArray = [110000, 140000, 150000, 210000, 240000, 260000, 265000];

var ninetyNine = 13034431;
var user = "";

var maXp = 0;
var maHoursTotal = 0;
var maXpPerHour = 0;
var maval = "";

var prXp = 0;
var prHoursTotal = 0
var prXpPerHour = 0;
var prval = "";

var wcXp = 0;
var wcHoursTotal = 0;
var wcXpPerHour = 0;
var wcval = "";

var raXp = 0;
var raHoursTotal = 0
var raXpPerHour = 0;
var raval = "";

var ruXp = 0;
var ruHoursTotal = 0
var ruXpPerHour = 0;
var ruval = "";


var coXp = 0;
var coHoursTotal = 0
var coXpPerHour = 0;
var coval = "";

var agXp = 0;
var agHoursTotal = 0;
var agXpPerHour = 0;
var agval = "";

var heXp = 0;
var heHoursTotal = 0;
var heXpPerHour = 0;
var heval = "";

var thXp = 0;
var thHoursTotal = 0;
var thXpPerHour = 0;
var thval = "";

maxHoursTotal = 0;

//Pull the values from the URL into the global values
PullURLVariables();
RefreshPlayer(); //Refresh the players data from the hiscores website
//Update Hours To 99 for each skill
UpdateXPAndHours("ma", maval);
UpdateXPAndHours("wc", wcval);
UpdateXPAndHours("ra", raval);
UpdateXPAndHours("pr", prval);
UpdateXPAndHours("ru", ruval);
UpdateXPAndHours("co", coval);
UpdateXPAndHours("ag", agval);
UpdateXPAndHours("he", heval);
UpdateXPAndHours("th", thval);
//Update hours to max
UpdateMax();

function PullURLVariables() {
    //Get user name and dropdown selections from the URL parameters
    const queryString = window.location.search;
    /*console.log("Url Parameters: " + queryString);*/
    const urlParams = new URLSearchParams(queryString);
    user = urlParams.get('user');
    maval = urlParams.get('maval');
    prval = urlParams.get('prval');
    wcval = urlParams.get('wcval');
    raval = urlParams.get('raval');
    ruval = urlParams.get('ruval');
    coval = urlParams.get('coval');
    agval = urlParams.get('agval');
    heval = urlParams.get('heval');
    thval = urlParams.get('thval');
    console.log("pulled thieving Url Value: " + thval)
    //Update the dropdowns to the correct values here?
    //Apply the wcval from url to wcdropdown unless it was null
    if(raval != null){selectElement('radrop', raval);}else{raval = 1}
    if(wcval != null){selectElement('wcdrop', wcval);}else{wcval = 1}
    if(maval != null){selectElement('madrop', maval);}else{maval = 1}
    if(prval != null){selectElement('prdrop', prval);}else{prval = 1}
    if(ruval != null){selectElement('rudrop', ruval);}else{ruval = 1}
    if(coval != null){selectElement('codrop', coval);}else{coval = 1}
    if(agval != null){selectElement('agdrop', agval);}else{agval = 1}
    if(heval != null){selectElement('hedrop', heval);}else{heval = 1}
    if(thval != null){selectElement('thdrop', thval);}else{thval = 1}
    
}



function selectElement(id, valueToSelect) {
    //Apply saved dropdown values from URL to page 
    let element = document.getElementById(id);
    if (valueToSelect != null) {
        element.value = valueToSelect;
    }
}

//*****Code for manual changes to dropdowns*****

function MaDropdownUpdate() {
    //Get the value selected
    var maDrop = document.getElementById("madrop");
    //Update the global dropdown value
    maval = maDrop.value;
    //Update the hours to 99 and max, and apply new value to URL
    //UpdateTh();
    //Try to update the XP for wc and Hours to 99 for wc via a shared function
    UpdateXPAndHours("ma", maval);
    UpdateMax();
    UpdateURL();
}

function WcDropdownUpdate() {
    var wcDrop = document.getElementById("wcdrop");
    wcval = wcDrop.value;
    UpdateXPAndHours("wc", wcval);
    UpdateMax();
    UpdateURL();
}

function RaDropdownUpdate() {
    var raDrop = document.getElementById("radrop");
    raval = raDrop.value;
    UpdateXPAndHours("ra", raval);
    UpdateMax();
    UpdateURL();
}

function PrDropdownUpdate() {
    var prDrop = document.getElementById("prdrop");
    prval = prDrop.value;
    UpdateXPAndHours("pr", prval);
    UpdateMax();
    UpdateURL();
}

function RuDropdownUpdate() {
    var ruDrop = document.getElementById("rudrop");
    ruval = ruDrop.value;
    UpdateXPAndHours("ru", ruval);
    UpdateMax();
    UpdateURL();
}

function CoDropdownUpdate() {
    var coDrop = document.getElementById("codrop");
    coval = coDrop.value;
    UpdateXPAndHours("co", coval);
    UpdateMax();
    UpdateURL();
}

function AgDropdownUpdate() {
    var agDrop = document.getElementById("agdrop");
    agval = agDrop.value;
    UpdateXPAndHours("ag", agval);
    UpdateMax();
    UpdateURL();
}

function HeDropdownUpdate() {
    var heDrop = document.getElementById("hedrop");
    heval = heDrop.value;
    UpdateXPAndHours("he", heval);
    UpdateMax();
    UpdateURL();
}

function ThDropdownUpdate() {
    var thDrop = document.getElementById("thdrop");
    thval = thDrop.value;
    UpdateXPAndHours("th", thval);
    UpdateMax();
    UpdateURL();
}

//******End manual dropdown update code*****

function UpdateXPAndHours(shortHand) {
	console.log("Updating Xp and Hours for " + shortHand);
    //Find how much XP is selected per hour from the dropdown
    var newXpPerHour = 0;
    //Current XP of that skill
    var currentXp = 0;
    //Find which dropdown specifically was altered
    switch (shortHand) {
        //If Woodcutting drop was altered, check the xp in the array
        case "wc":
            newXpPerHour = wcXpArray[wcval-1];
            currentXp = wcXp;
            break;
        case "ma":
            newXpPerHour = maXpArray[maval-1];
            currentXp = maXp;
            break;

        case "ra":
            newXpPerHour = raXpArray[raval-1];
            currentXp = raXp;
            break;

        case "pr":
            newXpPerHour = prXpArray[prval-1];
            currentXp = prXp;
            break;

        case "ru":
            newXpPerHour = ruXpArray[ruval-1];
            currentXp = ruXp;
            break;

        case "co":
            newXpPerHour = coXpArray[coval-1];
            currentXp = coXp;
            break;

        case "ag":
            newXpPerHour = agXpArray[agval-1];
            currentXp = agXp;
            break;

        case "he":
            newXpPerHour = heXpArray[heval-1];
            currentXp = heXp;
            break;
        case "th":
            newXpPerHour = thXpArray[thval-1];
            currentXp = thXp;
            break;
        default:
            console.log("Error updating XP in switch")
            break;
    }
    console.log("Current xp for " + shortHand + " is " + currentXp + ". Xp per hour is " + newXpPerHour + "from drop val ");
    //Remaining XP = 
    var remXP = ninetyNine - currentXp;
    if (remXP < 0) {
        remXP = 0
    };

    var remainingHours = remXP / newXpPerHour;
    remainingHours = Math.floor(remainingHours);
    if (shortHand == "wc") {
        wcHoursTotal = remainingHours;
    }
    if (shortHand == "pr") {
        prHoursTotal = remainingHours;
    }
    if (shortHand == "ma") {
        maHoursTotal = remainingHours;
    }
    if (shortHand == "ag") {
        agHoursTotal = remainingHours;
    }
    if (shortHand == "ra") {
        raHoursTotal = remainingHours;
    }
    if (shortHand == "he") {
        heHoursTotal = remainingHours;
    }
    if (shortHand == "th") {
        thHoursTotal = remainingHours;
    }
    if (shortHand == "ru") {
        ruHoursTotal = remainingHours;
    }
    if (shortHand == "co") {
        coHoursTotal = remainingHours;
    }
    if(!isNaN(remainingHours) && remainingHours != 0){
    	document.getElementById(shortHand + 'Final').innerText = remainingHours + " hours remain";
    }else{
    	document.getElementById(shortHand + 'Final').innerText = "99 Achieved!";
    }
}

function SubmitUsername() {
    //the submit button was pressed!
    //check the username entered
    var newName = document.getElementById('fname').value;
    if (newName == "") {
        console.log("no username entered");
    } else {
        console.log("username submitted:" + newName);
        user = newName;
        UpdateURL();
        //Refresh player scores with new username
        RefreshPlayer();
        UpdateWC();
        UpdateMa();
        UpdateRa();
        UpdateRu();
        UpdatePr();
        UpdateCo();
        UpdateAg();
        UpdateHe();
        UpdateTh();
        UpdateMax();
    }
}

function UpdateURL() {
    //console.log("Updating URL. user: " + user);
    // Construct URLSearchParams object instance from current URL querystring.
    var queryParams = new URLSearchParams(window.location.search);

    // Set new or modify existing parameter value where a value exists. 
    if (user != null) {
        queryParams.set("user", user);
    }
    if (maval != null) {
        queryParams.set("maval", maval);
    }
    if (wcval != null) {
        queryParams.set("wcval", wcval);
    }
    if (raval != null) {
        queryParams.set("raval", raval);
    }
    if (prval != null) {
        queryParams.set("prval", prval);
    }
    if (ruval != null) {
        queryParams.set("ruval", ruval);
    }
    if (coval != null) {
        queryParams.set("coval", coval);
    }
    if (agval != null) {
        queryParams.set("agval", agval);
    }
    if (heval != null) {
        queryParams.set("heval", heval);
    }
    if (thval != null) {
        queryParams.set("thval", thval);
    }

    // Replace current querystring with the new one.
    history.replaceState(null, null, "?" + queryParams.toString());

}

function RefreshPlayer() {
    console.log("***RefreshPlayer from Jagex is starting.***")

    //set user xp levels to 0 as default
    maXp = 0;
    wcXp = 0;
    raXp = 0;
    ruXp = 0;
    prXp = 0;
    coXp = 0;
    agXp = 0;
    heXp = 0;
    thXp = 0;


    if (user != null) {
        console.log("Loading user " + user);
        document.getElementById('displayUsername').innerText = user;
    } else {
        console.log("no user to load");
        //document.getElementById('magicXpDisplay').innerText = 0+"xp";

        return;
    }
    //This code runs on page load, or submit username button.


    $.getJSON("https://corsproxy.io/?https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=" + user, function(result) {
        $.each(result, function(i, field) {
            //json player data is returned one line at a time
            //the key aka outer value is a number
            //key 7 contains all magic values for example
            //get keys of json object
            //	console.log(Object.keys(field));
            //find xp value of field 7, the brackets are needed if a key is a number... its weird
            if (field['7'].xp != null) {
                maXp = field['7'].xp;
                console.log("Mg XP dwnld:" + maXp)
                if (maXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('magicXpDisplay').innerText = maXp + "xp";
                }
            }
            if (field['9'].xp != null) {
                //Woodcutting
                wcXp = field['9'].xp;
                console.log("Wc XP dwnld: " + wcXp);
                if (wcXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('wcXpDisplay').innerText = wcXp + "xp";
                }
            }
            if (field['5'].xp != null) {
                //Woodcutting
                raXp = field['5'].xp;
                console.log("Ra XP dwnld: " + raXp);
                if (raXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('rangedXpDisplay').innerText = raXp + "xp";
                }
            }
            if (field['6'].xp != null) {
                //Prayer
                prXp = field['6'].xp;
                console.log("Pr XP dwnld: " + prXp);
                if (prXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('prayerXpDisplay').innerText = prXp + "xp";
                }
            }
            if (field['21'].xp != null) {
                //Runecraft
                ruXp = field['21'].xp;
                console.log("Rr XP dwnld: " + ruXp);
                if (ruXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('runecraftXpDisplay').innerText = ruXp + "xp";
                }
            }

            if (field['23'].xp != null) {
                //Runecraft
                coXp = field['23'].xp;
                console.log("Co XP dwnld: " + coXp);
                if (coXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('constructionXpDisplay').innerText = coXp + "xp";
                }
            }
            if (field['17'].xp != null) {
                //Agility
                agXp = field['17'].xp;
                console.log("Ag XP dwnld: " + agXp);
                if (agXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('agilityXpDisplay').innerText = agXp + "xp";
                }
            }
            if (field['16'].xp != null) {
                //Herblore
                heXp = field['16'].xp;
                console.log("He XP dwnld: " + heXp);
                if (heXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('herbloreXpDisplay').innerText = heXp + "xp";
                }
            }
            if (field['18'].xp != null) {
                //Herblore
                thXp = field['18'].xp;
                console.log("Thie XP dwnld: " + thXp);
                if (thXp > 1) {
                    //If a value was found for players magic xp, update the div
                    document.getElementById('thievingXpDisplay').innerText = thXp + "xp";
                }
            }
            //if you want to show the full json line
            console.log(field);
        });
    });

    console.log("***RefreshPlayer Is Ending.***")
}

function UpdateMax() {
    maxHoursTotal = wcHoursTotal + maHoursTotal + raHoursTotal + ruHoursTotal + prHoursTotal +
        coHoursTotal + thHoursTotal + heHoursTotal + agHoursTotal;
    if (user != null) {
        document.getElementById('maxHoursDisplay').innerText = user + " is " + maxHoursTotal + " from max!";
    } else {
        document.getElementById('maxHoursDisplay').innerText = "You are " + maxHoursTotal + " from max!";
    }
}

function SaveAll() {
    alert("Bookmark this page to save your selections, and automatically update your xp next time you visit!");
}