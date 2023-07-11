// Access the form element
const lifePatternForm = document.getElementById('lifePatternForm');

// Add event listener for form submission
lifePatternForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Access form fields and values
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const mobile = document.getElementById('mobile').value;
  
  // Access the remaining questions and their values
  
  // Process the form data or perform any other required actions
  // ...
  
  // Clear the form or display a success message
  lifePatternForm.reset();
});
