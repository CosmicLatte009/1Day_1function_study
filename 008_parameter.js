//기본 매개변수의 활용

//출력할 것
//최저임금씨, 시급만원씨1->10000원, 시급만원씨2->10000원,52시간 의 시급, 근무시간, 급여

function salary (name, wage=8590, hours) {
    console.log(`# ${name}님의 급여정보`);
    console.log(`-시급 : ${wage}원`);
    console.log(`-근무시간 : ${hours}`);
    console.log(`-급여 : ${wage*hours}`);
}

salary('최저임금씨');
salary('시급만원씨1', 10000);
salary('시급만원씨2', 10000, 52);