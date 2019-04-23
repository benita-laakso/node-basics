let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let names = ["Andrew", "Martha", "Sofie", "Jason"];
//User can always create their own arrys, these are just suggestions

//1.function that logs the element of the array
function logArray(arr) { //(arr)This is a peramitor that works as a placeholder
  for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);
}
logArray([1, 2, 3]); //Calling function


// 2.function taht Clones Array
function cloneArray(arr) {
  return [...arr];
}
console.log(cloneArray([1, 5, "Bob"]));
//3. firstElemet
function firstElement(arr) { //(The given Array will go here)
  return arr[0];
}
console.log(firstElement(names));
//4.Return last element in Array
function lastElement(arr) {
  return arr[arr.length - 1];
}
console.log(lastElement(names));
//5.
function nFirstElements(arr, n) {
  if (n <= 0 || n === undefined) { //undefined is syntex
    return [];
  } else {
    return arr.slice(0, n); //stars index of 0 up untill number user has given
  }

}
console.log(nFirstElements(names)); //Testing with n undefined
//6.
function nLastElements(arr, n) {
  if (n === 0 || n === undefined || n > arr.length) {
    return [];
  } else {
    return arr.slice(-n);
  }
}
console.log(nLastElements(names, 2));
//7.Separators

function toStringWithSeparator(arr, separator) {
  let str = arr.join(separator);
  return str;
}
console.log(toStringWithSeparator(names, '!!!!!'));

//8.Implement function sumSquaresOfVector that returns the sum of squares of the elements of a numeric vector.
function sumSquaresOfVector(array) {
  var sum = 0,
    i = array.length;
  while (i--)
    sum += Math.pow(array[i], 2);
  return sum;
}

console.log(sumSquaresOfVector([0, 1, 2, 3, 4]));
//9.vector =Mathmaticl term for Array
function averageOfVector(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
//10.elements of the array given as an HTML unordered list (string)
//1.function that logs the element of the array

function toUl(arr) {
  let text = "<ul>";
  for (let i = 0; i < arr.length; i++) {
    text += "<li>" + arr[i] + "</li>"

  }
  text += "</ul>";
  return text;
}
console.log(toUl([1, 2, 3])); //Calling function

function toUlDeep(arr) {
  let text = "<ul>";
  for (let i = 0; i < arr.length; i++) {

    if (Array.isArray(arr[i])) {
      text += "<li>" + toUlDeep(arr[i]) + "</li>"
    } else {
      text += "<li>" + arr[i] + "</li>"

    }
  }
  text += "</ul>";
  return text;
}
console.log(toUlDeep([5, 5, [9, 8, 9]]));

function sortStringArray(arr) {
  return arr.sort();
}
console.log(sortStringArray(names));


function sortNumericVector(arr) {
  return arr.sort(function(a, b) {
    return a - b
  });
}
console.log(sortNumericVector([25, 11, 5]));

let sample = [{
    author: 'Bill Gates',
    title: 'The Road Ahead',
    libraryID: 1254
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    libraryID: 4264
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    libraryID: 3245
  }
];

function sortObjectArray(arr, key) {
  return arr.sort(
    function(a, b) {
      if (a[key] < b[key]) {
        return -1;
      } else if (a[key] > b[key]) {
        return 1;
      } else {
        return 0;
      }
    }
  );
}
console.log(sortObjectArray(sample, "title"));

////////
module.exports = {
  logArray: logArray,
  cloneArray: cloneArray,
  firstElement,
  lastElement,
  nFirstElements,
  nLastElements,
  toStringWithSeparator,
  sumSquaresOfVector,
  averageOfVector,
  toUl,
  toUlDeep,
  sortStringArray,
  sortNumericVector,
  sortObjectArray
}
