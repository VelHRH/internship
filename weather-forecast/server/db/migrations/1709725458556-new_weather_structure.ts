import { MigrationInterface, QueryRunner } from "typeorm";

export class NewWeatherStructure1709725458556 implements MigrationInterface {
    name = 'NewWeatherStructure1709725458556'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weather" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "forecasts" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" ADD "current" jsonb NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weather" DROP CONSTRAINT "FK_e6f80b62efb8f03a8033fdb1c98"`);
        await queryRunner.query(`ALTER TABLE "user_locations_location" DROP CONSTRAINT "FK_ec11acf591ae4054e8fc7a42d9d"`);
        await queryRunner.query(`ALTER TABLE "location" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "location_id_seq"`);
        await queryRunner.query(`ALTER TABLE "weather" ADD CONSTRAINT "FK_e6f80b62efb8f03a8033fdb1c98" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_locations_location" ADD CONSTRAINT "FK_ec11acf591ae4054e8fc7a42d9d" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_locations_location" DROP CONSTRAINT "FK_ec11acf591ae4054e8fc7a42d9d"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP CONSTRAINT "FK_e6f80b62efb8f03a8033fdb1c98"`);
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "location_id_seq" OWNED BY "location"."id"`);
        await queryRunner.query(`ALTER TABLE "location" ALTER COLUMN "id" SET DEFAULT nextval('"location_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "user_locations_location" ADD CONSTRAINT "FK_ec11acf591ae4054e8fc7a42d9d" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "weather" ADD CONSTRAINT "FK_e6f80b62efb8f03a8033fdb1c98" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "current"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "forecasts"`);
        await queryRunner.query(`ALTER TABLE "weather" DROP COLUMN "updatedAt"`);
    }

}
