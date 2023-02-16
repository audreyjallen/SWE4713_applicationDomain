const mongoose = require('mongoose');

const AAdb = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true, 
    useNewUrlParser: true});
    } catch (err){

    console.error(err);
    }
}

module.exports=AAdb