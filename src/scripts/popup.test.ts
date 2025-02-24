import { describe, it, jest, expect } from '@jest/globals';

describe("Popup Script", () => {
    it("should log a message when loaded", () => {
      const logSpy = jest.spyOn(console, "log");
      document.addEventListener("DOMContentLoaded", () => console.log("Popup script loaded"));
      document.dispatchEvent(new Event("DOMContentLoaded"));
      expect(logSpy).toHaveBeenCalledWith("Popup script loaded");
      logSpy.mockRestore(); // Clean up mock
    });
  });
  