import mongoose from "mongoose";

export const startConnection = async () => {
const url = encodeURI("mongodb+srv://mateohanaoka:mateohanaoka@cluster0.a5fxkgt.mongodb.net/?retryWrites=true&w=majority");
await mongoose.connect(url);
};