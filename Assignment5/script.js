function drop() {
    document.getElementById("thisDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function enterMap() 
{
    var text;
    var mapChoice = document.getElementById("myMap").value;
    if (mapChoice =='yes') 
{
        greeting = ("Yes they are!");
}
    else if (mapChoice =='Yes')
{
        greeting = ("Yes they are!");
}
     else
{
    greeting = ("You are incorrect1");
}
    document.getElementById("maps").innerHTML = greeting;
}
function goBack() {
    window.history.back('backBut')
}