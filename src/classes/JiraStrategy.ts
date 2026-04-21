import type { PlatformStrategy } from "../interfaces/PlatformStratergy.js";

export class JiraStrategy implements PlatformStrategy {

    login(): void {
        console.log("Logging in to Jira...");
    }

    logout(): void {
        console.log("Logging out of Jira...");
    }

    createTask(): void {
        console.log("Creating a task in Jira...");
    }

    getTasks(): void {
        console.log("Getting tasks from Jira...");
    }

    getAllTasks(): void {
        console.log("Getting all tasks from Jira...");
    }

    deleteTask(): void {
        console.log("Deleting a task from Jira...");
    }

    editTask(): void {
        console.log("Editing a task in Jira...");
    }
}