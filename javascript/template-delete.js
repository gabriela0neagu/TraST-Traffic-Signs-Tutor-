function getQuestions()
{
	let questions = 0
	if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              questions = JSON.parse(this.responseText)
            }
        }
        xmlhttp.open("GET","../php/getAllQuestions.php", false)
        xmlhttp.send()
        return questions
}

function editQuestion(id)
{
	sessionStorage.setItem('questionToModify', id)
	window.document.location = '../html/template-edit.html'
}

function deleteQuestion(id)
{
   if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              console.log (this.responseText)
            }
        }
        xmlhttp.open("GET","../php/deleteQuestion.php?id=" + id, false)
        xmlhttp.send()
    location.reload();
    return false; 
}

let questionsArray = getQuestions()

var table = document.getElementById("table")

var i 
for(i=0 ; i<questionsArray.length; i++)
{   

    var row = table.insertRow(i+1)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)
    var cell6 = row.insertCell(5)
    var cell7 = row.insertCell(6)
    var cell8 = row.insertCell(7)
    var cell9 = row.insertCell(8)


    cell1.innerHTML = questionsArray[i]['id']
    cell2.innerHTML = questionsArray[i]['question']
    cell3.innerHTML = questionsArray[i]['answ1']
    cell4.innerHTML = questionsArray[i]['answ2']
    cell5.innerHTML = questionsArray[i]['answ3']
    cell6.innerHTML = questionsArray[i]['category']
    cell7.innerHTML = questionsArray[i]['correct']


    var btnEdit = document.createElement("BUTTON")
    btnEdit.innerHTML = 'Editeaza'
    btnEdit.classList.add('btn')
    btnEdit.setAttribute("id", questionsArray[i]['id'])
    btnEdit.onclick= function() {editQuestion(this.id)}
    cell8.appendChild(btnEdit)


    var btnDelete = document.createElement("BUTTON")
    btnDelete.innerHTML = 'Sterge'
    btnDelete.classList.add('btn')
    btnDelete.setAttribute("id", questionsArray[i]['id'])
    btnDelete.onclick= function() {deleteQuestion(this.id)}
    cell9.appendChild(btnDelete)
}