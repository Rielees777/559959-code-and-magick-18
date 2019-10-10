'use strict';
(function () {
  var userSetup = document.querySelector('.setup-similar');
  userSetup.classList.remove('hidden');

  var similarListElement = document.querySelector('.setup-similar-list');

  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarWizardTemplate = wizardTemplate.querySelector('.setup-similar-item');

  /*
   * Функция getWizardName генерирует случайное имя,  фамилию из массивов  WIZARD_FIRST_NAMES, WIZARD_SECOND_NAMES соответственно
   * return {string} возвращается строчное значение из имени и фамили персонажа.
   */
  var getWizardName = function () {

    var firstNameIndex = getRandomNumber(0, WIZARD_FIRST_NAMES.length - 1);
    var secondNameIndex = getRandomNumber(0, WIZARD_SECOND_NAMES.length - 1);

    var wizardName = WIZARD_FIRST_NAMES[firstNameIndex] + ' ' + WIZARD_SECOND_NAMES[secondNameIndex];

    return wizardName;
  };

  /*
   * Функция getWizardColors генерирует случайные цвета из массивов COAT_COLOR и EYES_COLOR и возвращает в виде массива
   * return {array} возвращается массив со значениями цветов плаща и глаз персонажей.
   */
  var getWizardColors = function () {

    var coatColorsIndex = getRandomNumber(0, COAT_COLOR.length - 1);
    var eyesColorsIndex = getRandomNumber(0, EYES_COLOR.length - 1);

    return [COAT_COLOR[coatColorsIndex], EYES_COLOR[eyesColorsIndex]];
  };

  for (var i = 0; i < 4; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = getWizardName();

    var wizardColors = getWizardColors();
    wizardElement.querySelector('.wizard-coat').style.fill = wizardColors[0];
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardColors[1];

    similarListElement.appendChild(wizardElement);
  }
})();
