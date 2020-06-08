homeBtn = document.getElementById('homeBtn') 

homeBtn.onclick = function(){window.document.location = '../html/Trast.html'}


function checkLogin()
{
	let errors= 0
	if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest()
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
              errors = this.responseText
            }
        }
        xmlhttp.open("GET","../php/getErrors.php", false)
        xmlhttp.send()
        return errors
}


let errors = checkLogin()
if(errors == 1)
{
	alert("Username sau parola invalida");
}

