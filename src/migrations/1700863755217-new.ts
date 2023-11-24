import { MigrationInterface, QueryRunner } from "typeorm";

export class New1700863755217 implements MigrationInterface {
    name = 'New1700863755217'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weapons" DROP COLUMN "users"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weapons" ADD "users" integer NOT NULL DEFAULT '50'`);
    }

}
