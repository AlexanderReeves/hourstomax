
$.ajaxSetup({
    async: false
});


//Set variables
var ninetyNine = 13034431;
var user = "";

var magicXp = 0;
var maHoursTotal = 0;
var maXpPerHour = 0;
var maval ="";

var prXp = 0;
var prHoursTotal = 0
var prXpPerHour = 0;
var prval = 0;

var wcXp = 0;
var wcHoursTotal = 0;
var wcXpPerHour = 0;
var wcval = "";

var raXp = 0;
var raHoursTotal = 0
var raXpPerHour = 0;
var raval = 0;

var ruXp = 0;
var ruHoursTotal = 0
var ruXpPerHour = 0;
var ruval = 0;


var coXp = 0;
var coHoursTotal = 0
var coXpPerHour = 0;
var coval = 0;

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

PullURLVariables();

//Apply the wcval from url to wcdropdown
selectElement('wcdrop', wcval);
selectElement('madrop', maval);
selectElement('radrop', raval);
selectElement('prdrop', raval);
selectElement('rudrop', raval);
selectElement('codrop', raval);
selectElement('agdrop', raval);
selectElement('hedrop', raval);
selectElement('thdrop', raval);


RefreshPlayer(); //Refresh the players data from the hiscores website
UpdateMa();
UpdateWC();
UpdateRa();
UpdatePr();
UpdateRu();
UpdateCo();
UpdateAg();
UpdateHe();
UpdateTh();



UpdateMax();

function PullURLVariables(){
	//Get user name and dropdown selections from the URL parameters
	const queryString = window.location.search;
	/*console.log("Url Parameters: " + queryString);*/
	const urlParams = new URLSearchParams(queryString);
	user = urlParams.get('user');
	maval =  urlParams.get('maval');
	prval =  urlParams.get('paval');
	wcval =  urlParams.get('wcval');
	raval =  urlParams.get('raval');
	ruval =  urlParams.get('ruval');
	coval =  urlParams.get('coval');
	agval =  urlParams.get('agval');
	heval =  urlParams.get('heval');
	thval =  urlParams.get('thval');
}



function selectElement(id, valueToSelect) {   
	//Apply saved dropdown values from URL to page 
    let element = document.getElementById(id);
    if(valueToSelect != null){
    	element.value = valueToSelect;
  	}
}

function WcDropdownUpdate(){
	UpdateWC();
	UpdateMax();
}

function MaDropdownUpdate(){
	UpdateMa();
	UpdateMax();
}

function RaDropdownUpdate(){
	UpdateRa();
	UpdateMax();
}

function PrDropdownUpdate(){
	UpdatePr();
	UpdateMax();
}
function RuDropdownUpdate(){
	UpdateRu();
	UpdateMax();
}

function CoDropdownUpdate(){
	UpdateCo();
	UpdateMax();
}
function AgDropdownUpdate(){
	UpdateAg();
	UpdateMax();
}
function HeDropdownUpdate(){
	UpdateHe();
	UpdateMax();
}
function ThDropdownUpdate(){
	UpdateTh();
	UpdateMax();
}

function UpdateRa(){
	var raDrop = document.getElementById("radrop");
	var raDropVal = raDrop.value;
	raval = raDropVal;
	switch(raDropVal) {
	  case "1":
	    //
	    raXpPerHour = 90000;
	    break;
	  case "2":
	    // Forrestey at yews
	    raXpPerHour = 130000;
	    break;
	  case "3":
	    // Teaks
	    raXpPerHour = 140000;
	    break;
	  case "4":
	    // Sculliceps
	    raXpPerHour = 675000;
	    break;
	  case "5":
	    // Redwoods
	    raXpPerHour = 710000;
	    break;
	  case "6":
	    // Redwoods
	    raXpPerHour = 850000;
	    break;
	  default:
	    // code block
	    raXpPerHour = 50000;
	    break;
	}

	var remXP = ninetyNine - raXp;
	if(remXP < 0){remXP = 0};
	raHoursTotal = remXP/raXpPerHour;
	raHoursTotal = Math.floor(raHoursTotal);
	document.getElementById('raFinal').innerText = raHoursTotal + " hours remain"
	UpdateURL();
	
}


function UpdateWC(){
	var wcDrop = document.getElementById("wcdrop");
	var wcDropVal = wcDrop.value;
	wcval = wcDropVal;
	switch(wcDropVal) {
	  case "1":
	    //blisterwood trees
	    wcXpPerHour = 75000;
	    break;
	  case "2":
	    // Forrestey at yews
	    wcXpPerHour = 90000;
	    break;
	  case "3":
	    // Teaks
	    wcXpPerHour = 90000;
	    break;
	  case "4":
	    // Sculliceps
	    wcXpPerHour = 100000;
	    break;
	  case "5":
	    // Redwoods
	    wcXpPerHour = 68000;
	    break;
	  default:
	    // code block
	    wcXpPerHour = 50000;
	    break;
	}
	var remXP = ninetyNine - wcXp;
	if(remXP < 0){remXP = 0};
	wcHoursTotal = remXP/wcXpPerHour;
	wcHoursTotal = Math.floor(wcHoursTotal);
	document.getElementById('wcFinal').innerText = wcHoursTotal + " hours remain"
	console.log("***End WC Update***");
	UpdateURL();
	
}

function UpdateMa(){
	var maDrop = document.getElementById("madrop");
	var maDropVal = maDrop.value;
	maval = maDropVal;
	switch(maDropVal) {
	  case "1":
	    //blisterwood trees
	    maXpPerHour = 78000;
	    break;
	  case "2":
	    // Forrestey at yews
	    maXpPerHour = 150000;
	    break;
	  case "3":
	    // Teaks
	    maXpPerHour = 150000;
	    break;
	  case "4":
	    // Sculliceps
	    maXpPerHour = 175000;
	    break;
	  case "5":
	    // Redwoods
	    maXpPerHour = 400000;
	    break;
	  default:
	    // code block
	    maXpPerHour = 100000;
	    break;
	}
	var remXP = ninetyNine - magicXp;
	if(remXP < 1){remXP = 0};
	maHoursTotal = remXP/maXpPerHour;
	maHoursTotal = Math.floor(maHoursTotal);

	document.getElementById('maFinal').innerText = maHoursTotal + " hours remain"
	UpdateURL();

}

function UpdatePr(){
	var prDrop = document.getElementById("prdrop");
	var prDropVal = prDrop.value;
	prval = prDropVal;
	switch(prDropVal) {
	  case "1":
	    //blisterwood trees
	    prXpPerHour = 50000;
	    break;
	  case "2":
	    // Forrestey at yews
	    prXpPerHour = 250000;
	    break;
	  case "3":
	    // Teaks
	    prXpPerHour = 437000;
	    break;
	  case "4":
	    // Sculliceps
	    prXpPerHour = 600000;
	    break;
	  case "5":
	    // Redwoods
	    prXpPerHour = 800000;
	    break;
	  case "6":
	    // Redwoods
	    prXpPerHour = 1250000;
	    break;
	  default:
	    // code block
	    prXpPerHour = 100000;
	    break;
	}

	var remXP = ninetyNine - prXp;
	if(remXP < 1){remXP = 0};
	prHoursTotal = remXP/prXpPerHour;
	prHoursTotal = Math.floor(prHoursTotal);

	document.getElementById('prFinal').innerText = prHoursTotal + " hours remain"
	UpdateURL();

}

function UpdateRu(){
	var ruDrop = document.getElementById("rudrop");
	var ruDropVal = ruDrop.value;
	ruval = ruDropVal;
	switch(ruDropVal) {
	  case "1":
	    //blisterwood trees
	    ruXpPerHour = 35000;
	    break;
	  case "2":
	    // Forrestey at yews
	    ruXpPerHour = 60000;
	    break;
	  case "3":
	    // Teaks
	    ruXpPerHour = 65000;
	    break;
	  case "4":
	    // Sculliceps
	    ruXpPerHour = 70000;
	    break;
	  case "5":
	    // Redwoods
	    ruXpPerHour = 80000;
	    break;
	  case "6":
	    // Redwoods
	    ruXpPerHour = 100000;
	    break;
	  default:
	    // code block
	    ruXpPerHour = 100000;
	    break;
	}

	var remXP = ninetyNine - ruXp;
	if(remXP < 1){remXP = 0};
	ruHoursTotal = remXP/ruXpPerHour;
	ruHoursTotal = Math.floor(ruHoursTotal);
	document.getElementById('ruFinal').innerText = ruHoursTotal + " hours remain"
	UpdateURL();

}


function UpdateCo(){
	var coDrop = document.getElementById("codrop");
	var coDropVal = coDrop.value;
	coval = coDropVal;
	switch(coDropVal) {
	  case "1":
	    //blisterwood trees
	    coXpPerHour = 190000;
	    break;
	  case "2":
	    // Forrestey at yews
	    coXpPerHour =400000;
	    break;
	  case "3":
	    // Teaks
	    coXpPerHour = 450000;
	    break;
	  case "4":
	    // Sculliceps
	    coXpPerHour = 500000;
	    break;
	  case "5":
	    // Redwoods
	    coXpPerHour = 580000;
	    break;
	  case "6":
	    // Redwoods
	    coXpPerHour = 850000;
	    break;
	  case "7":
	    // Redwoods
	    coXpPerHour = 1000000;
	    break;
	  default:
	    // code block
	    coXpPerHour = 100000;
	    break;
	}

	var remXP = ninetyNine - coXp;
	if(remXP < 1){remXP = 0};
	coHoursTotal = remXP/coXpPerHour;
	coHoursTotal = Math.floor(coHoursTotal);

	document.getElementById('coFinal').innerText = coHoursTotal + " hours remain"
	UpdateURL();

}

function UpdateAg(){
	var agDrop = document.getElementById("agdrop");
	var agDropVal = agDrop.value;
	agval = agDropVal;
	switch(agDropVal) {
	  case "1":
	    //blisterwood trees
	    agXpPerHour = 45000;
	    break;
	  case "2":
	    // Forrestey at yews
	    agXpPerHour =50000;
	    break;
	  case "3":
	    // Teaks
	    agXpPerHour = 50000;
	    break;
	  case "4":
	    // Sculliceps
	    agXpPerHour = 55000;
	    break;
	  case "5":
	    // Redwoods
	    agXpPerHour = 65000;
	    break;
	  case "6":
	    // Redwoods
	    agXpPerHour = 65000;
	    break;
	  case "7":
	    // Redwoods
	    agXpPerHour = 90000;
	    break;
	  default:
	    // code block
	    agXpPerHour = 1;
	    break;
	}

	var remXP = ninetyNine - agXp;
	if(remXP < 1){remXP = 0};
	agHoursTotal = remXP/agXpPerHour;
	agHoursTotal = Math.floor(agHoursTotal);

	document.getElementById('agFinal').innerText = agHoursTotal + " hours remain"
	UpdateURL();

}


function UpdateHe(){
	var heDrop = document.getElementById("hedrop");
	var heDropVal = heDrop.value;
	heval = heDropVal;
	switch(heDropVal) {
	  case "1":
	    //blisterwood trees
	    heXpPerHour = 110000;
	    break;
	  case "2":
	    // Forrestey at yews
	    heXpPerHour =170000;
	    break;
	  case "3":
	    // Teaks
	    heXpPerHour = 210000;
	    break;
	  case "4":
	    // Sculliceps
	    heXpPerHour = 400000;
	    break;
	  case "5":
	    // Redwoods
	    heXpPerHour = 500000;
	    break;
	  default:
	    // code block
	    heXpPerHour = 1;
	    break;
	}

	var remXP = ninetyNine - heXp;
	if(remXP < 1){remXP = 0};
	heHoursTotal = remXP/heXpPerHour;
	heHoursTotal = Math.floor(heHoursTotal);

	document.getElementById('heFinal').innerText = heHoursTotal + " hours remain"
	UpdateURL();

}


function UpdateTh(){
	var thDrop = document.getElementById("thdrop");
	var thDropVal = thDrop.value;
	thval = thDropVal;
	switch(thDropVal) {
	  case "1":
	    thXpPerHour = 110000;
	    break;
	  case "2":
	    thXpPerHour =140000;
	    break;
	  case "3":
	    thXpPerHour = 150000;
	    break;
	  case "4":
	    thXpPerHour = 210000;
	    break;
	  case "5":
	    thXpPerHour = 240000;
	    break;
	  case "6":
	    thXpPerHour = 260000;
	    break;
	  case "7":
	    thXpPerHour = 265000;
	    break;
	  default:
	    coXpPerHour = 1;
	    break;
	}

	var remXP = ninetyNine - thXp;
	if(remXP < 1){remXP = 0};
	thHoursTotal = remXP/thXpPerHour;
	thHoursTotal = Math.floor(thHoursTotal);
	document.getElementById('thFinal').innerText = thHoursTotal + " hours remain"
	UpdateURL();

}


function SubmitUsername(){
		//the submit button was pressed!
		//check the username entered
		var newName = document.getElementById('fname').value;
		if(newName == ""){
			console.log("no username entered");
		}else{
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

function UpdateURL(){
			console.log("Updating URL. user: " + user);
			// Construct URLSearchParams object instance from current URL querystring.
			var queryParams = new URLSearchParams(window.location.search);
			 
			// Set new or modify existing parameter value where a value exists. 
			if(user!=null){
				queryParams.set("user", user);
			}
			if(maval!=null){
				queryParams.set("maval", maval);
			}
			if(wcval!=null){
				queryParams.set("wcval", wcval);
			}
			if(raval!=null){
				queryParams.set("raval", raval);
			}
			if(prval!=null){
				queryParams.set("prval", prval);
			}
			if(ruval!=null){
				queryParams.set("ruval", ruval);
			}
			if(coval!=null){
				queryParams.set("coval", coval);
			}
			if(agval!=null){
				queryParams.set("agval", agval);
			}
			if(heval!=null){
				queryParams.set("heval", heval);
			}
			if(thval!=null){
				queryParams.set("thval", thval);
			}

			// Replace current querystring with the new one.
			history.replaceState(null, null, "?"+queryParams.toString());

}

function RefreshPlayer(){
	console.log("***RefreshPlayer is starting.***")

	//set user xp levels to 0 as default
	magicXp = 0;
	wcXp = 0;
	raXp = 0;
	ruXp = 0;
	prXp = 0;
	coXp = 0;
	agXp = 0;
	heXp = 0;
	thXp = 0;


	if(user != null){
		console.log("Loading user " + user);
		document.getElementById('displayUsername').innerText = user;
	}else{
		 console.log("no user to load");
		 //document.getElementById('magicXpDisplay').innerText = 0+"xp";

		 return;
	}
	//This code runs on page load, or submit username button.


	$.getJSON("https://corsproxy.io/?https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player="+user, function(result){
	    $.each(result, function(i, field){
	//json player data is returned one line at a time
	//the key aka outer value is a number
	//key 7 contains all magic values for example

	    	//get keys of json object
	    	//	console.log(Object.keys(field));
	    	//find xp value of field 7, the brackets are needed if a key is a number... its weird
			if(field['7'].xp != null){
				magicXp = field['7'].xp;
	    		console.log("Magic XP Downloaded in Json, Value: " + magicXp)
	    		if(magicXp > 1){
	    			//If a value was found for players magic xp, update the div
						document.getElementById('magicXpDisplay').innerText = magicXp + "xp";
	    		}
			}
			if(field['9'].xp != null){
	    		//Woodcutting
				wcXp = field['9'].xp;
				console.log("Wc XP Downloaded in Json, Value: " +wcXp);
				if(wcXp > 1){
				//If a value was found for players magic xp, update the div
					document.getElementById('wcXpDisplay').innerText = wcXp + "xp";
				}
			}
			if(field['5'].xp != null){
	    		//Woodcutting
				raXp = field['5'].xp;
				console.log("Ra XP Downloaded in Json, Value: " +raXp);
				if(raXp > 1){
				//If a value was found for players magic xp, update the div
					document.getElementById('rangedXpDisplay').innerText = raXp + "xp";
				}
			}
						if(field['6'].xp != null){
	    		//Prayer
				prXp = field['6'].xp;
				console.log("Pr XP Downloaded in Json, Value: " +prXp);
				if(prXp > 1){
				//If a value was found for players magic xp, update the div
					document.getElementById('prayerXpDisplay').innerText = prXp + "xp";
				}
			}
			if(field['21'].xp != null){
	    		//Runecraft
				ruXp = field['21'].xp;
				console.log("Rr XP Downloaded in Json, Value: " +ruXp);
				if(ruXp > 1){
				//If a value was found for players magic xp, update the div
					document.getElementById('runecraftXpDisplay').innerText = ruXp + "xp";
				}
			}

			if(field['23'].xp != null){
	    		//Runecraft
				coXp = field['23'].xp;
				console.log("Co XP Downloaded in Json, Value: " +coXp);
				if(coXp > 1){
				//If a value was found for players magic xp, update the div
					document.getElementById('constructionXpDisplay').innerText = coXp + "xp";
				}
			}

			if(field['17'].xp != null){
	    		//Agility
				agXp = field['17'].xp;
				console.log("Ag XP Downloaded in Json, Value: " +agXp);
				if(agXp > 1){
				//If a value was found for players magic xp, update the div
					document.getElementById('agilityXpDisplay').innerText = agXp + "xp";
				}
			}
			if(field['16'].xp != null){
	    		//Herblore
				heXp = field['16'].xp;
				console.log("He XP Downloaded in Json, Value: " +heXp);
				if(heXp > 1){
				//If a value was found for players magic xp, update the div
					document.getElementById('herbloreXpDisplay').innerText = heXp + "xp";
				}
			}
			if(field['18'].xp != null){
	    		//Herblore
				thXp = field['18'].xp;
				console.log("Thie XP Downloaded in Json, Value: " +thXp);
				if(thXp > 1){
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

function UpdateMax(){
	maxHoursTotal = wcHoursTotal + maHoursTotal + raHoursTotal + ruHoursTotal + prHoursTotal
	+ coHoursTotal + thHoursTotal + heHoursTotal + agHoursTotal;
	if(user!=null){
		document.getElementById('maxHoursDisplay').innerText = user + " is " + maxHoursTotal+ " from max!";
	}else{
		document.getElementById('maxHoursDisplay').innerText = "You are " + maxHoursTotal+ " from max!";
	}
}

function SaveAll(){
	alert("Bookmark this page to save your selections, and automatically update your xp next time you visit!");
}


