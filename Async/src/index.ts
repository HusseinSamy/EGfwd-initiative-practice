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

const build = async() => {
    try{
        const step11 = await step1();
        const step22 = await step2(step11);
        await step3(step22);
        console.log("your home is finished");
    }
    catch{
    console.log("error happened");
    }
}

build();