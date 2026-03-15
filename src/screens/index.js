/**
 * Screens Index
 *
 * EN: Aggregates all screen definitions.
 *     To add a new screen, create a new file in this folder
 *     and import it here.
 *
 * PT: Agrega todas as definições de telas.
 *     Para adicionar uma nova tela, crie um novo arquivo nesta pasta
 *     e importe-o aqui.
 */

const home = require("./home");

const screens = {
  "home": home
};

module.exports = screens;
