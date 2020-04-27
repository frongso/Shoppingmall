import { Role } from './../entities/role';
import { JsonController, Get, Post, Body } from 'routing-controllers';

@JsonController('/role')
export class RoleController {
  @Get('/')
  getall() {
    return Role.find();
  }

  @Post('/register')
  register(@Body() role: Role) {
    return Role.save(role);
  }
}
