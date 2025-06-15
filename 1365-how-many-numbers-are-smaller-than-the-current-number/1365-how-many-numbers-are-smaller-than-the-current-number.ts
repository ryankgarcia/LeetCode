function smallerNumbersThanCurrent(nums: number[]): number[] {
    const result: number[] = [];
    for(let i = 0; i < nums.length; i++){
       let count: number = 0;
       for(let j = 0; j < nums.length; j++){
        if(i !== j && nums[j] < nums[i]){
            count++
        }
       }
       result.push(count);
    }
    return result;
};