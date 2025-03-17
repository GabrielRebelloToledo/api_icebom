import { EntitySchema } from 'typeorm';


export class Products {
    constructor(id, name) {
        this.id = id;
        this.name = name;

    }
}
export default new EntitySchema({
    name: 'Products',
    target: Products,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar',
        },
        active: {
            type: 'varchar',
        },

    }
});