import { JiraStrategy } from "./classes/JiraStrategy.js";
import { TaskManagerStategy } from "./classes/TaskManagerStategy.js";
import { WrikeStrategy } from "./classes/WrikeStrategy.js";

// create strategy
const currentStrategy = new JiraStrategy();

// create the task manager
const taskManager = new TaskManagerStategy(currentStrategy);

taskManager.login();
taskManager.createTask();

// change the strategy (change the platform)
const newStrategy = new WrikeStrategy();
taskManager.setStrategy(newStrategy);

// still we are using same functions but behaviour is different and unique according to each platforms
taskManager.login();
taskManager.createTask();
