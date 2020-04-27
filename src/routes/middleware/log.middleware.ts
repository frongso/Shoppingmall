import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Request } from 'express';

@Middleware({ type: 'before' })
export class LogMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, response: any, next: (err?: any) => any) {
    // tslint:disable-next-line:no-console
    console.log(request.url);
    return next();
  }
}
