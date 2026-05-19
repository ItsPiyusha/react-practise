export function square(n: number): number{
    return n*n;
}

export function cube(n: number){
    return n*n*n;
}

export function sumOfSquares(a: number, b: number){
    let square1 = square(a);
    let square2 = square(b);
    return square1 + square2;
}

export function sumOfSquaresWithcallback(
    a: number,
    b: number,
    fn: (n:number)=>number
): number{
    let square1 = fn(a);
    let square2 = fn(b);
    return square1 + square2;
}