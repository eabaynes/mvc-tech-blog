async function commentSubmitHandler(event) {
    event.preventDefault();

    const post_id = document.getElementById('post-id').value;
    const comment_text = document.getElementById('comment-text').value.trim();
    const user_id = req.session.user_id;

    if (comment_text) {
        const response = await fetch(`/api/posts/${post_id}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                comment: comment_text,
                user_id: user_id
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

document.querySelector('.comment-form').addEventListener('submit', commentSubmitHandler);