type User = {
  name: string;
  age: number;
  group: string;
};

const persons: User[] = [
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

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
}

console.log('Users:');
persons.forEach(logPerson);