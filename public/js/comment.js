async function commentSubmitHandler(event) {
    event.preventDefault();

    const post_id = document.getElementById('post-id').value;
    const comment_text = document.getElementById('comment-text').value.trim();

    if (comment_text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({
                post_id: post_id,
                comment: comment_text,
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