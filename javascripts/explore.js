const indoorButton = document.querySelector("#indoor");
const outdoorButton = document.querySelector("#outdoor");
const artActivitiesButton = document.querySelector("#art");
const allActivitiesButton = document.querySelector("#all");

// Add event listener for indoor sports button
indoorButton.addEventListener("click", function() {
  showHideDiv("indoor","art","outdoor");
});

// Add event listener for outdoor button
outdoorButton.addEventListener("click", function() {
  showHideDiv("outdoor","art","indoor");
});

// Add event listener for art activities button
artActivitiesButton.addEventListener("click", function() {

  showHideDiv("art","outdoor","indoor");
 
});

// Add event listener for All activities button
allActivitiesButton.addEventListener("click", function() {
   // Select all div elements with class "art"
   var artdivsToShow = document.querySelectorAll("div.art");

    // show selected divs
    hideShowDiv(artdivsToShow,"block");
  
    // Select all div elements with class "indoor"
    var indoordivsToShow = document.querySelectorAll("div.indoor");

    // show selected divs
    hideShowDiv(indoordivsToShow,"block");
    
    // Select all div elements with class "outdoor"
    var  outdoordivsToShow= document.querySelectorAll("div.outdoor");
    // show selected divs
    hideShowDiv(outdoordivsToShow,"block");
 
});

function hideShowDiv(divsToShow,value)
{
  for (var i = 0; i < divsToShow.length; i++) {
    divsToShow[i].style.display = value;
   }
}

function showHideDiv(showDiv,hideDiv1,hideDiv2)
{
  // select divs to hide
  var divsToHide1 = document.querySelectorAll("div."+hideDiv1);
  var divsToHide2 = document.querySelectorAll("div."+hideDiv2);
  // hide selected divs
  hideShowDiv(divsToHide1,"none");
  hideShowDiv(divsToHide2,"none");
  // Select all div elements with class "showDiv"
  var divsToshow = document.querySelectorAll("div."+showDiv);
  // show selected divs
    hideShowDiv(divsToshow,"block");
}