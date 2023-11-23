import express from 'express';
import connectDB from '../database/db';
import UserModel from '../../models/userModel';
import testRoute from './test.route';

const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    await connectDB();

    const users = await UserModel.find();

    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error('Connection error, can`t connect to MongoDB.', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

router.use(testRoute);

export default router;
