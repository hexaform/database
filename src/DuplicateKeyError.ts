export class DuplicateKeyError extends Error {
    collection: string;
    index: string;
    value: string;

    constructor(message: string, data: { collection: string, index: string, value: string }) {
        super(message);

        this.collection = data.collection;
        this.index = data.index;
        this.value = data.value;
    }
}