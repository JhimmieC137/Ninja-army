import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNinjaAndWeaponsTable1700910079970 implements MigrationInterface {
    name = 'UpdateNinjaAndWeaponsTable1700910079970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "weapon" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "isAvalilable" boolean NOT NULL DEFAULT true, "quantity" integer NOT NULL DEFAULT '50', "userId" uuid, CONSTRAINT "UQ_c0a6e6eabffa74c4a025ce2eeca" UNIQUE ("name"), CONSTRAINT "PK_41fe726bde6432339c1d4595d29" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ninja" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ninja" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."ninja_level_enum" AS ENUM('GENIN', 'CHUNIN', 'JONIN', 'KAGE')`);
        await queryRunner.query(`ALTER TABLE "ninja" ADD "level" "public"."ninja_level_enum" NOT NULL DEFAULT 'GENIN'`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "last_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "nick_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "weapon" ADD CONSTRAINT "FK_8fe521055b69a66a1906d9e60ed" FOREIGN KEY ("userId") REFERENCES "ninja"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "weapon" DROP CONSTRAINT "FK_8fe521055b69a66a1906d9e60ed"`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "nick_name" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "last_name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "ninja" DROP COLUMN "level"`);
        await queryRunner.query(`DROP TYPE "public"."ninja_level_enum"`);
        await queryRunner.query(`ALTER TABLE "ninja" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "ninja" DROP COLUMN "email"`);
        await queryRunner.query(`DROP TABLE "weapon"`);
    }

}
