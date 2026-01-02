import { EntitySchema } from 'typeorm';


export class StatusInventario {
    constructor(id, status, color, colorText) {
        this.id = id;
        this.status = status;
        this.color = color;
        this.colorText = colorText;
    }
}

export default new EntitySchema({
    name: 'StatusInventario',
    target: StatusInventario,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        status: {
            type: 'varchar',
        },
        color: {
            type: 'varchar',
        },
        colorText: {
            type: 'varchar',
        },
    }
});
