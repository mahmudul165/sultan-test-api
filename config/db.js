const mongoose = require("mongoose");
const config = require("./config");
const dbURL = config.db.url;

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb atlas is connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
// const mongoose = require("mongoose");
// const config = require("./config");
// const dbURL = config.db.url;

// // Set 'strictQuery' to false or true based on your preference to avoid deprecation warning
// mongoose.set('strictQuery', false); // You can also set it to true if needed

// mongoose
//   .connect(dbURL, {
//     useNewUrlParser: true, // Enable the new MongoDB parser
//     useUnifiedTopology: true, // Use the unified topology engine
//   })
//   .then(() => {
//     console.log("MongoDB Atlas is connected");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//     process.exit(1); // Exit the process in case of an error
//   });
