#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.yellow.bold("\n \t Welcome to the to-do-list Application \n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green.bold("Enter you New Task :")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} task added in the to-do-list successfully`);
    let addMoreTask = await inquirer.prompt([{
            name: "addMore",
            type: "confirm",
            message: chalk.redBright.bold("Do you want to add more task?"),
            default: "false"
        }]);
    conditions = addMoreTask.addMore;
}
;
console.log("your updated todo-List:", todoList);
