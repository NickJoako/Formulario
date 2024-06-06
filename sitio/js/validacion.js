function validar() {
    var retorno_correo = validar_correo();
    var retorno_contraseña = validar_contraseña();
    var retorno_ciudad = validar_ciudad();
    var retorno_direccion = validar_direccion();
    var retorno_telefono = validar_telefono();
    var retorno_url = validar_url();
    return retorno_correo && retorno_ciudad && retorno_direccion && retorno_telefono && retorno_contraseña && retorno_url;
}

function validar_correo() {
    var input_email = document.getElementById("input-email");
    var div_error_email = document.getElementById("error-email");
    var correo = input_email.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3 )) {
        div_error_email.innerHTML = "";
        return true;
    } else {
        div_error_email.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_email.className = "text-danger small mt-1";
        return false;
    }
}

function validar_contraseña() {
    var input_contraseña1 = document.getElementById("input-contraseña");
    var input_contraseña2 = document.getElementById("input-confirmar-contraseña");
    var div_error_contraseña = document.getElementById("error_contraseña");
    var div_error_confirmar_contraseña = document.getElementById("error-confirmar-contraseña");
    var contraseña1 = input_contraseña1.value;
    var contraseña2 = input_contraseña2.value;
    if (contraseña1 == "") {
        div_error_contraseña.innerHTML = "Debes ingresar una contraseña";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } if (contraseña2 == "") {
        div_error_confirmar_contraseña.innerHTML = "Debes ingresar una contraseña";
        div_error_confirmar_contraseña.className = "text-danger small mt-1";
        return false;
    } if (contraseña1 != contraseña2) {
        div_error_confirmar_contraseña.innerHTML = "la contraseña debe ser la misma";
        div_error_confirmar_contraseña.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirmar_contraseña.innerHTML = "";
        return true;
    }
}

function validar_ciudad() {
    var select_ciudad = document.getElementById("select-ciudad");
    var div_error_ciudad = document.getElementById("error-ciudad");
    var ciudad = select_ciudad.value;
    if (ciudad == "default") {
        div_error_ciudad.innerHTML = "Debe seleccionar una ciudad";
        div_error_ciudad.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_ciudad.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    if (direccion == "") {
        div_error_direccion.innerHTML = "Debes ingresar una dirección";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value;
    if (telefono == "") {
        div_error_telefono.innerHTML = "Debes ingresar un numero de telefono";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_telefono.innerHTML = "";
        return true;
    }
}

pasatiempos = [];

function actualizar() {
    var div = document.getElementById("lista");
    div.innerHTML = "";
    var ul = document.createElement("ul");
    ul.className = "list-group";
    for (var i = 0; i < personas.length ; i++) {
        var li = document.createElement("li");
        li.innerHTML = pasatiempos[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
    div.appendChild(ul);
}

function agregar() {
    var input_pasatiempos = document.getElementById("input-pasatiempos");
    var pasatiempos = inputnombre.value;
    if (pasatiempos != "") {
        pasatiempos.push(pasatiempos);
        input_pasatiempos.value = "";
        actualizar();
    }
}

function validar_url() {
    var input_url = document.getElementById("input-url");
    var div_error_url = document.getElementById("error-url");
    var url = input_url.value;
    if (url == "") {
        div_error_url.innerHTML = "debes ingresar algun sitio web";
        div_error_url.className = "text-danger small mt-1"
    }
}