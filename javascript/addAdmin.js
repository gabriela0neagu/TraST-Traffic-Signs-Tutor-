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

function isAdmin(id)
{
    let isadmin=0
    if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              isadmin = JSON.parse(this.responseText)
            }
        }
        xmlhttp.open("GET","../php/isAdmin.php?id=" + id, false)
        xmlhttp.send()
        return isadmin
}


function addAdmin(id)
{
   if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              text = this.responseText
            }
        }
        xmlhttp.open("GET","../php/addAdmin.php?id=" + id, false)
        xmlhttp.send()
        alert("Drepturile de administrator au fost adăugate")
    location.reload();
    return false;
}

function deleteAdmin(id){
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
        xmlhttp.open("GET","../php/deleteAdmin.php?id=" + id, false)
        xmlhttp.send()
        alert("Drepturile de administrator au fost șterse")

location.reload();
return false;
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

    if(isAdmin(usersArray[i]['id']) == 1)
    {
        var btnIsAdmin = document.createElement("BUTTON")
        btnIsAdmin.innerHTML = 'Șterge admin'
        //btnIsAdmin.classList.add('gray')
        btnIsAdmin.classList.add('buttonAdminRights')
        btnIsAdmin.classList.add('buttonAdminRightsOn')
        btnIsAdmin.setAttribute("id", usersArray[i]['id'])
        btnIsAdmin.onclick= function() {deleteAdmin(this.id)}

        if(username == usersArray[i]['username'])
        {
            btnIsAdmin.disabled=true;
            row.classList.add('specialUser')
        }
        cell5.appendChild(btnIsAdmin)
    }
    else{
        var btnIsNotAdmin = document.createElement("BUTTON")
        btnIsNotAdmin.innerHTML = 'Adaugă admin'
        //btnIsNotAdmin.classList.add('green')
        btnIsNotAdmin.classList.add('buttonAdminRights')
        btnIsNotAdmin.classList.add('buttonAdminRightsOff')
        btnIsNotAdmin.setAttribute("id", usersArray[i]['id'])
        btnIsNotAdmin.onclick= function() {addAdmin(this.id)}
        if(username == usersArray[i]['username'])
        {
            row.classList.add('specialUser')
            btnIsAdmin.disabled=true;
        }
        cell5.appendChild(btnIsNotAdmin)
    }

}