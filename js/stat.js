'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const CHART_HEIGHT = 150;
const BAR_WIDTH = 40;
const GAP = 10;
const BAR_GAP = 50;
const FONT_GAP = 16;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

const getRandomHslColor = function (hue, saturation) {
  const lightness = Math.round(Math.random() * 95);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const renderChartBar = function (ctx, x, y, height, name) {
  ctx.fillStyle = `#000`;
  const fillingColor = ctx.fillStyle;

  if (name === `Вы`) {
    ctx.fillStyle = `rgba(255, 0, 0, 1)`;
  } else {
    ctx.fillStyle = getRandomHslColor(240, 100);
  }

  ctx.fillRect(x, y, BAR_WIDTH, height);
  ctx.fillStyle = fillingColor;
};

window.renderStatistics = function (ctx, names, times) {
  const maxTime = getMaxElement(times);

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

  ctx.font = `16px 'PT Mono'`;
  ctx.fillText(`Ура, вы победили!`, 120, 40);
  ctx.fillText(`Список результатов:`, 120, 56);

  for (let i = 0; i < names.length; i++) {
    const barHeight = CHART_HEIGHT * times[i] / maxTime;
    const chartX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    const chartY = CLOUD_HEIGHT - barHeight - FONT_GAP;

    ctx.fillText(
        Math.round(times[i]),
        chartX,
        chartY - GAP
    );

    renderChartBar(ctx, chartX, chartY, barHeight, names[i]);

    ctx.fillText(
        names[i],
        chartX,
        CLOUD_HEIGHT
    );
  }
};
