const express = require('express');
const app = express();
const cors = require('cors') 
const port = 8000;

const multer  = require('multer')
//setting options for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());  
app.use(express.urlencoded({ extended: true })); 

require('./config/mongoose.config'); 
app.use(cors())  
require('./routes/diveShop.routes')(app);  


app.listen(port, ()=> console.log(`listening at port: ${port}`));