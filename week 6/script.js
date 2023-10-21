const parent = document.getElementById('par');
let count = 0;

if(count == 0)
    {
        document.getElementById('preBtn').disabled = true;
    }

function forward()
{    
    count++;
    document.getElementById('preBtn').disabled = false;

    let child1 = document.getElementById(`${count}`);
    let child2 = child1.nextElementSibling;
    child1.setAttribute('class','filled');

    if (child2 != null)
    {
        child2.setAttribute('class','filled2');
    }
    console.log(count);

    
    
}



function previous()
{
    console.log(count);
    let child= document.getElementById(`${count}`);
    let prevChild = child.previousElementSibling;
    child.setAttribute('class','circle');

    if (prevChild != null)
    {prevChild.setAttribute('class','line');}
    count--;
}