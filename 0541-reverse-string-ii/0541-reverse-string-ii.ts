function reverseStr(s: string, k: number): string {
    let result = '';
    for(let i = 0; i < s.length; i += 2 * k) {
        const firstK = s
        .slice(i, i + k);
        .split('');
        .reverse();
        .join('');
        const rest = s.slice(i + k, i + 2 *k);
        result += firstK + rest;
    }
    return result;
};