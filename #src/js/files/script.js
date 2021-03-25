
document.addEventListener('DOMContentLoaded', () => {
    // change password input state
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
    // popup
    const popup = document.querySelector('.popup-reviews');
    const popupOpen = document.querySelector('.grid__btn_review');
    const popupClose = document.querySelector('.popup__close');
    if(popup && popupOpen && popupClose){
        const openPopup = () => {
            popup.classList.add('active');
            document.body.classList.add('hidden');
        }
        
        const removePopup = () => {
            popup.classList.remove('active');
            document.body.classList.remove('hidden');
        }

        popupOpen.addEventListener('click', openPopup);
        popupClose.addEventListener('click', removePopup);

        popup.addEventListener('click', (e) => {
            if(!e.target.closest('.popup__body')){
                removePopup();
            }
        });  
    }

    // help
    const help = document.querySelector('.help');
    setTimeout(() => {
        help.classList.add('active');
    }, 3000);

}); // end