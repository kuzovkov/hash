#!/usr/bin/env node

var bcrypt = require('bcryptjs');

var pass = '123456';

SALT_WORK_FACTOR = 10;

var saltWorkFactor = null;

var App = {};

App.hashPassword = function(plain) {
    var salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    console.log('salt:'+salt);
    //salt = '$2a$10$5ut3QSUxfHNiEsKiTnf7WO';
    return bcrypt.hashSync(plain, salt);
};



console.log(['Hash for "', pass, '" = ', App.hashPassword(pass)].join(''));

var salt = '$2a$10$5ut3QSUxfHNiEsKiTnf7WO';
console.log(['Hash for "', pass, '" and salt "',salt, '"= ', bcrypt.hashSync(pass, salt)].join(''));