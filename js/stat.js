'use strict';
(function () {

  /*
Функция renderCloud создает облако (шейп) в котором будут выводится значения статистики игроков
*/
  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, window.renderer.settings.CLOUD_WIDTH, window.renderer.settings.CLOUD_HEIGHT);
  };

  /*
Определение функции  renderStatistics как метода объекта window.

Функция renderStatistics выводит статистику игроков (имена и значения), а также дигарамму ввиде колонок
*/
  window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, window.renderer.settings.CLOUD_X + window.renderer.settings.GAP, window.renderer.settings.CLOUD_Y + window.renderer.settings.GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, window.renderer.settings.CLOUD_X, window.renderer.settings.CLOUD_Y, '#ffffff');

    ctx.fillStyle = '#000000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', window.renderer.settings.CLOUD_WINNER_TEXT_X, window.renderer.settings.CLOUD_WINNER_TEXT_Y);
    ctx.fillText('Список результатов:', window.renderer.settings.CLOUD_WINNER_TEXT_X, window.renderer.calculatedSettings.scoreListTitleY);


    var maxTime = window.utils.getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      var namePositionX = window.renderer.settings.CLOUD_X + window.renderer.settings.COLUMN_WIDTH + (window.renderer.settings.COLUMN_GAP * i * 2);
      var scorePositionX = window.renderer.settings.CLOUD_X + window.renderer.settings.COLUMN_WIDTH + (window.renderer.settings.COLUMN_GAP * i * 2);
      var scorePositionY = window.renderer.settings.DIAGRAMM_HEIGHT - (window.renderer.settings.COLUMN_HEIGHT * times[i]) / maxTime;
      var columnPositionX = window.renderer.settings.CLOUD_X + window.renderer.settings.COLUMN_WIDTH + (window.renderer.settings.COLUMN_GAP * i * 2);
      var calculatedColumnHeight = -((window.renderer.settings.COLUMN_HEIGHT * times[i]) / maxTime);

      ctx.fillStyle = '#000000';
      ctx.fillText(names[i], namePositionX, window.renderer.calculatedSettings.namePositionY);
      ctx.fillText(Math.floor(times[i]), scorePositionX, scorePositionY);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(237, 100%, 50%,' + window.utils.getRandomNumber(30, 100) + '%)';
      }

      ctx.fillRect(columnPositionX, window.renderer.calculatedSettings.columnPositionY, window.renderer.settings.COLUMN_WIDTH, calculatedColumnHeight);
    }
  };
})();
