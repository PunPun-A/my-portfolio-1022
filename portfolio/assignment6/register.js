window.onload = pageLoad;

function pageLoad() {
  let form = document.getElementById("myRegister");
  form.onsubmit = function (event) {
    validateForm(event, form);
  };
}

function validateForm(event, form) {
  event.preventDefault(); 

  let firstname = document.getElementsByName("firstname")[0].value.trim();
  let lastname = document.getElementsByName("lastname")[0].value.trim();
  let gender = document.querySelector('input[name="gender"]:checked');
  let bday = document.getElementsByName("bday")[0].value;
  let email = document.getElementsByName("email")[0].value.trim();
  let username = document.getElementsByName("username")[0].value.trim();
  let password = document.getElementsByName("password")[0].value;
  let retype = document.getElementsByName("password")[1].value;

  if (!firstname || !lastname || !gender || !bday || !email || !username || !password || !retype) {
    document.getElementById("errormsg").innerText = "กรอกข้อมูลให้ครบทุกช่อง";
    return false;
  }

  if (password !== retype) {
    document.getElementById("errormsg").innerText = "Password และ Retype Password ไม่ตรงกัน";
    return false;
  }

  
  let query = new URLSearchParams({
    firstname,
    lastname,
    gender: gender.value,
    bday,
    email,
    username,
    password
  });

  
  form.action = "login.html?" + query.toString();

  
  form.submit();
}
