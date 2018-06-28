//Build arrays of objects that represent Employees, Departments, and Computers. *
// Assign every resource a unique id property. *
// Assign each employee to a department using a foreign key.*
// Assign each employee a computer using a foreign key.*

// Once your data is normalized, use your DOM skills to display a card for each employee. 
// It should display the employee name, the name of their department, and which computer they are using

const employees =
    [
        {
            "employeeId": 1,
            "name": "David",
            "department": 2,
            "computer": 1
        },
        {
            "employeeId": 2,
            "name": "Tom",
            "department": 3,
            "computer": 2
        },
        {
            "employeeId": 3,
            "name": "Sarah",
            "department": 2,
            "computer": 1
        },
        {
            "employeeId": 4,
            "name": "Blake",
            "department": 1,
            "computer": 2
        },
        {
            "employeeId": 5,
            "name": "Sophia",
            "department": 1,
            "computer": 1
        },
        {
            "employeeId": 6,
            "name": "Michael",
            "department": 3,
            "computer": 1
        }]

const departments =
    [
        {
            "departmentId": 1,
            "name": "IT",
        },
        {
            "departmentId": 2,
            "name": "Marketing",
        },
        {
            "departmentId": 3,
            "name": "Design",
        }]
const computers =
    [
        {
            "computerId": 1,
            "name": "PC",
        },
        {
            "computerId": 2,
            "name": "Laptop",
        }]


for (let i = 0; i < employees.length; i++) {
    const element = employees[i];
    console.log(element)
    const newSection = document.createElement("h2")
    const newStatement = document.createTextNode(employees[i].name);
    newSection.appendChild(newStatement);
    document.body.appendChild(newSection);
    if (employees[i].departmentId = 1) {
        const newSection = document.createElement("p")
        const newStatement = document.createTextNode("Tech");
        newSection.appendChild(newStatement);
        document.body.appendChild(newSection);
    } else if (employees[i].departmentId = 2) {
        const newSection1 = document.createElement("p")
        const newStatement1 = document.createTextNode("Marketing");
        newSection1.appendChild(newStatement1);
        document.body.appendChild(newSection1);
    } else {
        const newSection2 = document.createElement("p")
        const newStatement2 = document.createTextNode("Design");
        newSection.appendChild(newStatement2);
        document.body.appendChild(newSection2);

    }
    //  var btn = document.createElement("BUTTON");
  

}








    //nested for loop with an if else statement
