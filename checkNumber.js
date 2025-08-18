let Num = 10;

let Result =
    typeof Num !== "number" || isNaN(Num)
    ? "Not a Number"
    : Num % 2 === 0
    ? "Even"
    : "Odd";

console.log(Result);
