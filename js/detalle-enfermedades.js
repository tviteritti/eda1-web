    
function validar(){
    error=false;
    mensajeError="";
    totalSintomas=0;
    
   

    validarRespuestaVasia("nombreapellido","Nombre y apellido");
    validarRespuestaVasia("dni","Dni");
    validarRespuestaVasia("telefono","Telefono");

    contadorSintomas("question1","fiebre");
    contadorSintomas("question2","dolor de cabeza");
    contadorSintomas("question3","tos");
    contadorSintomas("question4","dolor de garganta");
    contadorSintomas("question5","dificultad para respirar");

    if(error){
        document.getElementById("mensajeDeError").innerHTML=mensajeError;
        return false;
    }else{
        alert(`El formulario fue completado correctamente. ${totalSintomas} síntomas de COVID-19 fueron registrados`);
        return true;
    }
    
}

function contadorSintomas(question,sintoma){
    let opciones=document.getElementsByName(question);
    var seleccion=false;

    for (i in opciones) {
        if(opciones[i].checked){
            seleccion=true;
            if(opciones[0].checked){
                totalSintomas++;
            }
        }      
    }
    if(!seleccion){
        error=true;
        mensajeError+=`<p>La pregunta "${sintoma}" es obligatoria</p>`
    }

}

function validarRespuestaVasia(idCampo,nomCampo){

    if(document.getElementById(idCampo).value==''){
        error=true;
        mensajeError+=`<p>${nomCampo} es obligatorio</p>`;
    }
}

function viaje(){   /*-------------muestra el select de paises----------------------*/
    let opciones = document.getElementsByName("question");

    for(i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            document.getElementById("viajes").style.display="block";
        }
        if(opciones[i].value=="no"&&opciones[i].checked){
            document.getElementById("viajes").style.display="none";
        }
    }

}

function mostrarDireccion(){       /*-------------muestra la direccion----------------------*/
    let opciones = document.getElementsByName("question5");

    for(i in opciones){
        if(opciones[i].value=="si"&&opciones[i].checked){
            document.getElementById("direccion").style.display="block";
        }
        if(opciones[i].value=="no"&&opciones[i].checked){
            document.getElementById("direccion").style.display="none";
        }
    }

}