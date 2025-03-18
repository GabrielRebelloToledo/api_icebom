import { EntitySchema } from 'typeorm';


export class ProcessActivity {
    constructor(
        idStep, idProcess, nronf, data, file1, file2, file3, file4, status,
        iteconforme, diverconf, obsconf, checkrec, obsrec, datarec, 
        checkpast, obspast, datapast, checkmat, obsmat, datamat, 
        checkenv, obsenv, dataenv, checkapont, obsapont, dataapont, 
        checklib, obslib, infoprod, infonfs, infodevnfs, codusufin
    ) {
        this.idStep = idStep;
        this.idProcess = idProcess;
        this.nronf = nronf;
        this.data = data;
        this.file1 = file1;
        this.file2 = file2;
        this.file3 = file3;
        this.file4 = file4;
        this.status = status;
        this.iteconforme = iteconforme;
        this.diverconf = diverconf;
        this.obsconf = obsconf;
        this.checkrec = checkrec;
        this.obsrec = obsrec;
        this.datarec = datarec;
        this.checkpast = checkpast;
        this.obspast = obspast;
        this.datapast = datapast;
        this.checkmat = checkmat;
        this.obsmat = obsmat;
        this.datamat = datamat;
        this.checkenv = checkenv;
        this.obsenv = obsenv;
        this.dataenv = dataenv;
        this.checkapont = checkapont;
        this.obsapont = obsapont;
        this.dataapont = dataapont;
        this.checklib = checklib;
        this.obslib = obslib;
        this.infoprod = infoprod;
        this.infonfs = infonfs;
        this.infodevnfs = infodevnfs;
        this.codusufin = codusufin;
    }
}

export default new EntitySchema({
    name: 'ProcessActivity',
    target: ProcessActivity,

    columns: {
        idStep: {
            primary: true,
            type: 'int',
        },
        idProcess: {
            type: 'int',
            primary: true,
        },
        nronf: {
            type: 'text',
            nullable:true
        },
        data: {
           type: 'datetime',
           nullable: false,
            default: () => 'CURRENT_TIMESTAMP'
        },
        file1: {
            type: 'text',
            nullable:true
        },
        file2: {
            type: 'text',
            nullable:true
        },
        file3: {
            type: 'text',
            nullable:true
        },
        file4: {
            type: 'text',
            nullable:true
        },
        status: {
            type: 'int',
            nullable:true
        },

        /* Novos */
        iteconforme: {
            type: 'boolean',
            default: false,
        },
        diverconf: {
            type: 'boolean',
            default: false,
        },
        obsconf: {
            type: 'text',
            nullable:true
        },
        checkrec: {
            type: 'boolean',
            default: false,
        },
        obsrec: {
            type: 'text',
            nullable:true
        },
        datarec: {
            type: 'datetime',
             
            default: () => 'CURRENT_TIMESTAMP'
        },
        checkpast: {
            type: 'boolean',
            default: false,
        },
        obspast: {
            type: 'text',
            nullable:true
        },
        datapast: {
            type: 'datetime',
            
            default: () => 'CURRENT_TIMESTAMP'
        },
        checkmat: {
            type: 'boolean',
            nullable:true
        },
        obsmat: {
            type: 'text',
            nullable:true
        },
        datamat: {
            type: 'datetime',
             
            default: () => 'CURRENT_TIMESTAMP'
        },
        checkenv: {
            type: 'boolean',
            default: false,
        },
        obsenv: {
            type: 'text',
            nullable:true
        },
        dataenv: {
            type: 'datetime',
            nullable: false,
            default: () => 'CURRENT_TIMESTAMP'
        },
        checkapont: {
            type: 'boolean',
            default: false,
        },
        obsapont: {
            type: 'text',
            nullable:true
        },
        dataapont: {
            type: 'datetime',
            
            default: () => 'CURRENT_TIMESTAMP'
        },
        checklib: {
            type: 'boolean',
            default: false,
        },
        obslib: {
            type: 'text',
            nullable:true
        },
        infoprod: {
            type: 'text',
            nullable:true
        },
        infonfs: {
            type: 'text',
            nullable:true
        },
        infodevnfs: {
            type: 'text',
            nullable:true
        },
        codusufin:{
            type: 'int',
            nullable:true
        }
    },
    relations: {
        steps: {
            type: 'many-to-one',
            target: 'StepsProcess',
            joinColumn: { name: 'idStep' }
        },
        process: {
            type: 'many-to-one',
            target: 'Process',
            joinColumn: { name: 'idProcess' }
        }
    }
});
