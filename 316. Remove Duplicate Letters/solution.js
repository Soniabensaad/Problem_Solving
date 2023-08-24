/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    var stack = [];
    var lastSeen = new Map();

    // Record the last occurrence index of each character
    for (let i = 0; i < s.length; i++) {
        lastSeen.set(s[i], i);
    }

    for (let i = 0; i < s.length; i++) {
        if (!stack.includes(s[i])) {
            while (
                stack.length > 0 &&
                s[i] < stack[stack.length - 1] &&
                lastSeen.get(stack[stack.length - 1]) > i
            ) {
                stack.pop();
            }
            stack.push(s[i]);
        }
    }

    return stack.join("");
};





