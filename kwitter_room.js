
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

   var user_name = localStorage.getItem("user_name");
   var room_name = localStorage.getItem("room_name");

   function confirm()
   {
       var msg = document.getElementById("msg").value;
       console.log(msg);
       firebase.database().ref(room_name).push({
             name: user_name,
             message: msg,
             like: 0  
       });
   
       document.getElementById("msg").value = "";
   
      
   }

   document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

   function addroom()
   {
         var room_name = document.getElementById("room_name").value;
         console.log("current roomname is " + room_name);
         localStorage.setItem("room_name", room_name);
         firebase.database().ref("/").child(room_name).update({
               purpose:"adding roomname"
         });
        
   
         window.location = "kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname is " + Room_names);
row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");

      window.location = "index.html";
}



