//007_별 트리 찍기
//재현님 코드 
const level = 5; 

for (let i = 1; i <= level; i++) {
    let tree= "";
    for (let k = 1; k<= level-i; k++) {
        tree = tree + " ";
    }
    for (let j = 1; j <= i*2-1; j++) {
        tree = tree + "*"
    }
    console.log(tree)
}

//008_기본 매개변수의 활용
//출력할 것
//최저임금씨, 시급만원씨1->10000원, 시급만원씨2->10000원,52시간 의 시급, 근무시간, 급여
//시급은 8590원
function monthlyPay (name, wage=8590, hours) {
    console.log(` ${name}님의 급여 정보`);
    console.log(`- 시급 : ${wage}원`);
    console.log(`- 근무시간 : ${hours}시간`);
    console.log(`- 급여 : ${wage*hours}원`);
}

monthlyPay('최저임금씨');
monthlyPay('시급만원씨1', 10000);
monthlyPay('시급만원씨2', 10000, 52);

//010_콜백함수 선언
// 함수를 선언 합니다.
function callFiveTimes (callback) {
    for(let i = 0; i < 5; i++) {
        callback(i)
    }
}

function print (i) {
    console.log(`${i}번째 함수 호출`)
}

callFiveTimes(print)