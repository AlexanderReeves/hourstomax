function setTab(tabname) {
console.log(tabname);
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("typebutton");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

var element = document.getElementById(tabname);
  element.classList.add("active");
}
