import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();



app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})