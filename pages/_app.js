import express from 'express';
import userRoute from '../src/routes/user.route';

const app = express();

app.use('/users', userRoute);

export default app;
