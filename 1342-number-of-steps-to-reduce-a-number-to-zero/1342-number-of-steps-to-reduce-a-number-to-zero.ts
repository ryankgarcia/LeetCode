function numberOfSteps(num: number): number {
    let steps: number = 0;
    while(num > 0){
        if(num % 2 === 0){
            num = num / 2;
        } else if (num % 2 !== 0){
            num = num - 1;
        }
        steps++;
    }
    return steps;
};