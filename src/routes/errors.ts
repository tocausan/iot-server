import * as httpErrors from 'http-errors';
import {Router, Request, Response, NextFunction} from 'express';

interface ErrorRoute extends Error {
    status?: number;
}

export const ErrorRoutes = Router()

    // catch 404 and forward to error handler
    .use((req: Request, res: Response, next: NextFunction) => {
        res.render('404', {url: req.url.replace(/\//, '')});
    })

    // error handler
    .use((err: ErrorRoute, req: Request, res: Response, next: NextFunction) => {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'dev' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.json(err.message);
    });
