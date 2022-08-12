import express from 'express';
import csv from 'csvtojson'
import {promises as fsPromises}  from 'fs'

const csvFilePath = 'C:/Users/Weshkl/Desktop/EGfwd initiative practice/assets/users.csv'
const outputFile = './output/data.txt';
const app = express();
const port = 3000;

app.get('/convert', async(req, res) => {
    try{

        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            console.log(jsonObj);
        })
        const jsonArray = await csv().fromFile(csvFilePath);
        jsonArray.forEach(e => {
            if(e['phone'] === ''){
                e['phone'] = 'missing phone';
            }
        });
        
        const file = await fsPromises.writeFile(outputFile,JSON.stringify(jsonArray));
        res.send(jsonArray);
    }
    catch(error) {
        console.log(error)
    }
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});