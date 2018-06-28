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
    console.log(employees[i].department)
    const newDiv = document.createElement("div")
    newDiv.appendChild(newSection);

    // WORKS IN TECH 
    if (employees[i].department === 1) {
        const newSection1 = document.createElement("section")
        const newStatement1 = document.createTextNode("Works in Tech");
        newSection1.appendChild(newStatement1);
        newDiv.appendChild(newSection1);
    
    // WORKS IN MARKETING
    } else if (employees[i].department === 2) {
        const newSection2 = document.createElement("section")
        const newStatement2 = document.createTextNode("Works In Marketing");
        newSection2.appendChild(newStatement2);
        newDiv.appendChild(newSection2);

    // WORKS IN DESIGN
    } else {
        const newSection3 = document.createElement("section")
        const newStatement3 = document.createTextNode("Works In Design");
        newSection3.appendChild(newStatement3);
        newDiv.appendChild(newSection3);

    }
    // USES A PC
    if (employees[i].computer === 1) {
        const newSection4 = document.createElement("section")
        const newStatement4 = document.createTextNode("Uses a PC");
        newSection4.appendChild(newStatement4);
        newDiv.appendChild(newSection4);

    // USES A LAPTOP
    } else {
        const newSection5 = document.createElement("section")
        const newStatement5 = document.createTextNode("Uses a Laptop");
        newSection5.appendChild(newStatement5);
        newDiv.appendChild(newSection5);

    }
    document.body.appendChild(newDiv);
   


}
const employeeId = document.querySelectorAll("h2");
for (let i = 0; i < employeeId.length; i++) {
    employeeId[i].classList.add("employee_name")
    
    
}
