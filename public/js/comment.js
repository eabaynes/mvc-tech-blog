async function commentSubmitHandler(event) {
    event.preventDefault();

    const comment_text = document.getElementById('comment-text').value.trim();
    console.log(comment_text);
    const post_id = document.getElementById('post-id').innerHTML
    console.log(post_id);

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                body: comment_text,
                post_id: post_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.getElementById("comment-form").addEventListener('submit', commentSubmitHandler);