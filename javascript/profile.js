//genereaza in mod dinamic progress-bars
const mainLegislationDiv = document.getElementById('legislationCategory')

var boxMecanica = document.createElement('div')
boxMecanica.classList.add('progress-box')

var boxPrimajutor = document.createElement('div')
boxPrimajutor.classList.add('progress-box')

var boxEcologic = document.createElement('div')
boxEcologic.classList.add('progress-box')

var boxPreventiv = document.createElement('div')
boxPreventiv.classList.add('progress-box')


mainLegislationDiv.appendChild(boxMecanica)
mainLegislationDiv.appendChild(boxPrimajutor)
mainLegislationDiv.appendChild(boxEcologic)
mainLegislationDiv.appendChild(boxPreventiv)

var mecanica = document.createElement("div")
var primajutor = document.createElement("div")
var ecologic = document.createElement("div")
var preventiv = document.createElement("div")

mecanica.classList.add('category-title')
mecanica.innerHTML = 'Curs de mecanică auto 👨🏻‍🔧'
primajutor.classList.add('category-title')
primajutor.innerHTML = 'Curs de prim-ajutor 💉'
ecologic.classList.add('category-title')
ecologic.innerHTML = 'Curs de conducere ecologică 🍃'
preventiv.classList.add('category-title')
preventiv.innerHTML = 'Curs de conduită preventivă 🤕'


boxMecanica.appendChild(mecanica)
boxPrimajutor.appendChild(primajutor)
boxEcologic.appendChild(ecologic)
boxPreventiv.appendChild(preventiv)

function getPercentage(curs)
{
  let percentage=''
   if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest()
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                percentage = JSON.parse(this.responseText)
            }
        };
        xmlhttp.open("GET","../php/getPercentage.php?curs="+curs, false)
        xmlhttp.send()
        
     return percentage
}

var progressBar1 = document.createElement('div')
progressBar1.classList.add('progress')

var value1 = (getPercentage('mecanica_auto') * 100 /14).toFixed(2)
progressValue1 = document.createElement('div')
progressValue1.classList.add('progress-value')
progressValue1.classList.add('purple')
progressValue1.setAttribute('style', 'width:' + value1 + '%')
if(value1!= 0.00)
  progressValue1.innerHTML= value1 + '%'
else
  progressBar1.innerHTML= '0%'

progressBar1.appendChild(progressValue1)
boxMecanica.appendChild(progressBar1)


var progressBar2 = document.createElement('div')
progressBar2.classList.add('progress')

var value2 = (getPercentage('prim_ajutor') * 100 /4).toFixed(2)
progressValue2 = document.createElement('div')
progressValue2.classList.add('progress-value')
progressValue2.classList.add('purple')
progressValue2.setAttribute('style', 'width:' + value2 +'%')
if(value2!= 0.00)
 progressValue2.innerHTML= value2 +'%'
else
  progressBar2.innerHTML= '0%'

progressBar2.appendChild(progressValue2)
boxPrimajutor.appendChild(progressBar2)

var progressBar3 = document.createElement('div')
progressBar3.classList.add('progress')

var value3 = (getPercentage('conducere_ecologica') * 100 /2).toFixed(2)
progressValue3 = document.createElement('div')
progressValue3.classList.add('progress-value')
progressValue3.classList.add('purple')
progressValue3.setAttribute('style', 'width:'+ value3 +'%')
if(value3!= 0.00)
  progressValue3.innerHTML= value3 +'%'
else
  progressBar3.innerHTML= '0%'

progressBar3.appendChild(progressValue3)
boxEcologic.appendChild(progressBar3)


var progressBar4 = document.createElement('div')
progressBar4.classList.add('progress')

var value4 = (getPercentage('conduita_preventiva') * 100 /10).toFixed(2)
progressValue4 = document.createElement('div')
progressValue4.classList.add('progress-value')
progressValue4.classList.add('purple')
progressValue4.setAttribute('style', 'width:' + value4 +'%')
if(value4!=0.00)
  progressValue4.innerHTML= value4 +'%'
else
  progressBar4.innerHTML='0%'
progressBar4.appendChild(progressValue4)
boxPreventiv.appendChild(progressBar4)



//genereaza in mod dinamic progress-bars pentru indicatoare si marcaje


const mainSignsDiv = document.getElementById('signsCategory')

var boxIndicatoare = document.createElement('div')
boxIndicatoare.classList.add('progress-box')
mainSignsDiv.appendChild(boxIndicatoare)


var boxMarcaje = document.createElement('div')
boxMarcaje.classList.add('progress-box')
mainSignsDiv.appendChild(boxMarcaje)

var indicatoare = document.createElement("div")
var marcaje = document.createElement("div")


indicatoare.classList.add('category-title')
indicatoare.innerHTML = 'Indicatoare 🚸'
marcaje.classList.add('category-title')
marcaje.innerHTML = 'Marcaje ⬅️'

boxIndicatoare.appendChild(indicatoare)
boxMarcaje.appendChild(marcaje)


function getProgress()
{
  let progress=''
   if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest()
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                progress = JSON.parse(this.responseText)
            }
        };
        xmlhttp.open("GET","../php/getMarcaje.php", false)
        xmlhttp.send()
        
     return progress
}

let progress = getProgress()

var progressBarInd = document.createElement('div')
progressBarInd.classList.add('progress')

var valueInd = (progress.indicatoare.visited * 100 / progress.indicatoare.total).toFixed(2)
progressValueInd = document.createElement('div')
progressValueInd.classList.add('progress-value')
progressValueInd.classList.add('blue')
progressValueInd.setAttribute('style', 'width:' + valueInd + '%')
if(valueInd!= 0.00)
  progressValueInd.innerHTML= valueInd + '%'
else
  progressBarInd.innerHTML= '0%'

progressBarInd.appendChild(progressValueInd)
boxIndicatoare.appendChild(progressBarInd)



var progressBarMar = document.createElement('div')
progressBarMar.classList.add('progress')

var valueMar = (progress.marcaje.visited * 100 / progress.marcaje.total).toFixed(2)
progressValueMar = document.createElement('div')
progressValueMar.classList.add('progress-value')
progressValueMar.classList.add('blue')
progressValueMar.setAttribute('style', 'width:' + valueMar + '%')
if(valueMar!= 0.00)
  progressValueMar.innerHTML= valueMar + '%'
else
  progressBarMar.innerHTML= '0%'

progressBarMar.appendChild(progressValueMar)
boxMarcaje.appendChild(progressBarMar)

//genereaza in mod dinamic chestionarele cu scorurile aferente
function getScore(idQuiz)
{
   if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              score = this.responseText;
                }
        }
        xmlhttp.open("GET","../php/getScore.php?idQuiz="+ idQuiz, false)
        xmlhttp.send()
  return score
}

const mainQuizDiv = document.getElementById('quizCategory')

var categoryA = document.createElement("div")
var categoryB = document.createElement("div")
var categoryC = document.createElement("div")
var categoryD = document.createElement("div")
var categoryE = document.createElement("div")

categoryA.classList.add('category-title')
categoryB.classList.add('category-title')
categoryC.classList.add('category-title')
categoryD.classList.add('category-title')
categoryE.classList.add('category-title')

var i
var setA = 0
var setB = 0
var setC = 0
var setD = 0
var setE = 0

for( i=1; i<=30; i++)
   {
   	 var quizDiv = document.createElement("div")
   	 var quizHead = document.createElement("div") 
     var quizBody = document.createElement("div")
     quizDiv.appendChild(quizHead)
     quizDiv.appendChild(quizBody)
     quizDiv.classList.add('survey')
     quizBody.classList.add('survey-body')
     quizHead.classList.add('survey-head')

     if(i <= 6){
        if(setA == 0)
        {
          categoryA.innerHTML = 'Categoria A (A, A1, A2, AM) 🏍️'
          mainQuizDiv.appendChild(categoryA)
          var categoryBoxDiv = document.createElement("div")
          categoryBoxDiv.classList.add('surveys-box')
          mainQuizDiv.appendChild(categoryBoxDiv)
          setA = 1
        }
        categoryBoxDiv.appendChild(quizDiv)
     }

   	 if(i > 6 && i <= 12){
        if(setB == 0)
        {
          categoryB.innerHTML = 'Categoria B (B, B1) 🚗'
          mainQuizDiv.appendChild(categoryB)
          var categoryBoxDiv = document.createElement("div")
          categoryBoxDiv.classList.add('surveys-box')
          mainQuizDiv.appendChild(categoryBoxDiv)
          setB = 1
        }
        categoryBoxDiv.appendChild(quizDiv)
     }

   	 if(i > 12 && i <= 18 ){
        if(setC == 0)
        {
          categoryC.innerHTML = 'Categoria C (C, C1) 🚚'
          mainQuizDiv.appendChild(categoryC)
          var categoryBoxDiv = document.createElement("div")
          categoryBoxDiv.classList.add('surveys-box')
          mainQuizDiv.appendChild(categoryBoxDiv)
          setC = 1
        }
        categoryBoxDiv.appendChild(quizDiv)
     }


   	 if(i > 18 && i <= 24 ){
        if(setD == 0)
        {
          categoryD.innerHTML = 'Categoria D (D, D1, Tb, Tv) 🚌'
          mainQuizDiv.appendChild(categoryD)
          var categoryBoxDiv = document.createElement("div")
          categoryBoxDiv.classList.add('surveys-box')
          mainQuizDiv.appendChild(categoryBoxDiv)
          setD = 1
        }
        categoryBoxDiv.appendChild(quizDiv)
     }


   	 if(i > 24 && i <= 30 ){
        if(setE == 0)
        {
          categoryE.innerHTML = 'Categoria E (BE, CE, DE, C1E, D1E) 🚛'
          mainQuizDiv.appendChild(categoryE)
          var categoryBoxDiv = document.createElement("div")
          categoryBoxDiv.classList.add('surveys-box')
          mainQuizDiv.appendChild(categoryBoxDiv)
          setE = 1
        }
        categoryBoxDiv.appendChild(quizDiv)
     }



     if(i%10 == 0)
     	 quizHead.innerHTML = 'Chestionar 10' 
     else
	     if(i< 10)
	     	quizHead.innerHTML ='Chestionar  ' + i%10
	     else
			quizHead.innerHTML ='Chestionar ' + i%10

      if(getScore(i) == 1){
        quizDiv.classList.add('hide')
        quizBody.classList.add('hide')
        quizHead.classList.add('hide')
      }
      else{
        quizBody.innerHTML = getScore(i) + "/100"
        if(getScore(i) > 50)
        {
          var emoji = document.createElement('p')
          emoji.textContent=  "Admis ✔️"
          emoji.classList.add('admis')
          quizBody.appendChild(emoji)
        }
        else{
          var emoji = document.createElement('p')
          emoji.textContent=  "Respins ❌"
          quizBody.appendChild(emoji)
          emoji.classList.add('respins')
        }
      }
    
   }