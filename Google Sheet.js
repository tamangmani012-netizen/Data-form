const scriptURL = 'https://script.google.com/macros/s/AKfycbxjoTZMaxtqgITeTnktuODWfUFXgchfytszx2x19PhKkhA21IuRyKfFk2Pd_UZ6hb_c/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})