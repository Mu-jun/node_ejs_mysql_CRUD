let express = require('express');
const { now } = require('mongoose');

let bbs = require('../models').bbs;
let router = express.Router();

router
    .get('/', (req, res)=>res.render('pages/write'))
    .post('/', (req,res, next)=>{
        console.log("create post")
        // const body = req.body;
        // console.log(body)

        const title = req.body.title;
        const content = req.body.content;
        // console.log("title",title,"content",content)
        bbs.create({
            title:title,
            content:content,
            author:"admin",
            c_date:now(),
        },{
            fields: ['title','content','author','c_date']
        })
        .then(result=>{
            res.send('<script> alert("성공"); window.location.href="/"; </script>')
        })
        .catch((err) => {
            console.error(err);
            next(err);
        });
        
    })

module.exports = router;