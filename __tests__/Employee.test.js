const Employee= require ('../lib/Employee.js')
let employee= new Employee ('Dave',345,'dave@gmail.com')

test ('can get username from getName()', () =>{
expect(employee.getName()).toEqual('Patty')
});

test ('can get id from getId()', () =>{
    expect(employee.getId()).toEqual(567)
    });