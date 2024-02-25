const express= require('express');
const dotenv= require('dotenv');



dotenv.config();
const app = express();

const server= require('http').createServer(app);
const io=  require('socket.io')(server);

app.get('/', (req,res)=>{
    res.send('server running at 3000...hu')
});


io.on('connection', (data)=>{
    console.log(`connection data: ${data}`);
});
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running at  ${port}...`)
});