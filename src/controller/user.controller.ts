import { User } from './../entities/user';
import { JsonController, Get, Post, Body, Delete, Put } from 'routing-controllers';

@JsonController('/user')
export class UserController {
  @Get('/')
  getAll() {
    return User.find();
  }
  @Post('/register')
  register(@Body() user: User) {
    return User.save(user);
  }
  @Delete('/delete')
  delete(@Body() id: User['id'], user: User) {
    return User.delete(user[id]);
  }
  // @Put('/edit')
  // edit(@Body() user : User){
  //   return User.update(user,);
  // }
}
