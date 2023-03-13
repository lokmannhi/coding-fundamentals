const sum = [1, 2, 3, 4];
const bSum = [-3, 5, 19, -6];

function addArray(n) {
  let result = 0;
  for (let i = 0; i < n.length; i++) {
    result += n[i];
  }
  return result;
}

console.log(addArray(sum));
console.log(addArray(bSum));

function calculateAge(date) {
  const [day, month, year] = date.split("/").map((n) => parseInt(n, 10));
  const birthDate = new Date(year, month - 1, day);
  const currentYear = new Date().getFullYear();
  let age = currentYear - birthDate.getFullYear();
  const monthDiff = new Date().getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && new Date().getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

console.log(calculateAge("20/7/2002"));
console.log(calculateAge("1/1/1979"));

function factorial(anyNumber) {
  let result = 1;
  for (let i = 2; i <= anyNumber; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(1));

function tetra(n) {
  return (n * (n + 1) * (n + 2)) / 6;
}

console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));
