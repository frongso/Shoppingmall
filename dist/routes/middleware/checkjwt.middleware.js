// import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
// import * as jwt from 'jsonwebtoken';
// import * as config from '../../config/server';
// @Middleware({ type: 'before' })
// export class CheckJwtMiddleware implements ExpressMiddlewareInterface {
//   use(request: Request, response: any, next: (err?: any) => any) {
//     // Get the jwt token from the head does it work ?
//     const token = request.headers[token];
//     // Try to validate the token and get data
//     try {
//       const payload = jwt.verify(token, config.secretKey);
//       response.locals.jwtPayload = payload;
//     } catch (error) {
//       // If token is not valid, respond with 401 (unauthorized)
//       response.sendStatus(401);
//       return;
//     }
//     // The token is valid for 1 hour
//     // We want to send a new token on every request
//     const newToken = jwt.sign({ userId: response.locals.jwtPayload.id, username: response.locals.jwtPayload.username }, config.secretKey, { expiresIn: config.tokenLife });
//     // Set header to send new token
//     response.setHeader('token', newToken);
//     // go next to controller
//     next();
//   }
// }
//# sourceMappingURL=checkJwt.middleware.js.map