import "../entities/repos/localstorage/seed.js"

import { LoginButtonHandler } from "../utils/loginButton.js";
import { MenuMobile } from "../utils/menuMobile.js";

LoginButtonHandler.trySwitchToConfigButton();
MenuMobile.watchMenuButton();

