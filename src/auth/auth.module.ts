// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { LocalStrategy } from './local.strategy';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule } from '@nestjs/jwt';
// import { jwtConstants } from './constants';
// import { UsersModule } from 'src/users/user.module';

// @Module({
//   imports: [
//     UsersModule,
//     PassportModule,
//     JwtModule.register({
//       secret: jwtConstants.secret,
//       signOptions: { expiresIn: '60s' },
//     }),
//   ],
//   providers: [AuthService, LocalStrategy],
//   exports: [AuthService],
// })
// export class AuthModule {}
