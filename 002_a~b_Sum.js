//a부터 b까지 합을 구하는 함수
//1부터 50까지의 합 구하기
//1부터 100까지의 합 구하기

function sumAll(a,b) {
    let output = 0;
    for (let i=a; i<=b; i++) {
        output += i
    }

    return output
}

console.log("1부터 50까지의 합은" + sumAll(1,50) + "입니다");
console.log("1부터 100까지의 합은" + sumAll(1,100) + "입니다");