function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}
emailjs.init("JXRfod_DeMIfpCI-H"); // Replace with your EmailJS public key

// Contact form submit
let contact = document.getElementById('contactForm');
contact.addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload

    emailjs.sendForm('service_576wqak', 'template_68axp6q', this)
        .then(function() {
            alert('Message Sent Successfully!');
            contact.reset();
        }, function(error) {
            alert('FAILED...' + JSON.stringify(error));
        });
});