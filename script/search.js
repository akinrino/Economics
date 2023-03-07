function search() {
    let input = document.getElementById('mySearch').value
    input=input.toLowerCase();
    let x = document.getElementsByTagName('summary');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}
