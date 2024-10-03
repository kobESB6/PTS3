// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];

  let keepGoing = true;  
  
  //  Loop until user finishes adding employees
 while (keepGoing) {
    const firstName = prompt("Enter the employee's first name:");
    const lastName = prompt("Enter the employee's last name:");
    let salary = prompt("Enter the employee's salary:");
   

//salary validation
    if (isNaN(salary)) {
      salary = 0;
    } 
// employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    };
  // Add employee to the array
    employees.push(employee);
    keepGoing = confirm("Do you want to add another employee?");
   
  }
//return employees
return employees;
}

// //Display  salary
function displayAverageSalary(employees) {
      
  let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
      let averageSalary = totalSalary / employees.length;
      console.log(`Number of Employees: ${employees.length}`);
      console.log(`Average Salary: ${averageSalary.toFixed(2)}`);
  }
//   }

// //Calculate avg salary
// const averageSalary = totalSalary / numEmployees; 
//   console.log(`Average salary of ${numEmployees} employees is ${averageSalary.toFixed(2)}`);

// //Get random employee
function getRandomEmployee(employees) {
  let randomIndex = Math.floor(Math.random() * employees.length);
  let employee = employees[randomIndex];
  console.log(`Random Employee: ${employee.firstName} ${employee.lastName}`);
}
  /*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

collectEmployees();
