const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
    //stop default of browser-submit form page prevented
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
    //add variables for data here 
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // TODO: Add a comment describing the functionality of this expression
      //pass in method, info to be sent-stringified html and info
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
