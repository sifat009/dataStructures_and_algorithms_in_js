// KMP substring matching algorithm

let inputString = 'this is KMP pattern matching algorithm';
let pattern = 'is';
let ans = [];
let [i, j, patternLength, strlen] = [1, 0, pattern.length, inputString.length];
let lps = new Array(patternLength).fill(0);  // lowest prefix which is also a suffix 
while(i <= patternLength) {
    if(pattern[i] === pattern[j]) {
        lps[i] = j + 1;
        i++;
        j++;
    } else {
        if((j -1) < 0 ) {
            j = 0;
            i++;
        } else {
            j = lps[j - 1];
        }
    }    
}

[i, j] = [0, 0];

while(i < strlen) {
    if(inputString[i] === pattern[j]) {
        i++;
        j++;
        if(j === patternLength) {
            ans.push(i - patternLength);
            j = lps[j - 1];
        }
    } else {
        if(j-1 < 0) {
            j = 0;
            i++;
        } else {
            j = lps[j-1];
        }
    }
}

ans = ans.length ? ans : 'not found'; 
console.log(ans);