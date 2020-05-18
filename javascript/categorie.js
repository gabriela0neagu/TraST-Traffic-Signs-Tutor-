var infobuttons = document.getElementsByClassName('buton-indicator')
Array.prototype.forEach.call(infobuttons, myFunc)
function myFunc(item, index)
{
    item.onclick = function() { getinfo(index) }

}
function getinfo(id){
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