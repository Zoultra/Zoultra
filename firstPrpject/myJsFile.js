/*




let basic = {
    ex1: 'PushUps: 20 times',
    ex2: 'Jumps: 20 times'
};
let advanced = {
    ex3: 'Squats: 30 times',
    ex4: 'Run: 2km'
};

//your code goes here
var total = Object.assign({}, basic, advanced)

for (let ex in total) {
    console.log(total[ex])
};*/
/*
function Add(...input) {

    sum = 0;
    for (let i of input) {
        sum += i;
    }

    return sum;

}

console.log(Add(1, 2, 3));
console.log(Add(4, 14, 5, 9, 14));
console.log(Add(2, 36));
*/

var images = [
    'http://www.sololearn.com/uploads/slider/1.jpg',
    'http://www.sololearn.com/uploads/slider/2.jpg',
    'http://www.sololearn.com/uploads/slider/3.jpg'
];
var num = 0;

function prev() {
    var slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}

function next() {
    var slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}