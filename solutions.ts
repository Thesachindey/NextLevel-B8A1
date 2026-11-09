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
  coordinate: readonly [number, number, string],
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

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course: Course): boolean =>
      course.isPublished && course.students >= minStudents,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item: T): T[K] => item[key]);
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];


console.log(pluckValues(users, "name")); // Output: ["Rakib", "Sadia", "Tariq"]
console.log(pluckValues(users, "id"));   // Output: [1, 2, 3]
console.log(pluckValues(users, "role")); // Output: ["Admin", "Editor", "Subscriber"]

