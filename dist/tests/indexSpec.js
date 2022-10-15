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
const testingPractice_1 = __importDefault(require("../_Section_1/testingPractice"));
const supertest_1 = __importDefault(require("supertest"));
const basicExpressApi_1 = __importDefault(require("../_Section_1/basicExpressApi"));
const request = (0, supertest_1.default)(basicExpressApi_1.default);
describe('Suite for myFunc function', () => {
    it('expect myFunc(5) to equal 25', () => {
        expect((0, testingPractice_1.default)(5)).toEqual(25);
    });
    it('expects(10) to equal 100', () => {
        expect((0, testingPractice_1.default)(10)).toEqual(10 * 10);
    });
});
// describe ('Suite for countries api specs', () => {
//   it("should get basic data on the country canada", async () => {
//     const data = await countries.getCountry('canada');
//     expect(data).toEqual({
//       capital: 'Ottawa',
//       region: 'Americas',
//       numericCode: '124'
//     });
//   });
//   it("should get capitals of NAFTA countries", async () => {
//     const data = await countries.getRegionCapitals('nafta');
//     expect(data).toEqual([
//       'Ottawa', 'Mexico City', 'Washington, D.C.'
//     ]);
//   });
//   it('should get region countries of new york', async() =>{
//       const data = await countries.getRegionCountries('New-York');
//       expect(data).toEqual(['first country', 'second country', 'and so on']);
//   } )
// })
describe('Suite for express basic api', () => {
    it('expects to check api status code', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api');
        expect(response.status).toBe(200);
    }));
});
