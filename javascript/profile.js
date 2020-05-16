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