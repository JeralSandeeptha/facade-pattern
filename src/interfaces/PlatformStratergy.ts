export interface PlatformStrategy {
    login(): void;
    logout(): void;
    createTask(): void;
    getTasks(): void;
    getAllTasks(): void;
    deleteTask(): void;
    editTask(): void;
}
