'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WINNER_TEXT_X = 120;
var CLOUD_WINNER_TEXT_Y = 45;
var GAP = 10;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var DIAGRAMM_HEIGHT = 235;

var namePositionY = CLOUD_HEIGHT - GAP;
var columnPositionY = (CLOUD_X + GAP * 2) * 2;
var scoreListTitleY = CLOUD_WINNER_TEXT_Y + GAP * 2;

var WIZARD_FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var WIZARD_SECOND_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
window.utils = {};

window.utils.KEY_CODES = {
  ESCAPE: 27,
  ENTER: 13
};

/*
Функция getRandomNumber возвращает случайное число в заданном диапазаоне от min до max
*/
var getRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
