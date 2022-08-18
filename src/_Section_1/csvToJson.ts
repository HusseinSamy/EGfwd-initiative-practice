import express from 'express';
import csv from 'csvtojson'
import {promises as fsPromises}  from 'fs'

const csvFilePath = 'C:/Users/Weshkl/Desktop/EGfwd initiative practice/assets/users.csv'
const outputFile = '../output/data.txt';
const app = express();
const port = 3000;

app.get('/convert', (req, res) => {
    try{
        csv()
        .fromFile(csvFilePath)
        .then((data) =>{
            let newData = data.map((item: {first_name: string , last_name: string, phone: string})=> {
                let first = item.first_name;
                let last = item.last_name;
                let phone = item.phone;
                if(phone === ''){
                    phone = 'missing data';
                }
                return {first, last, phone}
            });
            fsPromises.writeFile(outputFile,JSON.stringify(newData));
            res.send(newData);
        })
    }
    catch(error) {
        console.log(error)
    }
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});