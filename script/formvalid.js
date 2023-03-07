function validation() {
    firstn = document.getElementById("fname").value;
    lastn = document.getElementById("lname").value;
    email = document.getElementById('email').value;
    txt = document.getElementById('txt').value;
    if (firstn == "") {
        y = document.getElementsByTagName('span');
        y[0].innerHTML = "You must fill this field *";
        y[0].style.color ='red';
        y[0].style.fontSize ='15px';
        return false;
    }
    if (lastn == "") {
        y = document.getElementsByTagName('span');
        y[1].innerHTML = "You must fill this field *";
        y[1].style.color ='red';
        y[1].style.fontSize ='15px';
        return false;
    }
    if (email == "" || email != indexOf("@")) {
        y = document.getElementsByTagName('span');
        y[2].innerHTML = "You must fill this field eg. ...@gmail.com, ...@yahoo.com etc. *";
        y[2].style.color ='red';
        y[2].style.fontSize ='15px';
        return false;
    }
    if (txt == "") {
        y = document.getElementsByTagName('span');
        y[3].innerHTML = "You must fill this field *";
        y[3].style.color ='red';
        y[3].style.fontSize ='15px';
        return false;
    }

}
function checkpname() {
    var x = document.getElementById("checkp");
    var y = document.getElementById("pname");
    var z = document.getElementById("fname");
    if (x.checked) {
        y.value = z.value;
    }
    else {
        y.value = "";
    }
}