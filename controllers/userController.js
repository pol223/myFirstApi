// module.exports.list = () => {

const { use } = require("../routes/userRoutes");

// };

// module.exports.profile = () => {

// };

const users = [
{id: 1, name: 'jonh'},
{id: 2, name: 'david'}, 
{id: 3, name: 'maria'}
];

const status = {
    ok: 200,
    notFound: 404,
    created: 201,
};

const c = require('../constants/constants');
const userService = require('../services/userService');

module.exports = {
    list: (req, res) => {
        console.log(req.body)
        res.status(status.ok).send(users);
    },
    profile: (req, res) => {
        // console.log(req,params);
        const user = users.find((user) => user.id == req.params.userId);
        if(user){
            res.status(status.ok).send(user);
        }else{
            const msg = {error: 'user ID not found'};
            res.status(status.notFound).send(msg);
        }
        
    },
    create: (req, res) => {
        const user = req.body;
        user.id = users.length + 1;

        users.push(user);

        res.status(status.created).send(user);
    },

    selectById: async (req, res) => {
        const response = { status: c.status.serverError, msg: 'Internal server error' };
        try {
            const userId = req.params.id;
            const resFromService = await userService.selectById(userId);
            if (resFromService.status) {
                if (resFromService.result) {
                    response.body = resFromService.result;
                    response.msg = `User found`;
                    response.status = c.status.ok;
                } else {
                    response.msg = `User not found`;
                    response.status = c.status.notFound;
                }
            }
                
        } catch (err) {
            response.error = err;
            console.log('ERROR-userControler-selectById: ', err);
        }
        res.status(response.status).send(response);
    },
};

