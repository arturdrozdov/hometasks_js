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
        let resultTime = (a - time) / 1000;
        return Math.round(resultTime);

    }
})()

//==============================#4=====================

const timer = (() => {

    let seconds = 0;
    return (time) => setInterval(function () {


        if (time == 0) {
            clearInterval(timer);
            console.log("the end");
            
        } else {
    
            seconds = time--;
            console.log(seconds)
        }
    
    
    }, 1000)
    })()

    timer(6)




