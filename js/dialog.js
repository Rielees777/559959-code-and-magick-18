'use strict';
(function () {
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
* реагирующий на нажатие клавиши Esc. В функции сохраняются в объекте координаты
* текущего положения окна редактирования персонажа.
*/
  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);

    window.utils.defaultCoords = {
      x: setup.offsetLeft,
      y: setup.offsetTop
    };
  };

  /**
* Функция добавляет класс hidden в разметку окна редактирования скрывающего
* скрывающий данное окно. Также удаляется обработчик события нажатие на клавишу Esc.
* Функция возвращает при закрытии в положение по умолчанию
*/
  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);

    setup.style.left = window.utils.defaultCoords.x + 'px';
    setup.style.top = window.utils.defaultCoords.y + 'px';
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
    setupCoatColor.style.fill = window.renderer.settings.COAT_COLOR[window.utils.getRandomNumber(0, window.renderer.settings.COAT_COLOR.length - 1)];
  });
  setupEyesColor.addEventListener('click', function () {
    setupEyesColor.style.fill = window.renderer.settings.EYES_COLOR[window.utils.getRandomNumber(0, window.renderer.settings.EYES_COLOR.length - 1)];
  });
  setupFireballColor.addEventListener('click', function () {
    setupFireballColor.style.background = window.renderer.settings.FIREBALL_COLOR[window.utils.getRandomNumber(0, window.renderer.settings.FIREBALL_COLOR.length - 1)];
  });

  var dialogHandle = document.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (evtUp) {
      evtUp.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evtClick) {
          evtClick.preventDefault();
          dialogHandle.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandle.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
