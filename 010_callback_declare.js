//콜백함수(1): 선언적 함수 사용하기
// 함수를 선언 합니다.
function callFiveTimes(callback) {
    for(let i = 0; i < 5; i++) {
        callback(i)
    }
}

function print(i) {
    console.log(i)
}

//함수를 호출합니다.
callFiveTimes(print);