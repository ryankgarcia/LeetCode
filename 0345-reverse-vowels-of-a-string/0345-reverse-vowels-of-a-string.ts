function reverseVowels(s: string): string {
const vowels = 'aeiouAEIOU';
  const chars = s.split(''); // convert to array for swapping
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // move left pointer until we find a vowel
    if(!vowels.includes(chars[left])) {
      left++;
      continue;
    }

    // move right pointer until a vowel is found
    if(!vowels.includes(chars[right])) {
      right--;
      continue;
    }

    // both pointers are on vowels - swap them
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }

  return chars.join('');
};