// Title: 
// Rain Dance

// Meta-Tags:
// Javascript, JS, interview, questions, interview questions, arrays,objects,practice

// Description:
// You are given a week's rainfall data of few cities 
// Using the data write a function rainDance which returns an array of objects each object containing city name and average rainfall.

// Constraints:
// Nil

// Sample Input:
// [
//   { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
//   { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
// ];

// Sample Output:
// [
//   { name: "Roorkee", avgRainfall: 5.714285714285714 },
//   { name: "Pauri", avgRainfall: 2.2857142857142856 },
// ];
// let obj = {
//   [
//         {name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8]},
//         {name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
//      ]
//      console.log(obj);
// }
let a=[
  { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] },
{ name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] },
]

function fun()
{
 let avg=0;
 let avg1=0;
 for(i=0;i<a[0].rainfall.length;i++)
 {
   avg=a[0].rainfall[i];
 }
 avg=avg/a[0].rainfall.length;

 for(i=0;i<a[1].rainfall.length;i++)
 {
   avg1=a[1].rainfall[i];
 }
 avg1=avg1/a[1].rainfall.length;

 console.log("name :",a[0].name," avgrainfall",avg);

 console.log("name :",a[1].name," avgrainfall",avg1);
}
fun();


