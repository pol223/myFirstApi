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
    }
};

