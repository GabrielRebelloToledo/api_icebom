import { EntitySchema } from 'typeorm';


export class ProductsMP {
    constructor(id, name) {
        this.id = id;
        this.name = name;

    }
}
export default new EntitySchema({
    name: 'ProductsMP',
    target: ProductsMP,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar',
        },
        volume: {
            type: 'varchar',
        },
        codbarras: {
            type: 'varchar',
        },
        active: {
            type: 'varchar',
        },

    }
});