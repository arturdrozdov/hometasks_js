//==============================#1=====================

const counter = (() => {

    let result = 0;
    return (num) => {
        return console.log(result += num);
    }
})()

counter(5);
counter(2);
counter(4);

//==============================#2=====================

const getUpdatedArr = (() => {
    let resArr = [];

    return (any) => {
        if (any === undefined) {
            resArr = [];
            return console.log(resArr);
        } else {
            resArr.push(any)
            return console.log(resArr);
        }
    }
})()

getUpdatedArr(5);
getUpdatedArr(5);
getUpdatedArr({
    name: 'Vasya'
});
getUpdatedArr();
getUpdatedArr(34);

//==============================#3=====================

const getTime = (() => {

    let time = 0;

    return () => {
        if (time == 0) {
            console.log('Enabled')
            time = new Date().getTime();
        }
        let currTime = new Date().getTime();
        let resultTime = (currTime - time) / 1000;
        return Math.round(resultTime);

    }
})()

//==============================#4=====================

let timer = function time(time) {
    let counter = setInterval(count, 1000);
    function count() {
        if (time == 0) {
            clearInterval(counter);
            return console.log("the end");
        } else {
            let min = Math.floor(time / 60)
            let sec = time % 60
            if (time > 0) {
                time--;                
                sec = sec < 10 ? `0${sec}` : sec;
                min = min < 10 ? `0${min}` : min;                
                console.log(`${min}:${sec}`);
            }
        }
    }
}
timer(65);