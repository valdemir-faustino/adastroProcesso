// firebaseConfig.js

var firebaseConfig = {
    apiKey: "AIzaSyDWVPVMOYLp9wwKJn7Sc_ERFEiORr8B26M",
    authDomain: "fomularioteste-e37bb.firebaseapp.com",
    databaseURL: "https://fomularioteste-e37bb-default-rtdb.firebaseio.com",
    projectId: "fomularioteste-e37bb",
    storageBucket: "fomularioteste-e37bb.appspot.com",
    messagingSenderId: "723794565712",
    appId: "1:723794565712:web:c5ebedf042387f6a89cf55",
    measurementId: "G-XQQZ6080XL"
};
  
  // Inicializar o Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  var database = firebase.database();
  