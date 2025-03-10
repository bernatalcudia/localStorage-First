// Crea las siguientes claves en el local storage: nombre, edad, profesion, CP, ciudad, teléfono y añade valores a cada uno de ellos
// Accede a cada una de las claves sacando su valor y añadelas a un string que tenga sentido y muéstralas por consola. Por ejemplo "hola mi nombre completo es... tengo ... años..."
// Modifica la ciudad por otra en la que te gustaría estar.
// Elimina las claves CP y teléfono

localStorage.setItem('nombre', 'Bernat');
localStorage.setItem('edad', '25');
localStorage.setItem('profesion', 'Desarrollador Full Stack Junior');
localStorage.setItem('CP', '46600');
localStorage.setItem('ciudad', 'Valencia');
localStorage.setItem('telefono', '1212323213');

const nombre = localStorage.getItem('nombre');

const edad = localStorage.getItem('edad');

const profesion = localStorage.getItem('profesion');

const CP = localStorage.getItem('CP');

const ciudad = localStorage.getItem('ciudad');

const teléfono = localStorage.getItem('telefono');