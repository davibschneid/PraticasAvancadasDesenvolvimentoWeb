import { Controller, Get, Req,Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    // Inicia o processo de autenticação com Google
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    // Redireciona após o login bem-sucedido
    const token = req.user.accessToken;     
    return res.redirect(`http://localhost:3000/auth/google/callback?token=${token}`);
  }

  @Get('status')
  user(@Req() req) {
    return req.user;
  }

  @Get('logout')
  logout(@Req() req) {
    req.logout(() => {});
    return { message: 'Logged out' };
  }


}