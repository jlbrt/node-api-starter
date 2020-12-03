import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import * as errorHandlerMiddleware from './middlewares/errorHandlerMiddleware';

export const app = express();

app.use(helmet.expectCt());
app.use(
  helmet.referrerPolicy({
    policy: 'no-referrer',
  })
);
app.use(helmet.hsts());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

app.disable('x-powered-by');

app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? '' : '*', // TODO set production url(s)
  })
);

app.use(express.json());

// TODO register routes here

app.all('*', (req, res) => {
  return res.status(404).json({
    message: 'Not Found',
  });
});

app.use(errorHandlerMiddleware.handleJoiValidationError);
app.use(errorHandlerMiddleware.handleUnhandledError);
