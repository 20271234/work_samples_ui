let employees = [
    {
        name : 'John',
        age : 40,
        designation : 'Manager',
        salary : '1,50,000',
        active : true,
        gender : 'male'
    },
    {
        name : 'Rajan',
        age : 25,
        designation : 'Software Engineer',
        salary : '30,000',
        active : true,
        gender : 'male'
    },
    {
        name : 'Wilson',
        age : 45,
        designation : 'Sr.Manager',
        salary : '2,30,000',
        active : false,
        gender :'male'
    },
    {
        name : 'Haran',
        age : 22,
        designation : 'Trainee',
        salary : '20,000',
        active : false,
        gender : 'male'
    },
    {
        name : 'minarva',
        age : 30,
        designation : 's.engg',
        salary : '4,30,000',
        active : true,
        gender : 'female'
    },
    {
        name : 'saswati',
        age : 48,
        designation : 'Sr.Manager',
        salary : '6,30,000',
        active : false,
        gender : 'female'
    },
    {
        name : 'mamata',
        age : 37,
        designation : 'tester',
        salary : '8,30,000',
        active : false,
        gender : 'female'
    },
    {
        name : 'rashmi',
        age : 28,
        designation : 'developer',
        salary : '2,00,000',
        active : true,
        gender : 'female'
    },
    {
        name : 'ipsa',
        age : 36,
        designation : 'analyst',
        salary : '2,30,000',
        active : false,
        gender : 'female'
    },
    {
        name : 'pruthi',
        age : 28,
        designation : 'Sr.Manager',
        salary : '7,30,000',
        active : true,
        gender : 'male'
    },
];







let seniorEmployees = employees.filter((employee) => {
    return employee.age >= 40;
});


let juniorEmployees = employees.filter((employee) => {
    return employee.age < 40;
});




let tBody = document.querySelector('#t_body');

// All Employees
let allEmpBtn = document.querySelector('#all-emp');
allEmpBtn.addEventListener('click',function() {
    displayEmployees(employees);
});

// Active Employees
let activeEmpBtn = document.querySelector('#active-emp');
activeEmpBtn.addEventListener('click',function() {
    let activeEmployees = employees.filter( (employee) => {
        return employee.active;
    });
    displayEmployees(activeEmployees);
});

// InActive Employees
let inActiveEmpBtn = document.querySelector('#inActive-emp');
inActiveEmpBtn.addEventListener('click',function() {
    let inActiveEmployees = employees.filter((employee) => {
        return !employee.active;
    });
    displayEmployees(inActiveEmployees);
});
let senioremp=document.querySelector('#senior-emp');
senioremp.addEventListener('click',function() {
    let seniorEmployees = employees.filter((employee) => {
        return employee.age >= 40;

    });
    displayEmployees(seniorEmployees);
});
let junioremp=document.querySelector('#junior-emp');
junioremp.addEventListener('click',function() {
    let juniorEmployees = employees.filter((employee) => {
        return employee.age < 40;
    });
    displayEmployees(juniorEmployees);
});
//display male employee
let maleEmp=document.querySelector('#male-emp');
maleEmp.addEventListener('click',function(){
    let male1_emp=employees.filter((employee) => {
        return employee.gender ==='male';
    });
    displayEmployees(male1_emp);
});
//display female employee
let femaleEmp=document.querySelector('#female-emp');
femaleEmp.addEventListener('click',function(){
    let female1_emp=employees.filter((employee) => {
        return employee.gender ==='female';
    });
    displayEmployees(female1_emp);
});
// Display Employee Data
let displayEmployees = (employees) => {
    let tableRow = '';
    let count = 1;
    for(let employee of employees){
        tableRow += `<tr>
                        <td>${count}</td>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.designation}</td>
                        <td>${employee.salary}</td>
                        <td>${employee.active}</td>
                        <td>${employee.gender}</td>
                     </tr> \n`;
        count++;
    }
    tBody.innerHTML = tableRow;
};

