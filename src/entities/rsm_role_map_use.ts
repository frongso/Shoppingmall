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

  // @Column('bigint', {
  //   name: 'MSM_USER_ID',
  //   nullable: false,
  // })
  // userid: number;

  @OneToOne((type) => User)
  @JoinColumn({ name: 'MSM_USER_ID' })
  userid: number;

  // @Column('bigint', {
  //   name: 'MSM_ROLE_ID',
  //   nullable: false,
  // })
  // roleid: number;

  @OneToOne((type) => Role)
  @JoinColumn({ name: 'MSM_ROLE_ID' })
  roleid: number;
}
