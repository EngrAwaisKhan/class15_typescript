let a: number = 1;

type Student = {
    name: string,
    age: number,
    courses: string[]
}

const std1: Student = {
    name: 'Ali',
    age: 32,
    courses: ['ML', 'AI', 'BC']
} 

// const arr: number[] = [true, 1, 'abc']

// const arr: [boolean, number, string] = [true, 1, 'abc'];
const arr: [boolean, number, ...string[]] = [true, 1, 'abc', 'ml', 'bc'];


// const avaliableCourses: readonly string[] = ['AI', 'BCC', 'ML'];
// avaliableCourses[2] = 'dfd';

enum PIAIC {
    CNC,
    IOT,
    BCC,
    AIC,
}


console.log(PIAIC.IOT);
