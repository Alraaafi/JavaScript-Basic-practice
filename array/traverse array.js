var arr = [2,33,45,80,100]
for(i=0 ; i <arr.length ;i++)
{
    // console.log(arr[i])
    arr[i] = arr[i]+3
}
console.log(arr);
//odd num idintify
for(i=0 ; i <arr.length ;i++)
{
  if(i%2==1){
      console.log(arr[i]);
  }
}