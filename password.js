document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.signup-form');
    const password = document.getElementById('pwd');
    const confirmPassword = document.getElementById('confirmpwd');
    const pwdError = document.getElementById('pwd-error');

    confirmPassword.addEventListener('input', checkPasswrordMatch);
    form.addEventListener('submit', (event) =>{
        if (!checkPasswordMatch()){
            event.preventDefault();
        }
    })


    function checkPasswordMatch(){
        if (password.value !== confirmPassword.value){
            pwdError.textContent = 'Password do not match.';
            return false;
        } else {
            pwdError.textContent = '';
            return true;
        }
    }
})