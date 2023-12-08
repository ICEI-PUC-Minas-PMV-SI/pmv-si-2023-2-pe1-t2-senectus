import "../entities/repos/localstorage/seed.js"

import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js"
import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js"
import { LoginDTO } from "../DTO/login.dto.js"


class Login {
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
      try {
        LoginDTO.validate(email, password)
      } catch(err) {
        alert(err.message);
        throw err
      }

      const user = UserOnLocalStorage.findByEmail(email);

      if(!user || user.password !== password) {
        alert("Este usuário não existe!");
        throw new Error("Este usuário não existe!");
      }

      TokenOnSessionStorage.create(user);
      window.location.href = 'home.html';
    })
  }
} 

Login.watchForm();
