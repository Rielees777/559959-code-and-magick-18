'use strict';
(function () {

  /*
Функция renderCloud создает облако (шейп) в котором будут выводится значения статистики игроков
*/
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  /*
Функция getMaxElement возвращает максимальное значение входящего массива чисел
*/
  var getMaxElement = function (arr) {
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
  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_WINNER_TEXT_X, CLOUD_WINNER_TEXT_Y);
    ctx.fillText('Список результатов:', CLOUD_WINNER_TEXT_X, scoreListTitleY);


    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var namePositionX = CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2);
      var scorePositionX = CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2);
      var scorePositionY = DIAGRAMM_HEIGHT - (COLUMN_HEIGHT * times[i]) / maxTime;
      var columnPositionX = CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2);
      var calculatedColumnHeight = -((COLUMN_HEIGHT * times[i]) / maxTime);

      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], namePositionX, namePositionY);
      ctx.fillText(Math.floor(times[i]), scorePositionX, scorePositionY);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(237, 100%, 50%,' + getRandomNumber(30, 100) + '%)';
      }

      ctx.fillRect(columnPositionX, columnPositionY, COLUMN_WIDTH, calculatedColumnHeight);
    }
  };
})();
