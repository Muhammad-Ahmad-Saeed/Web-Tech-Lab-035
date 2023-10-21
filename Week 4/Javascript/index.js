var mark_mass = 78;
var john_mass = 92;

var mark_height = 1.69;
var john_height = 1.95;

function BMIcalc(mass, height)
{
    let BMI = mass / (height * height)
    return BMI;
}

var markBMI = BMIcalc(mark_mass, mark_height);
var johnBMI = BMIcalc(john_mass, john_height);

console.log('Mark BMI');
console.log(markBMI);
console.log(johnBMI);

let simplearray = ['one' , 2 , 'Three' , true , false];
console.log(simplearray.length);

for(i=0; i< simplearray.length ; i++)
{
    console.log(simplearray[i]);
}

let complexArray = [
    [
      {
        one: 1,
        two: 2
      },
      {
        three: 3,
        four: 4
      }
    ],
    [
      {
        a: "a",
        b: "b"
      },
      {
        c: "c",
        d: "d"
      }
    ]
  ];

  for(i=0; i< complexArray.length ; i++)
{
    for(j=0 ; j<i ; j++)
    {
        console.log(complexArray[j]);
    }
}

simplearray.push(4);
simplearray.unshift(5,6);
console.log(simplearray);
