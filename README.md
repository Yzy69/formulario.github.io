# formulario.github.io
Bienvenidos

<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Formulario de Contacto</title>
</head>
<body>
    <h1>Formulario de Contacto</h1>
    <form id="miFormulario">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>

        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea><br>

        <button type="submit">Enviar</button>
    </form>

    <script src="script.js"></script>
</body>
</html>
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
