const possible = (a, b) => {
  let x = a;
  let y = b;
  for (let i = 1; i <= 6; i++) {
    x += 1;
    if (x === y) {
      return true;
    }
  }
  return false;
};

console.log(possible(3, 7));
console.log(possible(1, 9));
console.log(possible(5, 3));

function perimeter(letter, num) {
  if (letter === "s") {
    return 4 * num;
  } else if (letter === "c") {
    return 2 * Math.PI * num;
  } else {
    return "Invalid input";
  }
}

console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
console.log(perimeter("c", 9));

const gen = {
  "-3": ["great grandfather", "great grandmother"],
  "-2": ["grandfather", "grandmother"],
  "-1": ["father", "mother"],
  0: ["me!", "me!"],
  1: ["son", "daughter"],
  2: ["grandson", "granddaughter"],
  3: ["great grandson", "great granddaughter"],
};
function generation(x, y) {
  return y == "m" ? gen[x][0] : gen[x][1];
}

console.log(generation(2, "f"));
console.log(generation(-3, "m"));
console.log(generation(1, "f"));
