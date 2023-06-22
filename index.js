// Get references to the buttons
const callButton = document.getElementById('callButton');
const emailButton = document.getElementById('emailButton');

// Define the functions to be executed when the buttons are clicked
function callUs() {
    
    window.location.href = 'tel:+000000000';
    
}

function sendEmail() {
    const email = 'example@example.com';
    const subject = 'Hello';
    const body = 'this email is latest so go back to my main site to contact me';

    
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoUrl;

}

// Add event listeners to the buttons
callButton.addEventListener('click', callUs);
emailButton.addEventListener('click', sendEmail);
