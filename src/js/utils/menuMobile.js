export class MenuMobile {
    static watchMenuButton() {
        const button = document.querySelector("#header menu button")
        const menuNavUl = document.querySelector('#header ul')
        const header = document.getElementById('header')
        const logo = document.querySelector('#header a')
        const body = document.querySelector('body')
        const menuMobile = document.querySelector('#header menu')
        const loginOption = document.getElementById('login-option')
        const loginButton = document.getElementById('login-button')
        const configButton = document.getElementById('config-button')
        
        button.addEventListener("click", () => {
          menuNavUl.classList.toggle("open-header")
          logo.classList.toggle("open-header")
          body.classList.toggle("open-header")
          header.classList.toggle("open-header")
          menuMobile.classList.toggle("open-header")
          loginOption.classList.toggle('open-header')

          if(loginButton)
            loginButton.classList.toggle('open-header')
          else 
            configButton.classList.toggle('open-header')
        })
      }
}
