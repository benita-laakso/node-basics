function test() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  };
}
test();

function printNumbers(howMany) {
  for (let i = 1; i <= howMany; i++) {
    console.log(i);
  }
}
printNumbers(9);
// Task 3
function twoNumbers(start, end) { //Two perametos
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
twoNumbers(2, 10);
//Task 4
function printStars(number) {
  let line = "";
  for (let i = 0; i < number; i++) {
    line = line + "*";
  }
  console.log(line);
}
printStars(9);
// Task 5   Use the previous function
function printSquare(size) {
  for (let i = 0; i < size; i++) //How many lines to print
    printStars(size); //How long the lines are

}
printSquare(3);
//Task 6  Rectangle
function printRectangle(width,height){
  for(let i=0; i<height;  i++)
  printStars(width)
}
printRectangle(17,3);
//Triangel
function printTriangel(size){// lines
for(let i=0; i<size; i++){
  printStars(i+1)
}
}
printTriangel(5);
//8

function seriesSum(n){
  let sum = 0;
  for(let i=1; i<=n; i++){
sum = sum + i;
  }
return sum;// Return is more correct then console log
}
console.log(seriesSum(100));
//Factorial
function factorial(n){
  let sum= 1;
for(let i =1; i<=n; i++)  {
sum = sum * i;
  }
  //return sum;
console.log(sum);
}

factorial(10);
//Headings
function heading(text){
  console.log(text);
printAnything(text.length, '-');
  //console.log('-----------');
}
// this function is calling function heaging
function run(){
  heading('test');
  test();
  heading('printNumbers');
  printNumbers();
  heading('Exercise 3');
  twoNumbers();
  heading('Exercise');
  printSquare(3);
}
run();

function printAnything(number, quality) {
  let line = "";
  for (let i = 0; i < number; i++) {
    line = line + quality;
  }
  console.log(line);
}

//printAnything(5,'*');
//printAnything(text.length,('-');
