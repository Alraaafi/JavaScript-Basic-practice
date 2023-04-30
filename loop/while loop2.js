var stoped = true
while (stoped)
{
    var randNum = Math.floor(Math.random()*10+1)
    if (randNum == 5)
    {
        console.log('you are win bro');
        stoped = false
    } else {
        console.log('your num is '+ randNum);
    }
}