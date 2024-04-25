export function generateWindDirection(angle: number): string {
  angle = ((angle % 360) + 360) % 360;
  const sectors = [
    "North",
    "Northeast",
    "East",
    "Southeast",
    "South",
    "Southwest",
    "West",
    "Northwest",
  ];
  const sectorIndex = Math.round(angle / 45);
  return sectors[sectorIndex];
}
