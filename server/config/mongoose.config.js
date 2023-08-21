const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/project_manager_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

})
    .then(() => console.log("established connection to database"))
    .catch(err => console.log("something went wrong ", err));