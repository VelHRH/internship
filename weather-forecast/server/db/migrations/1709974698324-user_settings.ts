import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserSettings1709974698324 implements MigrationInterface {
  name = 'UserSettings1709974698324';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_settings" ("id" SERIAL NOT NULL, "locationNumber" character varying NOT NULL, "theme" character varying NOT NULL, CONSTRAINT "PK_00f004f5922a0744d174530d639" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`ALTER TABLE "user" ADD "userSettingsId" integer`);
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "UQ_c58fb4eaca7dd9ba3001c46d76f" UNIQUE ("userSettingsId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_c58fb4eaca7dd9ba3001c46d76f" FOREIGN KEY ("userSettingsId") REFERENCES "user_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_c58fb4eaca7dd9ba3001c46d76f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "UQ_c58fb4eaca7dd9ba3001c46d76f"`,
    );
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "userSettingsId"`);
    await queryRunner.query(`DROP TABLE "user_settings"`);
  }
}
