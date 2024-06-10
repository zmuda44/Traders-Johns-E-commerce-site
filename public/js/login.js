// Get DOM variables
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");


const signUpUser = async function (e) {
    e.preventDefault();
    const username = document.getElementById("signup-user-name").value.trim();
    const email = document.getElementById("signup-email").value.trim();
    const password = document.getElementById("signup-password").value.trim();

    if (username && email && password) {
        console.log(username, email, password)
        
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },            
        });
        
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
}





signupBtn.addEventListener('click', signUpUser)
