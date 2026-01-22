function totalFruit(fruits: number[]): number {
    const fruitMap: { [key: number]: number } = {};
  let left = 0;
  let maxPickedTrees = 0; // this represents the result we want to return this!

  for (let right = 0; right < fruits.length; right++) {
    // 1. Update by adding current element to window
    const currentFruit = fruits[right];
    // Add current element to the window
    fruitMap[currentFruit] = (fruitMap[currentFruit] || 0) + 1;

    // 2. Shrink: Is window invalid? (more than 2 fruit types?)
    while(Object.keys(fruitMap).length > 2) {
      // remove fruits from the left side by shrinking the window from the left 
      // until we have no more than 2 types of fruit
      const leftFruit = fruits[left];
      fruitMap[leftFruit]--;

      if(fruitMap[leftFruit] === 0) {
        delete fruitMap[leftFruit];
      }

      left ++;
    }

    // 3. Calculate: Update countedFruit based on currentWindow
    const currentWindowSize = right - left + 1;
    maxPickedTrees = Math.max(maxPickedTrees, currentWindowSize);
  }

  return maxPickedTrees;
};