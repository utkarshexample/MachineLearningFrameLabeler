export const getRandomColor = (alpha = 0.3) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${r}, ${g}, ${b})`;
  const randomColorWithAlpha = `rgba(${r}, ${g}, ${b},${alpha})`;
  return { randomColor, randomColorWithAlpha };
};
