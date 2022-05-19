// 최솟값 구하기 
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

const testArray = [34, 5, 11, 85, 92];
console.log(testArray + " 중에서 최솟값은 " + min(testArray));
console.log(`${testArray} 중에서 최솟값은 ${min(testArray)}`);
