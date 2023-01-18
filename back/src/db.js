const mongoose = require('mongoose');
require('dotenv').config();
const { MONGO_USER, MONGO_PASSWORD} = process.env

const MONGO_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.jm514jy.mongodb.net/test`;

mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('DB connected'))
.catch(err => console.log(err));
