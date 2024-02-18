import { DataSource } from "typeorm";
import { Account } from "../entities/Account.entity";
import { AccountTask } from "../entities/AccountTask.entity";

const dataSource = new DataSource({
    type : "mysql",
    url: "mysql://root@localhost:3306/test", 
    logging : true,
    synchronize : true,
    entities : [
        Account,
        AccountTask
    ]
});

export default dataSource;
