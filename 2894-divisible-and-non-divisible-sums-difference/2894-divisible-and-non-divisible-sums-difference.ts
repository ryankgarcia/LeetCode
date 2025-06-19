function differenceOfSums(n: number, m: number): number {
    const num1: number[] = [];
    const num2: number[] = [];

    for(let i = 1; i <= n; i++){
        if(i % m !== 0){
            num1.push(i);
        } else {
            num2.push(i);
        }
    }
    const sum = (arr: number[]) => arr.reduce(( a, b) => a + b, 0);

    return sum(num1) - sum(num2);
};
