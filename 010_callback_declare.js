// 함수를 선언 합니다.
function callFiveTimes(callback) {
    for(let i = 0; i < 5; i++) {
        callback(i)
    }
}

function print(i) {
    console.log(i)
}

callFiveTimes(print);