import { EntitySchema, Unique } from 'typeorm';


export class StepsProcess {
    constructor(id, idProcess, orderby,label, status, description, createdAt, closedAt) {
        this.id = id;
        this.idProcess = idProcess;
        this.orderby = orderby;
        this.label = label;
        this.status = status;
        this.description = description;
        this.createdAt = createdAt;
        this.closedAt = closedAt;
    }
}

export default new EntitySchema({
    name: 'StepsProcess',
    target: StepsProcess,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        idProcess: {
            type: 'int'
        },
        orderby:{
            type: 'int'
        },
        label: {
            type: 'varchar'
        },
        status: {
            type: 'int',
            default:5
        },
        description: {
            type: 'varchar',
        },
        createdAt: {
            type: 'datetime',
            default: () => 'CURRENT_TIMESTAMP'
        },
        closedAt:{
            type: 'datetime',
            nullable: true
        },
        startAt:{
            type: 'datetime',
            nullable: true
        }
    },

  relations: {
    process: {
        type: 'many-to-one',
        target: 'Process',
        joinColumn: { name: 'idProcess' }
    },
    status: {
        type: 'many-to-one',
        target: 'Status',
        joinColumn: { name: 'status' }
    }
}
});
