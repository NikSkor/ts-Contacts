"use strict";
;
const persons = [
    {
        name: 'Пётр Измайлов',
        age: 29,
        role: 'Администратор',
    },
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Илай Венс',
        age: 47,
        group: 'Коллега по работе',
    },
    {
        name: 'Игнат Пришт',
        age: 37,
        group: 'Семья',
    },
    {
        name: 'Ульяна Романова',
        age: 41,
        group: 'Координатор',
    }
];
const logPerson = (person) => {
    let information;
    if ('role' in person) {
        information = person.role;
    }
    else {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};
console.log('Users:');
persons.forEach(logPerson);
