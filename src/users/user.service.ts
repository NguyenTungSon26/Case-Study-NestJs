import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findById(id: number): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({
      relations: {
        comments: true,
        logworks: true,
        roadmaps: true,
      },
      where: { id },
    });
  }

  // async createUser(name: string, email: string): Promise<UserEntity> {
  //   const user = this.userRepository.create({ name, email });
  //   return this.userRepository.save(user);
  // }
}
