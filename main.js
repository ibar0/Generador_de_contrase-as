let num = document.getElementById("cantidad");
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let boton2 = document.getElementById('validar');
let limpio = document.getElementById('limpiar')
const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';



function generar() {
    let numCapturado = parseInt(num.value);
        console.log(numCapturado);
    
    if (numCapturado < 8) {
        
        alert("Se requiere ingresar 8 o más caracteres");
    }

    let password = '';
    for (let i = 0; i < numCapturado; i++ ){
        
        let cadenaRandom = cadenaCaracteres [Math.floor( Math.random() * cadenaCaracteres.length)];
        

        password += cadenaRandom;
    }
    

    contrasena.value = password;
    
}


function validacion() {
    let validador = contrasena.value;
     console.log(validador);
    const especificacion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    
    if (validador.match(especificacion)) {
        
        alert('ES UNA CONTRASEÑA FUERTE');
    } else {
        alert('es una contraseña debil');
    }

    
}

function limpiar() {
    contrasena.value = ''
}






