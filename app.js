 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import { ref,set,getDatabase,push,onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBg09-r-kPe3caXZBIQEy8vf12xZmGImP8",
   authDomain: "fire-basedatabase.firebaseapp.com",
   projectId: "fire-basedatabase",
   storageBucket: "fire-basedatabase.appspot.com",
   messagingSenderId: "740309280256",
   appId: "1:740309280256:web:48a92280580f37ee765ae5",
   measurementId: "G-EYQC8GZRLT"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const database = getDatabase(); 

 window.add= function(){
    // var obj ={
    //     text: inp.value,
        
    // };
    var formData = {
        gender: document.getElementById('gender').value,
        selectcity: document.getElementById('selectcity').value,
        fullname: document.getElementById('fullname').value,
        fahername:document.getElementById('fathername').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        dateofbirth: document.getElementById('birthdate').value,
        cnicno: document.getElementById('cnicno').value,
        Address: document.getElementById('Address').value,
        Doyouhavelaptop: document.getElementById('Availbilityoflaptop').value,
        lastQualification: document.getElementById('last').value,
        yourpicture: document.getElementById('yourpicture').value,




        // Add more fields as needed
      };
   
      var obj = formData;

obj.id = push(ref(database, "Tasks/")).key;


// // // give path for going in node ...reference made for putting it in firebase data base
    var reference = ref(database, `Tasks/${obj.id}`);
// // //bracket text send to data base
    set(reference , obj);
 };

 function getData(){
    var reference = ref(database, "Tasks/");

    onValue(reference, function (data){
        console.log(data.val());
    });
}



getData();

