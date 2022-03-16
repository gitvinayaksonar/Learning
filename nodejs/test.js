// Node Environment ?

// console.log(" I am node environment");


// addition of two numbers
// function addTwoNumbers(a, b) {
//     return a + b;
// }

// console.log(" Result is >>>", addTwoNumbers(10, 5));



// // U can Assign, Update, Access the object properties in the node environment ( Recall : node is also an object)

// const obj = {
//     name : "Vinayak",
//     surname : "Sonar",
//     getFullName : function(){
//         return this.name + " --- Manohar --- " + this.surname
//     }
// }

// console.log("Person's full name is >>>", obj.getFullName());



// ES6 - javascript features

// arrow functions
// const addition = (a, b) => a + b;

// console.log(" Result is >>>", addition(10, 5));



// // Destructuring
// const obj1 = { name : "Vinayak", surname : "Sonar"};
// console.log("obj1.name, obj1.surname >>>", obj1.name, obj1.surname);

// const { name, surname} = obj1;
// console.log( " name, surname >>>", name, surname);


const obj1 = { name : "Vinayak", surname : "Sonar", state : 'karnataka'};
const obj3 = { name : "Anand", surname : "Kulkarni", state : 'Andhra Pradesh'};
const obj2 = { name : "sachin", surname : "Goudar", state : 'Tamilnadu'};



// Classes and inheritance

class Employee {
    empId;
    constructor(nm){
        this.name = nm;
    }
    
    // methods
    setId(id){
        this.empId = id;
    }

    printDetails(){
        return `${this.name} 's ID is ${this.empId}`
    }   
    
}

// U can create n number of objects with only single template called class.

const e1 = new Employee('Vinayak');
e1.setId(12345);
console.log(e1.printDetails());


const e2 = new Employee('Suraj');
e2.setId(98765);
console.log(e2.printDetails());


/// Extending the Parent class to access the properties and methods mentioned over
class Manager extends Employee {
    constructor(nm){
        super(nm)
    }

    hasLeaveApprovalRights(bool){
        return true;
    }

    printName(){
        return this.name;
    }
}


const m1 = new Manager('Advaith Kumar');
console.log(`m1.hasLeaveApprovalRights() >>>`, m1.hasLeaveApprovalRights(true));
console.log(`m1.printName() >>>`, m1.printName());





// Observation : In chrome, with the help of JS, u can create node object like <p>, <h1> <img> using document.createElement('p')
// Node js is javascript environment, where u can create node objects and manipulate it as well.

//  LIBRARY / DEPENDENCY : SOME ONE HAS ALREADY WRITTEN CODE FOR US.  ----->  LETS USE IT, based on our requirement.

// EXAMPLES 
// jquery for dom manipulation
// REACT, REDUX, REACT-REDUX, REDUX-THUNK, AXIOS etc.,

// After HTML and CSS parsing, "HTML object model and CSS object model" both are combineD together to create a RENDER TREE.



// REACT'S The virtual DOM :

// The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI  and
// is kept in memory and synced with the “real” DOM by a library such as ReactDOM. 
// This process is called reconciliation.