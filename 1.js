    var x= [];

    function addText(){
    var message = document.getElementById('message').value;
    x.push(message);
    document.getElementById('demo').innerHTML = x;
    }
   

    function deleteText() {
    x.pop(message);
    document.getElementById("demo").innerHTML = x;
    }