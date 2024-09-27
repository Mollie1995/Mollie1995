



document.querySelectorAll('.buy-now').forEach(button => {
    button.addEventListener('click', function() {
    alert('Thank you for purchasing!');
    });
    });


    const form = document.querySelector('.contact-form');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
    
      if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields');
        return;
      }
    });





const registration = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
e.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirm-password').value;

if (password !== confirmPassword) {
alert('Passwords do not match');
return;
}

// Handle form submission (e.g., send data to server)
console.log('Form submitted:', { name, email, password });
});



const login = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
e.preventDefault();

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

if (username === '') {
alert('Username is required');
return;
}

if (password === '') {
alert('Password is required');
return;
}

// Handle form submission (e.g., send data to server)
console.log('Form submitted:', { username, password });
});

  


