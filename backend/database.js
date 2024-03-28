const mongoose = require('mongoose');
const connection = "mongodb+srv://yunjiani832:TmeCv3DruDyhXCdg@cluster0.yh3beol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));