const showFormBtn = document.querySelector('#showFormBtn');
const formModal = document.querySelector('#formModal');
const closeBtn = document.querySelector('.closeBtn');

showFormBtn.addEventListener('click', function() {
  formModal.style.display = "block";
});

closeBtn.addEventListener('click', function() {
  formModal.style.display = "none";
});

window.addEventListener('click', function(event) {
  if (event.target === formModal) {
    formModal.style.display = "none";
} else if (event.target === closeBtn) {
    formModal.style.display = "none";
  }
});