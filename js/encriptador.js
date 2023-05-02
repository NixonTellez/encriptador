
    function leerMensaje(){
        mensaje = document.querySelector('#text-in').value;
        if(mensaje == null || mensaje == ''){
            alert('No hay mensajes para codificar o decodificar!');
            document.getElementById('text-out').style.display = "none";
            document.getElementById('text-out-placeholder').style.display = "flex";
        }else{
            document.getElementById('text-out-placeholder').style.display = "none";
            document.getElementById('text-out').style.display = "block";
        }
    }

    function encriptarMensaje(){
        for (let i = 0; i < codigo.length; i++) {
            mensaje = mensaje.replaceAll(idCodigo[i],codigo[i]);
        }
    }

    function desencriptarMensaje(){
        for (let i = codigo.length-1; i >= 0 ; i--) {
            mensaje = mensaje.replaceAll(codigo[i],idCodigo[i]);
        }
    }

    function enviarMensaje(){
        document.getElementById('out-cod').innerHTML = mensaje;
    }

    function iniciarCodificacion(){
        leerMensaje();
        encriptarMensaje();
        enviarMensaje();
    }

    function iniciarDecodificacion(){
        leerMensaje();
        desencriptarMensaje();
        enviarMensaje();
    }

    function copiarMensaje(){
        navigator.clipboard.writeText(mensaje);
        alert("Mensaje copiado con exito");
    }

var mensaje = '';
var idCodigo = ['e','i','a','o','u'];
var codigo = ['enter','imes','ai','ober','ufat'];
document.getElementById('text-out').style.display = "none";

document.querySelector('#encriptar-button').addEventListener('click', iniciarCodificacion);
document.querySelector('#desencriptar-button').addEventListener('click', iniciarDecodificacion);
document.querySelector('#copy-button').addEventListener('click', copiarMensaje);