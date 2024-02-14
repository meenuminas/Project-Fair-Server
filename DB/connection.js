const mongoose=require('mongoose')

const connectionString=process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
   console.log("Mongodb Atlas connected successfully with pfServer");
}).catch((reason)=>{
    console.log(reason);
    console.log("Mongodb Connection Failed!!!");
})