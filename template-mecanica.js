

pages= JSON.parse(localStorage.getItem('pages'))
console.log(pages["title"])
console.log(pages["continut"])
console.log(pages["poz1"])
console.log(pages["poz2"])
console.log(pages["poz3"])





const titluElem= document.getElementById('titlu')
const continutElem= document.getElementById('info')
const poza1Elem=document.getElementById("poze1")



titluElem.innerText=pages["title"]
continutElem.innerText=pages["continut"]
poza1Elem.innerText=pages["poz1"]

