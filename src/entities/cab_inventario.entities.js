import { EntitySchema, Unique } from 'typeorm';


export class CabInventario {
    constructor(id, status, codusuinvent, dataIntegracao, data) {
        this.id = id;
        this.status = status;
        this.codusuinvent = codusuinvent;
        this.dataIntegracao = dataIntegracao;
        this.data = data;
    }
}

export default new EntitySchema({
    name: 'CabInventario',
    target: CabInventario,

    columns: {
        id: {
            primary: true,
            type: 'int',
        },
        status: {
            type: 'varchar',
            nullable: true
        },
        codusuinvent: {
            type: 'varchar',
            nullable: true
        },
        dataIntegracao: {
            type: 'datetime',
            default: () => 'CURRENT_TIMESTAMP'
        },
        data: {
            type: 'datetime',
        }

    },

    relations: {
        userInventario: {
            type: 'many-to-one',
            target: 'User',
            joinColumn: { name: 'codusuinvent' }
        },
        statusInventario: {
            type: 'many-to-one',
            target: 'StatusInventario',
            joinColumn: { name: 'status' }
        },
    }
});
