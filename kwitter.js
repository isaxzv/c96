const firebaseConfig = {
    apiKey: "AIzaSyDCrMFJre_TgBWpYPMrtyjOqKTqdbycJzE",
    authDomain: "conversar-a2e41.firebaseapp.com",
    databaseURL: "https://conversar-a2e41-default-rtdb.firebaseio.com",
    projectId: "conversar-a2e41",
    storageBucket: "conversar-a2e41.appspot.com",
    messagingSenderId: "493133088285",
    appId: "1:493133088285:web:78740bf042fa69b3e828f4"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
userName = localStorage.getItem("userName");