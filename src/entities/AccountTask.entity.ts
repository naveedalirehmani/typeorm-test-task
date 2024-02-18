import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Account } from "./Account.entity";

@Entity()
export class AccountTask {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @Column()
    description: string;

    @Column({ type: "enum", enum: ["type1", "type2", "type3"] })
    transactionTaskType: string;

    @Column()
    dueInDays: number;

    @Column()
    accountFormId: number;

    @Column()
    importedId: number;

    @ManyToOne(() => Account, (account) => account.accountTasks)
    account: Account;
}
