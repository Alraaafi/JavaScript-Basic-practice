var ob1 = {
    a : 3,
    b : 5
}
var ob2 = {
    a : 3,
    b : 5
}

console.log(JSON.stringify(ob1)===JSON.stringify(ob2));
console.log('a' in ob1);