// for 반복문 사용
function solution(phone_number) {
    let answer = '';

    for( let i = 0; i < phone_number.length; i++ ) {
        if( i < phone_number.length - 4 ) {
            answer = answer + '*' // answer += '*'
            
        } else {
            answer = answer + phone_number[i] // answer += phone_number[i]
        }
    }
    return answer;
}


//padStart, slice 사용
function solution(phone_number) {
    let answer = ""
    answer = answer.padStart( phone_number.length - 4, "*" )
    answer += phone_number.slice( phone_number.length - 4, phone_number.length );
        
    return answer
}