async function newPostHandler(event) {
    event.preventDefault();

    const titleText = document.getElementById('title').value.trim();
    const bodyText = document.getElementById('body').value.trim();
    const user_id = req.session.user_id;

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: titleText,
                body: bodyText,
                user_id: user_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
}

document.getElementById('new-post-submit').addEventListener('submit', newPostHandler);