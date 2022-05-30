let x = 1234, y, z = null;

// ' ??=' assigns a value to a variable if the variable is null or undefined:

x ??= -1;
y ??= -1;
z ??= -1;

console.log(x); // 1234
console.log(y); // -1
console.log(z); // -1