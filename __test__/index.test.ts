import util from "../src/index"


test("formatTime", () => {
    expect(util.formatTime(1671198728746)).toEqual("2022-12-16-21-52-8")
    expect(util.formatTime(1671198727746)).toEqual("2022-12-16-21-52-7")
})
test("randomChars", () => {
    expect(util.randomChars(5).length).toEqual(5)
    expect(util.randomChars(8).length).toEqual(8)
})
