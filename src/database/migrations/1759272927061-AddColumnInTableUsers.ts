import {MigrationInterface, QueryRunner} from "typeorm";

export class AddColumnInTableUsers1759272927061 implements MigrationInterface {
    name = 'AddColumnInTableUsers1759272927061'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
