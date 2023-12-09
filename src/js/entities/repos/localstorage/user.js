import { UserMapper } from '../../mappers/user.js'
import { Obfuscator } from "../../../utils/obfuscator.js"

export class UserOnLocalStorage {
  static getLength() {
    return localStorage.length;
  }

  static create(user) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }

    const searchedUser = users.find((item) => {
      const parsedItem = JSON.parse(Obfuscator.translate(item))

      return (
        parsedItem.id === user.id ||
        parsedItem.name === user.name ||
        parsedItem.email === user.email
      )
    });

    if(searchedUser) {
      alert('Usuário já existe!');
      throw new Error('Usuário já existe!')
    }

    const data = Obfuscator.obfuscate(
      JSON.stringify(UserMapper.toObject(user))
    );
    users.push(data);

    localStorage.setItem('senectus', JSON.stringify({
      users
    }));
  }

  static findGroupWithJob(job) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }

    const searchedUsers = [];
    for(let i=0; i<users.length; i++) {
      const parsedItem = JSON.parse(Obfuscator.translate(users[i]))

      if(parsedItem.job === job)
        searchedUsers.push(UserMapper.toClass(parsedItem))
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

  static getGroupWithRegExp(input, job = undefined) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }
    const maximumItems = users.length < 12 
      ? users.length 
      : 12;

    const searchedUsers = [];
    for(let i=0; i<users.length; i++) {
      if(searchedUsers.length > maximumItems)
        return searchedUsers;

      const item = Obfuscator.translate(users[i])

      const regex = new RegExp(input, "gmi");
      if(
        regex.exec(item) && 
        ((job && job === JSON.parse(item).job) || !job)
      ) {
        const user = UserMapper.toClass(
            JSON.parse(item)
        )
        searchedUsers.push(user);
      }
    }

    return searchedUsers;
  }

  static getGroupOf(number) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }
    const maximumItems = number > users.length
      ? users.length
      : number; 

    const searchedUsers = []
    for(let i=0; i<maximumItems; i++) {
      const item = UserMapper.toClass(
        JSON.parse(Obfuscator.translate(users[i]))
      )

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
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }

    let searchedUser = users.find((item) => {
      const parsedItem = JSON.parse(Obfuscator.translate(item))
      return parsedItem.id === id
    })

    searchedUser = searchedUser ? UserMapper.toClass(
      JSON.parse(Obfuscator.translate(searchedUser))
    ) : undefined;

    return searchedUser; 
  }

  static findByName(name) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }

    let searchedUser = users.find((item) => {
      const parsedItem = JSON.parse(Obfuscator.translate(item))
      return parsedItem.name === name
    })

    searchedUser = searchedUser ? UserMapper.toClass(
      JSON.parse(Obfuscator.translate(searchedUser))
    ) : undefined;

    return searchedUser; 
  }

  static findByEmail(email) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }

    let searchedUser = users.find((item) => {
      const parsedItem = JSON.parse(Obfuscator.translate(item))
      return parsedItem.email === email
    })

    searchedUser = searchedUser ? UserMapper.toClass(
      JSON.parse(Obfuscator.translate(searchedUser))
    ) : undefined;

    return searchedUser; 
  }

  static delete(id) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }

    const searchedUserIndex = users.findIndex((item) => {
      const parsedItem = JSON.parse(Obfuscator.translate(item))
      return parsedItem.id === id
    })

    if(!searchedUserIndex < 0){
      alert('Usuário não existe!');
      throw new Error('Usuário não existe!')
    }

    users.splice(searchedUserIndex, 1);
    localStorage.setItem('senectus', JSON.stringify({
      users
    }));
  }

  static update(user) {
    const { users } = localStorage.getItem('senectus')
      ? JSON.parse(localStorage.getItem('senectus'))
      : { users: [] }

    const searchedUserIndex = users.findIndex((item) => {
      const parsedItem = JSON.parse(Obfuscator.translate(item))
      return parsedItem.id === user.id
    })

    if(searchedUserIndex < 0){
      alert('Usuário não existe!');
      throw new Error('Usuário não existe!')
    }

    const data = Obfuscator.obfuscate(
      JSON.stringify(UserMapper.toObject(user))
    );

    users[searchedUserIndex] = data;
    localStorage.setItem('senectus', JSON.stringify({
      users
    }));
  }
}
