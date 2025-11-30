const form = document.querySelector('.contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

function validarCampos(name, email, message){
    if(name.value === '' || email.value === '' || message.value === ''){
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    if(!email.value.includes('@') && !email.value.includes('.')){
        alert('Por favor, insira um email válido.');
        return false;
    }
}

form.addEventListener('submit', e=> {
    e.preventDefault();
    validarCampos(name, email, message);
})