/*
var descriere=sessionStorage.getItem('descriere')
const elementDescriere=document.createElement('div')
elementDescriere.innerHTML=descriere
elementDescriere.classList.add('descriere')
document.body.appendChild(elementDescriere)

*/
var numarCategorie= JSON.parse(localStorage.getItem('numarCategorie'))+1

function getNumberIndicatoare(id) {
var numar=0
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            // infoind = JSON.parse(this.responseText)
            numar=this.responseText
        }
    }
    var numeTabel=getName(id)
    xmlhttp.open("GET","../php/getNumberIndicatoare.php?nume="+numeTabel,false)

    xmlhttp.send()
    return numar
}

function getName(id){
    var name
    if (id==1)
        name="indicatoareavertizare";
    if (id==2)
        name="ind_prioritate";
    if (id==3)
        name="ind_interzice_rerestrictie";
    if (id==4)
        name="ind_obligare";
    if (id==5)
        name="ind_orientare";
    if (id==6)
        name="ind_informare";
    if (id==7)
        name="inf_turistica";
    if (id==8)
        name="panouri_aditionale";
    if (id==9)
        name="semafoare_dirijarea_circulatiei";
    if (id==10)
        name="semnale_cale_ferata";
    if (id==11)
        name="disp_luminoase";
    if (id==12)
        name="marcaje_longitudinale";
    if (id==13)
        name="marcaje_transversale";
    if (id==14)
        name="marcaje_laterale";
    if (id==15)
        name="marcaje_diverse";
    if (id==16)
        name="m_temp_semnaliz_lzdp";
    if (id==17)
        name="m_semnaliz_lucrari";
    if (id==18)
        name="marcaje_laterale";
    if (id==19)
        name="ind_kilometric";
    if (id==20)
        name="ind_hectometric";
return name

}

var numarIndicatoare=getNumberIndicatoare(numarCategorie)
var i

var containerElement=document.createElement('div')
containerElement.classList.add('container')
document.body.appendChild(containerElement)

for(i=1;i<=numarIndicatoare;i++)
{
    var cardElement=document.createElement('div')
    cardElement.classList.add('card')
    containerElement.appendChild(cardElement)

    var face1Element = document.createElement('div')
    face1Element.classList.add('face')
    face1Element.classList.add('face1')
    cardElement.appendChild(face1Element)
    

    var contentElement = document.createElement('div')
    contentElement.classList.add('content')
    face1Element.appendChild(contentElement)

    var imagine = document.createElement("IMG");
    imagine.setAttribute("src", getImage(numarCategorie,i));
    contentElement.appendChild(imagine)


    var titlu=document.createElement('h3')
    titlu.innerHTML=getTitle(numarCategorie,i)
    contentElement.appendChild(titlu)


    var face2Element = document.createElement('div')
    face2Element.classList.add('face')
    face2Element.classList.add('face2')
    cardElement.appendChild(face2Element)
    

    var contentElement2 = document.createElement('div')
    contentElement2.classList.add('content')
    face2Element.appendChild(contentElement2)

    var buton = document.createElement("BUTTON");
    buton.innerHTML='Vezi explicatia aici';
    buton.classList.add('buton-indicator');
    contentElement2.appendChild(buton)
    buton.id=i;
   buton.onclick = (e)=>{
   window.document.location=`../php/getIndicator.php?name=${getName((numarCategorie))}&nr=${e.target.id}`
   }

}

function getTitle(nrCategorie, nrIndicator) {
    var titlu=''

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            titlu=this.responseText
        }
    }
    var numeTabel=getName(nrCategorie)
    xmlhttp.open("GET","../php/getTitle.php?nume="+numeTabel+"&nr="+nrIndicator,false)

    xmlhttp.send()
    return titlu
}

function getImage(nrCategorie, nrIndicator) {
    var image=''

    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest()
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            titlu=this.responseText
        }
    }
    var numeTabel=getName(nrCategorie)
    xmlhttp.open("GET","../php/getImage.php?nume="+numeTabel+"&nr="+nrIndicator,false)

    xmlhttp.send()
    return titlu
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