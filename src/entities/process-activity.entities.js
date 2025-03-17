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
        },
        data: {
            type: 'date',
        },
        file1: {
            type: 'text',
        },
        file2: {
            type: 'text',
        },
        file3: {
            type: 'text',
        },
        file4: {
            type: 'text',
        },
        status: {
            type: 'int'
        },

        /* Novos */
        iteconforme: {
            type: 'boolean',
        },
        diverconf: {
            type: 'boolean',
        },
        obsconf: {
            type: 'text',
        },
        obsconf: {
            type: 'text',
        },
        checkrec: {
            type: 'boolean',
        },
        obsrec: {
            type: 'text',
        },
        datarec: {
            type: 'date',
        },
        checkpast: {
            type: 'boolean',
        },
        obspast: {
            type: 'text',
        },
        datapast: {
            type: 'date',
        },
        checkmat: {
            type: 'boolean',
        },
        obsmat: {
            type: 'text',
        },
        datamat: {
            type: 'date',
        },
        checkenv: {
            type: 'boolean',
        },
        obsenv: {
            type: 'text',
        },
        dataenv: {
            type: 'date',
        },
        checkapont: {
            type: 'boolean',
        },
        obsapont: {
            type: 'text',
        },
        dataapont: {
            type: 'date',
        },
        checklib: {
            type: 'boolean',
        },
        obslib: {
            type: 'text',
        },
        infoprod: {
            type: 'text',
        },
        infonfs: {
            type: 'text',
        },
        infodevnfs: {
            type: 'text',
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
