// Importa los módulos requeridos
const http = require('http');
const url = require('url');

// Crea una función para manejar las rutas
function routeHandler(req, res) {
  // Parsea la URL de la solicitud
  const parsedUrl = url.parse(req.url, true);

  // Obtiene el pathname de la URL (la ruta)
  const path = parsedUrl.pathname;

  // Configura las cabeceras de respuesta
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
// Maneja las rutas
if (path === '/saludo') {
    // Saludar en 5 idiomas diferentes
    const idiomas = ['Inglés', 'Español', 'Francés', 'Alemán', 'Italiano'];
    const saludoAleatorio = idiomas[Math.floor(Math.random() * idiomas.length)];
    res.end(`¡Hola! (Saludo en ${saludoAleatorio})`);

  } else if (path === '/desarrolladores') {

    // Información sobre los desarrolladores
    const desarrolladores = [
      { nombre: 'Abner', edad: 33, ocupación: 'Desarrollador de Frontend' },
      { nombre: 'Solange', edad: 30, ocupación: 'Desarrolladora de Backend' },
      { nombre: 'Tomas', edad: 22, ocupación: 'Diseñador UX' },
    ];

   const respuestaJSON = JSON.stringify(desarrolladores, null, 2);

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(respuestaJSON);
  } else if (path === '/contar') {
    // Contar hasta el número 15
    let conteo = '';
    for (let i = 1; i <= 15; i++) {
      conteo += `${i}\n`;
    }
    res.end(conteo);
  } else {
    // Ruta no encontrada
    res.statusCode = 404;
    res.end('Ruta no encontrada');
  }
}

// Crea el servidor y escucha en el puerto 3000
const server = http.createServer(routeHandler);
const port = 3000;
server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});