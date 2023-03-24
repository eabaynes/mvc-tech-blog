async function signupFormHandler(event) {
    event.preventDefault();

    const usernameText = document.getElementById('username').value.trim();
    const passwordText = document.getElementById('password').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username: usernameText,
                password: passwordText
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please fill out all fields');
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);