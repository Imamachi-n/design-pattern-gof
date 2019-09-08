import { describe, it } from "mocha";
import { getName } from "../hoge";
import { assert } from "chai";

describe("hoge", () => {
  it("should return taro", () => {
    assert.equal(getName(), "taro");
  });
});
