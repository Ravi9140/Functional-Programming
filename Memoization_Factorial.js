let cache=[1]; //TODO cache it (memoize it for later use)

const fac2 = (n) => {
    let fac=1;
    if (n <= 0) 
        return 1;
    else 
    {
        if(cache[n])
        {
            return cache[n];
        }
        else
        {
            iter++;
            fac=n*fac2(n - 1);
            cache[n]=fac;
        }
        return fac;
    }
}; // no var mutation at all…

let iter=0;
console.log(`Factorial of 5 = ${fac2(5)}`);   //120
console.log(`Cache = [${cache}]`);     //[ 1, 1, 2, 6, 24, 120 ]
console.log(`Iteration = ${iter}\n`);  // Iteration = 5


iter=0;
console.log(`Factorial of 8 = ${fac2(8)}`);   //40320
console.log(`Cache = [${cache}]`);     //[ 1,  1, 2, 6, 24, 120,720, 5040, 40320]
console.log(`Iteration = ${iter} \n`);  // Iteration = 3 (Only for 8,7,6)


iter=0;
console.log(`Factorial of 6 = ${fac2(6)}`);  //720
console.log(`Iteration = ${iter}\n`); // Iteration = 0    (Already in the Cache)
