var obj = {
    a : 20,
    b : 30,
    c : 50
}
// obj.b = 100
obj.d = 75
console.log(obj);

var obj2 = Object()
obj2.e = 11
console.log(obj2);
var obj3 = new Object()
obj3.f = 22
console.log(obj3);

//obj letaral
console.log(obj.a + obj.b);
console.log(obj['a']);
delete obj.c
console.log(obj);
