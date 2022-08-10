"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_practice_1 = __importDefault(require("../testing_practice"));
it('expect myFunc(5) to equal 25', () => {
    expect((0, testing_practice_1.default)(5)).toEqual(25);
});
it('expects(10) to equal 100', () => {
    expect((0, testing_practice_1.default)(10)).toEqual(10 * 10);
});
