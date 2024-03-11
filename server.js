const { app } = require("./src/index.js");
const { connectDb } = require("./src/config/db");

const PORT=4000;


app.listen(PORT,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",PORT)
})