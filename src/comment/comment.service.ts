import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}

  async findById(id: number): Promise<CommentEntity | undefined> {
    return this.commentRepository.findOne({
      relations: { user: true },
      where: { id },
    });
  }

  // async createUser(name: string, email: string): Promise<UserEntity> {
  //   const user = this.userRepository.create({ name, email });
  //   return this.userRepository.save(user);
  // }
}
