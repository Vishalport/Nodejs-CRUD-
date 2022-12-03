const express = require("express");
require("./db/conn");
const StudentRouter = require("./routers/student");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(StudentRouter);

app.listen(port, () => {
    console.log('Server is Runing on port',port);
});