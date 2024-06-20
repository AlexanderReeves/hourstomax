function setTab(tabname) {
console.log(tabname);
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("typebutton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }


var element = document.getElementById(tabname);
  element.classList.add("active");


  //var bodyDiv = document.getElementById("thebody");
    //bodyDiv.classList.remove("redbody");
    //bodyDiv.classList.remove("greenbody");
    //bodyDiv.classList.remove("bluebody");
  var themedElements = document.getElementsByClassName("theme");
  for (i = 0; i < themedElements.length; i++) {
    themedElements[i].className = themedElements[i].className.replace("themered", "newtheme");
    themedElements[i].className = themedElements[i].className.replace("themegreen", "newtheme");
    themedElements[i].className = themedElements[i].className.replace("themeblue", "newtheme");
  }
  for (i = 0; i < themedElements.length; i++) {
    if(tabname == "max"){
       themedElements[i].className = themedElements[i].className.replace("newtheme", "themered");
       //bodyDiv.classList.add("redbody");
      document.getElementById('intro').innerText =
       "PREVIEW VERSION\n Find how many hours until you Max in Old School Runescape";
       document.getElementById('tabtext').innerText =
       "Max Cape";
    }

    if(tabname == "quest"){
       themedElements[i].className = themedElements[i].className.replace("newtheme", "themeblue");
       //bodyDiv.classList.add("bluebody");
      document.getElementById('intro').innerText =
       "PREVIEW VERSION\n Find how many hours until you have all the levels for the Quest Cape";
        document.getElementById('tabtext').innerText =
       "Quest Cape";
    }

    if(tabname == "achievement"){
       themedElements[i].className = themedElements[i].className.replace("newtheme", "themegreen");
       //bodyDiv.classList.add("greenbody");
      document.getElementById('intro').innerText =
       "PREVIEW VERSION\n Find how many hours until you have all the levels for the Achievement Diary Cape";
      document.getElementById('tabtext').innerText =
       "Achievement Cape";

    }
  }


    



}

