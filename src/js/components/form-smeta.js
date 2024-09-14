const form = document.querySelector('.form__form-smeta');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newData = Object.fromEntries(formData);


  const xhr = new XMLHttpRequest();
    xhr.open("POST", "send-form.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('+');
          // window.location.replace("../thanks/index.html");
        } else {
          // Обработка ошибки
        }
      }
    };

  xhr.send(newData);

  console.log(newData);
  form.reset();
});
