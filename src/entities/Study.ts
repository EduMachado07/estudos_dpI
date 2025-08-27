import { v4 as uuidv4 } from 'uuid';

export class User {

    public readonly id: string;

    public title: string;
    public description: string;
    public thumbnail: string;
    public body: JSON;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props);

        this.id = id ?? uuidv4();
    }
}