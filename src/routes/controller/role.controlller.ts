import { Role } from './../../entities/role';
import { User } from './../../entities/user';
import { RoleMapUser } from './../../entities/rsm_role_map_use';
import { JsonController, Get, Post, Body, Delete, QueryParam, Res } from 'routing-controllers';
import { Response } from 'express';
import { ConnectionOptions, createConnection } from 'typeorm';
// update delete select

const options: ConnectionOptions = {
  entities: [Role, User, RoleMapUser],
};

const connection = createConnection(options);

@JsonController('/role')
export class RoleController {
  @Get('/')
  getall() {
    return Role.find();
  }

  // @Post('/add')
  // generate(@Body() role: Role) {
  //   return Role.save(role);
  // }

  @Post('/save')
  async save(@Body() role: Role, @Body() user: User) {
    Role.save(role);
    RoleMapUser.save(role);
    RoleMapUser.save(user);
  }

  @Delete('/delete')
  delete(@QueryParam('id') roleid: number, @Res() response: Response) {
    Role.delete(roleid);
    return response.sendStatus(200);
  }

  @Post('/update')
  update() {
    return;
  }

  // เอา sql มาจากไหน
  // เอา queryparam ใส่ไปใน ข้อความเลือก sql ยังไง
  @Post('select')
  select(@QueryParam('id') roleid: number, @Res() response: Response) {
    sql.query('SELECT * FROM shopping_mall.rsm_role_map_user WHERE MSM_ROLE_ID = {id};', (err, rows) => {
      response.send(rows);
    });
  }
}
