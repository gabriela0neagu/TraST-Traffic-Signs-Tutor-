function getUsers()
{
	let users = 0
	if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              users = JSON.parse(this.responseText)
            }
        }
        xmlhttp.open("GET","../php/getUsers.php", false)
        xmlhttp.send()
        return users
}


function getConnectedUser()
{
    let username = ''
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              username = this.responseText
            }
        }
        xmlhttp.open("GET","../php/getUsername.php?", false)
        xmlhttp.send()
        return username
}

function deleteUser(id)
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
        xmlhttp.open("GET","../php/deleteUser.php?id=" + id, false)
        xmlhttp.send()
    alert('Utilizatorul selectat a fost eliminat cu succes')
    location.reload();
    return false; 
}


let username=getConnectedUser()

let usersArray = getUsers()

var table = document.getElementById("table").getElementsByTagName('tbody')[0]

var i 
for(i=0 ; i<usersArray.length; i++)
{   

    var row = table.insertRow(i)
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    var cell4 = row.insertCell(3)
    var cell5 = row.insertCell(4)


    cell1.innerHTML = usersArray[i]['id']
    cell2.innerHTML = usersArray[i]['firstName']
    cell3.innerHTML = usersArray[i]['lastName']
    cell4.innerHTML = usersArray[i]['username']

    var btnDelete = document.createElement("BUTTON")
    btnDelete.innerHTML = 'Șterge'
    btnDelete.classList.add('btnDelete')
    btnDelete.setAttribute("id", usersArray[i]['id'])
    btnDelete.onclick= function() {deleteUser(this.id)}
    if(username == usersArray[i]['username'])
    {
        row.classList.add('specialUser')
        btnDelete.disabled=true;
    }
    cell5.appendChild(btnDelete)
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