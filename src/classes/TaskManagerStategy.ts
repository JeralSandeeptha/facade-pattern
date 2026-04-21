import type { PlatformStrategy } from "../interfaces/PlatformStratergy.js";

export class TaskManagerStategy {

    private strategy: PlatformStrategy;

    constructor(strategy: PlatformStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: PlatformStrategy): void {
        this.strategy = strategy;
    }

    login(): void {
        this.strategy.login();
    }

    logout(): void {
        this.strategy.logout();
    }

    createTask(): void {
        this.strategy.createTask();
    }

    getTasks(): void {
        this.strategy.getTasks();
    }

    getAllTasks(): void {
        this.strategy.getAllTasks();
    }

    deleteTask(): void {
        this.strategy.deleteTask();
    }

    editTask(): void {
        this.strategy.editTask();
    }
}