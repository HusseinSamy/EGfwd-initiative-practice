import express from 'express'

const app = express();
const port = 5000;


app.get('/api', (res , rej) => {
    res.send("hello world!");
});

 app.listen(port, ()=> console.log(`listening on port ${port};`));

 export default app;