import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

export const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
const schema = yup.object({ dest: yup.string().trim().url().required(), slug: yup.string().trim() });
app.post('/create', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { dest, slug: requestedSlug } = await schema.validate(req.body);
    const slug = (requestedSlug || nanoid(5)).toLowerCase();
    res.json({ slug, dest });
  } catch (error) { next(error); }
});
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(400).json({ msg: 'Invalid Request', code: err.message });
});
