function multiplyValue(value: number, multiplier?: number): number {
  return value * (multiplier === undefined ? 2 : multiplier);
}

function processInput(input: string | number | boolean): string | number {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";
}

function formatCoordinate(
  coordinate: readonly [number, number, string]
): string {
  const latitude = coordinate[0];
  const longitude = coordinate[1];
  const locationName = coordinate[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const combined: T[] = [];
  for (const array of arrays) {
    combined.push(...array);
  }
  return combined;
}

console.log(concatenateArrays(["a", "b"], ["c", "d"], ["e", "f"]));