//-------------------------------------#1----------------------------------------
const searchCandidatesByPhoneNumber = phone => {

    let resultArr = condidateArr.filter(condidate => normolise(condidate.phone).includes(normolise(phone)));

    function normolise(str) {
        let resStr = str.replace(/[()-\s+]/g, '');
        return resStr;
    }
    return console.log(resultArr);
}

// searchCandidatesByPhoneNumber('80')
// /// [Candidate, Candidate, Candidate ...]

// searchCandidatesByPhoneNumber('43')
// /// [Candidate, Candidate, Candidate ...]

// searchCandidatesByPhoneNumber('+1(869)408-39-82') 
// [Candidate]

//-------------------------------------#2----------------------------------------

const getCandidateById = id => {
    let ress = condidateArr.filter(cond => cond._id == id)
    let resDate = ress[0].registered.split('T');
    let date = new Date(resDate[0]);

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;

    ress[0].registered = `${dd}/${mm}/${yy}`;
    return console.log(ress[0]);
}

// getCandidateById('5e216bc9cab1bd9dbae25637');

//-------------------------------------#3----------------------------------------

const sortCandidatesArr = sortBy => {

    if (sortBy === 'asc') {
        sortAsc = [...condidateArr];
        sortAsc.sort((a, b) => a.balance.replace(/\D/g, '') - b.balance.replace(/\D/g, ''));
        console.log(sortAsc);
        return;
    } else if (sortBy === 'desc') {
        sortDesc = [...condidateArr];
        sortDesc.sort((a, b) => b.balance.replace(/\D/g, '') - a.balance.replace(/\D/g, ''));
        console.log(sortDesc);
        return;
    } else if (sortBy === undefined) {
        console.log(condidateArr);
        return;
    }

}

// sortCandidatesArr('asc')
// отсортирует по-возростанию и вернет отсортированный массив

// sortCandidatesArr('desc') 
// // отсортирует по-убыванию и вернет отсортированный массив

// sortCandidatesArr() 
// // не будет сортировать, а просто вернет первоначальный массив

//-------------------------------------#4----------------------------------------

const getEyeColorMap = () => {
    let colorArr = condidateArr.map(cond => cond.eyeColor).filter((cond, i, arr) => arr.indexOf(cond) == i)
    console.log(colorArr);
    let resObj = {};

    for (val of colorArr) {
        resObj[val] = condidateArr.filter(cond => cond.eyeColor === val);
    }
    console.log(resObj);
}

getEyeColorMap()




