import { Path } from 'constants/paths';
import * as fs from 'fs';
import { Location } from 'location/entities/location.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class LocationInsert1709633599785 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const rawData = fs.readFileSync(Path.LOACTION_FILE, 'utf-8');
    const locationsData = JSON.parse(rawData);

    const chunkSize = 50;

    for (let i = 0; i < locationsData.length; i += chunkSize) {
      const chunk = locationsData.slice(i, i + chunkSize);

      const formatedChunk: Location[] = chunk.map(location => ({
        id: location.id,
        name: location.name,
        state: location.state,
        country: location.country,
        lon: location.coord.lon,
        lat: location.coord.lat,
        stars: 0,
      }));

      await queryRunner.manager
        .createQueryBuilder()
        .insert()
        .into(Location)
        .values(formatedChunk)
        .execute();
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Location)
      .execute();
  }
}
