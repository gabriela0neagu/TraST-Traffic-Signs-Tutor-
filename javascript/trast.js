
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
        	userBtn.classList.add('hide')
        	logoutBtn.classList.remove('hide')
        	profileBtn.classList.remove('hide')
        }
        else
        {
        	logoutBtn.classList.add('hide')
        	profileBtn.classList.add('hide')
     		userBtn.classList.remove('hide')
        }
}


userBtn =document.getElementById('userBtn') 
logoutBtn = document.getElementById('logoutBtn') 
profileBtn = document.getElementById('profileBtn')


userBtn.onclick = function(){window.document.location = '../html/LogIn.html'}
logoutBtn.onclick = function(){window.document.location = '../php/logout.php'}
profileBtn.onclick = function() {window.document.location = '../html/Profile.html'}

estabilishWhichButtonsToShow()