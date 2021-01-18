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

router.post('/clothes', upload, (req, res) => {
    console.log(req.file);
} );

module.exports = router;