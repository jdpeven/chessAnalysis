
//https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
function buttonPressed(){
    var myUrl = "https://api.chess.com/pub/player/" + $("#userNameInput").val();
    $.ajax({
        url: myUrl,
        error: function() {
            updateUserInfo(null)
            alert("Invalid username");
        },
        success: function(data) {
            updateUserInfo(data);
            getArchives($("#userNameInput").val());
            //console.log(data);
        }
    });
};

function updateUserInfo(data)
{
    if(data == null)
    {
        $("#url").text("https://api.chess.com/pub/player/");
        $("#name").text("User Name: ");
        $("#followers").text("Followers: ");
        $("#location").text("Location: ");
    }
    else 
    {
        $("#url").text("https://api.chess.com/pub/player/" + $("userNameInput").val());
        $("#name").text("User Name: " + data["username"]);
        $("#followers").text("Followers: " + data["followers"]);
        $("#location").text("Location: " + data["location"]);
    }
};

function getArchives(userName)
{
    var monthDict = {"01" : "January", "02" : "February", "03" : "March", "04" : "April", "05" : "May", "06" : "June", "07" : "July", 
            "08" : "August", "09" : "September", "10" : "October", "11" : "November", "12" : "December"};
    var endpointArr;
    var myUrl = "https://api.chess.com/pub/player/" + userName + "/games/archives";
    $.ajax({
        url: myUrl,
        error: function() {
            alert("Archives not found");
        },
        success: function(data) {
            //console.log(data["archives"]);
            endpointArr = data["archives"];
            for(var i = 0; i < endpointArr.length; i++)
            {
                var splitURL = endpointArr[i].split('/');
                var len = splitURL.length;

                $("#archives").append('<li>'+monthDict[splitURL[len - 1]] + ' ' + splitURL[len-2]+'</li>');
                //console.log(data["archives"][i]);
            }
            $("#archives").selectable();
        }
    });
}

$("#myButton").click(function(){
    buttonPressed();
})