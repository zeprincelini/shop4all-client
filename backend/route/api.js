const express = require('express');
const multer = require('multer');
const db = require('../db/db');
const router = express.Router();

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')        
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
let upload = multer({ storage: storage }).single('file');


router.get('/', (req, res) => {
    res.send("hello to you");
});

router.post('/clothes', upload, async (req, res) => {
    const date = new Date();
    try{
        let imgPath = req.file.path;
        let query = "INSERT INTO clothes (cloth, gender, price, file, date) VALUES (?, ?, ?, ?, ?)";
        await db.query(query, [req.body.cloth, req.body.gender, req.body.price, imgPath, date], (err, doc) => {
            if(err){
                console.log("unable to insert: ", err);
            }
            return ("insert successful ", doc);
        })
    }catch(err){
        console.error(err);
    }
   
} );

module.exports = router;