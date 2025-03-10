// Crea las siguientes claves en el local storage: nombre, edad, profesion, CP, ciudad, teléfono y añade valores a cada uno de ellos
// Accede a cada una de las claves sacando su valor y añadelas a un string que tenga sentido y muéstralas por consola. Por ejemplo "hola mi nombre completo es... tengo ... años..."
// Modifica la ciudad por otra en la que te gustaría estar.
// Elimina las claves CP y teléfono

localStorage.setItem('nombre', 'Bernat');
localStorage.setItem('edad', '25');
localStorage.setItem('profesion', 'Desarrollador Full Stack');
localStorage.setItem('CP', '46800');
localStorage.setItem('ciudad', 'Valencia');
localStorage.setItem('telefono', '1212323213');

let nombre = (localStorage.getItem('nombre'));

let edad = (localStorage.getItem('edad'));

let profesion = (localStorage.getItem('profesion'));

let CP = (localStorage.getItem('CP'));

let ciudad = (localStorage.getItem('ciudad'));

let teléfono = (localStorage.getItem('telefono'));

let stringCompleto = `Mi nombre es ${nombre} y mi edad es ${edad} mi profesion es ${profesion} vivo en ${ciudad} y su codigo postal es ${CP} y mi numero de telefono es ${teléfono}`

console.log(stringCompleto);


localStorage.setItem('ciudad', 'Japon');

localStorage.removeItem('CP');

localStorage.removeItem('telefono');
