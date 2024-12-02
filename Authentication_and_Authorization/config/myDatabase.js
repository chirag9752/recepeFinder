const mongoose = require("mongoose");

exports.myDB = () => {
    mongoose.connect(process.env.DATABASE_URL).then( () => console.log('db connected successfully'))
    .catch( (error) => {
            console.error(error.message);
            process.exit(1);
    });
}
