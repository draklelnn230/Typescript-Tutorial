


// Generic Function & Constraint
function merge<T extends object, U extends object>(objA: T, objB: U){
    return Object.assign(objA, objB)
}

const mergeObj = merge({name: 'Max', hobbies: ['Sports']}, { age: 30 })

interface Lengthy {
    length: number;
}


// Another Generic Function
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';

    if (element.length === 1) {
        descriptionText = 'Got 1 Element'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']))


// The keyof Constraint

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key]
}

console.log(extractAndConvert({name: 'Max'}, 'name'));


// Generic Classes

class DataStorage<T> {
    private data: T[] = [];
    
    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();

textStorage.addItem('Max')
textStorage.addItem('John')
textStorage.addItem('Levi')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>();

const objStorage = new DataStorage<object>();
objStorage.addItem({name: 'Max'});
objStorage.addItem({name: 'John'});

console.log(objStorage)
//....
objStorage.removeItem({name: 'Max'})
console.log(objStorage.getItems())


