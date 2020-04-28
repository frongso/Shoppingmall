import { Entity, BaseEntity, Column } from 'typeorm';

@Entity('rsm_role_map_user', { schema: 'shopping_mall' })
export class RoleMapUser extends BaseEntity {
  @Column('bigint', {
    primary: true,
    name: 'RSM_RMU_ID',
    nullable: false,
    width: 22,
  })
  rumid: number;
  @Column('bigint', {
    name: 'MSM_USER_ID',
    nullable: false,
  })
  userid: number;
  @Column('bigint', {
    name: 'MSM_ROLE_ID',
    nullable: false,
  })
  roleid: number;
}
