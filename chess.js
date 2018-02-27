
//https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
function buttonPressed(){
    var url = "https://api.chess.com/pub/player/" + document.getElementById("userNameInput").value;
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data){
            if(data["code"] == 0)
            {
                //alert("error");
                updateUserInfo(null);
            }
            else
            {
                console.log(data);
                updateUserInfo(data);
            }
        })
        .catch(function(error) {
            alert(error);
            console.log(error);
        })
    //alert("hello");
};

function updateUserInfo(data)
{
    if(data == null)
    {
        document.getElementById("url").innerHTML = "https://api.chess.com/pub/player/";
        document.getElementById("name").innerHTML = "User Name: ";
        document.getElementById("followers").innerHTML = "Followers: ";
        document.getElementById("location").innerHTML = "Location: ";
    }
    else 
    {
        document.getElementById("url").innerHTML = "https://api.chess.com/pub/player/" + document.getElementById("userNameInput").value;
        document.getElementById("name").innerHTML = "User Name: " + data["username"];
        document.getElementById("followers").innerHTML = "Followers: " + data["followers"];
        document.getElementById("location").innerHTML = "Location: " + data["location"];
    }

}

document.getElementById("myButton").onclick = function(){
    buttonPressed();
}