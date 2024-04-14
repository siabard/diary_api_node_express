import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { corsOptions } from './common/corsOption';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3030;

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan("common")); 

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localshot:${port}`);
});