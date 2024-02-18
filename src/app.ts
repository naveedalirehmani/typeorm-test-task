import "reflect-metadata";
import express, { Request, Response } from "express";
import dataSource from "./datasource/dataSource";
import { Account } from "./entities/Account.entity";
import { AccountTask } from "./entities/AccountTask.entity";

const PORT = 3000;
const app = express();

dataSource.initialize().then(() => {
    console.log("DataSource Sucessfully Connected With The Database!!!");
}).catch((err) => {
    console.log("DataSource Connection Failed", err);
})

app.get("/create", async (req: Request, res: Response) => {
    let accountRepository = dataSource.getRepository(Account);
    let accountTaskRepository = dataSource.getRepository(AccountTask);

    const account1 = new Account();
    account1.accountName = "Account 1";

    const account2 = new Account();
    account2.accountName = "Account 2";

    const accountTask1 = new AccountTask();
    accountTask1.label = "Task 1";
    accountTask1.description = "Description of Task 1";
    accountTask1.transactionTaskType = "type1";
    accountTask1.dueInDays = 10;
    accountTask1.accountFormId = 1;
    accountTask1.importedId = 123;

    const accountTask2 = new AccountTask();
    accountTask2.label = "Task 2";
    accountTask2.description = "Description of Task 2";
    accountTask2.transactionTaskType = "type2";
    accountTask2.dueInDays = 20;
    accountTask2.accountFormId = 2;
    accountTask2.importedId = 456;

    await accountRepository.save([account1, account2]);
    await accountTaskRepository.save([accountTask1, accountTask2]);

    let allAccounts = await accountRepository.find({
        relations: ["accountTasks"]
    });

    res.json(allAccounts);
})

app.listen(PORT, () => {
    console.log(`Server Has Started On PORT ${PORT}`);
})
