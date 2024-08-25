/*
    definition: Fetch API is a modern Web API that allows us to do server request. 

    => The HOW IT WORKS part is saved in the notes folder
    
*/
// CRUD operations with Fetch API
const BASE_URL = "https://jsonplaceholder.typicode.com";

fetch(`${BASE_URL}/posts`)
  .then((response) => {
    console.log();
    return response.json();
  })
  .then((data) => {
    const length = Object.keys(data).length;
    console.log(`Data count: ${length}`);
    console.log(data);
  });
