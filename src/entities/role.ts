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
