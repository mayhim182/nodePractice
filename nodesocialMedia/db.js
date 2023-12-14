const mongoose = require('mongoose');


const connectDB = async ()=> {
    try{
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log('MongoDB Connected');
    }
    catch(e){   
        console.error(e.message);
        process.exit(1);
    }
};

module.exports = connectDB;  