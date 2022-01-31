const mongoose = require('mongoose');
const Film = require('../models/db/userModel');
const repository = require('../database/repository');

module.exports.selectById = async (filmId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(filmId),
      model: Film,
      projection: {
        
      }
    };
    const resFromRepo = await repository.selectById(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async (queryParams, pagination) => {
  const response = { status: false };
  try {
    const data = {
      findQuery: queryParams,
      model: User,
      projection: {
        
      }
    };
    if (pagination.skip && pagination.limit) {
      data.skip = pagination.skip;
      data.limit = pagination.limit;
    }
    const resFromRepo = await repository.selectAll(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-selectAll: ', err);
  }
  return response;
}

module.exports.create = async (userFromController) => {
  const response = { status: false };
  try {
    const user = new Film(userFromController);
    const resFromRepo = await repository.create(user);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-create: ', err);
  }
  return response;
}

module.exports.update = async (user) => {
  const response = { status: false };
  try {
    const data = {
      _id: {_id: mongoose.Types.ObjectId(user.id)},
      model: Film,
      projection: {
        
      },
      updateQuery: {}
    };
    if (user.title) data.updateQuery.title = user.title;
    if (user.anoEstreno) data.updateQuery.anoEstreno = user.anoEstreno;
    if (user.duracion) data.updateQuery.duracion = user.duracion;
    const resFromRepo = await repository.update(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch(err) {
    console.log('ERROR-userService-update: ', err);
  }
  return response;
}

module.exports.delete = async (userId) => {
  const responseObj = { status: false };
  try {
  const data = {
  findQuery: { _id: mongoose.Types.ObjectId(userId) },
  model: Film,
  projection: { __v: false }
  };
  const responseFromRepository = await repository.delete(data);
  if (responseFromRepository.status) {
  responseObj.result = responseFromRepository.result;
  responseObj.status = true;
  }
  } catch (error) {
  responseObj.error = error;
  console.log(`ERROR-userService-delete: ${error}`);
  }
  return responseObj;
  };