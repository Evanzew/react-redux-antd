/**
 * create by jayce.mei
 * date : 4/26 2017
 */
var errorEnum = require("../enum/ErrorEnum.js");

var resultJson = {
    code:"",
    message:"",
    data : {}
};

module.exports = {
    createErrorResult : function(errorCode,errorMsg){
        return {code:errorCode,
                message:errorMsg,
                data:[] };
    },

    createDataResult : function(data){
        return {code:errorEnum.Ok.code,
                message:errorEnum.Ok.message,
                data:data };
    }

};