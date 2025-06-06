function toLowerCase(s: string): string {
    let newStr: string = '';
    for(let i = 0; i < s.length; i++){
       newStr.push(s[i].toLocaleLowerCase());
    }
    return newStr;
};