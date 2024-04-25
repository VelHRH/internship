import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Path } from 'constants/paths';
import { LocationModule } from 'location/location.module';
import { join } from 'path';
import { UserModule } from 'user/user.module';
import formatError from 'utils/formatError';
import { dataSourceOptions } from '../db/data-source';
import { AuthModule } from './auth/auth.module';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), Path.GQL_SCHEMA),
      installSubscriptionHandlers: true,
      path: Path.API_PREFIX,
      formatError,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    LocationModule,
    AuthModule,
    WeatherModule,
  ],
})
export class AppModule {}
