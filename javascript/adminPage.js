
var solveButtons3 = document.getElementsByClassName("button-edit3")
var solveButtons4 = document.getElementsByClassName("button-edit4")
var solveButtons2 = document.getElementsByClassName("button-edit2")
var solveButtons1 = document.getElementsByClassName("button-edit1")

Array.prototype.forEach.call(solveButtons1, myFunc1)
Array.prototype.forEach.call(solveButtons2, myFunc2)
Array.prototype.forEach.call(solveButtons3, myFunc3)
Array.prototype.forEach.call(solveButtons4, myFunc4)


function myFunc1(item, index)
{
  //console.log('lele de la ' + index);
  item.onclick = function() {showPage1(index) }
}
function myFunc2(item, index)
{
  //console.log('lele de la ' + index);
  item.onclick = function() {showPage2(index) }
}
function myFunc3(item, index)
{
  //console.log('lele de la ' + index);
  item.onclick = function() {showPage3(index) }
}
function myFunc4(item, index)
{
  //console.log('lele de la ' + index);
  item.onclick = function() {showPage4(index) }
}


  function setClick(idx){
   if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest()
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        
}

function showPage1(id)
{
  setClick(id)
 window.document.location = './adauga-administrator.php'
}

function showPage2(id)
{
  setClick(id)
 window.document.location = './sterge-utilizator.php'
}

function showPage3(id)
{
  setClick(id)
 window.document.location = './template-insert.html'
}

function showPage4(id)
{
  setClick(id)
 window.document.location = './template-delete.php'
}
 



 var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
