import { Controller, Get, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(@Request() req): string {
    console.log(req.user);
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('local'))
  @Post('/auth/login')
  async login(@Request() req) {
    console.log(req.user);
    const token = await this.authService.login(req.user);

    return Object.assign(req.user, token);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    console.log(req.user);
    return req.user;
  }
}
