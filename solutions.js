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
console.log(processInput("  Type    Scri  Pt  "), processInput(7), processInput(true), processInput(false));
//# sourceMappingURL=solutions.js.map