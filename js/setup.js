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

let getRandomArrElement = (arr) => Math.floor(Math.random() * arr.length);

let createWizards = function (wizardsAmount) {
  let wizards = [];
  for (let i = 0; i < wizardsAmount; i++) {
    let wizard = {};
    wizard.name = NAMES[getRandomArrElement(NAMES)] + ` ` + SURNAMES[getRandomArrElement(SURNAMES)];
    wizard.coatColor = coatColor[getRandomArrElement(coatColor)];
    wizard.eyesColor = eyesColor[getRandomArrElement(eyesColor)];
    wizards.push(wizard);
  }
  return wizards;
};

function createWizard(wizard) {
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
}

function renderWizards() {
  let setupSimilarList = document.querySelector(`.setup-similar-list`);
  let fragment = document.createDocumentFragment();
  let newWizards = createWizards(4);
  document.querySelector(`.setup-similar`).classList.remove(`hidden`);

  for (let i = 0; i < newWizards.length; i++) {
    fragment.appendChild(createWizard(newWizards[i]));
  }

  setupSimilarList.appendChild(fragment);

}

renderWizards();
