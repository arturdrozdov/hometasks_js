const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};
resArr = [];
let pair = "";
let i = 0;
for (let key in citiesAndCountries) {
    let value = citiesAndCountries[key];
    resArr[i] = `${key} - это ${value}`;
    i++;
}
console.log(resArr)

//-----------------------------#2---------------------
getArray(15);

function getArray(amount) {
    const mainArr = [];
    const childArr = [];
    //
    let num = 0;
    let i;
    let j;
    for (i = 0; i < amount / 3; i++) {
        for (j = 0; j < 3; j++) {
            num += 1;
            childArr[j] = num;
        }
        mainArr[i] = [...childArr];
    }
    console.log(mainArr);
}
//-------------------------------#3------------------
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

getNameOfDay('ru', 7);

function getNameOfDay(lang, numbDay) {
    switch (lang) {
        case 'ru': {
            for (let keys in namesOfDays) {

                if (keys === 'ru') {
                    let arr = [...namesOfDays[keys]];
                    for (let i = 0; i < arr.length + 1; i++) {
                        if (i == numbDay) {
                            console.log(arr[i - 1]);
                        }
                    }
                }
            }
        }
        break;

    case 'en': {
        for (let keys in namesOfDays) {

            if (keys === 'en') {
                let arr = [...namesOfDays[keys]];
                for (let i = 0; i < arr.length + 1; i++) {
                    if (i == numbDay) {
                        console.log(arr[i - 1]);
                    }
                }
            }
        }
    }
    break;
    }
}

//-------------------------------#4------------------

const arr = [19, 5, 77, 2, 42];

function sortAndSumm(arr) {
    for(let n=0; n<arr.length; n++){
        for (let i = 0; i < arr.length-1; i++) {
            let tmp = arr[i];
            if (arr[i] > arr[i + 1]) {                
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;                
            } 
        }
    }
    let result = arr[0]+arr[1];    
    return result; 
    }   
console.log(sortAndSumm(arr));

//-------------------------------#5------------------

const arrNumb=[1,0,0,0,1];
let res=0;
let k=1;
let resu=0;
for(let i=arrNumb.length-1; i>=0;i--){
    resu+=arrNumb[i]*k;
    k*=2;
}console.log(resu);
