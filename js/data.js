'use strict';
(function () {
  window.renderer = {};

  window.renderer.settings = {
    CLOUD_WIDTH: 420,
    CLOUD_HEIGHT: 270,
    CLOUD_X: 100,
    CLOUD_Y: 10,
    CLOUD_WINNER_TEXT_X: 120,
    CLOUD_WINNER_TEXT_Y: 45,
    GAP: 10,
    COLUMN_GAP: 50,
    COLUMN_WIDTH: 40,
    COLUMN_HEIGHT: 150,
    DIAGRAMM_HEIGHT: 235,
    WIZARD_FIRST_NAMES: [
      'Иван',
      'Хуан Себастьян',
      'Мария',
      'Кристоф',
      'Виктор',
      'Юлия',
      'Люпита',
      'Вашингтон'],
    WIZARD_SECOND_NAMES: [
      'да Марья',
      'Верон',
      'Мирабелла',
      'Вальц',
      'Онопко',
      'Топольницкая',
      'Нионго',
      'Ирвинг'],
    COAT_COLOR: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'],
    EYES_COLOR: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'],
    FIREBALL_COLOR: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };
  window.renderer.calculatedSettings = {
    namePositionY: window.renderer.settings.CLOUD_HEIGHT - window.renderer.settings.GAP,
    columnPositionY: (window.renderer.settings.CLOUD_X + window.renderer.settings.GAP * 2) * 2,
    scoreListTitleY: window.renderer.settings.CLOUD_WINNER_TEXT_Y + window.renderer.settings.GAP * 2
  };

  window.utils = {};

  window.utils.KEY_CODES = {
    ESCAPE: 27,
    ENTER: 13
  };

  /*
Функция getRandomNumber возвращает случайное число в заданном диапазаоне от min до max
*/
  window.utils.getRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  /*
Функция getMaxElement возвращает максимальное значение входящего массива чисел
*/
  window.utils.getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };
})();
