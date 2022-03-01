import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOtherUserField1646162766312 implements MigrationInterface {
  name = "AddOtherUserField1646162766312";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`bbbjytrwewte\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`Email\` \`Email\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`FirstName\` \`FirstName\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`LastName\` \`LastName\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`hrghfdgh\` \`hrghfdgh\` varchar(255) NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`aaajytrwewte\` \`aaajytrwewte\` varchar(255) NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`aaajytrwewte\` \`aaajytrwewte\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`hrghfdgh\` \`hrghfdgh\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`LastName\` \`LastName\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`FirstName\` \`FirstName\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` CHANGE \`Email\` \`Email\` varchar(255) NULL DEFAULT 'NULL'`
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` DROP COLUMN \`bbbjytrwewte\``
    );
  }
}
