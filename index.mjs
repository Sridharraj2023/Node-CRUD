import express from 'express'
import controller from './controller/index.mjs';
const PORT = 8000;
const app = express();

app.use(express.json())
app.use(controller)


app.listen(PORT, ()=> console.log(`App is listening port ${PORT}`))