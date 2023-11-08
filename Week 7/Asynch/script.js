/*  function myDisplayer(some)
{
    document.getElementById("demo").innerHTML = some;
} */
/*
function myCalculator (num1 , num2 , myCallBack)
{
    let sum = num1+num2;
    myCallBack(sum);
}

    myCalculator(8,10,myDisplayer);
 */

    /* let myPromise = new Promise(function(resolve, reject) {
        let x = 0;

        if(x == 0)
        resolve("Promise handle Successful");
        else
        reject("Error Handling");
    })

    myPromise.then(
        function(value)
        {
            myDisplayer(value)
        },
        function(error)
        {
            myDisplayer(error)
        }
    ) */


    /* let myPromise = new Promise(function(resolve, reject) {
        let flavour = document.getElementById('falvour').value;
        let x = ['pizza' , 'burger' , 'pasta'];
        for(let n=0; n<x.length; n++)
        {     
        if(flavour === x[n])
        {
        resolve("Promise handle Successful");
        }
        else
        {
        reject("Error Handling");
        }
    }
    })

    myPromise.then(
        function(value)
        {
            myDisplayer(value)
        },
        function(error)
        {
            myDisplayer(error)
        }
    ) */


    const fetchData = () => {
        fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('From GET: Network response not OK');
            }
            return response.json(); // Parse the response body as JSON
        })
        .then((data) => {
            console.log(data); // Log the parsed JSON data
        })
        .catch((error) => {
            console.error(error); // Handle any errors that occur
        });
    }
    
    fetchData();
    
    const postData = () => {
        fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/", {
            method: 'POST',
            body:JSON.stringify({
                user: "Yaseen Nazir",
                score:69
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            
        })

        .then((response) => {
            if (!response.ok) {
                throw new Error('From GET: Network response not OK');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    postData();