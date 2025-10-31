import { EntitySchema, Unique } from 'typeorm';


export class CabComposicao {
    constructor(id, idprod, active) {
        this.id = id;
        this.idprod = idprod;
        this.active = active;
    }
}

export default new EntitySchema({
    name: 'CabComposicao',
    target: CabComposicao,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        idprod: {
            type: 'int',
            unique: true
        },
         active: {
            type: 'varchar',
        },
    },

    relations: {
        products: {
            type: 'many-to-one',
            target: 'Products',
            joinColumn: { name: 'idprod' }
        }
    }
});
