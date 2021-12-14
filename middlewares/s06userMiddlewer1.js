const c = require('../constants/constants');

module.exports = {
    random: (req, res, next) => {
        const num = req.query.num;
        if (req.query.num) {
        const rand = Math.random()*num;
        const round = Math.round(rand);
        res.status(c.status.ok).send({round :round});
        next();
        }
    },
};

//http://localhost:3000/api/v4/rand/random?num=10