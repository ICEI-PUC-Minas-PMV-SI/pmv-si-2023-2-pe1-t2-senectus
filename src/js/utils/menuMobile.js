export class MenuMobile {
  static #getElements() {
    const button = document.querySelector("#header menu button")
    const menuNavUl = document.querySelector('#header ul')
    const header = document.getElementById('header')
    const logo = document.querySelector('#header a')
    const body = document.querySelector('body')
    const menuMobile = document.querySelector('#header menu')
    const loginOption = document.getElementById('login-option')
    const loginButton = document.getElementById('login-button')
    const configButton = document.getElementById('config-button')

    return {
      button,
      menuNavUl,
      header,
      logo,
      body,
      menuMobile,
      loginOption,
      loginButton,
      configButton
    }
  }

  static #expandMenu({
    menuNavUl,
    header,
    logo,
    body,
    menuMobile,
    loginOption,
    loginButton,
    configButton
  }) {
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
  }

  static #removeMenu({
    menuNavUl,
    header,
    logo,
    body,
    menuMobile,
    loginOption,
    loginButton,
    configButton
  }) {
    menuNavUl.classList.remove("open-header")
    logo.classList.remove("open-header")
    body.classList.remove("open-header")
    header.classList.remove("open-header")
    menuMobile.classList.remove("open-header")
    loginOption.classList.remove('open-header')

    if(loginButton)
      loginButton.classList.remove('open-header')
    else 
      configButton.classList.remove('open-header')
  }

  static watchMenuButton() {
      const elements = MenuMobile.#getElements();

      elements.button.addEventListener("click", () => {
        MenuMobile.#expandMenu(elements);
      })

      window.addEventListener('resize', () => {
        if(
          window.innerWidth >= 985 &&
          elements.menuNavUl.classList.contains('open-header') &&
          elements.logo.classList.contains('open-header') &&
          elements.body.classList.contains('open-header') &&
          elements.header.classList.contains('open-header') &&
          elements.menuMobile.classList.contains('open-header') &&
          elements.loginOption.classList.contains('open-header') &&
          (elements.loginButton?.classList.contains('open-header') ||
          elements.configButton?.classList.contains('open-header'))
        ) {
          MenuMobile.#removeMenu(elements);
        }
      })
    }
}