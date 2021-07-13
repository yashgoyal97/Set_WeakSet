var employees = [];

//save new entry
function saveDetails() {
    var name = document.getElementById("name").value;
    if (name) {
        employees.push(name);
    }
    document.getElementById("name").value = "";
    this.displayDetails();
}

//display employee details table
function displayDetails() {
    document.getElementById("employeeDiv").style.display = 'block';
    document.getElementById("employeesTable").innerHTML = '';

    //employees table heading
    var thName = document.createElement('th');
    thName.innerText = 'Employees';
    var trName = document.createElement('tr');
    trName.appendChild(thName);
    document.getElementById("employeesTable").appendChild(trName);

    
    //use of Set to remove the duplicacy
    // console.log("employees before duplicacy is removed:", employees);
    // var mySet = new Set(employees);
    // employees = [...mySet];
    // console.log("employees after duplicacy is removed:", employees);


    //display data of employees in table
    employees.forEach(employee => {
        var tdName = document.createElement('td');
        tdName.innerText = employee;
        var trName = document.createElement('tr');
        trName.appendChild(tdName);
        document.getElementById("employeesTable").appendChild(trName);
    });
};
