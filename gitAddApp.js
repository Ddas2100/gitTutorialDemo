class employee
{
  constructor(name, salary)
  {
    this.name=name;
    this.salary=salary;
  }
}
var emp1= new employee ("Babu", 150);
var emp2= new employee ("Raju", 170);
var emp3= new employee ("Shyam", 120);
var emp4= new employee ("Pappu", 190);
var emp5= new employee ("Ram", 140);

var x=[{name: emp1.name, salary: emp1.salary}, {name: emp2.name, salary: emp2.salary}, {name: emp3.name, salary: emp3.salary}, {name: emp4.name, salary: emp4.salary}, {name: emp5.name, salary: emp5.salary}];
var comparator= (a,b) => {
  return a.salary-b.salary;
}
console.log(x.sort(comparator));
