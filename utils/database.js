import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async() => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log("Mongodb is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbNAme: "share_promot",
            useNewUrlParser: true, // Corrected option name
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("Mongodb connected");

    } catch(error) {
        console.log("error", error)
    }
}