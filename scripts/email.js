const myTimeout = setTimeout(clearData, 100);


function clearData() {
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
}
