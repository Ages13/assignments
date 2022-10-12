//Come back and finish this

var employees = []

function Employee (name, jobTitle, salary, status){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    

}

let employee1 = new Employee("Bob", "Support", 45000,);
let employee2 = new Employee("Dave", "Manager", 65000,);
let employee3 = new Employee("Steve", "Janitor", 75000);


employees.push(employee1, employee2, employee3);
employee1.status = "part-time";
console.log(employees);

//console.log(printEmployeeForm.Employee);