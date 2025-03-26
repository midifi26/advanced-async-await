//DESARROLLA AQUI TUS SOLUCIONES

// Ejercicio 1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio. > La función devuelve los datos de un pokemon aleatorio.
const getRandomPokemon= async () => {
    try {
      // Realizar la solicitud a la API
      const random= (Math.floor(Math.random() * 1302)+1);
      console.log(random);
      
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }
  
      // Si la respuesta es exitosa, procesar los datos
      const data = await response.json();
      return data;
  
    } catch (error) {
      // Manejar errores de red o del servidor
      console.error('Hubo un problema con la solicitud:', error.message);
    }
  };
  
  // Llamar a la función para hacer la solicitud
  getRandomPokemon().then(data=> console.log(data));

  //Ejercicio 2.- Declara una funcion **getImageAndName** que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name})
  async function getImageAndName (pokemon){

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return {name, img}   
};

  //Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM > La función pinta en el DOM el nombre y la imagen de un pokemon

//   const printImageAndName = async () => {
//     try {
//       // Realizar la solicitud a la API
      
//       let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
//       let data = await response.json();
//       let name = data.name;
//       let img = data.sprites.front_default;
      
//       // Verificar si la respuesta es exitosa
//       if (!response.ok) {
//         throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
//       }
//       return async function getImageAndName (pokemon)
//          .then( data => { 
//             const imgElement = document.createElement('img');
//             const nameElement = document.createElement('p');
//             imgElement.src = img;
//             nameElement.textContent = name;
//             document.body.appendChild(imgElement);
//             document.body.appendChild(nameElement);

//             return getImageAndName(pokemon);
//         });
//     }
//       // Si la respuesta es exitosa, procesar los datos
//     } catch(error) {
//       // Manejar errores de red o del servidor
//       console.error('Hubo un problema con la solicitud:', error.message);
//     };
  
//   // Llamar a la función para hacer la solicitud
//   printImageAndName('gumshoos');

//Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio
const getRandomDogImage = async () => {
    try {
      // Realizar la solicitud a la API
      const response = await fetch('https://dog.ceo/api/breeds/image/random');

  
      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
      }
  
      // Si la respuesta es exitosa, procesar los datos
      const data = await response.json();
      return data.message;
  
    } catch (error) {
      // Manejar errores de red o del servidor
      console.error('Hubo un problema con la solicitud:', error);
    }
  };
  
  // Llamar a la función para hacer la solicitud
  getRandomDogImage().then(data=>console.log(data));