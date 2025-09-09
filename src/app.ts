const createNumber = (value: number): number => {
    return Math.floor(Math.random()* value)+1;
};

const setNumberList = (value: number, v:number, createNumber: (v:number) => number): number[] => {
    const t: number[] = [];
    for (let i = 0; i < value; i++) {
        t.push(createNumber(v));
    }
    return t;
};

const setNumberList2 = (count: number, v:number, createNumber: (v:number) => number): number[] => {
    return Array.from({length: count}, item => createNumber(v) );
}

const numbers = setNumberList2(10, 5, createNumber);
console.log(numbers);

type Stat = Record<number, number>;
const statistic: Stat = {};
for (let v of numbers) {
    /* if (v in statistic) {
        statistic[v]! += 1;
    } else {
        statistic[v] = 1;
    } */
    // nullish coalescing operátor - létezik a kulcs?
    statistic[v] = (statistic[v] ?? 0) + 1;
}
console.log(statistic);



