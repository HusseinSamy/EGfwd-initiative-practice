var step1 = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = 1;
                console.log("Completed step step 1");
                resolve(nextStep);
            }
            catch (_a) {
                reject();
            }
        }, 1000);
    });
};
var step2 = function (step) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = step + 1;
                console.log("Completed step ".concat(nextStep));
                resolve(nextStep);
            }
            catch (_a) {
                reject();
            }
        }, 1000);
    });
};
var step3 = function (step) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            try {
                var nextStep = step + 1;
                console.log("Completed step ".concat(nextStep));
                resolve(nextStep);
            }
            catch (_a) {
                reject();
            }
        }, 1000);
    });
};
step1()
    .then(function (result) {
    return step2(result);
})
    .then(function (result) {
    return step3(result);
})
    .then(function () {
    console.log("your home finished");
})["catch"](function () {
    console.log("error happened");
});
