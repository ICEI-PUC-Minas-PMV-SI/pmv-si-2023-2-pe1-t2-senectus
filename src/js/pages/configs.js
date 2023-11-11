import { UserMapper } from "../entities/mappers/user.js";
import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js";
import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js";
import { User } from "../entities/user.js";
import { LoginButtonHandler } from "../utils/loginButton.js";

class Configs {
  static fillFields(user) {
    const inputs = document.querySelectorAll("main form fieldset input");
    const job = document.querySelector("main form fieldset select");
    
    const [
      name,
      password,
      location,
      value 
    ] = [
      inputs[0],
      inputs[1],
      inputs[2],
      inputs[3]
    ]
    const userInClass = UserMapper.toClass(user);

    name.value = userInClass.name;
    password.value = userInClass.password;
    job.value = userInClass.job ?? null;
    location.value = userInClass.location ?? null;
    value.value = userInClass.value ?? null;
  }

  static deleteAccount(user) {
    TokenOnSessionStorage.delete();
    UserOnLocalStorage.delete(user.id);
      
    window.location.href = "/src/home";
  }

  static watchDeleteAccountButton(user) {
    const button = document.getElementById("delete-account");

    button.addEventListener("click", () => {
      TokenOnSessionStorage.delete();
      UserOnLocalStorage.delete(user.id);

      window.location.href = "/src/home";
    })
  }

  static watchForm(oldUser) {
    const form = document.querySelector("main form");

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputs = document.querySelectorAll("main form fieldset input");
      const [
        name,
        password,
        location,
        price 
      ] = [
        inputs[0],
        inputs[1],
        inputs[2],
        inputs[3]
      ];

      const job = document.querySelector("main form fieldset select");

      const user = new User(
        oldUser.id,
        name.value,
        oldUser.email,
        password.value,
        job.value ?? null,
        location.value ?? null,
        price.value ?? null
      );

      TokenOnSessionStorage.delete();

      UserOnLocalStorage.update(user);
      TokenOnSessionStorage.create(user);
    })
  }

  static checkAuth() {
    const user = TokenOnSessionStorage.get();
    if(!user) {
      alert("Você não tem permissão para acessar esta página!");
      window.location.href = "login";
      throw new Error("Você não tem permissão para acessar esta página!");
    }

    return user;
  }
} 

LoginButtonHandler.trySwitchToConfigButton();

const user = Configs.checkAuth();

alert("Sua conta foi criada com sucesso. Agora aguarde, pois distribuiremos seu contato para nossos clientes e logo mais lhe enviamos um email sobre o resultado, enquanto isso, você pode editar suas credenciais aqui.");

Configs.fillFields(user);
Configs.watchForm(user);
Configs.watchDeleteAccountButton(user);
