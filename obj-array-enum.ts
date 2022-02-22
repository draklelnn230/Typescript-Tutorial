// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: "John",
//   age: 30,
//   hobbies: ['Sport', 'Cooking'],
//   role: [2, 'author']
// };

enum Role {
    ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'
}

const person = {
  name: "John",
  age: 30,
  hobbies: ['Sport', 'Cooking'],
  role: Role.ADMIN 
};


let favoriteActivities: any[];
favoriteActivities = ['Sports']

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR) {
    console.log('is author')
}