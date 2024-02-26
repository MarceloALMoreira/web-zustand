"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginHandler = (req, res) => {
    // req.body = {email: 'ass' , password:'123456'}
    //validation, express-validato, joi, zod, yup...
    //store in database - mongodb, mysql, pg, etc..
    //generate token - asdaASIIs454das asdas7asd8778as 8788787415454
    console.log(req.body);
    //token generate
    const token = jsonwebtoken_1.default.sign({ teste: "teste" }, "secret", {
        expiresIn: 60 * 60 * 24, //24 hours
    });
    return res.json({
        token,
    });
};
exports.loginHandler = loginHandler;
//rota protegida por um mildeware
const profileHandler = (req, res) => {
    res.status(200).json({ message: "Bem  vindo" });
};
exports.profileHandler = profileHandler;
