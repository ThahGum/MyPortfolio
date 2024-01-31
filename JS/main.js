/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
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

// /*=============== CHANGE BACKGROUND HEADER ===============*/
// const shadowHeader = () =>{
//     const header = document.getElementById('header')
//     // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
//     this.scrollY >= 50 ? header.classList.add('shadow-header') 
//                        : header.classList.remove('shadow-header')
// }
// window.addEventListener('scroll', shadowHeader)

/*firebase*/
document.write('<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js"></script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js"></script>');
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
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
function attachFormSubmission() {
    const contactForm = document.getElementById('contactForm');
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
}

// Save data to Firebase
function saveDataToFirebase(name, email) {
    const dataRef = database.ref('submissions'); // 'submissions' is the name of your Firebase collection

    // Push the data to Firebase
    dataRef.push({
        name: name,
        email: email,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
}
