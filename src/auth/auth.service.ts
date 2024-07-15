import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  // we have to implement the signup and signIn

  // we have to validata a user with username and password

  async validateUser(username: string, pass: string) {
    // check the user with username and passsword

    const user = await this.userService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: any) {
    const payload = { userId: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
