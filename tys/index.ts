const value = "sad";
let value2 = 21232132; //동적타이핑

let num : number = 123; 
let num1 : number = 0.123;
let num2 : number = -123;
let num3 : number = NaN; // 숫자아닌 숫자
let num4 : number = Infinity; // 무한''

let str1 : string = "gkgkgk";
let str2 : string = 'gkgkgk';
let str3 : string = `gkgkgk`;

let bool1 : boolean = true;
let bool2 : boolean = false;

let arr1 : number[] = [1, 2, 3, 4, 5];
let arr2 : number[][] = [[123],[123,123]];
let arr3: Array<number> = [1, 2, 3];

let obj: {name : string, age: number} = {name : "gkgk", age: 1};

interface userType{
    name: string;
    gender: boolean;
    age?: number;
    text?: string[]; // ? 붙이면 애가 없어도 작동
};

let obj2 : userType = {name: "sad", gender: true};

let an : any = 123123; // 아무거나 가능 앨 쓰면 타입스크립트를 쓰는 이유가 없음 -> 잘 안씀

function func1(value1:number, value2:number): string  {
    return (value1 + value2).toString();
};

const func2 = (value1:number, value2:number):number => {
    return value1 + value2;
};

// const numasd; 애 하면 undefind
