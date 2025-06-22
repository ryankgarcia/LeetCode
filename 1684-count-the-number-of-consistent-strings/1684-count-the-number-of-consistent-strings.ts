function countConsistentStrings(allowed: string, words: string[]): number {
    let count: number = 0;
    const allowedSet = new Set(allowed);

    for(const word of words){
        let isConsistent = true;

        for(const char of word){
            if(!allowedSet.has(char)){
                isConsistent = false;
                break;
            }
        }
        if(isConsistent) count++
    }
    return count;
}