import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'sercretkey',
    });
  }
  async validate(payload: any) {
    // const user = await this.userservice.getUserById(payload.userid)
    // return  data to user
    return { userId: payload.userId };
  }
}
