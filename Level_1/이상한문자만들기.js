function solution(s) {
    let answer = '';
    let arr = s.split(" "); // ['try', 'hello', 'world']
    for(let i = 0; i < arr.length; i++) { // try
        for(let j = 0; j < arr[i].length; j++) { // t (문자 하나씩 가져옴)
            if(j % 2 === 0) {
                answer += arr[i][j].toUpperCase();
            }
            else {
                answer += arr[i][j].toLowerCase();
            }
        }
        answer += " "; // 한 단어가 끝날 때마다(try, hello, world) 공백 추가
    }
    // 마지막에도 공백이 추가가 되고있다 -> answer = "TrY HeLlO WoRlD " 
    // return answer.trim(); // trim() = 문자열 양 끝 공백을 제거해준다. --> 이러면 절반만 통과됨
    
    // 마지막 공백을 제거해주어야 하므로 slice를 이용해 처음부터 answer.length-1 이전까지(T~D까지) 출력해준다.
    return answer.slice(0, answer.length-1); 
}