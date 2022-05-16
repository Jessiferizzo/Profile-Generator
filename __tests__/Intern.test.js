const Intern = require("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "UT Austin";
    const employee = new Intern("Jessica", 1, "jsisavath@gmail.com", school);
    expect(employee.school).toBe(school);
  });

  test("getRole() should return Intern as a role", () => {
    const role = "Intern";
    const employee = new Intern("Jessica", 1, "jsisavath@gmail.com", "jessiferizzo");
    expect(employee.getRole()).toBe(role);
  });