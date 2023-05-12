    function leerMensaje(){
        mensaje = document.querySelector('#text-in').value;
    }

    function eliminarAcentos(){
        mensaje = mensaje.toLowerCase();
        mensaje = mensaje.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    function validarMensaje(){
        if(mensaje == null || mensaje == ''){
            document.getElementById('text-out').style.display = "none";
            document.getElementById('text-out-placeholder').style.display = "flex";
            return false;
        }else{
            eliminarAcentos();
            document.getElementById('text-out-placeholder').style.display = "none";
            document.getElementById('text-out').style.display = "block";
            return true;
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
        if(validarMensaje()){
            encriptarMensaje();
            enviarMensaje();
        }else{
            showError();
        }
    }

    function iniciarDecodificacion(){
        leerMensaje();
        if(validarMensaje()){
            desencriptarMensaje();
            enviarMensaje();
        }else{
            showError();
        }
    }

    function copiarMensaje(){
        try{
            let text = document.querySelector("#out-cod");
            text.select();
            document.execCommand("copy");
            showCopySuccess();
            document.querySelector('#text-in').value = "";
        }catch (error){
            console.log(error);
        }
    }

    function showError(){
        var box = document.querySelector('#modal-error');
        box.classList.add('show');
        setTimeout(() => {
            box.classList.remove('show');
        }, 1500);
    }

    function showCopySuccess() {
        var box = document.querySelector('#modal-copy');
        box.classList.add('show');
        setTimeout(() => {
            box.classList.remove('show');
        }, 1500);
    }

    function showEraserSuccess() {
        var box = document.querySelector('#modal-reset');
        box.classList.add('show');
        setTimeout(() => {
            box.classList.remove('show');
        }, 1500);
    }

    function resetPage() {
        showEraserSuccess();
        document.querySelector('#text-in').value = "";
        document.getElementById('text-out').style.display = "none";
        document.getElementById('text-out-placeholder').style.display = "flex";
    }


var mensaje = '';
const idCodigo = ['e','i','a','o','u'];
const codigo = ['enter','imes','ai','ober','ufat'];
document.getElementById('text-out').style.display = "none";

const encrypt = document.querySelector('#encriptar-button');
const decrypt = document.querySelector('#desencriptar-button');
const reset = document.querySelector('#reset-button');
const copy = document.querySelector('#copy-button');
const theme = document.querySelector('#check_theme');

encrypt.addEventListener('click', iniciarCodificacion);
decrypt.addEventListener('click', iniciarDecodificacion);
reset.addEventListener('click', resetPage);
copy.addEventListener('click', copiarMensaje);

theme.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('dark');
});
