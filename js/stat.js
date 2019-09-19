
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WINNER_TEXT_X = 120;
var CLOUD_WINNER_TEXT_Y = 45;
var GAP = 10;
var COLUMN_GAP = 50;
var FONT_GAP = 40;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var DIAGRAMM_HEIGHT = 235;

var namePositionY = CLOUD_HEIGHT - GAP;
var columnPositionY = (CLOUD_X + GAP * 2) * 2;
var scoreListTitleY = CLOUD_WINNER_TEXT_Y + GAP*2;

/*
Функция getRandomNumber возвращает случайное число в заданном диапазаоне от min до max
*/
var getRandomNumber = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max - min + 1) + min)
}

/*
Функция renderCloud создает облако (шейп) в котором будут выводится значения статистики игроков
*/
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

/*
Функция getMaxElement возвращает максимальное значение входящего массива чисел
*/
var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

/*
Определение функции  renderStatistics как метода объекта window.

Функция renderStatistics выводит статистику игроков (имена и значения), а также дигарамму ввиде колонок
*/
window.renderStatistics = function(ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");

  ctx.fillStyle = '#000000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", CLOUD_WINNER_TEXT_X, CLOUD_WINNER_TEXT_Y);
  ctx.fillText("Список результатов:", CLOUD_WINNER_TEXT_X, scoreListTitleY);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var namePositionX = CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2);
    var scorePositionX = CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2);
    var scorePositionY = DIAGRAMM_HEIGHT - (COLUMN_HEIGHT * times[i]) / maxTime;
    var columnPositionX = CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2);
    var calculatedColumnHeight = -((COLUMN_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000000';
    ctx.fillText(names[i], namePositionX, namePositionY);
    ctx.fillText(Math.floor(times[i]), scorePositionX,  scorePositionY);

    if (names[i] === "Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    else {
      ctx.fillStyle = 'hsl(237, 100%, 50%,' + getRandomNumber(30, 100) + '%)';
    }

    ctx.fillRect(columnPositionX, columnPositionY, COLUMN_WIDTH, calculatedColumnHeight);
  }
}
