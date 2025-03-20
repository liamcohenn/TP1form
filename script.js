const nombre = document.getElementById("Nombre");
const email = document.getElementById("Email")
const contraseña = document.getElementById('Contra')
const confirmContra = document.getElementById('confirmarContra')

nombre.addEventListener("input",validarNombre())
email.addEventListener("input", validarEMail())
contraseña.addEventListener("input", validarContraseña())
confirmContra.addEventListener("input",validarContraseñaConfirmada())

    function validarNombre()
    {   
        let Mensaje = document.getElementById("ErrorNombre")
        if(nombre.length < 3)
        {
            Mensaje.textContent = "El nombre debe tener al menos 3 caracteres" 
        }
    }
    function validarEMail()
    {   
        let Mensaje = document.getElementById("MensajeEmail")
        if(!email.includes("@"))
        {
            Mensaje.innerHTML="Email invalido";
        }
    }
    function validarContraseña()
    {
        let Mensaje = document.getElementById("MensajeContraseña")
        if (contraseña.length <= 8)
        {
            Mensaje.innerHTML="Contraseña invalida";
        }
    }
    function validarContraseñaConfirmada()
    {
        //var contraseña = document.getElementById('Contra')
        let Mensaje = document.getElementById("MensajeContraseñaConfirmada")    
        if (Contra != confirmContra) {
            Mensaje.innerHTML="Contraseña incorrecta";
        }
    }

    document.getElementById('enviar').addEventListener('onclick', function(evento){
        evento.preventDefault();
        validarNombre()
        validarEMail()
        validarContraseña()
        validarContraseñaConfirmada()
    }
    )
