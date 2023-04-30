var arr = [2,4,6,8,10,14,16,20]
//replace
arr[2] = 5
console.log(arr);
//end add
arr.push(30)
console.log(arr);
//start add
arr.unshift(1)
console.log(arr);
//insert
arr.splice(5,0,9)
console.log(arr);
//end remove 
arr.pop()
console.log(arr);
//start remove
arr.shift()
console.log(arr);
//n-th remove
arr.splice(2,1)
console.log(arr);
//n-th remove and replace
arr.splice(1,1,50)
console.log(arr);