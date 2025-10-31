import { EntitySchema } from 'typeorm';


export class StatusSeparacao {
    constructor(id, status, color, colorText) {
        this.id = id;
        this.status = status;
        this.color = color;
        this.colorText = colorText;
    }
}

export default new EntitySchema({
    name: 'StatusSeparacao',
    target: StatusSeparacao,

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
