const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://'+process.env.DB_USER_PASSWORD+'@cluster0.2tuw3.mongodb.net/project-two',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}
)
.then(()=> console.log('Connected to mongoDB'))
.catch((err)=>console.log('falied to connect to mongoDB',err))
