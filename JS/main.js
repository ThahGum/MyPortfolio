/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu') /*validate if constant exists*/
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBeVtV82aC4I-9z6oe6KAc14qHngKgwdTU",
    authDomain: "cvwebapp-b667c.firebaseapp.com",
    databaseURL: "https://cvwebapp-b667c-default-rtdb.firebaseio.com",
    projectId: "cvwebapp-b667c",
    storageBucket: "cvwebapp-b667c.appspot.com",
    messagingSenderId: "769294286590",
    appId: "1:769294286590:web:62a7f643b47333fa5aafaf",
    measurementId: "G-PCPHRRTR5C"
  };
  
let app=initializeApp(firebaseConfig);


const data= getFirestore(app);




const contactForm = document.getElementById('contact-form');
const submittedPage = document.getElementById('submitted-page');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Assuming a simple validation for name and email
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        alert('Please fill in all the details.');
        return;
    }

    // Save data to Firebase
    saveDataToFirebase(name, email);

});


// Save data to Firebase
function saveDataToFirebase(name, email) {

    // Push the data to Firebase
    addDoc( collection(data,'submissions'),{
        name: name,
        email: email,
        timestamp: new Date().toTimeString()
    });
}



