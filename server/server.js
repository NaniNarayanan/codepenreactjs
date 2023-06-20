const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))
const upload = multer({dest:'uploads/'})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Nani@1804',
    database:'images'
});

app.post('/api/upload',upload.single('image'), (req,res)=>{
    const imagePath = req.file.path;

    const sql = 'insert into image (path) values (?)';
    db.query(sql, [imagePath], (error,result)=>{
        if(error){
            console.log(error);
        }else{
            res.send(result);
        }
    });
});

app.get('/api/get',(req,res)=>{
    const sqlGet = 'select * from image';
    db.query(sqlGet, (error,result));
    if(error){
        console.log(error);
    }else{
        res.send(result)
    }
});

app.listen(8000,()=>{
    console.log('Server Running...')
})