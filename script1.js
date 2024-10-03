// 1. **collectEmployees:** This function allows a user to add multiple employees. The user needs to enter the first name, last name, and salary of each employee and can continue adding employees until they choose to stop.
//     - Use a `while` loop to keep asking for employee details until the user decides to stop.
//     - Ensure the salary is entered as a number, defaulting to $0 if it's not a valid number using the `isNaN` function.
//     - Return an array of employee objects in the following format:
//     ```javascript
    [
        {
            firstName: "John",
            lastName: "Smith",
            salary: 12345
        },
        {
            firstName: "Jane",
            lastName: "Doe",
            salary: 54321
        }
    ]

// 2. **displayAverageSalary:** This function takes the generated array of employees and logs the average salary and the number of employees to the console using a template literal string.
//     javascript
    


// 3. **getRandomEmployee:** This function takes the generated array of employees, randomly selects one employee, and logs their full name to the console using a template literal.
//     ```javascript
    
function getRandomEmployee(employees) {
        let randomIndex = Math.floor(Math.random() * employees.length);
        let employee = employees[randomIndex];
        console.log(`Random Employee: ${employee.firstName} ${employee.lastName}`);
    }


//### Pre-Completed Functions:

// - **displayEmployees:** This function takes an array of employees and renders each employee to an HTML table.
//     ```javascript
    
function displayEmployees(employees) {
        const employeeTable = document.querySelector("#employeeTable tbody");
        employeeTable.innerHTML = "";
        employees.forEach(employee => {
            let row = document.createElement("tr");
            row.innerHTML = `<td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.salary}</td>`;
            employeeTable.appendChild(row);
        });
    }
    
// **trackEmployeeData:** This function executes when the "Add Employees" button is clicked. It sorts the employees by last name and displays them using `displayEmployees`. It also logs the average salary and a random employee's information to the console using `displayAverageSalary` and `getRandomEmployee`.
// ```javascript
    
function trackEmployeeData() {
        let employees = collectEmployees();
        employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
        displayEmployees(employees);
        displayAverageSalary(employees);
        getRandomEmployee(employees);
    }
