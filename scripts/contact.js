// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

/*jshint esversion: 6 */
document.getElementById('submit-button').addEventListener('click', function(event) { 
    event.preventDefault(); // Prevent the form from submitting

    // Get the contact page element 
    const contactPage = document.getElementById('contact-page');

    // Clear the contact page content 
    contactPage.innerHTML = '';

    // Create a new paragraph element 
    const thankYouMessage = document.createElement('p'); 
    thankYouMessage.textContent = 'Thank you for your message'; 
    thankYouMessage.style.fontSize = '24px';

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Append the new paragraph to the contact page 
contactPage.appendChild(thankYouMessage); 
});
