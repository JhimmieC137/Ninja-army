import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateNinjaLevelEnums1700914489869 implements MigrationInterface {
    name = 'UpdateNinjaLevelEnums1700914489869'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ninja" ADD CONSTRAINT "UQ_2f40c2a9d443ba19539bd32d94d" UNIQUE ("nick_name")`);
        await queryRunner.query(`ALTER TABLE "ninja" ADD CONSTRAINT "UQ_342abe591c9a64c25e1233c1dda" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TYPE "public"."ninja_level_enum" RENAME TO "ninja_level_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."ninja_level_enum" AS ENUM('NOOBIE', 'GENIN', 'CHUNIN', 'JONIN', 'KAGE')`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" TYPE "public"."ninja_level_enum" USING "level"::"text"::"public"."ninja_level_enum"`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" SET DEFAULT 'GENIN'`);
        await queryRunner.query(`DROP TYPE "public"."ninja_level_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."ninja_level_enum_old" AS ENUM('GENIN', 'CHUNIN', 'JONIN', 'KAGE')`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" TYPE "public"."ninja_level_enum_old" USING "level"::"text"::"public"."ninja_level_enum_old"`);
        await queryRunner.query(`ALTER TABLE "ninja" ALTER COLUMN "level" SET DEFAULT 'GENIN'`);
        await queryRunner.query(`DROP TYPE "public"."ninja_level_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."ninja_level_enum_old" RENAME TO "ninja_level_enum"`);
        await queryRunner.query(`ALTER TABLE "ninja" DROP CONSTRAINT "UQ_342abe591c9a64c25e1233c1dda"`);
        await queryRunner.query(`ALTER TABLE "ninja" DROP CONSTRAINT "UQ_2f40c2a9d443ba19539bd32d94d"`);
    }

}
