var isPalindrome = function(s) {
    let clean = s.replace(/[^\w]/gi, '').toLowerCase();
    let [i, j] = [0, clean.length - 1]
    while(i <= j) {
        if(clean[i] !== clean[j]) return false;
        i++;
        j--;
    }
    return true;
};

isPalindrome("A man, a plan, a canal: Panama")