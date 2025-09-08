import { v4 as uuidv4 } from 'uuid';
import { customAlphabet } from 'nanoid'

export class Study {

    public readonly id: string;
    public slug: string;

    public title: string;
    public description: string;
    public thumbnail: string | File;
    public body: Object;

    private nanoid = customAlphabet('1234567890abcdef', 10)

    constructor(props: Omit<Study, 'id' | 'slug'>, id?: string) {
        Object.assign(this, props);

        this.id = id ?? uuidv4();
        this.slug = this.nanoid();
    }
}