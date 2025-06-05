function findWordsContaining(words: string[], x: string): number[] {
    let count: number[] = [];
    for(let i = 0; i < words.length; i++){
        if(words[i].includes(x)){
            count.push(i);
        }
    } 
    return count;
};