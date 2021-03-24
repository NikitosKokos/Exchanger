
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelector('input[name="password"]');
    const togglePass = document.querySelector('.form-registration__eye');
    if(passwordInput){
        togglePass.addEventListener('click', () => {
            if(passwordInput.getAttribute('type') === 'password'){
                passwordInput.setAttribute('type', 'text');
            }else{
                passwordInput.setAttribute('type', 'password');
            }
            togglePass.classList.toggle('active');
        });    
    }
    
    const help = document.querySelector('.help');
    setTimeout(() => {
        help.classList.add('active');
    }, 3000);

}); // end