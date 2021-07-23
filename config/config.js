const env = process.env;
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({
    path: path.resolve(__dirname, env.NODE_ENV + '.env')
});

console.log("env: "+env.NODE_ENV)

const config = {
    host: env.HOST,
    port: env.PORT,
    jwt_secret: env.JWT_SECRET,
    allowList : env.ALLOW_LIST.split(',')

};

module.exports = config;
