const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Students-API", {
    // useCreateIndex: true,
    // useNewUrlParser:true,
    // useUnifieldTopology:true
}).then( ()=> {
    console.log("Database is Connected..!!");
}).catch( (e) => {
    console.log("No Connection ..!!");     
})