
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelector('input[name="password"]');
    const togglePass = document.querySelector('.form-registration__eye');
    console.log(passwordInput.getAttribute('type'));
    togglePass.addEventListener('click', () => {
        if(passwordInput.getAttribute('type') === 'password'){
            passwordInput.setAttribute('type', 'text');
        }else{
            passwordInput.setAttribute('type', 'password');
        }
        togglePass.classList.toggle('active');
    });

}); // end