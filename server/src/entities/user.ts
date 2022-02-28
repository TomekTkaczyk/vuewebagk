import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  Id!: number;

  @Column()
  login!: string;

  @Column()
  passwordHash!: string;
}
