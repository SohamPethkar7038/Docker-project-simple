import express from "express"
import cors from "cors"

const app=express();

// middlewares
app.use(express.json());
app.use(cors());


// api routes

app.get('/api/message',(req,res)=>{
    res.json({message:"Hello from chaicode server"});
});


const PORT=4000;

app.listen(PORT,()=>{
    console.log(`server is running on port at http://localhost:${PORT}`);
})