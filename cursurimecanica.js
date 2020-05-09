var solveButtons = document.getElementsByClassName("capito-open")

Array.prototype.forEach.call(solveButtons, myFunc)

function myFunc(item, index)
{
	//console.log('lele de la ' + index);
	item.onclick = function() {showPage(index) }
}


function setClick(idx){
	 if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest()
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
              setPages = JSON.parse(this.responseText)
               // console.log(setPages);
                localStorage.setItem('pages', JSON.stringify(setPages))

             console.log(setPages)

            }
        };
        xmlhttp.open("GET","getpage.php?q="+idx)
        xmlhttp.send()
        
     
}
function showPage(id)
{
	setClick(id)
  window.document.location = './template-mecanica.html'
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