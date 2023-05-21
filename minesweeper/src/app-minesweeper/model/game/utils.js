export default function getCoordinatesAround({ x, y }) {
  const range = [-1, 0, 1];
  const res = [];
  for (let xIndex = 0; xIndex < range.length; xIndex += 1) {
    const dX = range[xIndex];
    for (let yIndex = 0; yIndex < range.length; yIndex += 1) {
      const dY = range[yIndex];
      if (dX !== 0 || dY !== 0) {
        res.push({ x: x + dX, y: y + dY });
      }
    }
  }
  return res;
}
