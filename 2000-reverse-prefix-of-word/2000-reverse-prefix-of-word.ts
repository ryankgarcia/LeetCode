function reversePrefix(word: string, ch: string): string {
    if(!word.includes(ch)) return word; 

    let revWord: string = '';

    for(let i = 0; i < word.length; i++){
            if (word[i] === ch) {
            let prefix = word.slice(0, i + 1);
            let suffix = word.slice(i + 1);

            for(let index = prefix.length - 1; index >= 0; index--){
                revWord += prefix[index]
            }

            revWord += suffix;
            return revWord
        }
    }
    return word;
};