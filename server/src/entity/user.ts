import { Entity, Column } from "typeorm";
import { CommonEntity } from "./commonEntity";

@Entity("users")
export class User extends CommonEntity {
  @Column({ default: "" })
  Login: string;

  @Column({ default: "" })
  PasswordHash: string;

  @Column({ default: null })
  Email!: string;

  @Column({ default: null })
  FirstName!: string;

  @Column({ default: null })
  LastName!: string;

  @Column({ default: null })
  hrghfdgh!: string;

  @Column({ default: null })
  aaajytrwewte!: string;

  @Column({ default: null })
  bbbjytrwewte!: string;
}
