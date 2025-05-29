function scoreOfString(s: string): number {
    let sum = 0
    for(let i = 0; i < s.length - 1; i++){
       const diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
       sum += diff
    }
       return sum;
};