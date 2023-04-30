var stoped = true
while (1)
{
    var randNum = Math.floor(Math.random()*10+1)
    if (randNum == 5)
    {
        console.log('you are win bro');
        break
    } else {
        console.log('your num is '+ randNum);
    }
}