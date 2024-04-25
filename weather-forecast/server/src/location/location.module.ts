import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from 'location/entities/location.entity';
import { LocationResolver } from 'location/location.resolver';
import { LocationService } from 'location/location.service';
import { UserModule } from 'user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Location]), UserModule],
  providers: [LocationResolver, LocationService],
  exports: [LocationService],
})
export class LocationModule {}
