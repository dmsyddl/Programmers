function solution(s, n) {
    let answer = '';
    let abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += ' ';
        }
        else {
            answer += abc[abc.indexOf(s[i]) + n];
        }
    }
    return answer;
}