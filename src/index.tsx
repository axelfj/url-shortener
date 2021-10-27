import "./index.css";

import * as yup from "yup";

import express, { Application, NextFunction, Request, Response } from "express";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import cors from "cors";
import helmet from "helmet";
import { nanoid } from "nanoid";
import reportWebVitals from "./reportWebVitals";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const schema = yup.object().shape({
  dest: yup.string().trim().url().required(),
  slug: yup.string().trim(),
});

app.post("/create", async (req: Request, res: Response, next: NextFunction) => {
  let { slug, dest } = req.body;

  try {
    await schema.validate({ dest, slug });
    if (!slug) {
      slug = nanoid(5).toLowerCase();
    }
    slug = slug.toLowerCase();
    res.json({ slug, dest });
  } catch (error) {
    next(error);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.status(400).send({ msg: "Invalid Request", code: err.message });
  } else {
    next();
  }
});

app.listen(5000, () => {
  console.log("running at 5000");
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
