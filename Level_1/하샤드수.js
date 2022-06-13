const x = 123;

function solution(x) {
    let answer = false; // x = 123
    let num = String(x).split(""); //num = ['1', '2', '3']
    let sum = 0;
    for(let i=0; i<num.length; i++) {
        sum += Number(num[i]); // sum = 6
    }
    if(x % sum === 0) answer = true;
    else answer = false;
    return answer;
}
