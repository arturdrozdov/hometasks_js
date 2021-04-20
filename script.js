class Student {
    static id = 1;
    static arrOfStudents = [];
    constructor(enrollee) {

        for (let key in enrollee) {
            this[key] = enrollee[key];
        }
        this.id = Student.id++;
        this.isSelfPayment =
            (function () {

                if (enrollee.ratingPoint < 800) {
                    return true;
                } else {
                    if (Student.arrOfStudents.length < 5) {
                        return false;
                    } else {
                        Student.arrOfStudents.sort(function (a, b) {
                            if (a.ratingPoint === b.ratingPoint) {
                                if (a.schoolPoint < b.schoolPoint)
                                    return 1;
                                else return -1;
                            }
                            if (a.ratingPoint < b.ratingPoint)
                                return 1
                            else
                                return -1;
                        })
                        if (enrollee.ratingPoint == Student.arrOfStudents[4].ratingPoint) {
                            if (enrollee.schoolPoint > Student.arrOfStudents[4].schoolPoint) {
                                Student.arrOfStudents[4].isSelfPayment = true;
                                return false;
                            }
                        }
                        if (enrollee.ratingPoint > Student.arrOfStudents[4].ratingPoint) {
                            Student.arrOfStudents[4].isSelfPayment = true;
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            }());
            
        Student.arrOfStudents.push(this);
        Student.arrOfStudents.sort(function (a, b) {
            if (a.ratingPoint === b.ratingPoint) {
                if (a.schoolPoint < b.schoolPoint)
                    return 1;
                else return -1;
            }
            if (a.ratingPoint < b.ratingPoint)
                return 1
            else
                return -1;
        })
    }
}


const stud = new Student(studentArr[2]);
const stud2 = new Student(studentArr[0]);
const stud3 = new Student(studentArr[3]);
const stud4 = new Student(studentArr[10]);
const stud5 = new Student(studentArr[4]);
const stud6 = new Student(studentArr[6]);
const stud7 = new Student(studentArr[8]);
const stud8 = new Student(studentArr[5]);
const stud9 = new Student(studentArr[1]);
const stud10 = new Student(studentArr[9]);

console.log(Student.arrOfStudents);

//====================================================#2===========================

class CustomString {
    constructor() {

    }

    reverse(str) {
        this.str = str;
        let arrA = [...str]
        let arrB = [];
        for (let i = arrA.length - 1; i >= 0; i--) {
            arrB.push(arrA[i]);
        }
        return console.log(arrB.join(''));
    }
    ucFirst(str) {
        this.str = str;
        str = str[0].toUpperCase() + str.slice(1);
        return console.log(str);
    }
    ucWords(str) {
        this.str = str;
        let c = '';
        c = str.split(' ');
        for (let i = 0; i < c.length; i++) {
            let d = '';
            d += c[i][0].toUpperCase() + c[i].slice(1);
            c[i] = d;
        }
        return console.log(c.join(' '));
    }
}

const myString = new CustomString();

myString.reverse('qwerty'); //выведет 'ytrewq'
myString.ucFirst('qwerty'); //выведет 'Qwerty'
myString.ucWords('qwerty qwerty qwerty'); //выведет 'Qwerty Qwerty Qwerty
