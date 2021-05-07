//----------------------------------------#1----------------------------------

const arr = ['Vasya', 'Petya', 'Alexey']
removeUser(arr, 1)
console.log(arr) /// ['Vasya', 'Alexey']

function removeUser(arr, index) {
    if (index > arr.length) {
        return console.log('Your index is bigger then arr length');
    } else
        arr.splice(index, 1)
}
//----------------------------------------#2----------------------------------

const obj = {
    name: 'Vasya',
    age: 1
}
getAllKeys(obj) /// ["name", "age"]

function getAllKeys(obj) {

    return console.log(Object.keys(obj))

}
//----------------------------------------#3----------------------------------

const obj = {
    name: 'Vasya',
    age: 1
}
getAllValues(obj) /// ["Vasya", 1]

function getAllValues(obj) {

    return console.log(Object.values(obj))

}
//----------------------------------------#4----------------------------------

function insertIntoarr(obj, id) {
    let index = condidateArr.findIndex(condidate => condidate._id == id);
    condidateArr.splice(index, 0, obj);
}



// //----------------------------------------#5----------------------------------
class Condidate {
    constructor(condidate) {
        for (let key in condidate) {
            this[key] = condidate[key];
        }
    }

    get state() {
        let arr = this.address.split(', ');
        return console.log(arr[2])
    }

}

const condidate = new Condidate(condidateArr[0])
condidate.state /// Colorado

// //----------------------------------------#6----------------------------------


function getCompanyNames(condidateArr) {

    const arr = [];

    for (let key in condidateArr) {
        arr.push(condidateArr[key].company)
    }
    return arr.filter((company, index) => arr.indexOf(company) === index);
}
console.log(getCompanyNames(condidateArr));

//----------------------------------------#7----------------------------------

getUsersByYear(2017) /// ["e216bc9cab1bd9dbae25637", "5e216bc9e51667c70ee19f4f" ...]

function getUsersByYear(year) {

    const arrFiltered = condidateArr.filter(condid => condid.registered.substring(0, 4) == year);
    let res = arrFiltered.map(condidate => condidate._id);
    return console.log(res);
}

//----------------------------------------#8----------------------------------
getCondidatesByUnreadMsg(8);

function getCondidatesByUnreadMsg(numberOfMessages) {

    let res = condidateArr.filter(function (item) {
        let str = item.greeting.split(' ');
        let result = str.filter(val => !isNaN(val))
        if (result == numberOfMessages)
            return item;
    })
    return console.log(res)
}

//----------------------------------------#9----------------------------------

getCondidatesByGender('male') /// [Condidate, Condidate ...]

function getCondidatesByGender(gend) {
    let res = condidateArr.filter(condid => condid.gender === gend)
    console.log(res);
}

//----------------------------------------#10----------------------------------

Array.prototype.myReduce = function(callBack, accum){

    let i = 0;
    if (accum === undefined) {
        accum = this[0];
        i = 1;
    }
    for (i; i < this.length; i++) {
        accum = callBack(accum, this[i], i, this);
    }
    return console.log(accum);

};

Array.prototype.myJoin = function (separator) {
    resStr = '';
    for (i = 0; i < this.length; i++) {
        if (separator === undefined) {

            if (i === this.length - 1) {
                resStr += `${this[i]}`;
                return resStr;
            }
            resStr += `${this[i]},`;

        } else {
            if (i === this.length - 1) {
                resStr += `${this[i]}`;
                return resStr;
            }
            resStr += `${this[i]}${separator}`;
        }
    }
};