/*
    definition: Fetch API is a modern Web API that allows us to do server request. 

    => The HOW IT WORKS part is saved in the notes folder
    
*/
// CRUD operations with Fetch API
const BASE_URL = "https://jsonplaceholder.typicode.com";

/* PATH */
const USERS_PATH = "/users";
const POST_PATH = "/posts";
/*
 * GET data using Fetch // READ
 structure: fetch(URL) 
*/
fetch(`${BASE_URL}${USERS_PATH}`)
  .then((response) => {
    console.log();
    return response.json();
  })
  .then((data) => {
    const length = data.length;
    console.log(length);
    data.map((user) => {
      console.log(user.username);
    });
  });
/*
  - fetch() is asynchronous so I am using promise
  - 1st .then() will give the data in bytes
  - 2nd .then() converts the bytes into JSON (readable data)
  - Based on this, I am actually fetching the users data
*/

// Challenge - Convert the promise version of fetch to async_await
async function fetchUsers() {
  const response = await fetch(`${BASE_URL}${USERS_PATH}`);
  const data = await response.json();

  console.log("\n\nUsing async await\n\n");
  data.map((user) => {
    console.log(user.name);
  });
}

fetchUsers();

async function fetchUserDetails(id) {
  const response = await fetch(`${BASE_URL}${USERS_PATH}/${id}`);

  try {
    if (response.ok) {
      const user = await response.json();
      console.log(user);
    } else {
      console.log(`User not found with status ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchUserDetails(5);

/*
 * POST data using Fetch // CREATE
 structure: fetch(URL,{
 structure:   method: "POST"
 structure:   headers: {
 structure:     'Content-Type': 'application/json'              
 structure:   }
 structure:   body: JSON.stringify(<data>)
 structure: }) 

 Explanation 1: Whenever we want to send data to server, we must use the POST request
 Explanation 2: The server needs to know few things of the data which are, how the data looks like, and what data is it
 Explanation 3: How the data looks like will be sent inside the headers object with the Content-Type property. In this context, the data is application/json type
 Explanation 4: To submit the data to the server, we can only pass it as string format in the body property of the options object
*/

async function createPost(post_data) {
  const request = await fetch(`${BASE_URL}${POST_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post_data),
  });

  const response = await request.json();
  console.log(response);
}

let card_post = {
  title: "Testing Post Features",
};

createPost(card_post);
