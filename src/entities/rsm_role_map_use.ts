import { Role } from './role';
import { User } from './user';
import { Entity, BaseEntity, Column, OneToOne, JoinColumn, OneToMany, ManyToMany, ManyToOne } from 'typeorm';

@Entity('rsm_role_map_user', { schema: 'shopping_mall' })
export class RoleMapUser extends BaseEntity {
  @Column('bigint', {
    primary: true,
    name: 'RSM_RMU_ID',
    nullable: false,
    width: 22,
  })
  rumid: number;

  // มันจะรู้ได้ไงว่าเราเอาแค่ user id อย่างเดียว
  @ManyToOne((type) => User, (user) => user.rolemapuser)
  @JoinColumn({ name: 'MSM_USER_ID' })
  user: User;

  // มันจะรู้ได้ไงว่าเราเอาแค่ role id อย่างเดียว
  @ManyToOne((type) => Role, (role) => role.rolemapuser)
  @JoinColumn({ name: 'MSM_ROLE_ID' })
  role: Role;
}
