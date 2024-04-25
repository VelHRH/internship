import { MigrationInterface, QueryRunner } from "typeorm";

export class LanguageAdd1713694851511 implements MigrationInterface {
    name = 'LanguageAdd1713694851511'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_settings" ADD "language" character varying NOT NULL DEFAULT 'en'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_settings" DROP COLUMN "language"`);
    }

}
