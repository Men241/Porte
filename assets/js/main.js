
 let formValid = document.querySelector('.login100-form-btn');
 let mail = document.querySelector('input[name = email]');
 let pwd = document.querySelector('input[name = pass]');

 let msg = document.querySelector('.message');


 let emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,8}$/;
 let pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

 formValid.addEventListener('click', validation);

