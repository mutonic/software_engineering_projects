var addToDoButton =  document.getElementById('addTodo');
var todocontainer =  document.getElementById('todocontainer');
var inputholder = document.getElementById('inputholder');

addToDoButton.onclick = function(){
    //verify if an input is empty
    if (inputholder.value.trim() === ""){
        alert('Please enter a task');
        return
    }

        //if the input is not empty create a paragraph
    var note = document.createElement('p')
    
    //add the the value entered into note
    note.innerText = inputholder.value;

    // style the added note
    note.classList.add('note_style')
    // add the paragraph in the container
    todocontainer.appendChild(note);

    //empty the input when the note is added 
    inputholder.value = "";

    //cross the note when clicked on
    note.addEventListener('click', function(){
        note.classList.add('note_click');
    })
    //delete the note when doucle cclicked
    note.addEventListener('dblclick', function(){
        todocontainer.removeChild(note);
    })

};

//This code is a JavaScript function that adds a to-do list functionality to an HTML page. When the user clicks on the HTML element with the id 'addTodo', the function is executed.

//The first three lines of the code are declaring variables and assigning them the values of the elements in the HTML page with the matching id attributes.

//The function then checks if the input value is empty or not. If it is empty, an alert message is displayed to the user asking them to enter a task. If the input value is not empty, the function creates a new <p> element, assigns the input value to it, adds a class to it, and then appends it to the element with the id 'todocontainer'. After that, the input value is cleared.

//Then, the function sets up event listeners for when the user clicks and double-clicks the note. When clicked, it adds a class 'note_click' and when double-clicked it removes the child element from the element with the id 'todocontainer'.
