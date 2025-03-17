/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    let answer = true;
    const stack = [];
    
    function checkStack(stackLetter, pickUpLetter) {
        let result = false;
        
        switch (stackLetter) {
            case "(":
                if (pickUpLetter === ")") {
                    result = true;
                }
                break;
            case "{":
                if (pickUpLetter === "}") {
                    result = true;
                }
                break;
            case "[":
                if (pickUpLetter === "]") {
                    result = true;
                }
                break;
            default:
                break;
        }
        
        return result;
    }
    
    for (let i = 0; i < s.length; i++) {
        const pickUpLetter = s[i];  
        const lastLetter = stack[stack.length - 1];
        
        if (stack.length !== 0 && checkStack(lastLetter, pickUpLetter)) {
            stack.pop();
            
            continue;
        } 
            
        stack.push(pickUpLetter);
    }
    
    if (stack.length !== 0) {
        answer = false;
    }
    
    return answer;
};