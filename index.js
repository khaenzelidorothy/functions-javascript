function reverseStrings(arr) {
     const reversedArray = arr.map(str => str.split('').reverse().join(''));
     return reversedArray.sort();

  }
  const array=['ushi','dorothy']
  console.log(reverseStrings(array))
  

function checkNumber(arr){
    return arr.map(num =>{
        if(num>0)return 'positive'
        else if(num<0)return 'negative'
        else return 'zero'
    })
}
const numbers =[12,-65,32,0]
console.log(checkNumber(numbers))

function sortSalary(employees) {
    return employees.sort((a, b) => a.salary - b.salary);
  }
  const employees= [{id:32,names:'dorothy',salary: 42000},
    {id:27,names:'ushi',salary:30000}
  ]
  const amountSalary = sortSalary(employees)
  console.log(amountSalary)

  function performCalc(number){
    return number.forEach(num => {console.log(num*2)}
         );
  }
  const number= [3,4,7,8]
  performCalc(number)

  function workOnNumbers(numbers){
    return numbers.map((num,index) =>{
        if (index<4) return num*8;
        if (index>=numbers.length-2) return num+5;
    })
  }
  const numbers1 = [54,93,75,67,21,75];
  const result = workOnNumbers(numbers1);
  console.log(result);
 