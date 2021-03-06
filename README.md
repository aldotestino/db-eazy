# [db-eazy](https://db-eazy.vercel.app/) by aldotestino

## A simple JSON based local database

### Version: 1.0.4

### Languages: 
* Typescript,
* Node

### Dependencies: 
* nanoid

### Installation

```sh
npm install db-eazy
```

### Quick Start

```typescript
import { Database } from 'db-eazy';
import path from 'path';

// path to db folder (the db folder will be automatically created)
const db = new Database(path.join(__dirname, '..')); 

interface User = {
  name: string;
  email: string;
}

const users = db.get<User>('users');
```

### Insert

```typescript
// returns the object that has been inserted
users.insert({
    name: 'Dannel Bakesef',
    email: 'dbakesef6@japanpost.jp',
  }); 
```

### Query

```typescript
// returns an array of users
users.findAll(); 

// returns the user with that specific id
users.findOne('id_of_the_user'); 

// returns an array of users that matches the query parameter
users.find({property: 'name', value: 'John'}); 
```

### Update

```typescript
// update the specific user, setting the passed property 
// with the new value and returns the updated user
users.updateOne('id_of_the_user', {type: '$set', property: 'email', value: 'new_email'}); 

// if the property is of type number increments 
// it by one and returns the updated user
users.updateOne('id_of_the_user', {type: '$inc', property: 'age'});
```

### Remove

```typescript
// removes the specific user and returns it
users.remove('id_of_the_user'); 
```

### Unique property

```typescript
// set the email as an unique property
// (checks for updates too)
users.setUniqueProperty('email'); 
```

[Full example](src/example.ts)

[MIT license](LICENSE)
