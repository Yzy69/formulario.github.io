const SHEETY_URL = 'https://api.sheety.co/953e93d669d831a2dd8cb8f3872ad24e/baseDeDatos/hoja1';

document.getElementById('miFormulario').addEventListener('submit', async function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const datos = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    try {
        const response = await fetch(SHEETY_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                nombre: datos.nombre, 
                email: datos.email, 
                mensaje: datos.mensaje 
            })
        });

        if (response.ok) {
            alert("Mensaje enviado correctamente.");
        } else {
            alert("Hubo un error al enviar el mensaje.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error al enviar el mensaje.");
    }
});
