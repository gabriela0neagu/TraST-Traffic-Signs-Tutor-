var solveButtons = document.getElementsByClassName('survey-open')

Array.prototype.forEach.call(solveButtons, myFunc)


function myFunc(item, index)
{
	//console.log('lele de la ' + index);
	item.onclick = function() {showOutput(index) }
}


function setClick(idx){
    localStorage.setItem('quizID', JSON.stringify(idx))
    	 if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                setOfQuestions = JSON.parse(this.responseText)
                console.log(setOfQuestions);
                sessionStorage.setItem('questions', JSON.stringify(setOfQuestions))
            }
        }
        xmlhttp.open("GET","../php/getQuestions.php?id="+idx,false)
        xmlhttp.send()
        return setOfQuestions
}

function showOutput(id)
{
	console.log(setClick(id))
	window.document.location = '../html/Quiz.html'
}