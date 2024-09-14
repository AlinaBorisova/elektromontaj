document.querySelector(".header__mail-btn").addEventListener("click", function() {
  navigator.clipboard.writeText(document.querySelector("#mailText").innerText).then(function() {
    modalCopy();
  }).catch(function(error) {
    console.error('Error:', error);
  });
});

const modalCopy = () => {
  document.querySelector('.modal__copy').classList.remove('is-hidden');
  setTimeout(() => {
    document.querySelector('.modal__copy').classList.add('is-hidden');
  }, 2000)
}
