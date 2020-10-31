function validar(){
    var regexNomApl=/^[a-z]+$/
    var regexTel=/^[0-9]{4}\-[0-9]{4}$/
    var regxEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/

    var error=false;
    var mensajeError="";

    if(!regexNomApl.test(document.getElementById("Nombre").value)){
        error=true;
        mensajeError+="<p>El nombre no es valido</p>";
    }
    if(!regexNomApl.test(document.getElementById("Apellido").value)){
        error=true;
        mensajeError+="<p>El apellido no es valido</p>";
    }
    if(!regxEmail.test(document.getElementById("email").value)){
        error=true;
        mensajeError+="<p>El email no es valido</p>";
    }
    if(document.getElementById("telefono").value!=''){
        if(!regexTel.test(document.getElementById("telefono").value)){
            error=true;
            mensajeError+="<p>El telefono no es valido</p>";
        }
    }

    

    if(error){
        document.getElementById("mensajeDeError").innerHTML=mensajeError;
        return false;
    }else{
        alert(`El formulario fue completado correctamente`);
        return true;
    }
}

const CANTIDAD=1000;

function contarCaracteres(){
    var caracteresEscritos=document.getElementById("consulta").value.length;
    var restantes=CANTIDAD-caracteresEscritos;
    
    document.getElementById("caracteres").innerHTML=restantes;

}


