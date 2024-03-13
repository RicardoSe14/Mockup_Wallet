$(document).ready(function() {

    //validar inicio de sesión}}
     $("#formulario").submit(function(event) {
    
    event.preventDefault();
    
    var email = $('#inputEmail').val();
    var password  = $('#inputPassword').val(); 
    if  (password == '123456' && email == 'ricardo@gmail.com')
        window.location.href = "menu.html";
    else alert ("Credenciales no validas")
    
    //validar el correo electronico
    
    })});