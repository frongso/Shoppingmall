import { User } from './../../entities/user';
import { JsonController, Post, Req, Res } from 'routing-controllers';
import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import * as config from '../../config/server';

@JsonController()
export class SecurityController {
  @Post('/login')
  // ทำไมต้องมี async
  async login(@Res() response: Response, @Req() request: Request) {
    // Check if username and password are set
    const username = request.body.username;
    const password = request.body.password;
    if (!(username && password)) {
      return response.sendStatus(400);
    }

    // Get user from database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail({ where: { username } });
    } catch (error) {
      return response.sendStatus(401);
    }

    // Check if encrypted password match
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      response.sendStatus(401);
      return;
    }

    // Sing JWT, valid for 1 hour
    const token = jwt.sign({ userId: user.id, username: user.username }, config.secretKey, { expiresIn: config.tokenLife });

    // Send the jwt in the response
    response.send(token);
  }
}
