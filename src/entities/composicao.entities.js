import { EntitySchema, Unique } from 'typeorm';


export class ComposicaoMp {
    constructor(id, idCab, idprod, qtde, active) {
        this.id = id;
        this.idCab = idCab;
        this.idprod = idprod;
        this.qtde = qtde;
        this.active = active;
    }
}

export default new EntitySchema({
    name: 'ComposicaoMp',
    target: ComposicaoMp,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        idCab: {
            type: 'int',
        },
        idprod: {
            type: 'int',
            unique: true
        },
        qtde: {
            type: 'double'
        },
        active: {
            type: 'varchar',
        },
    },

    relations: {
        productsMP: {
            type: 'many-to-one',
            target: 'ProductsMP',
            joinColumn: { name: 'idprod' }
        },
        cabComposicao: {
            type: 'many-to-one',
            target: 'CabComposicao',
            joinColumn: { name: 'idCab' }
        }
    }
});
