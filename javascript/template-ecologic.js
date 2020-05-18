let idEcologica= JSON.parse(sessionStorage.getItem('idPaginaEcologica')) -3

function updateVisited(id, nume_curs) {
  if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest()
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText)
            }
        };
        xmlhttp.open("GET","../php/updateVisited.php?id="+id+"&curs="+nume_curs, false)
        xmlhttp.send()
}


updateVisited(idEcologica - 1, 'conducere_ecologica')

function getInfo(id){
  let pages = ''
  if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest()
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                pages = this.responseText
            }
        };
        xmlhttp.open("GET","../php/getEcologic.php?id="+id, false)
        xmlhttp.send()
        return pages
}

info = getInfo(idEcologica)


mainElement = document.getElementById('main')

text = document.createElement('div')
text.innerHTML = info
mainElement.appendChild(text)



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