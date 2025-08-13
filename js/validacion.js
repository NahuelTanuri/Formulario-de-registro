//Función para mostrar la alerta de éxito

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show"); //.classList.add("show")En este caso  se utiliza para hacer visible un elemento
}

//Función para mostrar la alerta de error

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

//FUNCION PRINCIPAL
function validarFormulario() {
  // Obtener info de los datos enviados por el usuario
  const nombre = document.getElementById("nombre").value.trim(); //.value.trim() sirve para no tomar los espacios como caracteres con valor
  const apellido = document.getElementById("apellido").value.trim();
  const email = document.getElementById("email").value.trim();
  const password1 = document.getElementById("password1").value; //no se usa .trim() porque en contrase;as se puede tomar como valido los espacios
  const password2 = document.getElementById("password2").value;
  const terminos = document.getElementById("terminos").checked; //.checked valida si estan marcados los terminos y condiciones

  // Ningún campo puede estar vacío sino da error
  if (
    nombre === "" ||
    apellido === "" ||
    email === "" ||
    password1 === "" ||
    password2 === ""
  ) {
    //tambien es valido usar (!nombre || !apellido || !etc)
    showAlertError();
    return;
  }

  // La contraseña debe tener al menos 6 caracteres sino da error
  if (password1.length < 6) {
    showAlertError();
    return;
  }

  //  Las contraseñas deben coincidir sino da error
  if (password1 !== password2) {
    showAlertError();
    return;
  }

  // El checkbox de términos debe estar marcado sino da error
  if (!terminos) {
    showAlertError();
    return;
  }

  // si todo es correcto muestra alerta de exito
  showAlertSuccess();
  return;
}

// Esperar a que el DOM esté completamente cargado antes de agregar los eventos
document.addEventListener("DOMContentLoaded", function () {
  // Obtener referencia al botón de registro
  const regBtn = document.getElementById("regBtn");

  // activa la funcion validarFormulario al dar click en el boton
  regBtn.addEventListener("click", validarFormulario);
});
