// 콜백함수(2) : 익명함수 사용하기
//함수를 선언합니다.
function callFiveTimes(callback) {
    for (let i = 0; i<= 5; i++) {
        callback(i);
    }
}

//함수를 호출합니다.
callFiveTimes(function(i) {
    console.log(`${i}번째 함수 호출`)
})