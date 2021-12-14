// const c = require('../constants/constants');
// const

// module.exports = {
//     numero: (req, res, next) => {
//         const arr = [2,4,8,9,7,3,5,6];
//         arr = arr.map((el) => el * req.query.num);

//         if (req.query.string === 'micajafuerte') {
//             next();
//         }
//     },
// };
// const c = require('../config/constants');

// module.exports.checkNumMajorOne = (req, res, next) => {
//     req.query.num = Number(req.query.num);

//     if (!Number.isNaN(req.query.num)) {
//         if (req.query.num >= 1) {
//             next();
//         } else {
//             res.status(c.status.badRquest).send({ Message: 'Num menor a 1!' });
//         }
//     } else {
//         res.status(c.status.badRquest).send({ Message: 'Num not a number' });
//     }
// };

// module.exports.checkej02 = (req, res, next) => {
//     if (req.body.string !== 'mi-caja-fuerte') {
//         res.status(c.status.badRquest).send({ Message: 'String not introduced correctly!' });
//     } else {
//         req.body.num = Number(req.body.num);
//         if (!Number.isNaN(req.body.num)) {
//             next();
//         } else {
//             res.status(c.status.badRquest).send({ Message: 'Not a number' });
//         }
//     }
// };