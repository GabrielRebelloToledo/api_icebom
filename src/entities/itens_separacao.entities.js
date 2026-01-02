import { EntitySchema, Unique } from 'typeorm';


export class ItensSeparacao {
    constructor(id, idprod, active) {
        this.id = id;
        this.idprod = idprod;
        this.active = active;
    }
}

export default new EntitySchema({
    name: 'ItensSeparacao',
    target: ItensSeparacao,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        idCabSep: {
            type: 'int',
        },
        idprod: {
            type: 'int',
        },
        name: {
            type: 'varchar',
        },
        codvol: {
            type: 'varchar',
        },
        qtdeaseparar: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        qtdeseparada: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        qtdeconferida: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
    },

    relations: {
        /*  productsMP: {
             type: 'many-to-one',
             target: 'ProductsMP',
             joinColumn: { name: 'idprod' }
         }, */
        cabSeparacao: {
            type: 'many-to-one',
            target: 'CabSeparacao',
            joinColumn: { name: 'idCabSep' },
            onDelete: 'CASCADE'
        }
    }
});
