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
const step01 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log(`Completed step 1`);
                resolve(nextStep);
            }
            catch (_a) {
                reject();
            }
        }, 1000);
    });
};
const step02 = (step) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }
            catch (_a) {
                reject();
            }
        }, 1000);
    });
};
const step03 = (step) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = step + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }
            catch (_a) {
                reject();
            }
        }, 1000);
    });
};
const build = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const step11 = yield step01();
        const step22 = yield step02(step11);
        yield step03(step22);
        console.log("your home is finished");
    }
    catch (_a) {
        console.log("error happened");
    }
});
build();
