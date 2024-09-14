import express, { Request, Response } from 'express';
import routes from './src/routes';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () =>  {
    console.log(`Server is running on port ${port}`);
});

app.use(routes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hola mundo');
});
