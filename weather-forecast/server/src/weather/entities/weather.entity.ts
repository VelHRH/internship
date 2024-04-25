import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Location } from 'location/entities/location.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CurrentWeather } from './current-weather';
import { ForecastWeather } from './forecast-weather';

@Entity()
@ObjectType()
export class Weather {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @OneToOne(() => Location)
  @JoinColumn()
  @Field(type => Location)
  location: Location;

  @Column('timestamptz')
  @Field()
  updatedAt: Date;

  @Column('jsonb')
  @Field(type => [ForecastWeather])
  forecasts: ForecastWeather[];

  @Column('jsonb')
  @Field(type => CurrentWeather)
  current: CurrentWeather;
}
