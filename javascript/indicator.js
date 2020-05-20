var descriere=sessionStorage.getItem('descriere')
const elementText=document.createElement('div')
elementText.innerHTML=descriere
document.body.appendChild(elementText)

var numarIndicator= JSON.parse(localStorage.getItem('numarIndicator'))+1

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
        name="semnale_calea_ferata";
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

var numarIndicatoare=getNumberIndicatoare(numarIndicator)
var i
var container=document.createElement('div')
container.classList.add('holdingContainer')
document.body.appendChild(container)
for(i=1;i<=numarIndicatoare;i++)
{
    var indicator=document.createElement('div')
    indicator.classList.add('internalcontainerL')
    container.appendChild(indicator)
    var titlu=document.createElement('h1')
    titlu.innerHTML=getTitle(numarIndicator,i)
    indicator.appendChild(titlu)
    var imagine = document.createElement("IMG");
    imagine.setAttribute("src", getImage(numarIndicator,i));
    indicator.appendChild(imagine)

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
    xmlhttp.open("GET","getTitle.php?nume="+numeTabel+"&nr="+nrIndicator,false)

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
    xmlhttp.open("GET","getImage.php?nume="+numeTabel+"&nr="+nrIndicator,false)

    xmlhttp.send()
    return titlu
}






