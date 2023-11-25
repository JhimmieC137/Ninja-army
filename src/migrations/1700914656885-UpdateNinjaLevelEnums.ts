import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNinjaLevelEnums1700914656885 implements MigrationInterface {
    name = 'UpdateNinjaLevelEnums1700914656885'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" SET DEFAULT 'NOOBIE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" SET DEFAULT 'GENIN'`);
    }

}
