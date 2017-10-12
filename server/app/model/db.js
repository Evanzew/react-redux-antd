var dataconfig = require('../../config/dbconfig');
//this module includes all the common opreations in database
var MongoClient = require('mongodb').MongoClient;
//pack the database-connecting function into innher function

function _connectDB(callback) {
  var url =
    'mongodb://' +
    dataconfig.dataurl +
    ':' +
    dataconfig.dataport +
    '/' +
    dataconfig.dataname;

  MongoClient.connect(url, function(err, db) {
    if (err) {
      callback(err, null);
    } else {
      MongoClient.connect(url, function(err, db) {
        if (err) {
          callback(err, null);
        } else {
          callback(err, db);
        }
      });
    }
  });
}

//find data

exports.findData = function(collectionName, json, callback) {
  var result = [];

  _connectDB(function(err, db) {
    if (db == null) {
      return callback(err, result);
    }

    db
      .collection(collectionName)
      .find(json)
      .toArray(function(err, resultArray) {
        callback(null, resultArray);
      });

    db.close();
  });
};

exports.deleteOne = function(collectionName, json, callback) {
  _connectDB(function(err, db) {
    if (db == null) {
      return callback(err, result);
    }

    db.collection(collectionName).deleteOne(json, function(err, result) {
      callback(err, result);
      db.close();
    });
  });
};

exports.insertOne = function(collectionName, json, callback) {
  _connectDB(function(err, db) {
    db.collection(collectionName).insertOne(json, function(err, result) {
      callback(err, result);
      db.close();
    });
  });
};

exports.updateData = function(collectionName, json1, json2, callback) {
  _connectDB(function(err, db) {
    db.collection(collectionName).update(json1, json2, function(err, result) {
      callback(err, result);
      db.close();
    });
  });
};
