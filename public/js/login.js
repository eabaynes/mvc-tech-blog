async function submitFormHandler(event) {
    event.preventDefault();

    const usernameText = document.getElementById('username').value.trim();
    const passwordText = document.getElementById('password').value.trim();

    if (usernameText && passwordText) {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                username: usernameText,
                password: passwordText
                }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            document.location.replace("/profile");
        } else {
            alert(response.statusText);
        }
    }
};

document.getElementById('login-form').addEventListener('submit', submitFormHandler);