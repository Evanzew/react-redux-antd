var db = require('../app/model/db.js');
var mongodb = require('mongodb');
var errorEnum = require('../enum/ErrorEnum.js');
var resultJson = require('../config/resultJson.js');
const util = require('util');
var dbconfig = require('../config/dbconfig');
module.exports = {
  getAllEmployees: function(req, res) {
    db.findData('Employee', {}, function(err, data) {
      if (util.isNull(data) || data.length == 0) {
        res.json(
          resultJson.createErrorResult(
            errorEnum.NoEmployee.code,
            errorEnum.NoEmployee.message
          )
        );
        return;
      }
      var voList = [
        '_id',
        'First_Name',
        'Last_Name',
        'Gender',
        'Birth',
        'Address',
        'Phone'
      ];
      var result = convertDBDataToVo(data, voList);
      res.json(resultJson.createDataResult(result));
    });
  },

  getEmpByOption: function(req, res) {
    var data = {};
    if (req.body.content != '') {
      data[req.body.option] = req.body.content;
    }
    db.findData('Employee', data, function(err, data) {
      var voList = [
        '_id',
        'First_Name',
        'Last_Name',
        'Gender',
        'Birth',
        'Address',
        'Phone'
      ];
      var result = convertDBDataToVo(data, voList);
      res.json(resultJson.createDataResult(result));
    });
  },

  deleteEmployee: function(req, res) {
    var queryJson = {
      _id: mongodb.ObjectId(req.body.id)
    };
    db.findData('Employee', queryJson, function(err, data) {
      if (util.isNull(data) || data.length == 0) {
        res.json(
          resultJson.createErrorResult(
            errorEnum.NotFoundById.code,
            errorEnum.NotFoundById.message
          )
        );
        return;
      } else {
        db.deleteOne('Employee', queryJson, function(err, data) {
          res.json(resultJson.createDataResult('Delete employee succeed'));
        });
      }
    });
  },

  createNewEmployees: function(req, res) {
    var data = {
      First_Name: req.body.First_Name,
      Last_Name: req.body.Last_Name,
      Gender: req.body.Gender,
      Birth: req.body.Birth,
      Address: req.body.Address,
      Phone: parseInt(req.body.Phone)
    };
    db.insertOne('Employee', data, function(err, result) {
      res.json(resultJson.createDataResult(result.insertedcourt));
    });
  },

  updateEmployee: function(req, res) {
    db.updateData(
      'Employee',
      { _id: mongodb.ObjectId(req.body._id) },
      {
        $set: {
          Address: req.body.Address,
          Phone: req.body.Phone
        }
      },
      function(err, result) {
        res.json(resultJson.createDataResult('Update Success'));
      }
    );
  }
};

function convertDBDataToVo(dataArray, voArray) {
  var resultArray = [];

  dataArray.map(dbData => {
    var resultData = {};
    voArray.map(function(voData) {
      resultData[voData] = dbData[voData];
    });
    resultArray.push(resultData);
  });
  return resultArray;
}
