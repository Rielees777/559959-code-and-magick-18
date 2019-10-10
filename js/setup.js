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

  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');

  /**
 * Функция закрвает окно редактора персонажа по нажатии клавиши Esc
 * @param {number} evt параметр принимающий значение соответствующее нажатию клавиши Esc
 */
  var onPopupEscPress = function (evt) {
    if (evt.keyCode === window.utils.KEY_CODES.ESCAPE) {
      closePopup();
    }
  };

  /**
 * Функция показывает окно редактора персонажа удаляя класс hidden
 * из разметки окна редактирования персонажа. Также добавляется обработчик события
 * реагирующий на нажатие клавиши Esc.
 */
  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  };

  /**
 * Функция добавляет класс hidden в разметку окна редактирования скрывающего
 * скрывающий данное окно. Также удаляется обработчик события нажатие на клавишу Esc.
 */
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  /**
 * Обработчики реагирющие на событие клик на иконке пользователя либо
 * нажатие клавиши Enter, когда иконка в фокусе. Событие запускает
 * функцию открывающую окно редактирования персонажа
 */
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.KEY_CODES.ENTER) {
      openPopup();
    }
  });
  /**
 * Обработчики реагирющие на событие клик на крестик закрытия либо
 * нажатие клавиши Enter, когда он в фокусе. Событие запускает
 * функцию закрывающее окно редактирования персонажа
 */
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.KEY_CODES.ENTER) {
      closePopup();
    }
  });

  var userNameInput = setup.querySelector('.setup-user-name');

  /**
 * Создание обработчика выполняющего валидацию поля имени персанажа
 * используются встроенные в HTML5 возможности проверки форм
 */
  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя персонажа должно быть не меньше 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя персонажа должно быть не длиннее 25-ти симовлов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  var setupWizardImage = document.querySelector('.setup-wizard');
  var setupCoatColor = setupWizardImage.querySelector('.wizard-coat');
  var setupEyesColor = setupWizardImage.querySelector('.wizard-eyes');
  var setupFireballColor = document.querySelector('.setup-fireball-wrap');

  /**
 * Создание обработчиков реагирующих на нажатие на соответствующий элемент
 * при нажатии они меняют цвет элемента. Цвета меняются случайным образом.
 * Меняется цвет плаща, глаз и фаербола.
 */
  setupCoatColor.addEventListener('click', function () {
    setupCoatColor.style.fill = COAT_COLOR[getRandomNumber(0, COAT_COLOR.length - 1)];
  });
  setupEyesColor.addEventListener('click', function () {
    setupEyesColor.style.fill = EYES_COLOR[getRandomNumber(0, EYES_COLOR.length - 1)];
  });
  setupFireballColor.addEventListener('click', function () {
    setupFireballColor.style.background = FIREBALL_COLOR[getRandomNumber(0, FIREBALL_COLOR.length - 1)];
  });
})();
