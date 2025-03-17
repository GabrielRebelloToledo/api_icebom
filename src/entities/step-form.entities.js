import { EntitySchema } from 'typeorm';


export class StepForm {
    constructor(id,  title) {
        this.id = id;
        this.title = title;
    }
}

export default new EntitySchema({
    name: 'StepForm',
    target: StepForm,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        title: {
            type: 'varchar',
        }
    },
    relations: {
        fields: {
            type: 'one-to-many',
            target: 'Form',
            inverseSide: 'stepForm'
        }
    }
});