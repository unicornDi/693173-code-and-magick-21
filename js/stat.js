/* eslint-disable no-var */
'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CHART_HEIGHT = 150;
var BAR_WIDTH = 40;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > i) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;

  var maxTime = getMaxElement(times);

  ctx.font = `16px 'PT Mono'`;
  ctx.fillText(`Ура, вы победили!`, 120, 40);
  ctx.fillText(`Список результатов:`, 120, 56);

  for (var i = 0; i < names.length; i++) {
    var barHeight = CHART_HEIGHT * times[i] / maxTime;
    var chartX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;

    ctx.fillText(
        Math.round(times[i]),
        chartX,
        CLOUD_HEIGHT - barHeight - FONT_GAP - GAP
    );

    var lightness = Math.round(Math.random() * 100);

    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(240, 100%, ${lightness}%)`;
    }

    ctx.fillRect(
        chartX,
        CLOUD_HEIGHT - barHeight - FONT_GAP,
        BAR_WIDTH,
        barHeight
    );

    ctx.fillStyle = `#000`;

    ctx.fillText(
        names[i],
        chartX,
        CLOUD_HEIGHT
    );
  }
};
