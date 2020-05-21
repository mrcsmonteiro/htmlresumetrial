//Get the visitors element on the page

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("visits").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://h1dqwvt5p4.execute-api.us-east-1.amazonaws.com/prod/counter", true);
xhttp.send();
