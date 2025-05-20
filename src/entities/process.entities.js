import { EntitySchema } from 'typeorm';


export class Process {
    constructor(id, projeto, datapast, dataenvase, qtdcalda, idtype) {
        this.id = id;
        this.projeto = projeto;
        this.datapast = datapast;
        this.dataenvase = dataenvase;
        this.qtdcalda = qtdcalda;
        this.idtype = idtype;
    }
}

export default new EntitySchema({
    name: 'Process',
    target: Process,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        projeto: {
            type: 'int',
        },
        datapast: {
            type: 'datetime',
            nullable: true
        },
        dataenvase: {
            type: 'datetime',
            nullable: true
        },
        statusProcess: {
            type: 'varchar',
        },
        qtdcalda: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        qtdcaixas: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        qtdunidades: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        onlyprocessresum: {
            type: 'varchar',
            default: 'S'
        },

        idtype: {
            type: 'int',
            default: 1
        },
        order: {
            type: 'int',
        }
    },
    relations: {
        products: {
            type: 'many-to-one',
            target: 'Products',
            joinColumn: { name: 'projeto' }
        },
        steps: {
            type: 'one-to-many',
            target: 'StepsProcess',
            inverseSide: 'process'
        }
    }

});
