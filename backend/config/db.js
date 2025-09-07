import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pallavishivanna0123_db_user:resume123@cluster0.gi6dgxj.mongodb.net/RESUME')
    .then(() => console.log('DB CONNECTED'))
}