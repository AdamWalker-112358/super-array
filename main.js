import SuperArray from "./super-array";

let fruits = new SuperArray('Orange', 'Apple', 'Pear', 'Banana', 'Watermelon', 'Tomato');
let cakes = fruits.superMap(value => `${value} cake`);
console.log(fruits)
console.log(cakes)

cakes = fruits.superMap((value, index) => `${index} ${value} cake`);
console.log(fruits)
console.log(cakes)


happyCakes = fruits
    .superMap((value, index) => `${index} ${value} cake`) 
    .superMap(value => `Happy ${value}`);
console.log(fruits)
console.log(happyCakes)


let unsortedNumbers = new SuperArray(2, 4, 5, 7, 3, 2, 4, 8, 4, 3);
console.log({unsortedNumbers})
let sortedNumbers = unsortedNumbers.superSort();
console.log({sortedNumbers});


let includeArray = new SuperArray(...['cat', 1234, 'apple', true, 0, 'John']);
console.log(includeArray.superIncludes('cat'))
console.log(includeArray.superIncludes('dog'))
console.log(includeArray.superIncludes(111))
console.log(includeArray.superIncludes(1234))
console.log(includeArray.superIncludes(false))


console.log('include', includeArray.superEvery());
let everyArray = new SuperArray(...['cat', 1234, 'apple', true, 1]);
console.log('every', everyArray.superEvery());
console.log('every func', everyArray.superEvery(item => !Number.isNaN(Number(item))));
console.log('every func', unsortedNumbers.superEvery(item => !Number.isNaN(Number(item))));


console.log(includeArray.superReverse());


console.log('some func', everyArray.superSome(item => !Number.isNaN(Number(item))));


console.log(everyArray.superFind(item => !Number.isNaN(Number(item))));
console.log(everyArray.superFindIndex(item => !Number.isNaN(Number(item))));


console.log(everyArray.superFill('*'))
console.log(everyArray.superFill('*',1,3))
console.log(everyArray.superFill('*', 4))
console.log(everyArray.superFill('*', 0, 4))

console.log(everyArray.superConcat(unsortedNumbers));


console.log(unsortedNumbers.superReduce());
console.log(unsortedNumbers.superReduce((agg, item) => {
    if (!agg[item]) agg[item] = 1
    else agg[item]++
    return agg
}, {}));