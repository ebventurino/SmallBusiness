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
    console.log(employees[i].department)
    if (employees[i].department === 1) {
        const newSection1 = document.createElement("section")
        const newStatement1 = document.createTextNode("Tech");
        newSection1.appendChild(newStatement1);
        document.body.appendChild(newSection1);
    } else if (employees[i].department === 2) {
        const newSection2 = document.createElement("section")
        const newStatement2 = document.createTextNode("Marketing");
        newSection2.appendChild(newStatement2);
        document.body.appendChild(newSection2);
    } else {
        const newSection3 = document.createElement("section")
        const newStatement3 = document.createTextNode("Design");
        newSection3.appendChild(newStatement3);
        document.body.appendChild(newSection3);

    }
    if (employees[i].computer === 1) {
        const newSection4 = document.createElement("section")
        const newStatement4 = document.createTextNode("PC");
        newSection4.appendChild(newStatement4);
        document.body.appendChild(newSection4);
    } else {
        const newSection5 = document.createElement("section")
        const newStatement5 = document.createTextNode("Laptop");
        newSection5.appendChild(newStatement5);
        document.body.appendChild(newSection5);

    }
  

}








    //nested for loop with an if else statement
