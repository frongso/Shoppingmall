// import { BaseEntity, Column, Entity } from 'typeorm';
// import * as bcrypt from 'bcryptjs';

// @Entity('msm_user', { schema: 'shopping_mall' })
// export class User extends BaseEntity {
//   @Column('bigint', {
//     primary: true,
//     name: 'MSM_USER_ID',
//     generated: true,
//     width: 22,
//   })
//   id: number;

//   @Column('varchar', { name: 'MSM_USERNAME', unique: true, nullable: false })
//   username: string;

//   @Column('varchar', { name: 'MSM_PASSWORD', nullable: false })
//   password: string;

//   @Column('varchar', { name: 'MSM_USR_FIRST_NAME', nullable: false })
//   firstName: string;

//   @Column('varchar', { name: 'MSM_USR_LAST_NAME', nullable: false })
//   lastName: string;

//   @Column('varchar', { name: 'MSM_USR_EMAIL', nullable: true })
//   email: string;

//   hashPassword() {
//     this.password = bcrypt.hashSync(this.password, 8);
//   }

//   checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
//     return bcrypt.compareSync(unencryptedPassword, this.password);
//   }
// }

import { Entity, Column, BaseEntity } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity({
  name: 'msm_user',
  schema: 'shopping_mall',
})
export class User extends BaseEntity {
  @Column('bigint', {
    name: 'MSM_USER_ID',
    primary: true,
    generated: true,
    width: 22,
  })
  id: number;

  @Column('varchar', {
    name: 'MSM_USR_USERNAME',
    unique: true,
    nullable: false,
    length: 50,
  })
  username: string;

  @Column('varchar', {
    name: 'MSM_USR_PASSWORD',
    nullable: false,
    length: 250,
  })
  password: string;

  @Column('varchar', {
    name: 'MSM_USR_FIRSTNAME',
    nullable: false,
    length: 50,
  })
  firstname: string;

  @Column('varchar', {
    name: 'MSM_USR_LASTNAME',
    nullable: false,
    length: 50,
  })
  lastname: string;

  @Column('varchar', {
    name: 'MSM_USR_EMAIL',
    nullable: true,
    length: 50,
  })
  email: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
