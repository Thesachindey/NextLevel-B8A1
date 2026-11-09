"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplyValue(value, multiplier) {
    return value * (multiplier === undefined ? 2 : multiplier);
}
function processInput(input) {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return input ? "Active" : "Inactive";
}
function formatCoordinate(coordinate) {
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const locationName = coordinate[2];
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    const combined = [];
    for (const array of arrays) {
        combined.push(...array);
    }
    return combined;
}
console.log(concatenateArrays(["a", "b"], ["c", "d"], ["e", "f"]));
//# sourceMappingURL=solutions.js.map