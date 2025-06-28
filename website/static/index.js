function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        body: JSON.stringify({ noteId: noteId }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            window.location.href = "/";
        } else {
            console.error('Error deleting note:', response.status);
        }
    }).catch((error) => {
        console.error('Error:', error);
    });
}
