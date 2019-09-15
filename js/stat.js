
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var COLUMN_GAP = 50;
var FONT_GAP = 40;
var COLUMN_WIDTH = 40;
var columnHeight = 150;
var diagrammHeight = 235;
var col = 100
var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

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
Определение функции  renderStatistics как метода объекта
window.
*/
window.renderStatistics = function(ctx, names, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, CLOUD_X, CLOUD_Y, "#ffffff");

  ctx.fillStyle = '#000000';
  ctx.font = "16px PT Mono";
  ctx.fillText("Ура вы победили!", 120, 45);
  ctx.fillText("Список результатов:", 120, 65);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2), CLOUD_HEIGHT - GAP);
    ctx.fillText(Math.floor(times[i]), CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2), diagrammHeight - (columnHeight * times[i]) / maxTime );
  }
  for (var i = 0; i < names.length; i++) {
    if (names[i] === "Вы") {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    else {
      ctx.fillStyle = 'hsl(237, 100%, 50%)';
    }
    ctx.fillRect(CLOUD_X + COLUMN_WIDTH + (COLUMN_GAP * i * 2), (CLOUD_X + GAP * 2) * 2, COLUMN_WIDTH, -((columnHeight * times[i]) / maxTime) );
  }
}
