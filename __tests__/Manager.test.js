const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "2222";
    const employee = new Manager("Jessica", 1, "jsisavath@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
  });

  test("getRole() should return Manager as a role", () => {
    const role = "Manager";
    const employee = new Manager("Jessica", 1, "jsisavath@gmail.com", "jessiferizzo");
    expect(employee.getRole()).toBe(role);
  });