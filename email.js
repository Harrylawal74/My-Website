setTimeout(() => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const number = document.getElementById('number');
  const subject = document.getElementById('subject');
  const body = document.getElementById('body');

  name.value = '';
  email.value = '';
  number.value = '';
  subject.value = '';
  body.value = '';

  window.open("http://127.0.0.1:5500/index.html", "_blank"); 

}, 100); 
