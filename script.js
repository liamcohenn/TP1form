function validarNombre()
{
    var nombre = document.getElementById("Nombre");
    let Mensaje = document.getElementById("ErrorNombre")
    if(nombre.length < 3)
    {
        Mensaje.innerHTML="Nombre invalido";
    }
}
function validarEMail()
{
    var email = document.getElementById("Email")
    let Mensaje = document.getElementById("MensajeEmail")
    if(!email.includes("@"))
    {
        Mensaje.innerHTML="Email invalido";
    }
}
function validarContraseña()
{
    var contraseña = document.getElementById('Contra')
    let Mensaje = document.getElementById("MensajeContraseña")
    if (contraseña.length <= 8)
    {
        Mensaje.innerHTML="Contraseña invalida";
    }
}
function validarContraseñaConfirmada()
{
    var contraseña = document.getElementById('Contra')
    var confirmContra = document.getElementById('confirmarContra').value;
    let Mensaje = document.getElementById("MensajeContraseñaConfirmada")


    if (Contra !== confirmContra) {
        Mensaje.innerHTML="Contraseña incorrecta";
    }
}
