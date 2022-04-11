


function info(){

    const elUserName = document.getElementById('form-name').value;
    const elPassword = document.getElementById('form-password').value;

    const infoUser = elUserName + ' ' + elPassword;

    
    document.getElementById('informationOfUser').innerHTML = infoUser;
}



const buttonClick = document.querySelector('#form-button')

buttonClick.addEventListener('click', info)