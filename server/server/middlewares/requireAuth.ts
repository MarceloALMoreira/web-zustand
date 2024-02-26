import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
  jwt.verify(token, "secret", (error, user) => {
    if (error) {
      return res.status(401).json({ error: "Token not provided" });
    }
    console.log(user);
    req.user = user;
    //se tiver user continue
    next();
  });
};
