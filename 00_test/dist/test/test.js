"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var hoge_1 = require("../hoge");
var chai_1 = require("chai");
mocha_1.describe("hoge", function () {
    mocha_1.it("should return taro", function () {
        chai_1.assert.equal(hoge_1.getName(), "taro");
    });
});
