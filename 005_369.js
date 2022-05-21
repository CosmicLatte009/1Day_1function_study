//숫자에 3,6,9가 포함되어 있는만큼 박수 
//출력해볼 값 369, 336699, 12

function 삼육구(number) {
    let numString = number.toString().split('');
    let clap = [];

    for (let num of numString) {
        if (num === '3'||num === '6'||num === '9') {
            clap.push('짝!');
        }
    }
    return clap; 
}

console.log(삼육구(369));
console.log(삼육구(336699));
console.log(삼육구(12));
