import express from 'express'; 
import mongoose from 'mongoose'
import Post from './post.js'
import router from './router.js';
import fileUpload from 'express-fileupload';
const PORT = 8888;
const DB_URL = "mongodb+srv://stilcyber:xcfe@cluster0.v0wf8hd.mongodb.net/?retryWrites=true&w=majority" 
const app = express();





app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)




async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
        console.log('OK')
    } catch (e) {
        console.log(e)
    }
}
startApp()

