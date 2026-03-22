import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://keithbrianlaranjo_db_user:znG1n2JWBJdtxso9@cluster0.tbhp1xl.mongodb.net/MediCare",
    )
    .then(() => {
      console.log("DB CONNECTED");
    });
};
