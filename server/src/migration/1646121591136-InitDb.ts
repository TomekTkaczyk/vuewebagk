import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDb1646121591136 implements MigrationInterface {
  name = "InitDb1646121591136";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`Login\` varchar(255) NOT NULL DEFAULT '', \`PasswordHash\` varchar(255) NOT NULL DEFAULT '', \`Email\` varchar(255) NULL, \`FirstName\` varchar(255) NULL, \`LastName\` varchar(255) NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
