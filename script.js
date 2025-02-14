const passwordForm = document.getElementById("passwordForm");

passwordForm.addEventListener("click", comprobarContraseña);
    
    function comprobarContraseña(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const password = document.getElementById("password").value;
    let mensajeError = "La contraseña no cumple los siguientes requisitos:\n";
    let cumpleTodosLosRequisitos = true;

    // Verifica los requisitos individualmente
    if (password.length <= 10) {
        mensajeError += "- Tener más de 10 caracteres.\n";
        cumpleTodosLosRequisitos = false;
    }
    if (!/[A-Z]/.test(password)) {
        mensajeError += "- Incluir al menos una letra mayúscula.\n";
        cumpleTodosLosRequisitos = false;
    }
    if (!/[a-z]/.test(password)) {
        mensajeError += "- Incluir al menos una letra minúscula.\n";
        cumpleTodosLosRequisitos = false;
    }
    if (!/[0-9]/.test(password)) {
        mensajeError += "- Incluir al menos un dígito decimal.\n";
        cumpleTodosLosRequisitos = false;
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        mensajeError += "- Incluir al menos un símbolo.\n";
        cumpleTodosLosRequisitos = false;
    }
//Una vez se ha ejecutado cada línea que comprueba los requisitos si se cumplen todos la contraseña es válida, de lo contrario
//se muestra el mensajeError que habrá recogido aquellos requisitos que falten
    if (cumpleTodosLosRequisitos) {
        alert("Contraseña válida");
    } else {
        alert(mensajeError);
    }
};