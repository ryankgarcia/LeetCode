function lengthOfLongestSubstring(s: string): number {
    const charIdxMap: { [key: string]: number } = {};  // create a hash map to store key value pairs to remember last index where we saw each character
  let l = 0;  // represents left pointer and marks the current position of our window
  let maxLength = 0;  // tracks the longest valid substring we've found

  for (let r = 0; r < s.length; r++) {  // right pointer drives the loop, expanding the window
    const currentChar = s[r];  // the character we're currently trying to add to our window

    // condition detects duplicates: have we seen this character in our current window?
    if (currentChar in charIdxMap && charIdxMap[currentChar] >= l) { 
      // yes, move left pointer past the duplicate to maintain "no repeating characters"
      l = charIdxMap[currentChar] + 1; 
    }

    charIdxMap[currentChar] = r;  // always update the hash map with the current character's latest position

    // calculate the current window size and update max if this window is longer
    const currentLength = r - l + 1;  // window length = right - left + 1
    maxLength = Math.max(maxLength, currentLength);  
  }
  return maxLength; // returns the longest substring length found
};