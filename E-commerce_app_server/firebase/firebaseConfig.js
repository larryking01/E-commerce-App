const firebase = require('firebase/app')
require('firebase/auth') 
require('firebase/firestore')
require('firebase/storage')



// app configuration object.
const firebaseConfig = {
    apiKey: "AIzaSyCGRJwGk-Mvz7kDAXSmqZZRZ6jTMKZuAd0",
    authDomain: "restaurant-food-delivery-82446.firebaseapp.com",
    projectId: "restaurant-food-delivery-82446",
    storageBucket: "restaurant-food-delivery-82446.appspot.com",
    messagingSenderId: "1046311146396",
    appId: "1:1046311146396:web:8852c79a1e7f04c99b2e59"

}


// initializing the firebase app.
try {
    firebase.initializeApp( firebaseConfig )
}
catch( err )
{
    if(!/already exists/.test( err.message )) {
        console.log(`firebase initialization error occurred: ${ err.stack }`)
    }
}



let firebaseAuth = firebase.auth()
let fireStore = firebase.firestore()
let firebaseStorage = firebase.storage()
let timestamp = firebase.firestore.FieldValue.serverTimestamp()


module.exports = { firebaseAuth, fireStore, firebaseStorage }
