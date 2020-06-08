var infobuttons = document.getElementsByClassName('buton-indicator')
Array.prototype.forEach.call(infobuttons, myFunc)
function myFunc(item, index)
{
    item.onclick = function() { getinfo(index) }
}
function getinfo(id){
    updateProgress(id)

    localStorage.setItem('numarCategorie', JSON.stringify(id))
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
           // infoind = JSON.parse(this.responseText)
            console.log(this.responseText);
            sessionStorage.setItem('descriere', this.responseText)
        }
    }
    xmlhttp.open("GET","../php/getIndicatoare.php?id="+id,false)
    xmlhttp.send()

    window.document.location = '../html/categorieind.html'

}



function updateProgress(id){
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText)
            }
        };
        xmlhttp.open("GET","../php/updateProgress.php?categorie="+id, false)
        xmlhttp.send()
} 

var mybutton = document.getElementById("myBtn");
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}