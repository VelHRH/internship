import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LocationService } from 'location/location.service';
import { UserLocationInput } from 'user/dto/user-location.dto';
import { LocationsInput } from './dto/locations-input.dto';
import { NameCountryInput } from './dto/name-country-input.dto';
import { Location } from './entities/location.entity';

@Resolver(of => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Query(returns => Location)
  getLocation(@Args('id', { type: () => Int }) id: number): Promise<Location> {
    return this.locationService.get(id);
  }

  @Query(returns => Location)
  getLocationByNameCountry(
    @Args('nameCountryInput')
    nameCountryInput: NameCountryInput,
  ): Promise<Location> {
    return this.locationService.getByNameCountry(nameCountryInput);
  }

  @Query(returns => [Location])
  locations(
    @Args('locationsInput')
    locationsInput: LocationsInput,
  ): Promise<Location[]> {
    return this.locationService.list(locationsInput);
  }

  @Query(returns => [Location])
  topLocations(): Promise<Location[]> {
    return this.locationService.listTop();
  }

  @Mutation(returns => Location)
  addUserLocation(
    @Args('userLocationInput') userLocationInput: UserLocationInput,
  ): Promise<Location> {
    return this.locationService.addUserLocation(userLocationInput);
  }

  @Mutation(returns => Location)
  removeUserLocation(
    @Args('userLocationInput') userLocationInput: UserLocationInput,
  ): Promise<Location> {
    return this.locationService.removeUserLocation(userLocationInput);
  }
}
