import * as challenge from "./js11.js";

describe("Testing unit tests for JS11 challenge", () => {
  it("Should return 'Hello, nice to meet you'", () => {
    expect(challenge.greet()).toBe("Hello, nice to meet you");
  });

  it("Should return the correct sum of the two given numbers", () => {
    expect(challenge.sumTwoNumbers(1, 2)).toBe(3);
  });

  it("Should return the correct customised string depending on the two given numbers", () => {
    expect(challenge.checkLarger(1, 1)).toBe("Both numbers are equal");
    expect(challenge.checkLarger(1, 2)).toBe("2 is bigger than 1");
    expect(challenge.checkLarger(3, 1)).toBe("3 is bigger than 1");
  });

  it("Should return a string if names in given array are longer than 6 letters, otherwise returns an array of the valid names", () => {
    expect(
      challenge.filterByLength(["Chihiro", "Haku", "Lin", "Zeniba", "No-Face"])
    ).toStrictEqual(["Haku", "Lin", "Zeniba"]);
    expect(
      challenge.filterByLength([
        "Spider-Man",
        "Iron Man",
        "Captain America",
        "Black Widow",
      ])
    ).toBe("Sorry, no valid names supplied");
  });

  it("Should return an array where the numbers of the supplied array are replaced with 0 if the difference between the number and the reducer is less than 0, or replaced with 255 if the difference is larger than 255, otherwise replaced with the difference", () => {
    expect(challenge.reduceNumbers([2, 300, 7], 5)).toStrictEqual([0, 255, 2]);
  });
});
