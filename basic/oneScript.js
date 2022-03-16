// Javascript : DOM Manipulation on button click event

function clickHandler() {
    document.getElementById("para").innerHTML = "JS Library REACT ...";

    // creating an element i.e para node object
    const para = document.createElement("p");

    // Adding a text node into the para node
    para.innerText = "We will re-learn Redux as well ...";

    // Adding css properties to the para node
    para.style.color = 'blue';

    // inserting Newly created Javascript para node object into the paraContainter div
    document.getElementById('paraContainer').appendChild(para);
}


// In HTML, <h1>, <p>, <img> .... are treated as ELEMENTS

// In Javascript, the very <h1>, <p>, <img> .... are treated as NODE OBJECTS.

// So that u get an access to the properties and methods of these objects.

// Chrome has,
// - Rendering engine which renders Render tree,
// - Javascript v8 engine which runs Javascript code like functions, objects, arrays etc.,

// Install Node js, which creates such an environment, where u can execute javascript code.