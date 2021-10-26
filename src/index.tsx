import "./index.css";

import * as yup from "yup";

import express, { Application, NextFunction, Request, Response } from "express";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import cors from "cors";
import helmet from "helmet";
import nanoid from "nanoid";
import reportWebVitals from "./reportWebVitals";

const app: Application = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const schema = yup.object().shape({
  dest: yup.string().trim().url().required(),
  slug: yup.string().trim(),
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
