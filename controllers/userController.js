// module.exports.list = () => {
// };

// module.exports.profile = () => {
// };
const users = [
  {id: 1, name: 'john'},
  {id: 2, name: 'david'},
  {id: 3, name:'maria'}
];
const status = {
  ok: 200,
  notFound: 404,
  created: 201,
};

const c = require('../config/constants');
const userService = require('../services/userService');

module.exports = {
  list: (req, res) => {
    // console.log(req.query.orden);
    console.log(req.body)
    // petició a la BBDD per obtenir users
    res.status(status.ok).send(users);
  },

  profile: (req, res) => {
    // Petició a la BBDD per obtenir les dades d'un user
    // console.log(req.params);
    const user = users.find((user) => user.id == req.params.userId);
    if (user) {
      res.status(status.ok).send(user);
    } else {
      const msg = { error: 'User Id not found' };
      res.status(status.notFound).send(msg);
    }
  },

  create: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const user = req.body;
      const resFromService = await userService.create(user);
      if (resFromService.status) {
        response.status = c.status.created;
        response.msg = 'Film created';
        response.body = resFromService.result;
      }
    } catch(err) {
      console.log('ERROR-userController-create: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  update: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const user = req.body;
      user.id = req.params.id;
      const resFromService = await userService.update(user);
      if (resFromService.status) {
        response.status = c.status.ok;
        response.msg = 'Film update';
        response.body = resFromService.result;
      }
    } catch(err) {
      console.log('ERROR-userController-update: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  delete: async (req, res) => {
    const responseObj = { status: c.status.serverError, msg: 'Internal server error' };
    try {
    const user = req.body;
    user.id = req.params.id;
    const responseFromService = await userService.delete(user);
    if (responseFromService.status) {
    responseObj.body = responseFromService.result;
    responseObj.msg = 'Film removed successfully';
    responseObj.status = 200;
    }
    } catch (error) {
    responseObj.error = error;
    console.log('ERROR-userController-delete: ${error}');
    }
    return res.status(responseObj.status).send(responseObj);
    },
    
  selectById: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const userId = req.params.id;
      const resFromService = await userService.selectById(userId);
      if (resFromService.status) {
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Film found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Film not found';
        }
      }
    } catch(err) {
      console.log('ERROR-userController-selectById: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectAll: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'Internal server error' };
    try {
      const queryParams = {};
      if (req.query.active) queryParams.active = req.query.active;
      const pagination = {};
      if (req.query.skip) pagination.skip = +req.query.skip;
      if (req.query.limit) pagination.limit = +req.query.limit;
      const resFromService = await userService.selectAll(queryParams, pagination);
      if (resFromService.status) {
        // response.status = c.status.ok;
        // response.body = resFromService.result;
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Users found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Users not found';
        }
      }
    } catch(err) {
      console.log('ERROR-userController-selectAll: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },
};