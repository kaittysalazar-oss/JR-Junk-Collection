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
  
  // Show success message
  alert(`Thank you, ${name}! Your quote request has been received.`);
  
  // Reset form
  this.reset();
  
  // In a real application, you would send this data to a server
  console.log('Quote Request:', { name, email, phone, description });
}
