let express = require('express');

let bbs = require('../models').bbs;
let router = express.Router();

router
    .get('/:p', (req, res, next) => {
        let page = +req.params.p ? +req.params.p : 1;
        // console.log(typeof(+page),page)
        let offset = 0;
        if (page > 1) {
            offset = 10 * (page - 1)
        }
        bbs.findAndCountAll({
            order: [
                ['bbs_id', 'DESC']
            ],
            offset: offset,
            limit: 10
        }).then(result => {
            // console.log(result)
            res.render('pages/index', {
                page: page,
                data: result
            });
        }).catch((err) => {
            console.error(err);
            next(err);
        });
    })

module.exports = router;