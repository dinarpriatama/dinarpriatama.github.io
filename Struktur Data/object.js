const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
  };

user.id = 25
delete user.email;

const { id, email} = user;
console.log(id, email);