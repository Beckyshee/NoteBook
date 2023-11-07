import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import noterouter from './routes/noteRoutes';
// import userRouter from './routes/userRoutes';


const app = express();
app.use(express.json())

app.use('/notes', noterouter)
// app.use('/users', userRouter)

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`App running on port: ${port}`));





