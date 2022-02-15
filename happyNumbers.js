/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n;
    let fast = n;
    
    const getSquareNumber = (n) => {
        let squared = 0;
        let limit = n;
        while(limit > 0) {
            let rightDigit = limit % 10;
            limit = Math.floor(limit/10);
            squared += Math.pow(rightDigit, 2)
        }
        return squared;
    }
    
    while(true) {
        slow = getSquareNumber(slow);
        fast = getSquareNumber(getSquareNumber(fast));
      	if(slow === fast) break;
    }  
  	
  	return slow === 1;
};
