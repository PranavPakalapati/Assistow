document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const companyName = document.getElementById('companyName').value;
    const contactName = document.getElementById('contactName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const services = document.getElementById('services').value;

    const formData = {
        companyName,
        contactName,
        phone,
        email,
        location,
        services
    };

    console.log('Form Data Submitted:', formData);
    
    // Simulate a form submission to a server
    // Here you would typically send the data to a server
    // For example:
    // fetch('https://your-server.com/api/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //     alert('Tow truck has been registered!');
    //     window.location.href = 'index.html'; // Redirect to home page
    // })
    // .catch((error) => console.error('Error:', error));

    // For this example, we'll just show the alert and redirect
    alert('Tow truck has been registered!');
    window.location.href = 'index.php'; // Redirect to home page
});
