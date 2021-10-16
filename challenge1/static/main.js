// console.log("js working");

// let userInput = prompt("How old are you?");

function ageInDays() {
    let userAge = prompt("Which year you are born my friend: ");
    // convert age into days and save in a variable
    let calculatedAge = (2021-userAge) * 365;
    // console.log(calculatedAge); //kontrolutskrift
/* 
 DOM MANIPULATION 
 */  
// create an HTML element tag
    let h3 = document.createElement('h3');
    // create a string from a value
    let textAnswer = document.createTextNode('You are ' + calculatedAge + ' days old');
    // set attribute to newly created element
    h3.setAttribute('id', 'ageInDays');
    // add the element that has the value
    h3.append(textAnswer);
    // write the created element to HTML so it appears with button click
    document.getElementById("flex-box-result").append(h3);

}

//TODO: RESET button


// ------------  DOCUMENT OBJECT MODEL ---------------------------
//The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

