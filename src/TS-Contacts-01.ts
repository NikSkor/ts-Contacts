type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
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

const logPerson = (user: Person): void => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);