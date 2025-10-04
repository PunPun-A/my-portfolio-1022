window.onload = function () {
  const form = document.getElementById("myLogin");

  if (!form) {
    console.error("ไม่พบฟอร์ม #myLogin ในหน้า HTML");
    return;
  }
  
  const params = new URLSearchParams(window.location.search);
  const userData = {
    firstname: params.get("firstname"),
    lastname: params.get("lastname"),
    gender: params.get("gender"),
    bday: params.get("bday"),
    email: params.get("email"),
    username: params.get("username"),
    password: params.get("password"),
  };

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value;

    if (!userData.username || !userData.password) {
      alert("ยังไม่มีการลงทะเบียนกรุณา Register ก่อน");
      return;
    }

    if (username === userData.username && password === userData.password) {
      alert("Login ได้แล้ว " + userData.firstname);
    } else {
      alert("Username หรือ Password ไม่ถูกต้องลองใหม่");
    }
  });
};
