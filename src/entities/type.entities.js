import { EntitySchema } from 'typeorm';


export class Type {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
}

export default new EntitySchema({
    name: 'Type',
    target: Type,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        descrtype: {
            type: 'varchar',
        }
    }
});
