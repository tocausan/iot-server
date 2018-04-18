import * as path from "path";
import {Router, Request, Response, NextFunction} from 'express';
import {UserRoutes} from "./users";
import {ErrorRoutes} from "./errors";

export const Routes = Router()

    .get('/', (req: Request, res: Response, next: NextFunction) => {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    })

    .use('/users', UserRoutes)
    .use(ErrorRoutes);
