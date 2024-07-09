import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'user/entities/user.entity';
import { UserResolver } from 'user/user.resolver';
import { UserService } from 'user/user.service';
import { CryptoService } from './crypto.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver, UserService, CryptoService],
  exports: [UserService, CryptoService],
})
export class UserModule {}
