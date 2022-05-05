
const app = require('./index');

const connect = require("./config/db");
const port = process.env.PORT || 4000
app.listen(port, async()=>{
    try{
        await connect();
        console.log("Listening on ports 4000.......")

    }catch(err){
        console.log("Something went to server folder please check that ")
    }
})