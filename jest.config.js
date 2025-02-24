/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "js"],
  moduleDirectories: ["node_modules", "src"],
  testMatch: ["**/*.test.ts"], // Look for test files next to source files
};
