import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";


// ------------ PORT -----------
const PORT =  8000;

// --------- Database Connection ---------
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(
       `Server is running at port ${PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed !!!", err);
  });
