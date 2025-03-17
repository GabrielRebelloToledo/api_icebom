import { EntitySchema } from 'typeorm';


export class Form {
    constructor(id, name, placeholder, optionsUrl, leitura) {
        this.id = id;
        this.name = name;
        this.placeholder = placeholder;
        this.optionsUrl = optionsUrl;
        this.leitura = leitura;
    }
}

export default new EntitySchema({
    name: 'Form',
    target: Form,

    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        idFormStep: {
            type: 'int',
        },
        order: {
            type: 'int',
        },
        name: {
            type: 'varchar',
        },
        placeholder: {
            type: 'varchar',
        },
        type: {
            type: 'varchar',
        },
        optionsUrl: {
            type: 'varchar',
            nullable:true
        },
        leitura: {
            type: 'varchar',
            default:'N'
        },
        visible: {
            type: 'varchar',
            default:'true'
        }
    },
    relations: {
        stepForm: {
            type: 'many-to-one',
            target: 'StepForm',
            joinColumn: { name: 'idFormStep' }
        }
    }
});