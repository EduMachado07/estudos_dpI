import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from 'nanoid'

export class Study {

    public readonly id: string;

    public title: string;
    public description: string;
    public slug: string;
    public thumbnail: string | File;
    public body: string;

    constructor(props: Omit<Study, 'id'>, id?: string) {
        Object.assign(this, props);

        this.id = id ?? uuidv4();
        this.slug = this.nanoid();
    }

    private nanoid = customAlphabet('1234567890abcdef', 10)
}