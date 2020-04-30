import { UpdateRoleModel } from './../../model/role.model';
import { Role } from './../../entities/role';
import { User } from './../../entities/user';
import { Response } from 'express';
export declare class RoleController {
    getall(): Promise<Role[]>;
    getselect(roleid: number, response: Response): Promise<Response<any>>;
    save(role: Role, user: User): Promise<void>;
    delete(roleid: number, response: Response): Promise<Response<any>>;
    update(updaterolemodel: UpdateRoleModel): Promise<void>;
}
