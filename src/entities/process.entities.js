import { EntitySchema } from 'typeorm';


export class Process {
    constructor(id, projeto,datapast,dataenvase) {
        this.id = id;
        this.projeto = projeto;
        this.datapast = datapast;
        this.dataenvase = dataenvase;
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
