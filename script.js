//-----------------------#1--------------------
console.log('-------------#1----------------');

for (let i = 1; i <= 10; i++) {

    if (i % 3 == 0) {
        console.log('FizBuz');
    } else if (i % 2 == 0) {
        console.log('Fiz');
    } else if (i % 2 != 0) {
        console.log('Buz');
    }
}
//---------------------#2------------------------
console.log('-------------#2----------------');

let numb = 10;
let factorial = 1;
for (let i = 1; i <= numb; i++) {

    factorial *= i;

}
console.log(factorial);

//----------------------#3---------------------
console.log('-------------#3----------------');

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let weeksAmountPaperCount = consumptionPerWeek * weeksAmount;
console.log(weeksAmountPaperCount + ` - листов за ${weeksAmount} недель`);
let totalCount = weeksAmountPaperCount / sheetsInReamPaper;
if (totalCount % 1 !== 0)
    console.log(parseInt(totalCount += 1) + ' - пачек бумаги');
else
    console.log(totalCount + ' - пачек бумаги');

    //-------------------#4------------------------
console.log('-------------#4----------------');

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 107;

let porch;
let floor;

function searchHouse(roomsOnFloor, floors, roomNumber) {

    porch = roomNumber / (floors * roomsOnFloor);
    if (porch % 1 !== 0)
        console.log(parseInt(porch += 1) + ' - подъезд');
    else
        console.log(porch + ' - подъезд');

    floor = (roomNumber % (floors * roomsOnFloor)) / roomsOnFloor;
    if (floor % 1 !== 0)
        console.log(parseInt(floor += 1) + ' - этаж');
    else
        console.log(floor + '- этаж');

}
searchHouse(roomsOnFloor, floors, roomNumber);

//----------------------#5---------------------
console.log('-------------#5----------------');
let n = 8;

for (let i = 1; i <= n; i++) {
    let str = '';
    for (j = 1; j <= 2 * n - 1; j++) {
        if (j >= n - (i - 1) && j <= n + (i - 1)) {
            str += '*';
        } else {
            str += '-';
        }

    }
    console.log(str);

}