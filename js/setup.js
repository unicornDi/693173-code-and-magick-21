'use strict';

const NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];

const SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];

const coatColor = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];

const eyesColor = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];

const setupWindow = document.querySelector(`.setup`);
setupWindow.classList.remove(`hidden`);

function getRandomInt(arr) {
  return Math.floor(Math.random() * arr.length);
}

function createWizards(wizardsAmount) {
  let wizards = [];
  for (let i = 0; i < wizardsAmount; i++) {
    let wizard = {};
    wizard.name = NAMES[getRandomInt(NAMES)] + ` ` + SURNAMES[getRandomInt(SURNAMES)];
    wizard.coatColor = coatColor[getRandomInt(coatColor)];
    wizard.eyesColor = eyesColor[getRandomInt(eyesColor)];
    wizards.push(wizard);
  }
  return wizards;
}

let newWizards = createWizards(4);

function renderWizard(wizard) {
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
}

function addFragmentToDOM() {
  let fragment = document.createDocumentFragment();

  for (let i = 0; i < newWizards.length; i++) {
    fragment.appendChild(renderWizard(newWizards[i]));
  }

  let setupSimilarList = document.querySelector(`.setup-similar-list`);
  setupSimilarList.appendChild(fragment);
  document.querySelector(`.setup-similar`).classList.remove(`hidden`);
}

addFragmentToDOM();
