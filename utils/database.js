import mongoose from "mongoose"

const connectToDB = async () => {
    const isConnected = false;
    mongoose.set("strictQuery", true)

    if (isConnected) {
        console.log("MongoDB is connected");
        return
    }

    try {
        await mongoose.connect(process.env.MONGO_DB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDB