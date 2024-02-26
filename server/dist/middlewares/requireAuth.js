"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth = (req, res, next) => {
    // vamos verificar o authheader
    const authHeader = req.headers.authorization;
    //   `Bearer asdasdkasjdkjiasd6457`;
    //mais simplemente se eu enviar qualer string ele passa aqui!
    //   Authorization '123"
    if (!authHeader) {
        return res.status(401).json({ error: "Token not provided" });
    }
    //aqui ja to comprovando que tenho que passar o Bearer + alguma string
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Token not provided" });
    }
    //finalmente vamos passa o proprio  token para ser usado na requisição que temos no login verify.
    jsonwebtoken_1.default.verify(token, "secret", (error, user) => {
        if (error) {
            return res.status(401).json({ error: "Token not provided" });
        }
        console.log(user);
        req.user = user;
        //se tiver user continue
        next();
    });
};
exports.requireAuth = requireAuth;
