// Longest Common Subsequence


let [string1, string2, ans, matchedString] = ['how', 'cow', 0, ''];
let dp = new Array(string1.length).fill(null).map(item => new Array(string2.length).fill(null));
let visited = new Array(string1.length).fill(0).map(item => new Array(string2.length).fill(0));
let lcs = (i, j) => {
    if(string1[i] == null || string2[j] == null )
        return 0;
    if(visited[i][j] == 1) return dp[i][j];

    if(string1[i] == string2[j])
        ans = 1+ lcs(i+1, j+1);
    else 
        ans = Math.max(lcs(i+1, j), lcs(i, j+1));
    
    visited[i][j] = 1;
    dp[i][j] = ans;

    return dp[i][j];
}
let printLCS = (i, j) => {
    if(string1[i] == null || string2[j] == null) {
        console.log(matchedString);
        return;
    }

    if(string1[i] == string2[j]) {
        matchedString += string1[i];
        printLCS(i+1, j+1);
    } else {
        if(dp[i+1][j] > dp[i][j+1])
            printLCS(i+1, j);
        else    
            printLCS(i, j+1);
    }
}


console.log(lcs(0,0))
printLCS(0,0)



