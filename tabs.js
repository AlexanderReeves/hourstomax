function setTab(tabname) {
console.log(tabname);
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("typebutton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }


var element = document.getElementById(tabname);
  element.classList.add("active");


  var bodyDiv = document.getElementById("thebody");
    bodyDiv.classList.remove("redbody");
    bodyDiv.classList.remove("greenbody");
    bodyDiv.classList.remove("bluebody");
  var themedElements = document.getElementsByClassName("theme");
  for (i = 0; i < themedElements.length; i++) {
    themedElements[i].className = themedElements[i].className.replace("themered", "newtheme");
    themedElements[i].className = themedElements[i].className.replace("themegreen", "newtheme");
    themedElements[i].className = themedElements[i].className.replace("themeblue", "newtheme");
  }
  for (i = 0; i < themedElements.length; i++) {
    if(tabname == "max"){
       themedElements[i].className = themedElements[i].className.replace("newtheme", "themered");
       bodyDiv.classList.add("redbody");
    }

    if(tabname == "quest"){
       themedElements[i].className = themedElements[i].className.replace("newtheme", "themeblue");
       bodyDiv.classList.add("bluebody");
    }

    if(tabname == "achievement"){
       themedElements[i].className = themedElements[i].className.replace("newtheme", "themegreen");
       bodyDiv.classList.add("greenbody");
    }
  }


    



}

