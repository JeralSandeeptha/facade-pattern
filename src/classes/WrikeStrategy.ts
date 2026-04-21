import type { PlatformStrategy } from "../interfaces/PlatformStratergy.js";

export class WrikeStrategy implements PlatformStrategy {

    login(): void {
        console.log("Logging in to Wrike...");
    }

    logout(): void {
        console.log("Logging out of Wrike...");
    }

    createTask(): void {
        console.log("Creating a task in Wrike...");
    }

    getTasks(): void {
        console.log("Getting tasks from Wrike...");
    }

    getAllTasks(): void {
        console.log("Getting all tasks from Wrike...");
    }

    deleteTask(): void {
        console.log("Deleting a task from Wrike...");
    }

    editTask(): void {
        console.log("Editing a task in Wrike...");
    }
}