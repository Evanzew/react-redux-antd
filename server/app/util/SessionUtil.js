/**
 * author: jayce.mei
 * date : 5/16 2017
 */

"use strict"

module.exports = {
    setUserInfoToSession : function(session,user){
        session.user = user;
    },

    getUserInfoFromSession : function(session){
        var user = session.user
        return user;
    },
    
    removeUserInfoFromSession : function(session){
        session.user = null;
    }

}