const joi = require("@hapi/joi");

const schema = {
    user: joi.object({
        name: joi.string().max(100).required(),
        email: joi.string().max(100).required(),
        gender: joi.string().valid("m", "f", "o").required(),
        email: joi.string().email().required(),
        city:joi.string().max(50).required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
        mobile: joi.number().integer().min(1000000000).message("Invalid mobile number").max(9999999999).message("Invalid mobile number").required()
    })
};

module.exports = schema;