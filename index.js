const fruits = ["Apple", "Banana", "Cherry"];  
fruits.pop();


// error --> Here the Orange is replacing fruit of index number of 3 that is not present 
// fruits[3] = "Orange";


// Solution --> adding orange in an array
fruits.push("Orange");



console.log(fruits);  
