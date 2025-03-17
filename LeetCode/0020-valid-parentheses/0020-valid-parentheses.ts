function isValid(s: string): boolean {
    const stack: string[] = [];

    const dictionary = new Map();
    dictionary.set(')', '(');
    dictionary.set(']', '[');
    dictionary.set('}', '{');

    for (const letter of s) {
        const LENGTH = stack.length;

        if (LENGTH === 0) {
        stack.push(letter);

        continue;
        }

        if (dictionary.get(letter) === stack[LENGTH - 1]) {
        stack.pop();
        } else {
        stack.push(letter);
        }
    }

    if (stack.length === 0) {
        return true;
    }

    return false;
};
