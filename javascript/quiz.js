const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const exitButton = document.getElementById('exit-btn')
const scoreElement = document.getElementById('score')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let score = 0
let shuffledQuestions, currentQuestionIndex
let questions = JSON.parse(sessionStorage.getItem('questions'))
let id = JSON.parse(localStorage.getItem('quizID')) + 1

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
	currentQuestionIndex++  
	setNextQuestion()
})
exitButton.addEventListener('click', ()=>{
	window.document.location = './Quizez.html'
})


function startQuiz(){
	score = 0
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(()=> Math.random() - .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
 }

 function setNextQuestion(){
 	resetState()
 	showQuestion(shuffledQuestions[currentQuestionIndex])

 }

function showQuestion(question){
	questionElement.innerText = question.question
	question.answers.forEach(answer =>{
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if(answer.correct)
		{
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
}

function resetState(){
	nextButton.classList.add('hide')
	while(answerButtonsElement.firstChild){
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
}

 function selectAnswer(e){	
 	const selectedButton = e.target
 	const correct = selectedButton.dataset.correct
 	setStatusClass(document.body, correct)
 	Array.from(answerButtonsElement.children).forEach(button => {
 		setStatusClass(button, button.dataset.correct)
 	})
 	if(selectedButton.dataset = correct)
 	{
 		score = score + 10
 	}
 	
 	if (shuffledQuestions.length > currentQuestionIndex + 1) {
 		 	nextButton.classList.remove('hide')
 	}
 	else{
 		updateScore(score)
 		scoreElement.innerText = 'Ai obținut: ' + score + '/100 puncte'
 		exitButton.classList.remove('hide')
   	}
 }

 function setStatusClass(element, correct){
 	clearStatusClass(element)
 	if(correct)
 	{
 		element.classList.add('correct')
 	}
 	else
 	{
 		element.classList.add('wrong')
 	}
 }

 function clearStatusClass(element){
 	element.classList.remove('correct')
 	element.classList.remove('wrong')
 }



function updateScore(score){
	 if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            	console.log('script is: ' + this.responseText)
                }
        }
        xmlhttp.open("GET","updateScore.php?score="+score +"&id="+ id,false)
        xmlhttp.send()
}

