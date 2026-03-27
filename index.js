//User Cache with Map
const userCache = new Map();

userCache.set(1, { name: "Esther", age: 19 });
userCache.set(2, { name: "Mary", age: 22 });

console.log(userCache.get(1));

console.log(userCache.has(2));

userCache.delete(2);

//WORD FREQUENCY TRACKING
const text = "hello world hello js world world";
const words = text.split(" ");
const freq = new Map();

words.forEach(word => {
  if (freq.has(word)) {
    freq.set(word, freq.get(word) + 1);
  } else {
    freq.set(word, 1);
  }
});

console.log(freq);


//PHONE BOOK
const phoneBook = new Map();

phoneBook.set("Esther", "08012345678");
phoneBook.set("John", "07098765432");

console.log(phoneBook.get("Esther"));

//REMOVING DUPLICATES USING SET
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);

//FINDING UNIQUE CHARACTERS
const word = "mississippi";
const letters = new Set(word);

console.log([...letters]);  // ['m','i','s','p']


//SET OPERATIONS
//Union
const A = new Set([1, 2, 3]);
const B = new Set([3, 4, 5]);

const union = new Set([...A, ...B]);
console.log(union);
//Intersection
const intersection = new Set([...A].filter(x => B.has(x)));
console.log(intersection);
//Difference
const difference = new Set([...A].filter(x => !B.has(x)));
console.log(difference);