document.addEventListener('DOMContentLoaded', function() {
    // select the login form
    const login_form = document.querySelector('form');
    
    // add submit event listener to the form
    login_form.addEventListener('submit', function(event) {
        // prevent the page from reloading
        event.preventDefault();
        
        // get email and password values
        const email = document.getElementById('email').value;
        const password = document.getElementById('pass').value;
        
        // check if email or password is empty
        if (!email || !password) {
            alert("Please enter your email and password to login!");
            return;
        }
        
        // check if email and password are correct
        if (email == "demo@gmail.com" && password == "1234") {
            alert('Login successful!');
        } 
		else {
            alert('Invalid email or password!');
        }
    });
});

	