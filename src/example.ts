import { Database } from './index';
import path from 'path';

interface User {
  name: string;
  email: string;
}

const db = new Database(path.join(__dirname, '..'));
const users = db.get<User>('users');
users.setUniqueProperty('email');

try {
  users.insert({
    name: 'Dannel Bakesef',
    email: 'dbakesef6@japanpost.jp',
  });
} catch (err) {
  console.error(err.message);
}

try {
  users.insert({
    name: 'Hartley Neesam',
    email: 'hneesami@smh.com.au',
  });
} catch (err) {
  console.error(err.message);
}

try {
  users.insert({
    name: 'Collie Lechelle',
    email: 'clechellen@storify.com',
  });
} catch (err) {
  console.error(err.message);
}

try {
  users.updateOne('vk5wwbp-40', { type: '$set', property: 'email', value: 'clechellen@storify.com' });
} catch (err) {
  console.error(err.message);
}

try {
  const deleted = users.removeOne('qgbdfhhbhc');
  console.log(deleted);
} catch (err) {
  console.error(err.message);
}

console.log(users.findAll());

