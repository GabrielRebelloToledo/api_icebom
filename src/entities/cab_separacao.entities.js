import { EntitySchema, Unique } from 'typeorm';


export class CabSeparacao {
    constructor(id, idprod, active) {
        this.id = id;
        this.idprod = idprod;
        this.active = active;
    }
}

export default new EntitySchema({
    name: 'CabSeparacao',
    target: CabSeparacao,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        idprod: {
            type: 'int',
        },
        qtdeprod: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        status: {
            type: 'int',
            nullable: true
        },
        observacao: {
            type: 'varchar',
        },
        codususep: {
            type: 'varchar',
            nullable: true
        },
        codusuconf: {
            type: 'varchar',
            nullable: true
        },
        dataAbertura: {
            type: 'datetime',
            default: () => 'CURRENT_TIMESTAMP'
        }

    },

    relations: {
        products: {
            type: 'many-to-one',
            target: 'Products',
            joinColumn: { name: 'idprod' }
        },
        statusSeparacao: {
            type: 'many-to-one',
            target: 'StatusSeparacao',
            joinColumn: { name: 'status' }
        },
        userSep: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'codususep' }
        },
        userConf: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'codusuconf' }
        }
    }
});
