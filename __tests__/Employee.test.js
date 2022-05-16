const Employee= require ('../lib/Employee.js')
let employee= new Employee ('Jessica',345,'jsisavath@gmail.com')

test ('can get username from getName()', () =>{
expect(employee.getName()).toEqual('Jessica')
});

test ('can get id from getId()', () =>{
    expect(employee.getId()).toEqual(345)
    });