var firebaseConfig = {
      apiKey: "AIzaSyCZWrDBVHEGr_bGpVBijnD3rdHlSs0rXpI",
      authDomain: "kwitterdatabase-ce370.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-ce370-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-ce370",
      storageBucket: "kwitterdatabase-ce370.appspot.com",
      messagingSenderId: "955243672412",
      appId: "1:955243672412:web:a65b976bb06756f31e4799"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
var name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
var message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
var like_button = "<button class = 'btn btn-info' id = " + firebase_message_id +" value = "+ like +" onclick = 'updateLike(this.id)'>";
var span_with_tag = "<span class = 'glyphicon glypgicon-thumbs-up'>Like:"+like + "</span></button><hr>";

var row = name_with_tag + message_with_tag + like_button + span_with_tag;

document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
      getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");

      window.location = "index.html";
}

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("roomname");


