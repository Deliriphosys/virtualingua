$('.carousel').slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    fade: true,
    cssEase: 'linear',
  });

function validateForm() {

    var firstName = document.getElementById("first-name").value;
  
    var lastName = document.getElementById("last-name").value;
  
    var username = document.getElementById("username").value;
  
    var email = document.getElementById("email").value;
  
    var confirmEmail = document.getElementById("confirm-email").value;
  
    if (firstName.length < 5 || lastName.length < 5) {
  
      alert("First Name and Last Name must be more than 5 characters");

      return false;
  
    }
  
    if (username.length < 5) {
  
      alert("Username must be more than 5 characters");
  
      return false;
  
    }
  
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (!emailRegex.test(email) || !emailRegex.test(confirmEmail)) {
  
      alert("Invalid email address");
  
      return false;
  
    }
  
    if (email !== confirmEmail) {
  
      alert("Email and Confirm Email must match");
  
      return false;
  
    }
    
  window.location.href = "http://127.0.0.1:8000/register2";
  
}

const passwordInput = document.getElementById('password');

const confirmPasswordInput = document.getElementById('confirm-password');

const termsCheckbox = document.getElementById('terms');

const registerBtn = document.getElementById('register-btn');


registerBtn.addEventListener('click', (e) => {

  e.preventDefault();


  const password = passwordInput.value;

  const confirmPassword = confirmPasswordInput.value;

  const termsAgreed = termsCheckbox.checked;


  if (!password || !confirmPassword || !termsAgreed) {

    alert('Please fill in all fields and agree to the terms of service');

    return;

  }


  if (password !== confirmPassword) {

    alert('Passwords do not match');

    return;

  }


  if (password.length < 8 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {

    alert('Password must be at least 8 characters long and contain at least one letter and one number');

    return;

  }


  window.location.href = 'http://127.0.0.1:8000/login';

});

const form = document.querySelector('.form');

const emailInput = document.querySelector('#email');

const passwordLogin = document.querySelector('#password');

const loginBtn = document.querySelector('#login-btn');

loginBtn.addEventListener('click', (e) => {

  e.preventDefault(); 

  const email = emailInput.value;

  const password = passwordLogin.value;

  db.verifyCredentials(email, password, (err, result) => {

    if (err) {

      console.error(err);

      alert('Invalid email or password');

    } else if (result) {

      window.location.href = 'welcome.html'; 

    }

  });

});