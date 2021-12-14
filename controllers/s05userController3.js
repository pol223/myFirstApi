const c = require('../constants/constants');

module.exports.factorial = (req, res) => {
    const num = req.query.num;
    if (req.query.num) {
        let result = 1;

        for (let i = num; i > 1; i--) {
            result *= i;
        }
        res.status(c.status.ok).send({result});
    }
}