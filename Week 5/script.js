function myFunction()
{
    const A = document.getElementById("div1id");
    const divid = document.getElementById("firstid");
    divid.removeChild(A);
}

function addfunc()
{
const B = document.getElementById("secondid");
B.innerHTML += `<h1> Hello pakistan </h1>`;
}

function add2func()
{
    const parentt = document.getElementById("secondid");
    const addtag = document.createElement('h1');
    const content = document.createTextNode('Hello India');
    addtag.setAttribute("class" , "C1");
    addtag.append(content);
    parentt.appendChild(addtag);
}