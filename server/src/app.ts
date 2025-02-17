import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandlers';
import blogRouter from './app/modules/blog/blog.route';
import messageRouter from './app/modules/message/message.route';
import projectsRouter from './app/modules/projects/project.routes';
const app: Application = express();
// const port = 3000;
app.use(express.json());
app.use(cors());

app.use('/api/blogs', blogRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/message', messageRouter);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(globalErrorHandler);
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: false,
    StatusCode: StatusCodes.NOT_FOUND,
    message: 'Route not found',
  });
});

export default app;
