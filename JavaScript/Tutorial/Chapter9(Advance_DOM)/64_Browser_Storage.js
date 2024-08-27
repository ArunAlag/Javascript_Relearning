/* 
    definition: Browser storage is a form of storage that is in browser which is useful at some points. There are 3 types of storage which are cookies, session and localStorage

    ! One of the limitation is that the data is stored in the browser of the device, meaning: 
        ! data stored in Chrome laptop would not exist in Firefox laptop
        ! data stored in Chrome laptop would not exist in Chrome mobile

    - Local Storage
        - 10MB max storage
        - Data will not expire
        - Only available on the user's browser
        - Very easy to use
    - Cookies 
        - 4KB max storage
        - Data will manually expire
        - Available on the user's browser & browser (used for auth mainly)
        - Very hard to use
    - Session Storage
        - 5MB max storage
        - Data will expire once the tab is closed
        - Available on the user's browser
        - Very easy to use
*/
// * To see the storage, go to browser's console > Application, in nav panel can see those storage options listed
// => CRUD with Local Storage & Session Storage
// ~ CREATE & UPDATE
// structure : localStorage.setItem(key, value)
// structure : sessionStorage.setItem(key, value)
localStorage.setItem("fullname", "Arun_Alag");
sessionStorage.setItem("fullname_session", "Arun_Alag_Session");

// ~ GET
// structure : localStorage.getItem(key)
// structure : sessionStorage.getItem(key)
const local_data = localStorage.getItem("fullname");
const session_data = sessionStorage.getItem("fullname_session");
console.log(`Data from localStorage: ${local_data}`);
console.log(`Data from sessionStorage: ${session_data}`);

// ~ DELETE
// structure : localStorage.removeItem(key)
// structure : sessionStorage.removeItem(key)
localStorage.removeItem("fullname");
sessionStorage.removeItem("fullname_session");

// => CRUD with Cookies
const date = new Date(2025, 2, 1).toUTCString();
const past_date = new Date(2024, 5, 1).toUTCString(); // Random past date
// explanation 1: Unlike the localStorage and sessionStorage, cookie's data can only be created, updated and deleted all with usage of Strings
// explanation 2: When we are creating a cookie, it needs to have the key value pair with the expiry fixed or else the cookie's expiry date will be set to session meaning that it will be deleted as soon as the client close the browser. This will cause the data stored in the cookie to dissappear

// ~ CREATE & UPDATE
// structure : document.cookie="<key>=<value>; expires=<future_date>"
document.cookie = `cookie_name=ArunAlag; expires=${date}`;

// => To add another item into the cookie storage, we once again must use the exact same format which is not that intuivative compare to localStroage & sessionStrage
document.cookie = `age=25; expires=${date}`;

// ~ READ
console.log(`Before deleting 'cookie.name':  ${document.cookie}`);

// ~ DELETE
// structure: document.cookie="<key>=; expires=<past_date>"
// explanation: To delete data in cookie storage, all we have to do is set the key of targeted data to empty value then set an expiry date in the past
document.cookie = `cookie_name=; expires=${past_date}`;
console.log(`After deleting 'cookie.name':  ${document.cookie}`);
