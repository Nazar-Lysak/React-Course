import User from '../components/User/User';
import './App.css';

function App() {
  const users = [
    {
      id: 1,
      first_name: 'Максим',
      second_name: 'Петров',
      sex: 'male',
      phone: '+380981234567',
      email: 'maxim.petrov@example.com',
    },
    {
      id: 2,
      first_name: 'Олена',
      second_name: 'Сидоренко',
      sex: 'female',
      phone: '+380981234568',
      email: 'olena.sydorenko@example.com',
    },
    {
      id: 3,
      first_name: 'Іван',
      second_name: 'Семенчук',
      sex: 'male',
      phone: '+380981234569',
      email: 'ivan.semenchuk@example.com',
    },
    {
      id: 4,
      first_name: 'Марія',
      second_name: 'Ковальчук',
      sex: 'female',
      phone: '+380981234570',
      email: 'maria.kovalchuk@example.com',
    },
    {
      id: 5,
      first_name: 'Андрій',
      second_name: 'Шевченко',
      sex: 'male',
      phone: '+380981234571',
      email: 'andriy.shevchenko@example.com',
    },
    {
      id: 6,
      first_name: 'Оксана',
      second_name: 'Козак',
      sex: 'female',
      phone: '+380981234572',
      email: 'oksana.kozak@example.com',
    },
    {
      id: 7,
      first_name: 'Віктор',
      second_name: 'Кузьменко',
      sex: 'male',
      phone: '+380981234573',
      email: 'viktor.kuzmenko@example.com',
    },
    {
      id: 8,
      first_name: 'Наталя',
      second_name: 'Мельник',
      sex: 'female',
      phone: '+380981234574',
      email: 'natalia.melnik@example.com',
    },
    {
      id: 9,
      first_name: 'Андрій',
      second_name: 'Богдан',
      sex: 'male',
      phone: '+380981234575',
      email: 'andriy.bogdan@example.com',
    },
    {
      id: 10,
      first_name: 'Юлія',
      second_name: 'Сіренко',
      sex: 'female',
      phone: '+380981234576',
      email: 'yulia.sirenko@example.com',
    },
  ];

  const userList = users.map((el) => <User key={el.id} userData={el} />);

  return (
    <div className="App">
      <ul>{userList}</ul>
    </div>
  );
}

export default App;
