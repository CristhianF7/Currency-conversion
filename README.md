This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To develop on this project, please follow the next instructions:

- [npm install] to install all the dependencies of the project
- [npm test] to run all unit test in the project
- [npm start] to initilizate the dev environment.


---

This is a project to calculate the currency conversion of any country
if is defined on this endpoint 'https://api.fixer.io/latest'.

If you desire change the url endpoint you can change it in src/environment/config.js


Configurations = {
    apiConvertUrl : 'https://api.fixer.io/'
}

For this deliver only are allowed USD and EUR conversions and are defined in the following array:

in src/component/form  

line 9, method componentDidMount

var allowedOperations = ['USD', 'EUR'];

you can add progressive any currency conversion to be allowed in the app

Enjoy the app.