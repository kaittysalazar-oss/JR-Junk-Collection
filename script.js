// Form submission handler
document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const description = document.getElementById('description').value.trim();
  
  // Basic validation
  if (!name || !email || !phone || !description) {
    alert('Please fill in all fields.');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Prepare form data
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('description', description);
  formData.append('_subject', 'New Junk Quote Request');

  const messageDiv = document.getElementById('formMessage');
  const submitBtn = this.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  messageDiv.textContent = '';
  messageDiv.className = 'form-message';

  // Send to Formspree
  fetch('https://formspree.io/f/xreoqnad', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    submitBtn.disabled = false;
    if (response.ok) {
      messageDiv.textContent = `Thank you, ${name}! Your quote request has been sent successfully.`;
      messageDiv.classList.add('form-message-success');
      document.getElementById('quoteForm').reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    submitBtn.disabled = false;
    messageDiv.textContent = 'Sorry, there was an error sending your request. Please try again or contact us directly.';
    messageDiv.classList.add('form-message-error');
  });
});


