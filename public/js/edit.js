async function editFormHandler(event) {
    event.preventDefault();

    const post_id = document.getElementById('post-id').value;
    const title = document.getElementById('title').value.trim();
    const body = document.getElementById('body').value.trim();

    if (title && body) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            alert('Post updated successfully!');
            document.location.replace('/profile');
        } else {
        alert(response.statusText);
        }
    }
}