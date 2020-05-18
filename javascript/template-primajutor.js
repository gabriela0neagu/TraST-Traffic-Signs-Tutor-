let idPrimAjutor= JSON.parse(sessionStorage.getItem('idPrimAjutor')) - 3


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

updateVisited(idPrimAjutor - 1 , 'prim_ajutor')

function getInfo(idx){
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
                pages = JSON.parse(this.responseText)
            }
        };
        xmlhttp.open("GET","../php/getPrimajutor.php?id="+idx, false)
        xmlhttp.send()
        return pages
}

info = getInfo(idPrimAjutor)

rowElement=document.getElementById('row')
mainElement=document.getElementById('main')

text1=document.createElement('div')
text1.innerHTML = info.text[0]
text1.classList.add('main')
mainElement.appendChild(text1)


if(info.poze[0])
{

poze=document.createElement('div')
poze.classList.add('poze')
mainElement.appendChild(poze)

container = document.createElement('div')
container.classList.add('container')
poze.appendChild(container)

poza1 = document.createElement('img')
poza1.setAttribute("src",info.poze[0])
if (idPrimAjutor==1)
poza1.setAttribute("style", "width:100%")
else
poza1.setAttribute("style", "width:60%")
poza1.classList.add('image')
container.appendChild(poza1)

middle = document.createElement('div')
middle.classList.add('middle')
container.appendChild(middle)

descriere = document.createElement('div')
descriere.classList.add('text')
descriere.innerHTML = info.descriere[0]
middle.appendChild(descriere)

}


if(info.poze[1])
{
container2 = document.createElement('div')
container2.classList.add('container')
poze.appendChild(container2)

poza2 = document.createElement('img')
poza2.setAttribute("src",info.poze[1])
if (idPrimAjutor==1)
poza2.setAttribute("style", "width:100%")
poza2.classList.add('image')
container2.appendChild(poza2)


middle2 = document.createElement('div')
middle2.classList.add('middle')
container2.appendChild(middle2)

descriere2 = document.createElement('div')
descriere2.classList.add('text')
descriere2.innerHTML = info.descriere[1]
middle2.appendChild(descriere2)
}

if(info.text[1])
{

text2=document.createElement('div')
text2.innerHTML = info.text[1]
text2.classList.add('main')
mainElement.appendChild(text2)
}


var mybutton = document.getElementById("myBtn");
// When btnth;e user scrolls down 20px from the top of the document, show the button
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

