import express from 'express';
import EmployeeController from '../controller/employee';
import UserLoginController from '../controller/userLogin';
import routesconfig from '../config/routesconfig';
let router = express.Router();

//  employee
router.get(
  routesconfig.get_all_employee_url,
  EmployeeController.getAllEmployees
);
router.post(routesconfig.user_login, UserLoginController.userLogin);
router.post(
  routesconfig.post_add_employee_url,
  EmployeeController.createNewEmployees
);
router.delete(
  routesconfig.delete_employee_url,
  EmployeeController.deleteEmployee
);

router.post(
  routesconfig.post_find_employee_url,
  EmployeeController.getEmpByOption
);

router.post(
  routesconfig.post_update_employee_url,
  EmployeeController.updateEmployee
);

export default router;
