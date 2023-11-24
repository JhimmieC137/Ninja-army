import { MigrationInterface, QueryRunner } from "typeorm";

export class New1700856684898 implements MigrationInterface {
    name = 'New1700856684898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "ninja" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "nick_name" character varying, "is_active" boolean NOT NULL DEFAULT true, CONSTRAINT "UQ_59d1f9c68794ad401e7e8d05d39" UNIQUE ("first_name"), CONSTRAINT "PK_7ac1813be6cfaefb34c3426154e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "weapons" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "isAvalilable" boolean NOT NULL DEFAULT true, "quantity" integer NOT NULL DEFAULT '50', "users" integer NOT NULL DEFAULT '50', CONSTRAINT "UQ_4fc2f93dfc3405ad326f455883f" UNIQUE ("name"), CONSTRAINT "PK_a102f55ffbab023a922ac10ab76" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "weapons"`);
        await queryRunner.query(`DROP TABLE "ninja"`);
    }

}
