document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript cargado y funcionando correctamente.");

    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Formulario enviado. ¡Gracias por contactarnos!");
            form.reset();
        });
    }
});
