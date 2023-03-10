const express    = require("express");
const bodyParser = require("body-parser");
const cors       = require("cors");
const mongoose   = require('mongoose');
const authRouter = require('./router/auth');

const app = express();
const PORT = 3200;


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Hello from home page");
});


const startServer = async () => {

    try {
        await mongoose.connect(`MONGODB URL`);

        app.listen(PORT, () => console.log(`Server is running at port ${PORT} and Database Connected`));

    } catch (err) {
        console.log("Error in starting server: ", err);
    }

};

startServer();
// app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));


