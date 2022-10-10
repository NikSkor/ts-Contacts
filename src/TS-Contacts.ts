interface User {
  type: 'user';
  name: string;
  age: number;
  group: string;
};

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    type: 'admin',
    name: 'Пётр Измайлов',
    age: 29,
    role: 'Администратор',
  },
  {
    type: 'user',
    name: 'Иван Петров',
    age: 27,
    group: 'SEO-специалист',
  },
  {
    type: 'user',
    name: 'Марат Aляуддинов',
    age: 20,
    group: 'Музыкант',
  },
  {
    type: 'user',
    name: 'Илай Венс',
    age: 47,
    group: 'Коллега по работе',
  },
  {
    type: 'user',
    name: 'Игнат Пришт',
    age: 37,
    group: 'Семья',
  },
  {
    type: 'user',
    name: 'Ульяна Романова',
    age: 41,
    group: 'Координатор',
  }
];

const isAdmin = (person: Person): person is Admin => {
  return person.type === 'admin';
}

const isUser = (person: Person): person is User => {
  return person.type === 'user';
}

const logPerson = (person: Person): void => {
  let information: string = '';
  if(isAdmin(person)) {
    information = person.role;
  } 
  if (isUser(person)) {
    information = person.group;
  }
  console.log(`${person.name}, ${person.age}, ${information}`);
}
console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);