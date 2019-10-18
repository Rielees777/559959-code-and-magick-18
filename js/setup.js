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

    var firstNameIndex = window.utils.getRandomNumber(0, window.renderer.settings.WIZARD_FIRST_NAMES.length - 1);
    var secondNameIndex = window.utils.getRandomNumber(0, window.renderer.settings.WIZARD_SECOND_NAMES.length - 1);

    var wizardName = window.renderer.settings.WIZARD_FIRST_NAMES[firstNameIndex] + ' ' + window.renderer.settings.WIZARD_SECOND_NAMES[secondNameIndex];

    return wizardName;
  };

  /*
   * Функция getWizardColors генерирует случайные цвета из массивов COAT_COLOR и EYES_COLOR и возвращает в виде массива
   * return {array} возвращается массив со значениями цветов плаща и глаз персонажей.
   */
  var getWizardColors = function () {

    var coatColorsIndex = window.utils.getRandomNumber(0, window.renderer.settings.COAT_COLOR.length - 1);
    var eyesColorsIndex = window.utils.getRandomNumber(0, window.renderer.settings.EYES_COLOR.length - 1);

    return [window.renderer.settings.COAT_COLOR[coatColorsIndex], window.renderer.settings.EYES_COLOR[eyesColorsIndex]];
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
