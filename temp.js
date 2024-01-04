const output = "what's your perfect date?";

console.log(
    output
    .split("")
    .map(parseInt)
    .filter(a => a)
    .reduce((a,b) => a+b)
    .toString()
    .split("")
    .reverse()
    .join("w4")
    );