import { SaveRoleModel } from './../../model/role.save.model';
import { UpdateRoleModel } from '../../model/role.update.model';
import { Role } from './../../entities/role';
import { RoleMapUser } from './../../entities/rsm_role_map_use';
import { JsonController, Get, Post, Body, Delete, QueryParam, Res } from 'routing-controllers';
import { Response } from 'express';

@JsonController('/role')
export class RoleController {
  // check
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

  // Cant get save
  @Post('/save')
  async save(@Body() saverolemodel: SaveRoleModel) {
    Role.save(saverolemodel.role);
    const rolemapuser = new RoleMapUser();
    rolemapuser.role = saverolemodel.role;
    rolemapuser.user = saverolemodel.user;
    RoleMapUser.save(rolemapuser);
  }

  // Cant get delete
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
