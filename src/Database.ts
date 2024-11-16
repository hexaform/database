export abstract class Database {
    abstract connect(...args: any): Promise<void>;
    abstract disconnect(): void;
}