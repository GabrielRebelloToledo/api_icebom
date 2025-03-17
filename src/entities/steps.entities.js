import { EntitySchema, Unique } from 'typeorm';


export class Steps {
    constructor(id, orderby, label,status, description) {
        this.id = id;
        this.orderby = orderby;
        this.label = label;
        this.status = status;
        this.description = description;
    }
}

export default new EntitySchema({
    name: 'Steps',
    target: Steps,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        orderby: {
            type: 'int',
            unique: true
        },
        label: {
            type: 'varchar'
        },
        status: {
            type: 'int',
        },
        description: {
            type: 'varchar',
        }
    },

    relations: {
        status: {
            type: 'many-to-one',
            target: 'Status',
            joinColumn: { name: 'status' }
        }
    }
});
