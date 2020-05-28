var backToProfileBtn = document.getElementById('backToProfile')
backToProfile.onclick = function(){ window.document.location = '../html/Profile.html' }


var manageRightsBtn = document.getElementById('manageRights')
manageRightsBtn.onclick = function(){window.document.location = '../html/manage-admin.html'}

var deleteUsersBtn = document.getElementById('deleteUsers')
deleteUsersBtn.onclick = function(){window.document.location = '../html/sterge-utilizator.html'} 

var manageQuestionsBtn = document.getElementById('manageQuestions')
manageQuestionsBtn.onclick=function(){window.document.location = '../html/manageQuestions.html'}


function getLoggedUser()
{
  let user = 0
  if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              user = JSON.parse(this.responseText)
            }
        }
        xmlhttp.open("GET","../php/getLoggedUser.php", false)
        xmlhttp.send()
        return user
}

let user = getLoggedUser()
document.getElementById('fname').innerHTML=user['firstName']
document.getElementById('lname').innerHTML=user['lastName']
document.getElementById('username').innerHTML=user['username']
document.getElementById('email').innerHTML=user['email']
 


 var scrollButton = document.createElement("BUTTON");
 scrollButton.classList.add('myBtn')
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