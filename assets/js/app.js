const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');  // Corregido selector para 'name'
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location'); // Me asegure de tener la clase correcta en el HTML

async function displayUser(username) { // Añadi async a la función para usar await
  $n.textContent = 'Cargando...';  // Muestra un texto mientras cargamos

  try { //agrego try para manejar la promesa
    const response = await fetch(`${usersEndpoint}/${username}`);


    if (!response.ok) { // Compruebo si la respuesta es exitosa
      throw new Error('Usuario no encontrado');
    }
    
    const data = await response.json(); // Converti la respuesta a JSON

    // Muestro los datos obtenidos de la API
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);  // Llama a la función de manejo de errores
  };
};

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err.message}`;  // Muestro el error en la interfaz
}

displayUser('stolinski').catch(handleError);
