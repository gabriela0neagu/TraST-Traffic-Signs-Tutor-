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
        xmlhttp.open("GET","../php/getUsers.php?", false)
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

let username=getConnectedUser()

let usersArray = getUsers()
var i 
var table = document.getElementById("table").getElementsByTagName('tbody')[0]

for(i=0 ; i<usersArray.length; i++)
{	
	var row = table.insertRow(i)
	var cell1 = row.insertCell(0)
	var cell2 = row.insertCell(1)
	var cell3 = row.insertCell(2)

    if(username == usersArray[i]['username']){
    	row.classList.add('specialUser')
    }
	cell1.innerHTML = i+1
	cell2.innerHTML = usersArray[i]['username']
	cell3.innerHTML = usersArray[i]['score']
	
	//console.log((i+1) + ' ' + usersArray[i]['username'] + ' ' + usersArray[i]['score'])
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

estabilishWhichButtonsToShow()

homeBtn = document.getElementById('homeBtn') 
logoutBtn = document.getElementById('logoutBtn') 
rssBtn = document.getElementById('rssBtn')

rssBtn.onclick = function() { window.document.location = '../rss.php'}
homeBtn.onclick = function(){window.document.location = '../html/Trast.html'}
logoutBtn.onclick = function(){window.document.location = '../php/logout.php'}