const MULTIPLIER = 4;

export const spacing = (
  value: number | string | { [key: string]: number | string },
  multiplier: number = MULTIPLIER
) => {
  if (typeof value === "object") {
    return Object.entries(value)
      .map(([key, val]) => `${key}: ${val}`)
      .join(";");
  }

  if (typeof value === "number") {
    return `${value * multiplier}px`;
  }

  return value;
};
