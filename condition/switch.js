var date = new Date()
var today = date.getDay()
switch (today){
    case 0: 
    console.log('SAT');
    break
    case 1: 
    console.log('Sun');
    break
    case 2: 
    console.log('mon');
    break
    case 3: 
    console.log('tue');
    break
    case 4: 
    console.log('wed');
    break
    case 5: 
    console.log('thu');
    break
    case 6: 
    console.log('fri');
    break
    default :
    console.log('not a valid');
}