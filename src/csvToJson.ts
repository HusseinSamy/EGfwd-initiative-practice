import express from 'express';
import csv from 'csvtojson'

const csvFilePath='C:/Users/Weshkl/Desktop/EGfwd initiative practice/assets/users.csv'



const app = express();
const port = 3000;

app.get('/convert', async(req, res) => {
    
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
    res.send(jsonArray);
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});