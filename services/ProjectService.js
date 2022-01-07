/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Project } = require('../models/Project');

/**
* Creates the data
*
* project Project data to be created
* returns project
* */
const createproject = ({ project }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Project(project).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* projectId String the Id parameter
* no response value expected for this operation
* */
const deleteproject = ({ projectId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Project.findOneAndDelete({ _id:projectId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllproject = () => new Promise(
  async (resolve, reject) => {
    try {
      query = await Project.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* projectId String the Id parameter
* returns project
* */
const getproject = ({ projectId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Project.findById(projectId).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* projectId String the Id parameter
* project Project data to be updated (optional)
* returns project
* */
const updateproject = ({ projectId, project }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Project.findOneAndUpdate({ _id:projectId },project).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createproject,
  deleteproject,
  getAllproject,
  getproject,
  updateproject,
};
