# react-redux-antd-employee-system

- This is an employee system designed by atnd, react , redux ,etc. And this is my first react self-learning project, please forgive me if there is anything wrong.
- (At the beginning, this system was designed by react-bootstrap. Now, it has been rebuild by atnd. I can provide the previous version if needed.)
- I will write some comments for you to understand this system.

## Database Structure (数据库结构)

> Database structure

- Vue
  - Emplpyee
  - User

![alt text](/app/assets/Database-structure.jpg 'Database structure')

> Employee structure(Employee 表结构)

```bash
  "First_Name" : "xx",
  "Last_Name" : "xx",
  "Gender" : "M",
  "Birth" : "YYYY-MM-DD",
  "Address" : "XX",
  "Phone" : NumberLong(111111111111)
```

> User structure(User 表结构)

```bash
  "User_Name" : "Evan.Zou",
  "Password" : "123"
```

## Build Setup

> Node.js version in my local enviorment is `10.15.0`.

```bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start
```

## Demo Preview

> Home Page Preview

![alt text](/app/assets/preview-home.jpg 'Home page preview')

> Create Page Preview

![alt text](/app/assets/preview-new.jpg 'Create page preview')

> Login Page Preview

![alt text](/app/assets/preview-login.jpg 'Login page preview')

> Update Employee priview

![alt text](/app/assets/preview-update.jpg 'Update page preview')

> Charts Page priview

![alt text](/app/assets/preview-chart.jpg 'Charts page preview')
