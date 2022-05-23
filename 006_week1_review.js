// 001_윤년구하기 
// 출력결과 
//2020년은 윤년인가요? === true
//2009년은 윤년인가요? === false
// 1996년은 윤년인가요? === true
function isLeapYear(year) {
    // 4로 나누어떨어지는 동시에 100으로 나누어떨어지지 않거나 400으로는 나누어 떨어져야 하는 윤년 
    return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년인가요? === ${isLeapYear(2020)}`);



//002_a~b 합 구하기 
//1부터 50까지의 합 구하기
//1부터 100까지의 합 구하기 
function sumAll(a,b) {
    let output = 0; 
    //i를 0으로 초기화; i가 b보다 작거나 같을 때까지 반복; 1씩 더하기
    for (let i=a; i<=b; i++) {
        //output = output + i 
        //a부터 b까지 1씩 증가하며 output에 저장되는 것. 
        output += i
    }
    return output 
}

console.log(`1부터 100까지의 합은 ${sumAll(1,100)} 입니다`);



//003_최솟값 구하기 
// 출력 결과 
// [34,5,11,85,92] 중에서 최솟값은 5
function min(array) {
    let output = array[0]; 
//for of 반복문 for(const 반복 변수 of 배열 또는 객체)
//for in 반복문과의 차이점은, 반복 변수에 요소의 값이 들어가는 것. 
    for (const item of array) {
        // 만일 item이 output=array[0]인덱스에 해당하는 숫자보다 작다면, output에 item을 할당해준다. 
        // ?? 배열의 인덱스가 할당되어있던 output에 그냥 숫자를 할당해주는게 먼가 이해가 안된다. 
        if (output > item) {
            output = item; 
        }
    }
    return output; 
}

const testArray = [34, 5, 11, 85, 92];

console.log(`${testArray} 중에서 최솟값은  ${min(testArray)}`);



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
    //sort()메서드는 배열의 요소를 정렬하는데 사용하는 함수. 
    //10이 3보다 앞에 위치하는 경우를 막기 위해 아래와 같은 compareFunction이 거의 필수로 같이 쓰인다. 
    // prodicts.sort((a,b)=>a.price -b.price)
    products.sort(function(a,b) {
    //a-b가 양수면 a가 크다는 뜻이니까 a가 오른쪽으로, 
    //a-b가 음수면 b가 더 크다는 뜻이니까 b가 오른쪽으로 가게 된다. 
        return a.price - b.price; 
    });
    console.log(products);
};

lowToHigh();




//005_숫자에 3,6,9가 포함되어 있는만큼 박수 
//출력해볼 값 369, 336699, 12

function 삼육구(number) {
    let numString = number.toString().split('');
    let clap = [];

    for (let num of numString) {
        if (num === '3' || num === '6' || num === '9') {
            clap.push('짝!');
        }
    }
    return clap; 
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));

