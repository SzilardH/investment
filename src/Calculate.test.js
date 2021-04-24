import Calculate from "./Calculate";

describe("Calculate Component Testing", () => {
  it("Calculate one month growth", () => {
    expect(Calculate(1,10,10,1.01,false,1)).toBe(10.1);
  });
  it("Calculate last month growth", () => {
    expect(Calculate(10,10,10,1.01,false,1)).toBe(11.0462212541120451001);
  });
  it("Calculate one month growth with max investment", () => {
    expect(Calculate(1,61,1100000,1.03,true,1.05)).toBe(1133000);
  });
  it("Calculate last month growth with max investment", () => {
    expect(Calculate(61,61,1100000,1.03,true,1.05)).toBe(7209201.222234536);
  });
  it("Test wrong input value on money", () => {
    expect(Calculate(61,61,"ezegySzám",1.03,true,1.05)).toBe(-1);
  });
  it("Test wrong input value on month", () => {
    expect(Calculate(61,"ezegyHónap",10,1.03,true,1.05)).toBe(-1);
  });
});