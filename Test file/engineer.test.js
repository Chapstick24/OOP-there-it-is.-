const Employee = require("../lib/Employee");

test("get file to run ", () => {const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can get a name", () => { const name = "Mychal ";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});
test(" get an id", () => {const testValue = 9999;const e = new Employee("Foo", testValue);
  expect(e.id).toBe(testValue);
});

test("get an email", () => {const testValue = "email.com";const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});