let signInbtn =document.querySelector('.signinbtn');
let LogInbtn =document.querySelector('.Loginbtn');
let nameField =document.querySelector('.namefield');
let PasswordField=document.querySelector('.passwordfield')
let title =document.querySelector('.title');
let underline=document.querySelector('.underline');
let text=document.querySelector('.text');


LogInbtn.addEventListener('click',()=>{
  nameField.style.maxHeight = '0';
  PasswordField.style.maxHeight='0';
  title.innerHTML = 'Log in';
  text.innerHTML = 'Forgot Password ?';
 signInbtn.classList.add('disable');
 LogInbtn.classList.remove('disable');
 underline.style.transform = "translateX(35px)";
});


signInbtn.addEventListener('click',()=>{
  nameField.style.maxHeight = '60px';
  PasswordField.style.maxHeight='60px';
  title.innerHTML = 'Log in';
  text.innerHTML = 'Password suggestions ?';
  signInbtn.classList.remove('disable');
 LogInbtn.classList.add('disable');
 underline.style.transform = "translateX(0)";
});