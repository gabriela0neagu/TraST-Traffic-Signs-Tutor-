  function validateForm() {
  var x = document.forms["myForm"]["firstname"].value;
   var a = document.forms["myForm"]["lastname"].value;
    var b = document.forms["myForm"]["email"].value;
     var c = document.forms["myForm"]["username"].value;
      var d = document.forms["myForm"]["password"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
   if (a == "") {
    alert("Prenume must be filled out");
    return false;
  }
   if (b == "") {
    alert("Email must be filled out");
    return false;
  }
   if (c == "") {
    alert("Username must be filled out");
    return false;
  }
   if (d == "") {
    alert("Pass must be filled out");
    return false;
  }
}