const scriptURL = 'https://script.google.com/macros/s/AKfycbyxB2rbu5UvFbmCTSyT4a9DtC58_7VykkZ4YeC1Y8nPtvxbAQ-l3UqDGqCpJUhz1ILhBQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})