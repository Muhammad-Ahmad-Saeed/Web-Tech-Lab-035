function valueExtract()
{
    const author= document.getElementById('inp01').value;
    const book = document.getElementById('inp02').value;

    console.log(author,book);

    const parentDiv = document.getElementById('id01');
    const tagadd1 = document.createElement('h1');
    const content1 = document.createTextNode(author);
    const tagadd2 = document.createElement('h2');
    const content2 = document.createTextNode(book);

    tagadd1.append(content1);
    parentDiv.appendChild(tagadd1);
    tagadd2.append(content2);
    parentDiv.appendChild(tagadd2); 

    const removetxt = "click me";
    const remove = document.createElement('button');
    const btntxt = document.createTextNode('remo')
    parentDiv.append(remove);
    remove.addEventListener('click' , function remove(){parentDiv.removeChild(tagadd1);
    parentDiv.removeChild(tagadd2);
    
    });
}