import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js"
import { User } from "../entities/user.js";
import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js"

class Cadastro {
  static validatePassword(password) {
    if(typeof password !== 'string' || password.length < 6) {
      alert('Senha precisa de no minímo 6 digitos!');
      throw new Error('Senha precisa de no minímo 6 digitos!')
    }
  }

  static validateEmail(email) {
    if(typeof email !== 'string' || email.length < 3) {
      alert('Email precisa ser válido!');
      throw new Error('Email precisa ser válido!')
    }
  }

  static validateName(name) {
    if(typeof name !== 'string' || name.length < 2) {
      alert('Nome precisa de no minímo 3 digitos!')
      throw new Error('Nome precisa de no minímo 3 digitos!')
    }
  }

  static validateBody(name, email, password) {
    Cadastro.validatePassword(password);
    Cadastro.validateEmail(email);
    Cadastro.validateName(name);
  }

  static watchForm() {
    const form = document.querySelector("#form-container form");
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputs = document.querySelectorAll("#form-container form label input");

      const [
        name,
        email,
        password
      ] = [ 
        inputs[0].value, 
        inputs[1].value,
        inputs[2].value
      ];
      this.validateBody(name, email, password);

      const user = new User(undefined, name, email, password);
      UserOnLocalStorage.create(user);
      TokenOnSessionStorage.create(user);

      window.location.href = '/src/configs';
    })
  }
} 

Cadastro.watchForm();
