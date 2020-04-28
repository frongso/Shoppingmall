// import { BaseEntity, Entity, Column } from 'typeorm';

// @Entity('msm_role', { schema: 'shopping_mall' })
// export class Role extends BaseEntity {
//   @Column('bigint', {
//     primary: true,
//     name: 'MSM_ROLE_ID',
//     generated: true,
//     width: 22,
//   })
//   id: number;

//   @Column('varchar', { name: 'MSM_ROLE_NAME', nullable: false, length: 50 })
//   roleName: string;
// }

import { Entity, BaseEntity, Column } from 'typeorm';

@Entity({
  name: 'msm_role',
  schema: 'shopping_mall',
})
export class Role extends BaseEntity {
  @Column('bigint', {
    name: 'MSM_ROLE_ID',
    primary: true,
    nullable: false,
    width: 22,
  })
  id: number;
  @Column('varchar', {
    name: 'MSM_ROLE_NAME',
    nullable: false,
  })
  name: string;
}
