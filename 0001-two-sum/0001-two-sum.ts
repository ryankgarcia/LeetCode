function twoSum(nums: number[], target: number): number[] {
    // Solve with a hash map (key:value pair, check if there are two key:value pairs that sum to target, then return the indicies)
    const prevMap: {[key: number]: number} = {};

    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(diff in prevMap) {
            return [prevMap[diff], i];
        }
        prevMap[nums[i]] = i;
    }
    return [];
};