"use strict";
const step1 = () => {
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
const step2 = (step) => {
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
const step3 = (step) => {
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
step1()
    .then(result => {
    return step2(result);
})
    .then(result => {
    return step3(result);
})
    .then(() => {
    console.log("your home finished");
})
    .catch(() => {
    console.log("error happened");
});
