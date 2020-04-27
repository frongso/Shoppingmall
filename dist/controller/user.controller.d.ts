import { User } from './../entities/user';
export declare class UserController {
    getAll(): Promise<User[]>;
    register(user: User): Promise<User>;
    delete(id: User['id'], user: User): Promise<import("typeorm").DeleteResult>;
}
