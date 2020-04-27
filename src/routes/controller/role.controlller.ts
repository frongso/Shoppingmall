import { Role } from '../../entities/role';
import { JsonController, Get, Post, Body, Delete, QueryParam, Res } from 'routing-controllers';
import { Response } from 'express';

@JsonController('/role')
export class RoleController {
  @Get('/')
  getall() {
    return Role.find();
  }

  @Post('/generate')
  generate(@Body() role: Role) {
    return Role.save(role);
  }
  @Delete('/delete')
  delete(@QueryParam('id') id: number, @Res() response: Response) {
    Role.delete(id);
    return response.sendStatus(200);
  }
}
