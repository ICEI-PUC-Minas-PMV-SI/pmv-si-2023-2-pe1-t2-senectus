import { UserOnLocalStorage } from "./user.js"
import { userFactory } from "../../../factories/user.js"
import { IBGEGateway } from "../../../gateways/APIs/ibge.js";

const data = [
  "Mariana Lima",
  "Alice Santos",
"Pedro Oliveira",
"Laura Pereira",
"Rafael Souza",
"Mariana Costa",
"Gabriel Lima",
"Beatriz Almeida",
"Lucas Rocha",
"Isabela Silva",
"João Oliveira",
"Sofia Santos",
"Matheus Martins",
"Ana Paula Pereira",
"Leonardo Alves",
"Julia Fernandes",
"Gustavo Costa",
"Larissa Rodrigues",
"Thiago Mendes",
"Camila Nunes",
"Felipe Silva",
"Bruna Oliveira",
"André Santos",
"Carolina Lima",
"Daniel Castro",
"Fernanda Rocha",
"Eduardo Almeida",
"Gabriela Santos",
"Bruno Costa",
"Giovanna Pereira",
"Guilherme Oliveira",
"Isadora Lima",
"Victor Fernandes",
"Natália Alves",
"Henrique Rocha",
"Letícia Silva",
"Lucas Martins",
"Rodrigo Souza",
"Amanda Pereira",
"Lucas Oliveira",
"Larissa Almeida",
"Rafaela Costa",
"Matheus Santos",
"Juliana Lima",
"Gustavo Silva",
"Ana Carolina Rocha",
"Daniel Pereira",
"Amanda Costa",
"Lucas Fernandes",
"Luana Oliveira",

]
function seed(state,abbr,city) {
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
      job: jobs[randomJob],
      state,
      state_abbr:abbr,
      city
    });

    UserOnLocalStorage.create(user);
  }
}
IBGEGateway.getStates().then(async(data) => {
  const randomIndexState = Math.floor(Math.random() * 27);

  const cities = await IBGEGateway.getCities(data[randomINdexState].abbr);
  const randomIndexCities = Math.fllor(MAth.random() * cities.lenght -1);
  seed(
    data[randomIndexState].state,
    data[randomIndexState].abbr,
    cities[randomIndexCities].city);
})
.catch((err)) => console.error(err))

