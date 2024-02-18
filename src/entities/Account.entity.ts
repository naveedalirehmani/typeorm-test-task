// Account.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { AccountTask } from "./AccountTask.entity";

@Entity()
export class Account {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accountName: string;

    @OneToMany(() => AccountTask, (accountTask) => accountTask.account, { cascade: true })
    accountTasks: AccountTask[];
}
