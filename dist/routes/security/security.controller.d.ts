import { Response, Request } from 'express';
export declare class SecurityController {
    login(response: Response, request: Request): Promise<Response<any>>;
}
