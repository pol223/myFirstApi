const c = require('../constants/constants');

module.exports.checkNumQueryParam = (req,res,next) => {
    if (req.query.num) {
        next();
    } else{
        res.status(c.status.badReq).send({message: '"num" param missing'});
    }
}

module.exports.checkNumQueryInteger = (req, res, next) => {
    req.query.num = Number(req.query.num);
    if (!Number.isNaN(req.query.num)) {
        if (Number.isInteger(req.query.num)) {
            next();
        } else{
            res.status(c.status.badReq).send({message: '"num" param must be interger'});
        }
    } else{
        res.status(c.status.badReq).send({message: '"num" param must be numeric'});
    }
}