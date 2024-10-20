import {URL} from '../repository/index.js'
document.getElementById('login-form').addEventListener('submit', async function (event){
    event.preventDefault();

    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 

    const response = await fetch(URL+'login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });

    if(response.ok){
        const data = await response.json();
        localStorage.setItem('token', data.accessToken);
        localStorage.setItem('expiresIn', data.expiresIn);
        alert('Login bem-sucedido!');
    }else{
        alert('Falha no login, verifique suas credencias.')
    }

});