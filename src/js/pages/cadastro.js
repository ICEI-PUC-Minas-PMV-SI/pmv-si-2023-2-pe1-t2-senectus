import { UserOnLocalStorage } from "../entities/repos/localstorage/user.js"
import { User } from "../entities/user.js";
import { TokenOnSessionStorage } from "../entities/repos/sessionStorage/token.js"
import { CreateUserDTO } from "../DTO/createUser.dto.js"

class Cadastro {
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

      try {
        CreateUserDTO.validate(name, email, password)
      } catch(err) {
        alert(err.message);
        throw err
      }

      const user = new User({ name, email, password });
      UserOnLocalStorage.create(user);
      TokenOnSessionStorage.create(user);
 
      window.location.href = 'configs';
    })
  }
} 

Cadastro.watchForm();
