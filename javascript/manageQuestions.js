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
	window.document.location = '../html/editQuestionAdmin.html'
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
    alert('Intrebarea a fost stearsa cu succes')
    location.reload();
    return false; 
}

function addQuestion()
{
 window.document.location = '../html/insertQuestionAdmin.html'   
}

let questionsArray = getQuestions()

var table = document.getElementById("table")

var header = table.rows[0]
    header.deleteCell(8)
    header.cells[7].colSpan = 2

    var btnAdd = document.createElement("BUTTON")
    btnAdd.innerHTML = 'Adaugă'
    btnAdd.classList.add('btn')
    btnAdd.onclick= function() {addQuestion()}
    header.cells[7].appendChild(btnAdd)

var table=document.getElementById('table').getElementsByTagName('tbody')[0]

var i 
for(i=0 ; i<questionsArray.length; i++)
{   
    
    var row = table.insertRow(i)
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
    btnEdit.innerHTML = 'Editează'
    btnEdit.classList.add('btn')
    btnEdit.setAttribute("id", questionsArray[i]['id'])
    btnEdit.onclick= function() {editQuestion(this.id)}
    cell8.appendChild(btnEdit)


    var btnDelete = document.createElement("BUTTON")
    btnDelete.innerHTML = 'Șterge'
    btnDelete.classList.add('btn')
    btnDelete.setAttribute("id", questionsArray[i]['id'])
    btnDelete.onclick= function() {deleteQuestion(this.id)}
    cell9.appendChild(btnDelete)
}



 var scrollButton = document.createElement("BUTTON");
 scrollButton.classList.add('scrollBtn')
 scrollButton.innerHTML='Top'
 document.body.appendChild(scrollButton)
 scrollButton.onclick=function(){topFunction()}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




function estabilishWhichButtonsToShow()
{
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              answer = this.responseText
            }
        }
        xmlhttp.open("GET","../php/checkLogged.php", false)
        xmlhttp.send()


        if(answer == 'logged')
        {
            logoutBtn.classList.remove('hide')
        }
        else
        {
            logoutBtn.classList.add('hide')
        }
}

homeBtn = document.getElementById('homeBtn') 
logoutBtn = document.getElementById('logoutBtn') 


homeBtn.onclick = function(){window.document.location = '../html/Trast.html'}
logoutBtn.onclick = function(){window.document.location = '../php/logout.php'}

estabilishWhichButtonsToShow()


