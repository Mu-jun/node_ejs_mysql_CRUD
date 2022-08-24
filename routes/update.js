let express = require('express');
const { now } = require('mongoose');

let bbs = require('../models').bbs;
let router = express.Router();

router
    .get('/:id', (req, res, next) => {
        console.log("get update")
        const id = req.params.id;
        bbs.findOne({
            where: {
                bbs_id: id
            }
        }).then((result) => {
            res.render('pages/update', {
                bbs_id: result.bbs_id,
                title: result.title,
                content: result.content,
            })
        })
    })
    .post('/:id', (req, res, next) => {
        const id = req.params.id
        console.log('post update', id)

        const body = req.body;
        bbs.update({
            title: body.title,
            content: body.content,
            u_date: now(),
        }, {
            where: { bbs_id: id }
        })
            .then(result => {
                res.send(`<script> alert("성공"); window.location.href="/detail/${id}"; </script>`)
            })
            .catch(err => {
                console.log(err);
                next(err);
            })
    })

module.exports = router;