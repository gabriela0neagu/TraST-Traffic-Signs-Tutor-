let id = sessionStorage.getItem('questionToModify')

function getQuestion(id)
{
	let question = 0
	if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              question = JSON.parse(this.responseText)
            }
        }
        xmlhttp.open("GET","../php/getQuestion.php?id="+id, false)
        xmlhttp.send()
        return question
}

question = getQuestion(id)

//console.log(question)

var category = document.getElementById("category")
category.value = question['category']

var questionn = document.getElementById("question")
questionn.value = question['question']

var answ1 = document.getElementById("answ1")
answ1.value = question['answ1']

var answ2 = document.getElementById("answ2")
answ2.value = question['answ2']

var answ3 = document.getElementById("answ3")
answ3.value = question['answ3']

var correct = document.getElementById("correct")
correct.value = question['correct']


function editQuestion(form)
{
    let id = sessionStorage.getItem('questionToModify')
    console.log('Am intrat in functia cacacioasa si am id:' + id)
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              raspuns = this.responseText
            }
        }
        var question = form.intrebare.value
        var answ1 = form.raspuns1.value
        var answ2 = form.raspuns2.value
        var answ3 = form.raspuns3.value
        var category = form.categorie.value
        var correct = form.raspunsCorect.value

        xmlhttp.open("GET","../php/editquizdetails.php?id="+id+ "&q="+question+"&a1="+answ1+"&a2="+answ2+ "&a3="+answ3+ "&cat="+ category + "&cor=" + correct, false)
        xmlhttp.send()
        alert('Întrebarea a fost editată cu succes!')
        window.document.location = '../html/manageQuestions.html'
}

