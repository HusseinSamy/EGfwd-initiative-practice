import express from 'express'

const app = express();
const port = 5001;


app.get('/api', (req , res) => {
    res.send("hello world!");
});

 app.listen(port, ()=> console.log(`listening on port ${port};`));

 export default app;