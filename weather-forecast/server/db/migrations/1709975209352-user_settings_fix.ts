import { MigrationInterface, QueryRunner } from "typeorm";

export class UserSettingsFix1709975209352 implements MigrationInterface {
    name = 'UserSettingsFix1709975209352'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_settings" DROP COLUMN "locationNumber"`);
        await queryRunner.query(`ALTER TABLE "user_settings" ADD "locationNumber" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c58fb4eaca7dd9ba3001c46d76f"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "userSettingsId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c58fb4eaca7dd9ba3001c46d76f" FOREIGN KEY ("userSettingsId") REFERENCES "user_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_c58fb4eaca7dd9ba3001c46d76f"`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "userSettingsId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_c58fb4eaca7dd9ba3001c46d76f" FOREIGN KEY ("userSettingsId") REFERENCES "user_settings"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_settings" DROP COLUMN "locationNumber"`);
        await queryRunner.query(`ALTER TABLE "user_settings" ADD "locationNumber" character varying NOT NULL`);
    }

}
