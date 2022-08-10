const step1 = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                const nextStep = 1; 
                console.log(`Completed step 1`);
                resolve(nextStep);
            }
            catch {
                reject();
            }
        },1000);
    }) 
}

const step2 = (step: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                const nextStep : number = step + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep)
            }
            catch{
                reject();
            }
        }, 1000);
        
    })
}

const step3 = (step: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                const nextStep = step + 1;
                console.log(`Completed step ${nextStep}`);
                resolve(nextStep);
            }
            catch{
                reject();
            }
        }, 1000);
    });
}

step1()
.then(result => {
    return step2(result);
})
.then(result => {
    return step3(result);
})
.then(() => {
    console.log("your home finished")
})
.catch(() => {
    console.log("error happened")
})