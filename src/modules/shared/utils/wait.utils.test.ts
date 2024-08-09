import { wait } from "./wait.utils";

describe("Wait", () => {
  it("Should wait for a given amount of time", async () => {
    const start = new Date().getTime();
    await wait(5);
    const end = new Date().getTime();

    expect(end - start).toBeGreaterThanOrEqual(5);
  });
});
