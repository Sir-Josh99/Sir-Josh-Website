const employees = [
  { id: 1, name: 'Bambe Joshua', position: 'IT student' },
  { id: 2, name: 'Isah Idris', position: 'IT Student' },
  // Add more employee data as needed
];

const employeeList = document.getElementById('employee-list');
const employeeDetails = document.getElementById('employee-details');

// Populate employee list
employees.forEach(employee => {
  const listItem = document.createElement('li');
  listItem.textContent = employee.name;
  listItem.addEventListener('click', () => displayEmployeeDetails(employee));
  employeeList.appendChild(listItem);
});

function displayEmployeeDetails(employee) {
  employeeDetails.innerHTML = `
    <h3>Name: ${employee.name}</h3>
    <p>ID: ${employee.id}</p>
    <p>Position: ${employee.position}</p>
  `;
}

