import { Role } from './../entities/role';
export declare class RoleController {
    getall(): Promise<Role[]>;
    register(role: Role): Promise<Role>;
}
