const compareArrays = (a1, a2) => {
  return a1.every((v, i) => v === a2[i])
}

var findAnagrams = function(s, p) {
  let pArray = new Array(26).fill(0);
  let sArray = new Array(26).fill(0);
  let solutions = [];
  
  for(let i = 0; i < p.length; i++) {
    pArray[p.charCodeAt(i) % 97]++;
  }
  
  for(let i = 0; i < s.length; i++) {
    sArray[s.charCodeAt(i) % 97]++;
    
    if(i > p.length - 1) {
      let index = s.charCodeAt(i - p.length) % 97
      sArray[index]--;
    }
    
    if(i >= p.length - 1) {
      
      if(compareArrays(sArray, pArray)){    
        solutions.push(i - p.length + 1)
      }
    }
  }
  
  return solutions;

};

findAnagrams("abab", "ab");