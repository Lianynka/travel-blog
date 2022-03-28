(function () {
    const form = document.querySelector('.contact-form-formspree');
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.querySelector('.contact-form-status');
      fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
      }).then( () => {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      }).catch( () => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
})();