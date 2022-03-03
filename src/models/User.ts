import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id: number;
  @Column({ name: "first_name" })
  firstName: string;
  @Column({ name: "last_name", nullable: true })
  lastName: string;
  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;
  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}
