const Engineer = require("../lib/Engineer");

test("Ability to set GitHub username using constructor function", () => {
    const github = "jessiferizzo";
    const employee = new Engineer("Jessica", 1, "jsisavath@gmail.com", github);
    expect(employee.github).toBe(github);
  });

  test("getRole() should return Engineer as a role", () => {
    const role = "Engineer";
    const employee = new Engineer("Jessica", 1, "jsisavath@gmail.com", "jessiferizzo");
    expect(employee.getRole()).toBe(role);
  });