// import { JwtService } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from './comment/comment.module';
import { RoadmapModule } from './roadmap/roadmap.module';
import { LogworkModule } from './logwork/logwork.module';
import { RoadmapUserModule } from './roadmap-user/roadmap-user.module';
import { TaskModule } from './task/task.module';
import { UserEntity } from './users/entities/user.entity';
import { UserModule } from './users/user.module';
import { CommentEntity } from './comment/entities/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Loại cơ sở dữ liệu
      host: process.env.DB_HOST || 'localhost', // Địa chỉ host cơ sở dữ liệu
      port: Number(process.env.DB_PORT || '3306'), // Cổng kết nối cơ sở dữ liệu
      username: process.env.DB_USER || 'root', // Tên người dùng cơ sở dữ liệu
      password: process.env.DB_PASSWORD || '123', // Mật khẩu cơ sở dữ liệu
      database: process.env.DB_NAME || 'study_management', // Tên cơ sở dữ liệu
      //Có thể khai báo luôn đường dẫn entities thanh vì doc mẫu
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }), // Đường dẫn đến các entities
    // Nên khóa synchronize
    // synchronize: true, // Tự động tạo và cập nhật các bảng trong cơ sở dữ liệu
    UserModule,
    CommentModule,
    RoadmapModule,
    LogworkModule,
    RoadmapUserModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
