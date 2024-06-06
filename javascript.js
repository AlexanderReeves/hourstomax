
//Set variables
const ninetyNine = 13034431;

//Get user name and dropdown selections
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

var user = urlParams.get('user');
var wcval = urlParams.get('wcval');
var maval = urlParams.get('maval');

console.log("username is " + user)
console.log("Magic dropdown selection is " + maval);
console.log("Woodcutting dropdown selection is " + wcval);


var magicXp = 0;
var wcXP = 0;

var maHoursTotal = 0;
var maXpPerHour = 0;

var WcHoursTotal = 0;
var wcXpPerHour = 0;

maxHoursTotal = 0;




//Apply the wcval from url to wcdropdown
selectElement('wcdrop', wcval);
selectElement('madrop', maval);

function selectElement(id, valueToSelect) {    
    let element = document.getElementById(id);
    if(valueToSelect != null){
    	element.value = valueToSelect;
  	}
}

RefreshPlayer();
UpdateWC();
UpdateMa();
UpdateMax();



function UpdateWC(){
	var wcDrop = document.getElementById("wcdrop");
	var wcDropVal = wcDrop.value;
	wcval = wcDropVal;
	console.log(wcDropVal)
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
	console.log("WC xp per hours = " + wcXpPerHour);

	var remXP = ninetyNine - wcXP;
	console.log("remaining Wc XP = " + remXP);
	if(remXP < 0){remXP = 0};
	console.log("remaining Wc XP = " + remXP);
	wcHoursTotal = remXP/wcXpPerHour;
	wcHoursTotal = Math.floor(wcHoursTotal);

	document.getElementById('wcFinal').innerText = WcHoursTotal + " hours remain"

	UpdateURL();
	UpdateMax();
}

function UpdateMa(){
	var maDrop = document.getElementById("madrop");
	var maDropVal = maDrop.value;
	maval = maDropVal;
	console.log(maDropVal)
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
	console.log("New magic xp set to "+  maXpPerHour);

	var remXP = ninetyNine - magicXp;
	console.log("remaining magic xp" + remXP);
	if(remXP < 1){remXP = 0};
	console.log("remaining magic xp" + remXP);
	maHoursTotal = remXP/maXpPerHour;
	console.log("remaining magic hours" + maHoursTotal);
	maHoursTotal = Math.floor(maHoursTotal);

	document.getElementById('maFinal').innerText = maHoursTotal + " hours remain"
	UpdateURL();
	UpdateMax();
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
		}
}

function UpdateURL(){
			console.log("Updating URL. user: " + user + ". magic: " + maval);
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
				queryParams.set("user", user);
			}
			 
			// Replace current querystring with the new one.
			history.replaceState(null, null, "?"+queryParams.toString());

}

function RefreshPlayer(){

	//set user xp levels to 0 as default
	magicXp = 0;
	wcXP = 0;

	if(user != null){
		console.log("Loading user " + user);
		document.getElementById('displayUsername').innerText = user;
	}else{
		 console.log("no user to load");
		 document.getElementById('magicXpDisplay').innerText = 0+"xp";

		 return;
	}
	//This code runs on page load, or submit hsername button.


	$.getJSON("https://corsproxy.io/?https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player="+user, function(result){
	    $.each(result, function(i, field){
	//json player data is returned one line at a time
	//the key aka outer value is a number
	//key 7 contains all magic values for example

	    	//get keys of json object
	    	//	console.log(Object.keys(field));
	    	//find xp value of field 7, the brackets are needed if a key is a number... its weird
	    	magicXp = field['7'].xp;
	    		console.log(magicXp)
	    		if(magicXp > 1){
	    			//If a value was found for players magic xp, update the div
						document.getElementById('magicXpDisplay').innerText = magicXp + "xp";
	    		}
	    		//if you want to show the full json line
	    		console.log(field);
	    	//Woodcutting
	    		wcXp = field['9'].xp;
	    		console.log(wcXp);
	    		if(wcXp > 1){
	    			//If a value was found for players magic xp, update the div
						document.getElementById('wcXpDisplay').innerText = wcXp + "xp";
	    		}
	    		//if you want to show the full json line
	    		//console.log(field);
	    });
	  });
	UpdateMax();
}

function UpdateMax(){
	maxHoursTotal = WcHoursTotal + maHoursTotal;
	document.getElementById('maxHoursDisplay').innerText = user + " is " + maxHoursTotal+ " from max!";
}

function SaveAll(){
	alert("Bookmark this page to save your selections, and automatically update your xp next time you visit!");
}


