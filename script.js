//Loads the header and footer into the proper positions. This definitely works, regardless of what the compiler says.
$(document).ready(function () {
  var rellax = new Rellax('.rellax');
  $("#navbar").load("header.html");
  $("#footer").load("footer.html");
});

/**
 * Contact Form
 */
const url = 'https://script.google.com/macros/s/AKfycbycwU6StZFD5d1fTHyvpvmyQfKrpSJoYHt2RH94TqviG1CJhSRzGC31_qNNscTqp2LS/exec';
const contactForm = document.getElementById('contact-form');
const loadingMessage = document.querySelector('.loading');
const errorMessage = document.querySelector('.error-message');
const sentMessage = document.querySelector('.sent-message');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const recaptchaResponse = document.getElementById('g-recaptcha-response').value;

  if (!recaptchaResponse) {
    errorMessage.style.display = 'block';
    loadingMessage.style.display = 'none'; // Hide loading message
    sentMessage.style.display = 'none'; // Hide success message
    return;
  }

  loadingMessage.style.display = 'block'; // Show loading message

  const formData = new FormData(this);
  const data = Object.fromEntries(formData);
  data.gCaptchaResponse = recaptchaResponse;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(data),
  })
  .then((res) => res.json())
  .then((data) => {
    console.log('Successful', data);
    contactForm.reset();
    loadingMessage.style.display = 'none'; // Hide loading message
    sentMessage.style.display = 'block'; // Show success message
    errorMessage.style.display = 'none'; // Hide error message
    setTimeout(function () {
      sentMessage.style.display = 'none'; // Hide success message after a few seconds
    }, 5000);
  })
  .catch((err) => {
    console.log('err', err);
    loadingMessage.style.display = 'none'; // Hide loading message
    errorMessage.style.display = 'block'; // Show error message
    sentMessage.style.display = 'none'; // Hide success message
  });
});