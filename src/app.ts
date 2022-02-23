interface AddFn {
    (a: number, b: number): number
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}
interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greet extends Named {
    greet(phrase: string): void;
}

class Person implements Greet {
    name?: string;
    age = 30;

    constructor(name?: string) {
        if (name) {
            this.name = name;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name)
        }
        else { 
           console.log('Hi!')
        }
    }
}

let user1: Greet
user1 = new Person()

user1.greet('Hello')

console.log(user1)