import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const loginHandler = (req: Request, res: Response) => {
  // req.body = {email: 'ass' , password:'123456'}
  //validation, express-validato, joi, zod, yup...

  //store in database - mongodb, mysql, pg, etc..

  //generate token - asdaASIIs454das asdas7asd8778as 8788787415454
  console.log(req.body);

  //token generate
  const token = jwt.sign({ teste: "teste" }, "secret", {
    expiresIn: 60 * 60 * 24, //24 hours
  });
  return res.json({
    token,
  });
};

//rota protegida por um mildeware
export const profileHandler = (req: Request, res: Response) => {
  res.status(200).json({ profile: req.user, message: "Profile data" });
};
