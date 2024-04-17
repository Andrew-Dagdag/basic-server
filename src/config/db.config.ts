import mongoose from "mongoose";

const dbName = 'Notes';
const connectionString = `mongodb://localhost:27017/${dbName}`;

const options = {
  autoIndex: false,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4
};

export const db = mongoose.connect(connectionString, options)
  .then(res => {
    console.log("Successfully connected to database");
  })
  .catch(err => {
    console.log(JSON.stringify(err));
  });
