function reverseString(str){
    let reverseStr = ''
    for (let i = str.length-1; i >= 0; i--){
        reverseStr += str[i];
    }
    return reverseStr;
}

console.log(reverseString('abc'))

function isVowel(letter) {
    const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯaeiouyAEIOUY';
    return vowels.includes(letter);
}


function deleteVowelLetters(str){
    let result = ''
    for (let i = 0; i<str.length; i++){
        if (!isVowel(str[i])){
            result += str[i];
        }
    }
    return result
}

console.log(deleteVowelLetters('aaaab'))