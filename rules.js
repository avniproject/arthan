const _ = require('lodash');

module.exports = _.merge({},
    require('./registration/rules/registrationFormHandler'),
    require('./psychometricformat/psychometricCalculations.js'),
);