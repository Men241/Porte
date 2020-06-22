// Déclaration de la fonction click

 function validation (e) {

    // si le champ email est vide

    if (mail.value === '' && pwd.value === '') {
        msg.innerHTML = "Remplir les champs vides";
        msg.classList.add("message-visible");
        e.preventDefault();

    //  vérification des formats

    } else if (emailRegex.test(e.value) === false){
        msg.innerHTML = 'Email invalid';
        msg.classList.add("message-visible");
        e.preventDefault();


    } else if (pwdRegex.test(e.value) === false){
        msg.innerHTML = 'Mot de passe incorrect';
        msg.classList.add('message-visible');
        e.preventDefault();

    } else {
        msg.InnerHTML = 'Formulaire valide';
        msg.classList.add('message-visible');
        msg.style.backgroundColor = '#a7ff3342';
        e.preventDefault();
    }

}

// fonction auto-appelante

const messenger = (function (){
    let sms = document.querySelector('.message');
    document.querySelectorAll('.input100').forEach  (function (input){
        input.addEventListener('focus', function(){
            if (sms.classList.contains('message-visible')){
                sms.classList.remove('message-visible');
            }
        })
    })
})();







