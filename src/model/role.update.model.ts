import { User } from '../entities/user';
import { BaseEntity } from 'typeorm';
import { Role } from '../entities/role';
export class UpdateRoleModel extends BaseEntity {
  roleid: number;
  role: Role;
  users?: User;
}
