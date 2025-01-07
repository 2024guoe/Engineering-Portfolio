document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('form-response').innerHTML = `<p>Thank you for your message, ${name}!</p>`;
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').innerHTML = '<p>Please fill in all fields.</p>';
    }
});
