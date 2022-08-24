let express = require('express');

let bbs = require('../models').bbs;
let router = express.Router();

router
    .get('/:id', (req, res, next) => {
        const id = req.params.id;
        console.log(id);
        bbs.destroy({
            where: {
                bbs_id: id
            }
        }).then((result) => {
            res.redirect('/')
        });
    })

module.exports = router;