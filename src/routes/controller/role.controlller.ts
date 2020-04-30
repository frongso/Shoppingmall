import { UpdateRoleModel } from './../../model/role.model';
import { Role } from './../../entities/role';
import { User } from './../../entities/user';
import { RoleMapUser } from './../../entities/rsm_role_map_use';
import { JsonController, Get, Post, Body, Delete, QueryParam, Res } from 'routing-controllers';
import { Response } from 'express';

@JsonController('/role')
export class RoleController {
  @Get('/')
  getall() {
    return Role.find();
  }

  @Get('/select')
  async getselect(@QueryParam('id') roleid: number, @Res() response: Response) {
    const rolemapuserselect = await RoleMapUser.find({
      where: [{ role: roleid }],
    });
    return response.send(rolemapuserselect);
  }

  @Post('/save')
  async save(@Body() role: Role, @Body() user: User) {
    Role.save(role);
    const rolemapuser = new RoleMapUser();
    rolemapuser.role = role;
    rolemapuser.user = user;
    RoleMapUser.save(rolemapuser);
  }

  @Delete('/delete')
  async delete(@QueryParam('id') roleid: number, @Res() response: Response) {
    Role.delete(roleid);
    const rolemapuserDel = await RoleMapUser.find({
      where: [{ role: roleid }],
    });
    RoleMapUser.remove(rolemapuserDel);
    return response.sendStatus(200);
  }

  @Post('/update')
  update(@Body() updaterolemodel: UpdateRoleModel) {
    Role.update({ id: updaterolemodel.roleid }, updaterolemodel.role);
    RoleMapUser.update({ role: updaterolemodel.role }, updaterolemodel.users);
  }
}
