import { EntitySchema, Unique } from 'typeorm';


export class ItensInventario {
    constructor(id, idCabInvent, idprod, descricaoprod, local, tipoitem, unidade, quantidade, estoque, diferenca) {
        this.id = id;
        this.idCabInvent = idCabInvent;
        this.idprod = idprod;
        this.descricaoprod = descricaoprod;
        this.local = local;
        this.tipoitem = tipoitem;
        this.unidade = unidade;
        this.quantidade = quantidade;
        this.estoque = estoque;
        this.diferenca = diferenca;
    }
}

export default new EntitySchema({
    name: 'ItensInventario',
    target: ItensInventario,

    columns: {
        id: {
            primary: true,
            type: 'int',
        },
        idCabInvent: {
            type: 'int',
        },
        idprod: {
            type: 'int',
        },
        descricaoprod: {
            type: 'varchar',
        },
        local: {
            type: 'varchar',
            nullable: true
        },
        tipoitem: {
            type: 'varchar',
            nullable: true
        },
        unidade: {
            type: 'varchar',
        },
        quantidade: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        estoque: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
        diferenca: {
            type: 'decimal',
            precision: 10,
            scale: 2,
            nullable: true
        },
    },

    relations: {
        
        cabInventario: {
            type: 'many-to-one',
            target: 'CabInventario',
            joinColumn: { name: 'idCabInvent' }
        }
    }
});
