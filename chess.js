
function buttonPressed(){
    var req = "https://api.chess.com/pub/player/" + document.getElementById("userName").value;
    //var req = document.getElementById("userName").value;
    document.getElementById("url").innerHTML = req;
    //alert("hello");
};

document.getElementById("myButton").onclick = function(){
    buttonPressed();
}