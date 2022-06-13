
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

  function addUser()
  {
      var username = document.getElementById("user_name").value;

      firebase.database().ref("/").child(username).update({
          purpose:"adding username"
      });
  }