import { MigrationInterface, QueryRunner } from "typeorm";

export class Check1700864233385 implements MigrationInterface {
    name = 'Check1700864233385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weapons" ADD "users" integer NOT NULL DEFAULT '50'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weapons" DROP COLUMN "users"`);
    }

}
