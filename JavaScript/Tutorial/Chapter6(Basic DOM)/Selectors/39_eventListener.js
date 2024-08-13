const click_btn = document.querySelector("[data-button]");

// definition: event listeners are DOM methods that allow user to interact with it
// structure : <element>.addEventListener(<event_name>,callback(*e))
// => the .addEventListener method requires 2 paramater which are the event name and also a callback function
// => the .addEventListener method provides 1 parameter to the callback known as an event object or we just call it `event`/`e`

/*
 * The event object contains loads of properties but only few are always used
 => 1) event.type, the type of event that being triggered
 => 2) event.target, the element that triggered the event
 => 3) event.currentTarget, the element the event is attached to
 => 4) event.preventDefault(), prevents the default behaviour of the event, if the event is click it will prevent the element from clicking, generally used in form 
 => 5) event.stopPropagtion(), a method that stops the event from propagating, bubbling up or capturing down
 => 6) event.clientX & event.clientY, The horizontal and vertical coordinates of the mouse pointer relative to the viewport
*/

// sample : Create a button and it will log out, "clicked me" when the button is clicked

// step 1: Identify the element
const button = document.querySelector("[data-button]");
const clickOnce = document.querySelector("[data-clickedonce]");
const anchor = document.querySelector("[data-anchor]");

// step 2: Add the listener
button.addEventListener("click", () => {
  // step 3: Expected output
  console.log("clicked me");
});

// definition: The opposite of addEventListener is the removeEventListener, it removes any event that is attached to the element
// structure: <element>.removeEventListener(<event_name>,callback())
// ! For the removeEventListener to work, the method attached to the element must not be anonymous, it must be a named function

// sample
function printClicks() {
  console.log("Clicked only once");

  clickOnce.removeEventListener("click", printClicks);
}

clickOnce.addEventListener("click", printClicks);

// Challenge : Add anchor tag to the HTML and when it's clicked, prevent the default and log something to the console
anchor.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked but cannot progress because of prevent default");
});
