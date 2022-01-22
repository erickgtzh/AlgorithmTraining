var lengthOfLongestSubstring = function(s) {
    let sol = "";
    let sols = [];
  
    if(s.length === 0) return null;
    for(let i = 0; i < s.length; i++){
      if(sol.includes(s[i])){
        let pos = sol.indexOf(s[i]);
        sol = sol.substring(pos + 1, sol.length)
      }
      sol = sol + s[i];
      sols.push(sol.length)
    }
    return Math.max(...sols);
};

lengthOfLongestSubstring("dvdf")
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("pwwkew")