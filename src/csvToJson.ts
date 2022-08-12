import express from 'express';
import csv from 'csvtojson'

const csvFilePath='<path to csv file>'



const app = express();
const port = 3000;

app.get('/convert', async() => {
    
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        console.log(jsonObj);
    })
    const jsonArray = await csv().fromFile(csvFilePath);
    return jsonArray;
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});