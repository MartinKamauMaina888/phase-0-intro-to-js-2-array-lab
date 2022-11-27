// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

//.push()
cats.push("Ralph");
cats;

//reset
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

//.unshift()
cats.unshift("Bob");
cats;

//reset
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

//.pop()
cats.pop()
cats;

//reset
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

 //.shift
 cats.shift() 
 cats;

 //reset
 beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  //.slice
  cats.push("Broom");
  cats;

  cats.slice(0,3);
  cats;

  //reset
  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
 
//.push
cats.unshift("Arnold");
cats;

cats.slice(0);
cats;

//reset
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

//.slice & ...Spread Operator
const newCats = ["Milo", "Otis", ...cats.slice(2)];

cats;
newCats;

//reset
beforeEach(function () {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
});

//.slice & ...Spread Operator
const currentCats = [...cats.slice(0),"Otis", "Garfield"];

cats;
currentCats;