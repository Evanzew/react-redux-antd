/**
 * create by jayce.mei
 * date : 4/26 2017
 */

var errorEnum = {
    Ok: { code: "200", message: "Ok" },
    NotFound: { code: "404", message: "Not Found" },
    SystemError: { code: "500", message: "Internal Server Error" },
    ServiceUnavailable: { code: "503", message: "Service Unavailable" },
    UnknownError: { code: "700", message: "Unknown Error" },
    NoEmployee: { code: "800", message: "Sorry, there are no emmloyees" },
    NoUser: { code: "801", message: "Sorry, user name or password is wrong" },
    NotFoundById: { code: "802", message: "Sorry, user can not find" },
}

module.exports = errorEnum;