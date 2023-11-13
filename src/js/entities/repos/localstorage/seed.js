import { UserOnLocalStorage } from "./user.js"
import { userFactory } from "../../../factories/user.js"

function seed() {
  for(let i=0; i<20; i++) {
    const randomNum = Math.floor(Math.random() * 5162114);
    const jobs = [
      'Médico',
      'Personal Trainer',
      'Fisioterapeuta',
      'Nutricionista'
    ];
    const randomJob = Math.floor(Math.random() * 4);

    const name = `user${randomNum}`;
    const user = userFactory({
      name: name, 
      email: `${name}@email.com`, 
      password: '123456', 
      job: jobs[randomJob]
    });

    UserOnLocalStorage.create(user);
  }
}

seed();
