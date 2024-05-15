const mongoose = require("mongoose");

exports.myDB = () => {
  
       mongoose.connect(process.env.DATABASE_URL , {
            useNewUrlParser : true,
            useUnifiedTopology : true
        }).then( () => console.log('db connected successfully'))
        .catch( (error) => {
            console.error("db connection issue");
            process.exit(1);
        });
}
