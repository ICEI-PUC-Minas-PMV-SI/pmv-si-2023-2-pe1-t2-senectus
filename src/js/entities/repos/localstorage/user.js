import { UserMapper } from '../../mappers/user.js'

export class UserOnLocalStorage {
  static getLength() {
    return localStorage.length;
  }

  static create(user) {
    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? JSON.parse(localStorage.getItem(key)) 
        : undefined;

      if(
        item.id === user.id ||
        item.name === user.name ||
        item.email === user.email
      ) {
        alert('Usuário já existe!');
        throw new Error('Usuário já existe!')
      }
    }

    const data = JSON.stringify(UserMapper.toObject(user));
    localStorage.setItem(user.email, data);
  }

  static findGroupWithJob(job) {
    let searchedUsers = [];

    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? UserMapper.toClass(JSON.parse(localStorage.getItem(key)))
        : undefined;

      if(item.job === job)
        searchedUsers.push(item);
    }

    searchedUsers.sort((a, b) => {
      if(a.createdAt < b.createdAt)
        return 1;
      else if(a.createdAt > b.createdAt)
        return -1;
      else return 0;
    });

    return searchedUsers;
  }

  static getGroupWithRegExp(input) {
    let searchedUsers = [];
    const maximumItems = 12;

    for(let i=0; i<maximumItems; i++) {
      const key = localStorage.key(i)
      const item = key 
        ? localStorage.getItem(key)
        : undefined;

      const regex = new RegExp(input, "gmi");
      if(regex.exec(item)) {
        const user = UserMapper.toClass(JSON.parse(item))
        searchedUsers.push(user);
      }
    }

    return searchedUsers;
  }

  static getGroupOf(number) {
    let searchedUsers = [];
    const maximumItems = number > localStorage.length
      ? localStorage.length
      : number; 

    for(let i=0; i<maximumItems; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? UserMapper.toClass(JSON.parse(localStorage.getItem(key)))
        : undefined;

      if(item)
        searchedUsers.push(item);
    }

    searchedUsers.sort((a, b) => {
      if(a.createdAt < b.createdAt)
        return 1;
      else if(a.createdAt > b.createdAt)
        return -1;
      else return 0;
    });

    return searchedUsers;
  }

  static findById(id) {
    let searchedUser = null;
    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? UserMapper.toClass(JSON.parse(localStorage.getItem(key)))
        : undefined;

      if(item.id === id)
        return searchedUser = item;
    }

    return searchedUser; 
  }

  static findByName(name) {
    let searchedUser = null;
    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? UserMapper.toClass(JSON.parse(localStorage.getItem(key)))
        : undefined;

      if(item.name === name)
        return searchedUser = item;
    }
  }

  static findByEmail(email) {
    let searchedUser = null;
    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? UserMapper.toClass(JSON.parse(localStorage.getItem(key)))
        : undefined;

      if(item.email === email)
        return searchedUser = item;
    }

    return searchedUser;
  }

  static delete(id) {
    let searchedUser = null
    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? JSON.parse(localStorage.getItem(key)) 
        : undefined;

      if(item.id === id)
        searchedUser = item;  
    }

    if(searchedUser.id !== id){
      alert('Usuário não existe!');
      throw new Error('Usuário não existe!')
    }

    localStorage.removeItem(searchedUser.email);
  }

  static update(user) {
    let searchedUser = null;
    for(let i=0; i<localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = key 
        ? JSON.parse(localStorage.getItem(key)) 
        : undefined;

      if(item.id === user.id)
        searchedUser = item;
    }

    if(!searchedUser){
      alert('Usuário não existe!');
      throw new Error('Usuário não existe!')
    }

    const data = JSON.stringify(UserMapper.toObject(user));
    localStorage.setItem(searchedUser.email, data);
  }
}
