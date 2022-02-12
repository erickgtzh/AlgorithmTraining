/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let lo = 0;
    let max = -1;
    let ht = new Map();
    
    for(let i = 0; i < fruits.length; i++) {
        const curr = fruits[i];
        
        if(ht.has(curr)) ht.set(curr, ht.get(curr) + 1)
        else ht.set(curr, 1)
        
        while(ht.size > 2) {
            const left = fruits[lo];
            if(ht.has(left)) {
                ht.set(left, ht.get(left) - 1);
                if(ht.get(left) <= 0)  ht.delete(left);    
            }
            
            lo++;
        }
        max = Math.max(max, (i - lo) + 1)
    }
    return max;
};
