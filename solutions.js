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
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
}
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name")); // Output: ["Rakib", "Sadia", "Tariq"]
console.log(pluckValues(users, "id")); // Output: [1, 2, 3]
console.log(pluckValues(users, "role")); // Output: ["Admin", "Editor", "Subscriber"]
//# sourceMappingURL=solutions.js.map