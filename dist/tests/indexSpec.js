"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_practice_1 = __importDefault(require("../testing_practice"));
const countries_api_1 = __importDefault(require("../countries_api"));
const http_1 = require("http");
describe('Suite for myFunc function', () => {
    it('expect myFunc(5) to equal 25', () => {
        expect((0, testing_practice_1.default)(5)).toEqual(25);
    });
    it('expects(10) to equal 100', () => {
        expect((0, testing_practice_1.default)(10)).toEqual(10 * 10);
    });
});
describe('Suite for countries api specs', () => {
    it("should get basic data on the country canada", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield countries_api_1.default.getCountry('canada');
        expect(data).toEqual({
            capital: 'Ottawa',
            region: 'Americas',
            numericCode: '124'
        });
    }));
    it("should get capitals of NAFTA countries", () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield countries_api_1.default.getRegionCapitals('nafta');
        expect(data).toEqual([
            'Ottawa', 'Mexico City', 'Washington, D.C.'
        ]);
    }));
    it('should get region countries of new york', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield countries_api_1.default.getRegionCountries('New-York');
        expect(data).toEqual(['first country', 'second country', 'and so on']);
    }));
});
describe('Suite for express basic api', () => {
    it('expects to check api status code', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield http_1.request.get('/api');
        expect(response.status).toBe(200);
        done();
    }));
});
