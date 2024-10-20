import {URL} from '../repository/index.js'
document.getElementById('register-form').addEventListener('submit', async function (event) {

    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if(password != confirmPassword){
        alert('As senhas não coincidem.')
        return;
    }

    const response = await fetch(URL+'register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password}),
    });

    if(response.ok){
        alert('Cadastro realizado com sucesso!');
        window.location.href = 'login.html';
    }else{
    alert('Erro no cadastro. Tente novamente...');
    }
});