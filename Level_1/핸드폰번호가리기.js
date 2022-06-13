function solution(phone_number) {
    let answer = "";
    let before = phone_number.slice(0, phone_number.length-4);
    let after = phone_number.slice(phone_number.length-4);
    let set = '';
    // 정규표현식 사용하는 방법
    set = before.replace(/\w/g, "*");
    return set + after;
}

/*
// 방법 1
function solution(phone_number) {
    var answer = "";
    let before = phone_number.slice(0, phone_number.length-4);
    let after = phone_number.slice(phone_number.length-4);
    let set = '';
    set = before.replace(before, "*");
    return set + after;
}

// 방법2
function solution(phone_number) {
    let answer = '';
    for(let i = 0; i < phone_number.length; i++) {
        if(i < phone_number.length - 4) {
            answer += '*';
        }
        else {
            answer += phone_number[i];
        }
    }
    return answer;
}
*/