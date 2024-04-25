import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1709629948279 implements MigrationInterface {
  name = 'Init1709629948279';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "refreshtoken" character varying, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "location" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "lat" double precision NOT NULL, "lon" double precision NOT NULL, "country" character varying NOT NULL, "state" character varying NOT NULL, "stars" integer NOT NULL, CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "current_weather" ("updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "name" character varying NOT NULL, "icon" character varying NOT NULL, "temperature" double precision NOT NULL, "feelsLike" double precision NOT NULL, "pressure" double precision NOT NULL, "humidity" double precision NOT NULL, "wind" double precision NOT NULL, "id" SERIAL NOT NULL, "weatherId" integer NOT NULL, CONSTRAINT "REL_2ea8416353f1fb44a4a9627982" UNIQUE ("weatherId"), CONSTRAINT "PK_30f7aa5174e2f82f53d4da236ab" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "forecast_weather" ("updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "name" character varying NOT NULL, "icon" character varying NOT NULL, "temperature" double precision NOT NULL, "feelsLike" double precision NOT NULL, "pressure" double precision NOT NULL, "humidity" double precision NOT NULL, "wind" double precision NOT NULL, "id" SERIAL NOT NULL, "time" TIMESTAMP WITH TIME ZONE NOT NULL, "weatherId" integer NOT NULL, CONSTRAINT "PK_9372baf585bf524f1f8e32947a2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "IDX_ccc9a672a63231608bfa93fe00" ON "forecast_weather" ("time", "weatherId") `,
    );
    await queryRunner.query(
      `CREATE TABLE "weather" ("id" SERIAL NOT NULL, "locationId" integer, CONSTRAINT "REL_e6f80b62efb8f03a8033fdb1c9" UNIQUE ("locationId"), CONSTRAINT "PK_af9937471586e6798a5e4865f2d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "user_locations_location" ("userId" integer NOT NULL, "locationId" integer NOT NULL, CONSTRAINT "PK_74f842536fef41eeffaa70fa2f7" PRIMARY KEY ("userId", "locationId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_791fca420efe73aaa6e629253d" ON "user_locations_location" ("userId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ec11acf591ae4054e8fc7a42d9" ON "user_locations_location" ("locationId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "current_weather" ADD CONSTRAINT "FK_2ea8416353f1fb44a4a96279828" FOREIGN KEY ("weatherId") REFERENCES "weather"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "forecast_weather" ADD CONSTRAINT "FK_d47a99ff32e9b04263cce40e6a5" FOREIGN KEY ("weatherId") REFERENCES "weather"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "weather" ADD CONSTRAINT "FK_e6f80b62efb8f03a8033fdb1c98" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_locations_location" ADD CONSTRAINT "FK_791fca420efe73aaa6e629253df" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_locations_location" ADD CONSTRAINT "FK_ec11acf591ae4054e8fc7a42d9d" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_locations_location" DROP CONSTRAINT "FK_ec11acf591ae4054e8fc7a42d9d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user_locations_location" DROP CONSTRAINT "FK_791fca420efe73aaa6e629253df"`,
    );
    await queryRunner.query(
      `ALTER TABLE "weather" DROP CONSTRAINT "FK_e6f80b62efb8f03a8033fdb1c98"`,
    );
    await queryRunner.query(
      `ALTER TABLE "forecast_weather" DROP CONSTRAINT "FK_d47a99ff32e9b04263cce40e6a5"`,
    );
    await queryRunner.query(
      `ALTER TABLE "current_weather" DROP CONSTRAINT "FK_2ea8416353f1fb44a4a96279828"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ec11acf591ae4054e8fc7a42d9"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_791fca420efe73aaa6e629253d"`,
    );
    await queryRunner.query(`DROP TABLE "user_locations_location"`);
    await queryRunner.query(`DROP TABLE "weather"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_ccc9a672a63231608bfa93fe00"`,
    );
    await queryRunner.query(`DROP TABLE "forecast_weather"`);
    await queryRunner.query(`DROP TABLE "current_weather"`);
    await queryRunner.query(`DROP TABLE "location"`);
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
