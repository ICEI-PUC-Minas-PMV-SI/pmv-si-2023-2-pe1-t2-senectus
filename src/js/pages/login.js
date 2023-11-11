import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js"
import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js"

class Login {
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

  static validateBody(email, password) {
    Login.validatePassword(password);
    Login.validateEmail(email);
  }
  
  static watchForm() {
    const form = document.querySelector("#form-container form");
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const inputs = document.querySelectorAll("#form-container form label input");

      const [
        email,
        password
      ] = [ 
        inputs[0].value, 
        inputs[1].value,
      ];
      this.validateBody(email, password);

      const user = UserOnLocalStorage.findByEmail(email);

      if(!user || user.password !== password) {
        alert("Este usuário não existe!");
        throw new Error("Este usuário não existe!");
      }

      TokenOnSessionStorage.create(user);
      window.location.href = '/src/configs';
    })
  }
} 

Login.watchForm();
