//-----------------------------#1,2------------------------------
class Emploee {
  constructor(em) {

    for (let key in em) {
      this[key] = em[key];
    }
  }
  getFullName() {
    return `${this.surname} ${this.name}`;
  }
  get fullInfo(){
    return this;
  }
  set fullInfo(arg){
    
  }
}
//-----------------------------#3------------------------------
let createEmployesFromArr = (arr) => {
  const resArr = [];
  for (let val of arr) {
    resArr[length] = new Emploee(arr[length]);
    length++;
  }
  return resArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
console.log(emplyeeConstructArr)

//-----------------------------#4------------------------------
const getFullNamesFromArr = (arr) => {
  const resArr = [];
  for (let val of arr) {

    resArr[resArr.length] = `${val.name} ${val.surname}`;
    length++;

  }
  return resArr;
}

console.log(getFullNamesFromArr(emplyeeConstructArr))

//-----------------------------#5------------------------------
const getMiddleSalary = (arr) => {
  let midSalary = 0;
  for (let val of arr) {
    midSalary += val.salary
  }
  midSalary /= arr.length;
  return Math.round(midSalary)
}
//-----------------------------#6------------------------------
console.log(getMiddleSalary(emplyeeConstructArr))

const getRandomEmployee = (arr) => {
  let num=Math.floor((Math.random()*arr.length))
  console.log(num)
return arr[num];

}

console.log(getRandomEmployee(emplyeeConstructArr))

//-----------------------------#7------------------------------
 
const employeeObj = new Emploee(emplyeeArr[0]);

console.log(employeeObj.fullInfo)



