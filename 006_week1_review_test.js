// 001_윤년구하기 
// 출력결과 
//2020년은 윤년인가요? === true
//2009년은 윤년인가요? === false
// 1996년은 윤년인가요? === true
function leapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년인가요? === ${leapYear(2020)}`);
console.log(`2009년은 윤년인가요? === ${leapYear(2009)}`);
console.log(`1996년은 윤년인가요? === ${leapYear(1996)}`);

//002_a~b 합 구하기 
//1부터 50까지의 합 구하기
//1부터 100까지의 합 구하기 
function sumAB(a,b) {
    let output = 0;
    for (let i=a; i<=b; i++) {
        output += i;
    }
    return output;
}

console.log(`1부터 50까지의 합은 ${sumAB(1,50)}입니다`);
console.log(`1부터 100까지의 합은 ${sumAB(1,100)}입니다`);

//003_최솟값 구하기 
// 출력 결과 
// [34,5,11,85,92] 중에서 최솟값은 5
function min(array) {
    let output = array[0];
    for (const item of array) {
        if (output > item) {
            output = item;
        }
    }
    return output;
}

const testArray = [34,5,11,85,92];
console.log(`${testArray} 중에서 최솟값은 ${min(testArray)}`);

//004_가격 낮은 순으로 정렬하기 
//product 할당 부분은 복붙해놓고 시작~
let products = [
    { id: 0, price: 70000, title: 'Blossom Dress' },
    { id: 1, price: 32000, title: 'Check Shirt' },
    { id: 2, price: 15000, title: 'Black Tie' },
    { id: 3, price: 67000, title: 'Springfield Shirt' },
    { id: 4, price: 82000, title: 'Red Mini Dress' },
];

let lowToHigh = function() {
    products.sort(function(a,b) {
        return a.price - b.price;
    });
    console.log(products);
}

lowToHigh();



//005_숫자에 3,6,9가 포함되어 있는만큼 박수 
//출력해볼 값 369, 336699, 12

function 삼육구(number) {
    let numString = number.toString().split('');
    let clap = [];

    for (let num of numString) {
        if (num === '3' || num === '6'|| num === '9') {
            clap.push('짝!!');
        }
    }
    return clap;
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));